// sections/CircularShowcase.tsx
import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Tooltip,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

// === BG VIDEO ===
import bgVideo from "../assets/videoplayback (7).mp4";

// Ảnh: thay bằng ảnh thật của bạn
import centerImg from "../assets/2to.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

interface OrbitItem {
  key: string;
  title: string;
  brief: string;
  details: string[];
  img: string;
  top: string;
  left: string;
  size?: number;
}

export default function CircularShowcase() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Các mốc
  const items = useMemo<OrbitItem[]>(
    () => [
      {
        key: "khai-niem",
        title: "Quan niệm",
        brief:
          "Nhà nước của dân, do dân, vì dân.\n\n" +
          "Hoạt động trên nền Hiến pháp & pháp luật\n\n" +
          "Khác với tư sản vì đặt dưới sự lãnh đạo của ĐCSVN\n\n" +
          "Hướng tới mục tiêu XHCN",
        details: [
          "NNPQ XHCN Việt Nam: của nhân dân, do nhân dân, vì nhân dân; tổ chức, hoạt động trên nền tảng Hiến pháp và pháp luật; bảo đảm công bằng, dân chủ, văn minh.",
          "Khác với nhà nước pháp quyền tư sản ở chỗ: luôn đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, nhằm mục tiêu XHCN, không đa nguyên chính trị.",
        ],
        img: hero1,
        top: "10%",
        left: "30%",
        size: 180,
      },
      {
        key: "dac-trung",
        title: "Đặc trưng cơ bản",
        brief:
          "Nhân dân là chủ thể quyền lực.\n\n" +
          "Thượng tôn Hiến pháp & pháp luật.\n\n" +
          "Quyền lực thống nhất, có phân công – phối hợp – kiểm soát.\n\n" +
          "Tôn trọng, bảo vệ quyền con người, quyền công dân.\n\n" +
          "Đảng lãnh đạo\n\n" +
          "Nguyên tắc tập trung dân chủ.",
        details: [
          "Nhân dân là chủ thể tối cao của quyền lực nhà nước.",
          "Thượng tôn pháp luật: Hiến pháp, pháp luật có vị trí tối thượng; mọi tổ chức, cá nhân đều bình đẳng trước pháp luật.",
          "Quyền lực nhà nước thống nhất, nhưng phân công, phối hợp, kiểm soát giữa ba quyền: lập pháp, hành pháp, tư pháp.",
          "Tôn trọng, bảo vệ, bảo đảm quyền con người, quyền công dân.",
          "Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
          "Tổ chức và hoạt động theo nguyên tắc tập trung dân chủ.",
        ],
        img: hero2,
        top: "45%",
        left: "45%",
        size: 180,
      },
      {
        key: "vai-tro",
        title: "Cơ sở pháp lý – chính trị",
        brief: "Hiến pháp 2013,\n\nNghị quyết 27-NQ/TW (2022).",
        details: [
          "Hiến pháp 2013: Chương II khẳng định quyền con người, quyền công dân; quy định rõ ràng cơ chế phân công – phối hợp – kiểm soát quyền lực.",
          "Nghị quyết 27-NQ/TW (2022): xác định các định hướng lớn để tiếp tục xây dựng và hoàn thiện NNPQ XHCN trong giai đoạn mới.",
        ],
        img: hero3,
        top: "80%",
        left: "30%",
        size: 180,
      },
    ],
    []
  );

  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        px: { xs: 2, md: 6 },
        color: "#fff",
        minHeight: "100vh",
        overflow: "hidden", // clip video
      }}
    >
      {/* === VIDEO BACKGROUND (section-scoped) === */}
     <Box
        component="video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.65) contrast(1.05)", // làm tối để chữ nổi
          // Nếu muốn cố định theo viewport (không cuộn), đổi sang position:"fixed"
          // và thêm "pointerEvents:'none'"
        }}
      />

      {/* Lớp tint nhẹ để đảm bảo tương phản */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.46))",
        }}
      />

      {/* Banner góc phải */}
      <Box
        sx={{
          position: "absolute",
          top: 18,
          right: 16,
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
        <Typography sx={{ fontWeight: 900, fontSize: 30, lineHeight: 1.1, color: "#eeb72b" }}>
          Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam
        </Typography>
        <Typography sx={{ mt: 0.75, opacity: 0.9, fontSize: 15 }}>
          Quan niệm – Đặc trưng – Cơ sở pháp lý – Chính trị
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          maxWidth: "none",
          mx: "auto",
          minHeight: 720,
          overflow: "visible",
          zIndex: 2, // nằm trên video + tint
        }}
      >
        

        {/* Trung tâm */}
        <motion.div
          style={{
            position: "absolute",
            top: "40%",
            left: "0%",
            zIndex: 3,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: { xs: 180, md: 320 },
                height: { xs: 180, md: 320 },
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #eeb72b",
                boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
                mb: 2,
                mx: "auto",
              }}
            >
              <Box
                component="img"
                src={centerImg}
                alt="Nội dung chính"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              sx={{
                color: "#eeb72b",
                fontWeight: 900,
                textTransform: "uppercase",
                mb: 1,
                textAlign: "center",
              }}
            >
              Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam
            </Typography>
            <Typography
              sx={{
                mx: "auto",
                fontSize: 14,
                color: "rgba(255,255,255,0.9)",
                textAlign: "center",
                maxWidth: { xs: 180, md: 420 },
              }}
            >
              Quan niệm – Đặc trưng – Cơ sở pháp lý – Chính trị
            </Typography>
          </Box>
        </motion.div>

        {/* Vệ tinh + Text */}
        {items.map((it, i) => {
          const size = it.size ?? 130;
          return (
            <Box key={it.key}>
              {/* Ảnh */}
              <Tooltip
                arrow
                placement="bottom"
                title={
                  <Box sx={{ whiteSpace: "pre-line", textAlign: "left", maxWidth: 360 }}>
                    <Typography sx={{ fontWeight: 800, mb: 0.5, color: "#eeb72b" }}>
                      {it.title}
                    </Typography>
                  </Box>
                }
              >
                <motion.div
                  style={{
                    position: "absolute",
                    top: it.top,
                    left: it.left,
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                    zIndex: 3,
                  }}
                  animate={{ x: [0, 6, 0, -6, 0], y: [0, -4, 0, 4, 0] }}
                  transition={{
                    duration: 6 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }}
                  whileHover={{ scale: 1.06 }}
                  onClick={() => setOpenKey(it.key)}
                >
                  <Box
                    sx={{
                      width: size,
                      height: size,
                      borderRadius: "100%",
                      overflow: "hidden",
                      border: "3px solid #eeb72b",
                      boxShadow: "0 10px 22px rgba(0,0,0,0.45)",
                      background: "rgba(0,0,0,0.25)",
                    }}
                  >
                    <Box
                      component="img"
                      src={it.img}
                      alt={it.title}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </Box>
                </motion.div>
              </Tooltip>

              {/* Text block bên phải */}
              <Box
                sx={{
                  position: "absolute",
                  top: it.top,
                  right: 0,
                  transform: "translateY(-50%)",
                  width: `calc(100% - ${it.left} - ${size + 16}px)`,
                  textAlign: "left",
                  pl: -1,
                  zIndex: 2,
                  mt: 7,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#eeb72b",
                    textTransform: "uppercase",
                    fontSize: 17,
                    lineHeight: 1.2,
                    mb: 1,
                  }}
                >
                  {it.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.9)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {it.brief}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Dialog chi tiết */}
      {items.map((it) => (
        <Dialog
          key={it.key}
          open={openKey === it.key}
          onClose={() => setOpenKey(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background: "rgba(20,0,0,0.92)",
              backdropFilter: "blur(8px)",
              borderRadius: 3,
              p: 1,
              color: "#fff",
            },
          }}
        >
          <DialogTitle sx={{ fontWeight: 900, color: "#eeb72b" }}>
            {it.title}
          </DialogTitle>
          <DialogContent sx={{ textAlign: "justify" }}>
            {it.details.map((p, idx) => (
              <Typography key={idx} sx={{ mb: 2, lineHeight: 1.7 }}>
                {p}
              </Typography>
            ))}
            <Box sx={{ textAlign: "right", mt: 1 }}>
              <Button
                variant="contained"
                onClick={() => setOpenKey(null)}
                sx={{
                  bgcolor: "#eeb72b",
                  color: "#831f21",
                  fontWeight: 700,
                  borderRadius: "999px",
                }}
              >
                Đóng
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      ))}
    </Box>
  );
}
