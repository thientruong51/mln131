// sections/ArcTimelinePro.tsx
// Infographic bán nguyệt (poster-style) — React + MUI + Framer Motion
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

// Ảnh trung tâm + background
import centerImg from "../assets/timeline.png";
// Đổi tên/định dạng nếu file bạn khác (png/jpg/webp)
import bgTimeline from "../assets/bgtimeline.png";

export type NodeItem = {
  no: number;
  angle: number; // -180 (trái) → 0 (đỉnh) → +180 (phải)
  title: string;
  brief: string;
  side?: "left" | "right" | "top"| "bottom";
  details?: string[]; // nội dung dài cho dialog
};

type Props = { items?: NodeItem[] };

export default function ArcTimelinePro({ items: itemsProp }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:960px)");
  const gold = theme.palette.secondary.main; // #eeb72b
  const red = theme.palette.primary.main; // #ae3034

  // ===== Data mặc định (giống yêu cầu) =====
  const items = useMemo<NodeItem[]>(
    () =>
      itemsProp ??
      [
        {
          no: 1945,
          angle: -180,
          title: "1945 — CÁCH MẠNG THÁNG TÁM",
          brief:
            "Nhân dân giành chính quyền, khai sinh nước Việt Nam Dân chủ Cộng hòa – mở kỷ nguyên 'nhân dân làm chủ'.",
          side: "bottom",
        },
        {
          no: 1959,
          angle: -130,
          title: "1959 — HIẾN PHÁP ĐẦU TIÊN",
          brief:
            "Khẳng định chế độ dân chủ nhân dân và định hướng xã hội chủ nghĩa.",
          side: "left",
        },
        {
          no: 1986,
          angle: -90,
          title: "1986 — ĐỔI MỚI",
          brief:
            "Đổi mới toàn diện; gắn dân chủ với kinh tế thị trường định hướng XHCN.",
          side: "top",
        },
        {
          no: 2013,
          angle: -45,
          title: "2013 — HIẾN PHÁP HIỆN HÀNH",
          brief:
            "Khẳng định quyền con người, quyền công dân; cơ chế phân công – phối hợp – kiểm soát quyền lực.",
          side: "right",
        },
        {
          no: 2022,
          angle: 0,
          title: "2022 — LUẬT DÂN CHỦ CƠ SỞ",
          brief:
            "Trao quyền ở cơ sở: người dân tham gia, giám sát, quyết định trực tiếp; thúc đẩy minh bạch thời chuyển đổi số.",
          side: "bottom",
        },
      ],
    [itemsProp]
  );

  // ===== Kích thước vùng vẽ (SSR-safe) =====
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 1280, h: 800 });
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      setSize({ w: width, h: height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const { w, h } = size;

  // ===== Hình học (ellipse) =====
  const CX = w * (isMobile ? 0.5 : 0.52);
  const CY = h * (isMobile ? 0.61 : 0.63);
  const RX = Math.min(w, 1400) * (isMobile ? 0.32 : 0.36);
  const RY = RX * 0.62;

  const NODE = isMobile ? 56 : 66; // đường kính huy hiệu
  const STEM = isMobile ? 36 : 46;
  const CARD_W = isMobile ? 260 : 340;
  const CARD_GAP = isMobile ? 18 : 24;

  // toạ độ theo góc
  const pof = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: CX + RX * Math.cos(rad), y: CY + RY * Math.sin(rad), rad };
  };

  // ===== Dialog chi tiết =====
  const [open, setOpen] = useState<NodeItem | null>(null);

  return (
    <Box
      ref={ref}
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        // ======= BGTIMELINE làm nền =======
        backgroundImage: `
          linear-gradient( to bottom, rgba(0,0,0,0.41), rgba(0,0,0,0.86) ),
          url(${bgTimeline})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Halo trung tâm để kéo mắt về vòm timeline */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(900px 600px at ${CX}px ${CY}px, ${red}55 0%, transparent 60%)`,
          mixBlendMode: "screen",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Banner tiêu đề trái kiểu ribbon */}
      <Box
        sx={{
          position: "absolute",
          top: 18,
          left: 16,
          px: 2.2,
          py: 1.2,
          background: "#6464641a",
          borderLeft: `10px solid #bd0009ff`,
          borderRadius: 1,
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.4)",
          zIndex: 5,
          maxWidth: 950,
        }}
      >
        <Typography sx={{ fontWeight: 900, fontSize: 30, lineHeight: 1.1, color:"#eeb72b" }}>
          HÀNH TRÌNH DÂN CHỦ & NHÀ NƯỚC PHÁP QUYỀN
        </Typography>
        <Typography sx={{ mt: 0.75, opacity: 0.9, fontSize: 15 }}>
          1945 → 1959 → 1986 → 2013 → 2022
        </Typography>
      </Box>

      {/* Badge năm phải */}
      <Chip
        label="1945 — 2022"
        sx={{
          position: "absolute",
          top: 18,
          right: 16,
          bgcolor: `${gold}22`,
          color: gold,
          border: `1px solid ${gold}66`,
          fontWeight: 900,
          zIndex: 5,
        }}
      />

      {/* Ảnh trung tâm */}
      <Box
        sx={{
          position: "absolute",
          left: CX - RX * 0.7,
          top: 250,
          width: RX * 1.4,
          height: RY * 1.15,
          display: "grid",
          placeItems: "end center",
          pointerEvents: "none",
          zIndex: 1,
          filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))",
        }}
      >
        <Box
          component="img"
          src={centerImg}
          alt="center"
          sx={{ width: "110%", objectFit: "contain" }}
        />
      </Box>

      {/* Vòm kép bằng SVG cho mượt */}
      <svg
        width={w}
        height={h}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        {/* vòm dày đỏ */}
        <path
          d={`M ${CX - RX},${CY} A ${RX},${RY} 0 0 1 ${CX + RX},${CY}`}
          fill="none"
          stroke={red}
          strokeWidth={10}
          opacity={0.9}
        />
        {/* vòm dashed vàng */}
        <path
          d={`M ${CX - RX + 16},${CY} A ${RX - 16},${RY - 10} 0 0 1 ${
            CX + RX - 16
          },${CY}`}
          fill="none"
          stroke={gold}
          strokeWidth={2.5}
          strokeDasharray="6 10"
          opacity={0.8}
        />
      </svg>

      {/* Nodes + Cards */}
{items.map((it) => {
  const { x, y, rad } = pof(it.angle);

  // ✅ side có đủ 4 hướng; auto-snap khi không đặt sẵn
  const side: "left" | "right" | "top" | "bottom" =
    it.side ||
    (Math.cos(rad) >= 0
      ? "right"
      : Math.sin(rad) < -0.4
      ? "top"
      : Math.sin(rad) > 0.4
      ? "bottom"
      : "left");

  // ===== vị trí leader (stem) =====
  const stemX =
    side === "right" ? NODE / 2 : side === "left" ? -NODE / 2 : 0;
  const stemY =
    side === "top" ? -NODE / 2 : side === "bottom" ? NODE / 2 : 0;

  // ===== vị trí card =====
  const cardLeft =
    side === "right"
      ? NODE / 2 + STEM + CARD_GAP
      : side === "left"
      ? -(CARD_W + NODE / 2 + STEM + CARD_GAP)
      : -CARD_W / 2;

  const cardTop =
    side === "top"
      ? -(NODE / 2 + STEM + 96)
      : side === "bottom"
      ? NODE / 2 + STEM + 0
      : -(NODE / 2 + STEM / 2);

        return (
          <Box key={it.no} sx={{ position: "absolute", left: x, top: y }}>
            {/* leader */}
             <Box
        sx={{
          position: "absolute",
          left: stemX,
          top: stemY,
          // ✅ top/bottom là đường dọc; left/right là đường ngang
          width: side === "top" || side === "bottom" ? 2 : STEM,
          height: side === "top" || side === "bottom" ? STEM : 2,
          bgcolor: gold,
          transform:
            side === "right"
              ? "translateY(-1px)"
              : side === "left"
              ? "translate(-100%,-1px)"
              : side === "top"
              ? "translate(-1px,-100%)"
              : "translate(-1px,0)", // ✅ bottom
          boxShadow: `0 0 0 1px ${gold}55`,
          opacity: 0.95,
        }}
      />
            {/* dot chốt cuối leader */}
            <Box
              sx={{
                position: "absolute",
                left:
                  side === "right"
                    ? stemX + STEM
                    : side === "left"
                    ? stemX - STEM
                    : stemX,
                top: side === "top" ? stemY - STEM : stemY,
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: gold,
                transform: "translate(-50%, -50%)",
                boxShadow: `0 0 0 2px rgba(0,0,0,0.5)`,
              }}
            />

            {/* node huy hiệu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              style={{
                position: "absolute",
                left: -NODE / 2,
                top: -NODE / 2,
                cursor: "default",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  width: NODE,
                  height: NODE,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  background:
                    `radial-gradient(circle at 50% 35%, ${red}, #5d1b1e)` as any,
                  border: `3.5px solid ${gold}`,
                  boxShadow: `0 0 0 4px rgba(0,0,0,0.35), 0 0 18px ${gold}88`,
                  fontWeight: 900,
                  letterSpacing: 0.2,
                  textShadow: "0 1px 0 rgba(0,0,0,0.6)",
                }}
              >
                {it.no}
              </Box>
            </motion.div>

            {/* card */}
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 20px 42px rgba(0,0,0,0.55)" }}
              transition={{ type: "spring", stiffness: 240, damping: 16 }}
              style={{
                position: "absolute",
                left: cardLeft,
                top: cardTop,
                width: CARD_W,
                cursor: "pointer",
                zIndex: 1,
              }}
              onClick={() => setOpen(it)}
            >
              <Card
                sx={{
                  bgcolor: theme.palette.background.paper,
                  border: `2.5px solid ${gold}`,
                  borderRadius: 2,
                }}
              >
                <CardContent sx={{ p: 1.8 }}>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      color: gold,
                      fontSize: 15.5,
                      mb: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: 0.4,
                    }}
                  >
                    {it.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13.6,
                      lineHeight: 1.55,
                      color: theme.palette.text.secondary,
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    {it.brief}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        );
      })}

   

      {/* dialog chi tiết */}
      <Dialog open={Boolean(open)} onClose={() => setOpen(null)} maxWidth="sm" fullWidth>
        {open && (
          <>
            <DialogTitle sx={{ fontWeight: 900, color: red }}>
              {open.title}
            </DialogTitle>
            <DialogContent sx={{ pb: 2 }}>
              <Typography sx={{ fontSize: 16, lineHeight: 1.7 }}>
                {open.brief}
              </Typography>
              {open.details?.length ? (
                <Box sx={{ mt: 1.5, color: theme.palette.text.secondary }}>
                  {open.details.map((p, i) => (
                    <Typography key={i} sx={{ mb: 1.2 }}>
                      {p}
                    </Typography>
                  ))}
                </Box>
              ) : null}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
