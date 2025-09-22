import { useState } from "react";
import { Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/3a.png";
import img2 from "../assets/3b.png";
import img3 from "../assets/3c.png";
import img4 from "../assets/3d.png";
import img5 from "../assets/3e.png";

// Nếu được, nên đổi tên file thành "videoplayback-5.mp4" để gọn hơn.
// Vẫn hỗ trợ tên có khoảng trắng như yêu cầu:
import bgVideo from "../assets/videoplayback (5).mp4";

// === NỘI DUNG ===
// a) Tính tất yếu
const essentialA = [
  "Xuất phát từ yêu cầu đổi mới toàn diện đất nước, hội nhập quốc tế, xây dựng xã hội dân chủ, công bằng, văn minh.",
  "Đòi hỏi phải gắn dân chủ với pháp luật, phát triển kinh tế với công bằng xã hội, quyền công dân với trách nhiệm công dân.",
];

// b) Nhiệm vụ, giải pháp trọng tâm (5 mốc → 5 cards)
const cards = [
  {
    id: 0,
    img: img1,
    title: "Mở rộng dân chủ",
    points: [
      "Thực hiện hiệu quả Luật Thực hiện dân chủ ở cơ sở (2022).",
      "Bảo đảm quyền tham gia, giám sát, quyết định của nhân dân trong những vấn đề thiết thực.",
      "Ứng dụng CNTT, chính quyền điện tử, chính phủ số để người dân tham gia nhanh chóng, minh bạch.",
    ],
  },
  {
    id: 1,
    img: img2,
    title: "Xây dựng & hoàn thiện NNPQ XHCN",
    points: [
      "Thực hiện Nghị quyết 27-NQ/TW (2022): tiếp tục hoàn thiện hệ thống pháp luật đồng bộ, minh bạch, khả thi; nâng cao hiệu lực lập pháp, hành pháp, tư pháp.",
      "Tinh gọn bộ máy, nâng cao trách nhiệm giải trình, kiểm soát quyền lực.",
      "Đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước.",
    ],
  },
  {
    id: 2,
    img: img3,
    title: "Phòng, chống tham nhũng, tiêu cực",
    points: [
      "Xem đây là nhiệm vụ trọng tâm, thường xuyên.",
      "Xây dựng văn hóa liêm chính trong bộ máy nhà nước.",
      "Phát hiện, xử lý nghiêm vi phạm; mở rộng minh bạch, trách nhiệm giải trình ở mọi cấp, mọi khâu.",
    ],
  },
  {
    id: 3,
    img: img4,
    title: "Phát huy giám sát & phản biện xã hội",
    points: [
      "Của Mặt trận Tổ quốc, các tổ chức chính trị – xã hội, báo chí, nhân dân.",
      "Góp phần hạn chế lạm quyền, bảo đảm quyền lực thực sự thuộc về nhân dân.",
    ],
  },
  {
    id: 4,
    img: img5,
    title: "Gắn dân chủ với phát triển KT–XH",
    points: [
      "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, bảo đảm tăng trưởng đi đôi với công bằng, phúc lợi xã hội.",
      "Bảo đảm quyền và lợi ích hợp pháp của người dân, doanh nghiệp.",
      "Xây dựng môi trường dân chủ trong hoạt động kinh tế – xã hội.",
    ],
  },
];

export default function PhatHuyDanChuXHCN() {
  const [active, setActive] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const prev = () => setActive((v) => Math.max(0, v - 1));
  const next = () => setActive((v) => Math.min(cards.length - 1, v + 1));

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* VIDEO BACKGROUND */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          "& video": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          // tối ưu tương thích iOS/Android
          preload="metadata"
          // chặn tương tác chuột lên video
          style={{ pointerEvents: "none" }}
        />
        {/* Overlay tối để tăng độ tương phản chữ */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.75) 100%)",
          }}
        />
      </Box>

      {/* NỘI DUNG LỚP TRÊN */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 8 },
        }}
      >
        {/* Banner tiêu đề (to, giữa trang) */}
        <Box
          sx={{
            px: { xs: 2, md: 3 },
            py: { xs: 1.5, md: 2 },
            background: "rgba(100,100,100,0.15)",
            borderLeft: "10px solid #bd0009",
            borderRadius: 1.5,
            boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
            maxWidth: 1350,
            textAlign: "left",
            mb: 8,
            backdropFilter: "blur(3px)",
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: 22, sm: 26, md: 32 },
              lineHeight: 1.15,
              color: "#eeb72b",
              textTransform: "uppercase",
            }}
          >
            Phát huy dân chủ XHCN, xây dựng NNPQ XHCN ở Việt Nam hiện nay
          </Typography>
          <Typography sx={{ mt: 1, opacity: 0.95, fontSize: { xs: 13, md: 15 }, color: "#fff" }}>
            Tính tất yếu – Nhiệm vụ – Giải pháp
          </Typography>
        </Box>

        {/* a) Tính tất yếu */}
        <Box
          sx={{
            maxWidth: 1100,
            mx: "auto",
            mb: { xs: 5, md: 6 },
            p: { xs: 2, md: 3 },
            border: "2px solid #eeb72b",
            borderRadius: 3,
            bgcolor: "rgba(139,31,32,0.7)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#eeb72b",
              fontWeight: 800,
              mb: 1,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Tính tất yếu
          </Typography>
          {essentialA.map((p, i) => (
            <Typography
              key={i}
              sx={{
                color: "rgba(255,255,255,0.95)",
                lineHeight: 1.7,
                mb: i === essentialA.length - 1 ? 0 : 1,
                textAlign: "center",
              }}
            >
              {p}
            </Typography>
          ))}
        </Box>

        {/* b) Nhiệm vụ, giải pháp trọng tâm */}
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "#eeb72b", fontWeight: 800, mb: { xs: 3, md: 4 }, textTransform: "uppercase" }}
        >
          Nhiệm vụ, giải pháp trọng tâm
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* Cột trái: Card stack (5 mốc) */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 260, sm: 320, md: 560 },
              height: { xs: 360, sm: 420, md: 540 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              mb: 5,
            }}
          >
            {cards.map((card, idx) => {
              const isActive = idx === active;
              const offset = idx - active;

              return (
                <motion.div
                  key={card.id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_e, info) => {
                    if (info.offset.x > 50 && active > 0) setActive(active - 1);
                    else if (info.offset.x < -50 && active < cards.length - 1) setActive(active + 1);
                  }}
                  animate={{
                    scale: isActive ? 1.15 : 0.9,
                    rotate: isActive ? 0 : offset < 0 ? -8 : 8,
                    x: offset * 50,
                    y: isActive ? -10 : 30,
                    zIndex: isActive ? 10 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  whileHover={{
                    rotate: [0, -3, 3, -3, 3, 0],
                    transition: { duration: 0.5 },
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: isMobile ? 200 : 300,
                    height: isMobile ? 280 : 400,
                    cursor: "grab",
                  }}
                >
                  <Box
                    sx={{
                      width: "105%",
                      height: "105%",
                      backgroundImage: `url(${card.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 3,
                      border: "3px solid #eeb72b",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.7)",
                      position: "relative",
                    }}
                  >
                    {/* Băng rôn title */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: -20,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(139,31,32,0.95)",
                        border: "2px solid #eeb72b",
                        borderRadius: "0 0 12px 12px",
                        p: 0.8,
                        textAlign: "center",
                        backdropFilter: "blur(1px)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#eeb72b",
                          fontWeight: 800,
                          fontSize: isMobile ? 11 : 13,
                          textTransform: "uppercase",
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}

            {/* Nút điều hướng nhanh (desktop) */}
            <IconButton
              onClick={prev}
              sx={{
                position: "absolute",
                left: -8,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(0,0,0,0.45)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={next}
              sx={{
                position: "absolute",
                right: -8,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(0,0,0,0.45)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
              }}
            >
              <ChevronRight />
            </IconButton>

            {/* Dots */}
            <Box
              sx={{
                position: "absolute",
                bottom: -36,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {cards.map((c, i) => (
                <Box
                  key={`dot-${c.id}`}
                  onClick={() => setActive(i)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "2px solid #eeb72b",
                    bgcolor: i === active ? "#eeb72b" : "transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Cột phải: Nội dung card đang chọn */}
          <Box
            sx={{
              flex: 1,
              maxWidth: 560,
              minHeight: 220,
              ml: { xs: 0, md: 30 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#eeb72b",
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: 16, sm: 18, md: 20 },
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {cards[active].title}
            </Typography>

            {cards[active].points.map((line, idx) => (
              <Box
                key={`${cards[active].id}-${idx}`}
                sx={{ maxWidth: 600, mx: { xs: "auto", md: 0 }, textAlign: "justify", textJustify: "inter-word" }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    lineHeight: 1.8,
                    mb: 1,
                  }}
                >
                  {line}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
