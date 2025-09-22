// src/sections/Comparison.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, TextField, IconButton, Tooltip, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

// Firestore
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

/* Cho phép dùng <spline-viewer> trong TSX */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url?: string;
        "loading-anim-type"?: string;
        class?: string;
      };
    }
  }
}

type FloatingComment = {
  id: string;
  text: string;
  radius: number;
  baseAngle: number;
  angularSpeed: number;
  size: number;
  color: string;
  bornAt: number;
  ttlMs: number;
  createdAt?: any;
};

const COLOR_POOL = [
  "#ffe08a",
  "#c8ff8a",
  "#8afff3",
  "#ffb8e6",
  "#bda0ff",
  "#ffcf99",
  "#c0ffb3",
  "#9ee7ff",
  "#ffd6a5",
  "#d6b8ff",
];

export default function Comparison() {
  const [ready, setReady] = useState(false);
  const injected = useRef(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [input, setInput] = useState("");
  const [items, setItems] = useState<FloatingComment[]>([]);
  const animRef = useRef<number | null>(null);
  const t0Ref = useRef<number>(performance.now());

  // inject script spline
  useEffect(() => {
    if (injected.current) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-spline="viewer"]'
    );
    if (existing) {
      injected.current = true;
      setReady(true);
      return;
    }
    const s = document.createElement("script");
    s.type = "module";
    s.src =
      "https://unpkg.com/@splinetool/viewer@1.9.86/build/spline-viewer.js";
    s.dataset.spline = "viewer";
    s.onload = () => setReady(true);
    document.head.appendChild(s);
    injected.current = true;
  }, []);

  // đo kích thước khung
  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const cr = entry.contentRect;
      setSize({ w: cr.width, h: cr.height });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // vòng lặp animation (giữ cho opacity, TTL)
  useEffect(() => {
    const tick = (now: number) => {
      setItems((prev) =>
        prev.filter((c) => c.ttlMs === 0 || now - c.bornAt < c.ttlMs)
      );
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // 🔴 SUBSCRIBE Firestore: nghe comment realtime
  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsub = onSnapshot(q, (snap) => {
      const now = performance.now();
      const arr: FloatingComment[] = [];
      snap.forEach((doc) => {
        const d = doc.data() as any;
        arr.push({
          id: doc.id,
          text: d.text ?? "",
          radius: d.radius ?? 200,
          baseAngle: d.baseAngle ?? 0,
          angularSpeed: d.angularSpeed ?? 0.5,
          size: d.size ?? 16,
          color: d.color ?? "#ffe08a",
          bornAt: now,
          ttlMs: d.ttlMs ?? 0,
          createdAt: d.createdAt,
        });
      });
      setItems(arr.reverse());
    });
    return () => unsub();
  }, []);

  const center = useMemo(
    () => ({ cx: size.w / 2, cy: size.h / 2 }),
    [size]
  );

  const handleSubmit = async () => {
    const text = input.trim();
    if (!text) return;

    const minR = Math.max(120, Math.min(size.w, size.h) * 0.18);
    const maxR = Math.max(minR + 80, Math.min(size.w, size.h) * 0.42);
    const radius = rand(minR, maxR);
    const baseAngle = rand(0, Math.PI * 2);
    const angularSpeed =
      rand(0.35, 0.75) * (Math.random() < 0.5 ? -1 : 1);
    const sizePx = Math.round(rand(14, 22));
    const color =
      COLOR_POOL[Math.floor(Math.random() * COLOR_POOL.length)];

    try {
      await addDoc(collection(db, "comments"), {
        text,
        radius,
        baseAngle,
        angularSpeed,
        size: sizePx,
        color,
        ttlMs: 0,
        createdAt: serverTimestamp(),
      });
      setInput("");
    } catch (e) {
      console.error(e);
    }
  };

  // render comment bay vòng tròn
  const renderFloating = () => {
    const now = performance.now();
    return items.map((c) => {
      const t = (now - t0Ref.current) / 1000;
      const angle = c.baseAngle + c.angularSpeed * t;
      const x = center.cx + c.radius * Math.cos(angle);
      const y = center.cy + c.radius * Math.sin(angle);

      let opacity = 1;
      if (c.ttlMs > 0) {
        const life = now - c.bornAt;
        const fade = Math.min(
          1,
          Math.max(0, (c.ttlMs - life) / 1000)
        );
        opacity = life < 800 ? life / 800 : fade;
      }

      const deg = (angle * 180) / Math.PI + 90;

      return (
        <Box
          key={c.id}
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: `translate(${x}px, ${y}px) rotate(${deg}deg) translate(-50%, -50%)`,
            willChange: "transform, opacity",
            pointerEvents: "none",
            opacity,
            zIndex: 2,
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
          }}
        >
          <Box
            sx={{
              transform: "rotate(-90deg)",
              px: 1.2,
              py: 0.6,
              borderRadius: 999,
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(2px)",
              whiteSpace: "nowrap",
              fontSize: c.size,
              fontWeight: 700,
              color: c.color,
              letterSpacing: 0.4,
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            {c.text}
          </Box>
        </Box>
      );
    });
  };

  return (
    <Box
      ref={wrapRef}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
      {/* Spline background */}
      <Box
        component="spline-viewer"
        sx={{ position: "absolute", inset: 0 }}
        {...({ "loading-anim-type": "none" } as any)}
        url="https://prod.spline.design/nPQzWw-fod7rsfDx/scene.splinecode"
      />

      {/* Comment floating */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        {renderFloating()}
      </Box>
      {/* Lời cảm ơn & hướng dẫn */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 16,
          display: "flex",
          justifyContent: "center",
          zIndex: 3,
          px: 2,
          pointerEvents: "none", // không bắt chuột toàn khối
        }}
      >
        <Box
          sx={{
            pointerEvents: "auto", // cho phép bôi đen copy text
            width: "min(1100px, 92vw)",
            px: 1.6,
            py: 1,
            borderRadius: 999,
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.92)",
              fontSize: { xs: 13.5, md: 15 },
              lineHeight: 1.6,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            <strong style={{ fontWeight: 800, color: "#eeb72b" }}>
              Cảm ơn bạn đã quan tâm sản phẩm!
            </strong>
            <br />
            Bạn có thể để lại lời nhắn hay thông điệp bên dưới — nội dung sẽ xuất hiện
            và bay vòng quanh màn hình để mọi người cùng thấy ✨
          </Typography>

        </Box>
      </Box>


      {/* Ô nhập bình luận */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 20,
          display: "flex",
          justifyContent: "center",
          zIndex: 3,
          px: 2,
          pointerEvents: "auto",
        }}
      >
        <Box
          sx={{
            width: "min(900px, 92vw)",
            display: "flex",
            alignItems: "center",
            gap: 1,
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            px: 1.2,
            py: 0.6,
            backdropFilter: "blur(8px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
          }}
        >
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            placeholder="Viết bình luận của bạn…"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                color: "white",
                px: 1.5,
                py: 1,
                fontSize: { xs: 14, md: 16 },
                width: "100%",
              },
            }}
            sx={{ flex: 1 }}
          />
          <Tooltip title="Gửi bình luận">
            <IconButton
              onClick={handleSubmit}
              sx={{
                color: "white",
                bgcolor: "rgba(255,255,255,0.12)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <SendRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

// util
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
