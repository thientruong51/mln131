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

// BG video
import bgVideo from "../assets/videoplayback (6).mp4";

// Ảnh: thay bằng ảnh thật của bạn
import centerImg from "../assets/1to.png";
import hero1 from "../assets/1a.png";
import hero2 from "../assets/1c.png";
import hero3 from "../assets/1b.png";
import hero4 from "../assets/hero4.png";


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

  const items = useMemo<OrbitItem[]>(
    () => [
      {
        key: "khai-niem",
        title: "Vị trí – bản chất",
        brief:
          "Dân chủ xã hội chủ nghĩa (XHCN) là bản chất của chế độ xã hội ta,\n\n" +
          "Mục tiêu và động lực của CNXH; Bản chất:: toàn bộ quyền lực thuộc về Nhân dân.",
        details: [
          "Dân chủ xã hội chủ nghĩa (XHCN) là bản chất của chế độ xã hội ta, là sự khác biệt căn bản với chế độ dân chủ tư sản.",
          "Dân chủ XHCN vừa là mục tiêu của sự nghiệp xây dựng CNXH (“dân giàu, nước mạnh, dân chủ, công bằng, văn minh”), vừa là động lực để huy động sức mạnh của toàn dân vào sự nghiệp đổi mới.",
          "Bản chất: toàn bộ quyền lực thuộc về nhân dân; dân chủ gắn chặt với công bằng, bình đẳng, nhân đạo; phản ánh tính ưu việt của chế độ XHCN so với các chế độ trước.",
        ],
        img: hero1,
        top: "0%",
        left: "80%",
        size: 180,
      },
      {
        key: "dac-trung",
        title: "Cơ sở hình thành ở Việt Nam",
        brief:
          "Tư tưởng Hồ Chí Minh,\n\n" +
          "Cách mạng Tháng Tám 1945.\n\n" +
          "Đường lối Đảng (đặc biệt từ Đổi mới 1986).",
        details: [
          "Tư tưởng dân chủ Hồ Chí Minh: “Bao nhiêu lợi ích đều vì dân, bao nhiêu quyền hạn đều của dân”.",
          "Thực tiễn lịch sử: Cách mạng Tháng Tám 1945 mở ra kỷ nguyên mới – nhân dân làm chủ.",
          "Đường lối của Đảng: Dân chủ là nguyên tắc tổ chức và hoạt động, được phát triển qua các giai đoạn, đặc biệt từ Đổi mới (1986).",
        ],
        img: hero2,
        top: "25%",
        left: "63%",
        size: 180,
      },
      {
        key: "vai-tro",
        title: "Nội dung thực hiện",
        brief:
          "Chính trị: bầu cử, giám sát, dân chủ trực tiếp & đại diện.\n\n" +
          "Kinh tế: làm chủ tài sản công, kinh doanh, phân phối công bằng.\n\n" +
          "Văn hóa – xã hội: thụ hưởng, sáng tạo, phát triển con người.",
        details: [
          "Chính trị: nhân dân bầu cử, ứng cử, tham gia quản lý, giám sát; thực hiện quyền dân chủ trực tiếp (trưng cầu ý dân, hội nghị nhân dân) và dân chủ đại diện (Quốc hội, HĐND, Mặt trận, đoàn thể).",
          "Kinh tế: quyền làm chủ về tài sản công, quyền lựa chọn việc làm, kinh doanh, đóng góp và hưởng thụ thành quả phát triển; bảo đảm công bằng trong phân phối.",
          "Văn hóa – xã hội: nhân dân được hưởng, sáng tạo và tham gia quyết định các giá trị văn hóa, giáo dục, khoa học, y tế; nâng cao dân trí, dân chủ gắn với phát triển con người.",
        ],
        img: hero3,
        top: "67%",
        left: "63%",
        size: 180,
      },
      {
        key: "thuc-tien",
        title: "Nguyên tắc và cơ chế",
        brief:
          "Dân chủ gắn pháp luật, kỷ cương;\n\n" +
          "Cơ chế Đảng lãnh đạo – Nhà nước quản lý – Nhân dân làm chủ.",
        details: [
          "Nguyên tắc: dân chủ phải đi đôi với pháp luật, kỷ cương, trách nhiệm công dân; quyền đi liền với nghĩa vụ.",
          "Cơ chế: Đảng lãnh đạo – Nhà nước quản lý – Nhân dân làm chủ. Đây là sự vận hành thống nhất, bảo đảm dân chủ thực sự chứ không hình thức.",
        ],
        img: hero4,
        top: "97%",
        left: "78%",
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
        overflow: "hidden",
      }}
    >
      {/* ==== VIDEO BACKGROUND (section-scoped) ==== */}
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
          filter: "brightness(0.78) contrast(1.05)", // làm tối để chữ nổi
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
          Dân chủ XHCN ở Việt Nam
        </Typography>
        <Typography sx={{ mt: 0.75, opacity: 0.9, fontSize: 15 }}>
           Vị trí – Cơ sở – Nội dung – Nguyên tắc
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
   

        {/* Trung tâm (hành tinh mẹ) */}
        <motion.div
          style={{
            position: "absolute",
            top: "40%",
            left: "80%",
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
              Dân chủ XHCN ở Việt Nam
            </Typography>
            <Typography
              sx={{
                mx: "auto",
                fontSize: 14,
                color: "rgba(255,255,255,0.9)",
                textAlign: "center",
                maxWidth: { xs: 180, md: 320 },
              }}
            >
           Vị trí – Cơ sở – Nội dung – Nguyên tắc
            </Typography>
          </Box>
        </motion.div>

        {/* Vệ tinh + Text */}
        {items.map((it, i) => {
          const size = it.size ?? 130;
          return (
            <Box key={it.key}>
              {/* Ảnh + Tooltip */}
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
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                </motion.div>
              </Tooltip>

              {/* Text block bên trái */}
              <Box
                sx={{
                  position: "absolute",
                  top: it.top,
                  left: 130,
                  transform: "translateY(-50%)",
                  width: `calc(${it.left} - ${size + 16}px)`,
                  textAlign: "right",
                  pr: -1,
                  zIndex: 2,
                  mt: 10,
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
