import { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const cards = [
  {
    id: 0,
    img: img1,
    title: "Độc lập gắn với tự do và hạnh phúc của nhân dân",
    quote:
      "Nếu nước độc lập mà dân không được hưởng hạnh phúc, tự do thì độc lập cũng chẳng có nghĩa lý gì.",
    description:
      "Hồ Chí Minh khẳng định độc lập dân tộc không chỉ là thoát khỏi ách thống trị ngoại bang, mà còn là bảo đảm cho nhân dân quyền sống, quyền tự do và mưu cầu hạnh phúc. Độc lập phải đi đôi với việc nâng cao đời sống nhân dân, đem lại hạnh phúc thực sự cho mọi người dân.",
  },
  {
    id: 1,
    img: img2,
    title: "Giải phóng dân tộc bằng sức mạnh chính dân tộc",
    quote: "Không trông cậy vào ngoại bang, mà dựa vào quần chúng nhân dân.",
    description:
      "Hồ Chí Minh luôn nhấn mạnh con đường giành độc lập phải do chính dân tộc Việt Nam tự quyết định và thực hiện. Người bác bỏ tư tưởng trông chờ vào sự cứu giúp từ bên ngoài. Sức mạnh lớn nhất chính là sức mạnh đoàn kết của toàn dân, dựa vào nhân dân để tiến hành đấu tranh cách mạng.",
  },
  {
    id: 2,
    img: img3,
    title: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
    quote:
      "Hồ Chí Minh đã tiếp thu tinh hoa nhân loại, gắn cách mạng Việt Nam với phong trào cách mạng thế giới.",
    description:
      "Trong quá trình tìm đường cứu nước, Hồ Chí Minh tiếp thu những giá trị tiến bộ của nhân loại, đặc biệt là chủ nghĩa Mác - Lênin. Người chủ trương gắn cách mạng Việt Nam với phong trào cách mạng thế giới, tranh thủ sự đồng tình, ủng hộ của nhân dân tiến bộ trên toàn thế giới, tạo nên sức mạnh to lớn cho dân tộc.",
  },
  {
    id: 3,
    img: img4,
    title: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    quote:
      "Không chỉ giành độc lập, mà còn xây dựng xã hội công bằng, dân chủ, hạnh phúc.",
    description:
      "Hồ Chí Minh khẳng định độc lập dân tộc mới chỉ là bước khởi đầu. Đích đến cuối cùng của cách mạng Việt Nam là xây dựng xã hội xã hội chủ nghĩa – nơi mọi người đều được hưởng tự do, công bằng, dân chủ, ấm no và hạnh phúc. Đây là con đường phát triển tất yếu của dân tộc ta.",
  },
];

export default function HoChiMinh() {
  const [active, setActive] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 8 },
        background: "linear-gradient(to bottom, #1a0000, #330000)",
      }}
    >
      {/* Tiêu đề */}
      <Typography
        variant={isMobile ? "h4" : "h3"}
        align="center"
        sx={{ color: "#eeb72b", fontWeight: 700, mb: { xs: 4, md: 6 } }}
      >
        Tư tưởng Hồ Chí Minh
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Cột trái: Card stack */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 260, sm: 320, md: 450 },
            height: { xs: 340, sm: 400, md: 500 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
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
                onDragEnd={(e, info) => {
                  if (info.offset.x > 50 && active > 0) {
                    setActive(active - 1);
                  } else if (info.offset.x < -50 && active < cards.length - 1) {
                    setActive(active + 1);
                  }
                }}
                animate={{
                  scale: isActive ? 1.15 : 0.9,
                  rotate: isActive ? 0 : offset < 0 ? -8 : 8,
                  x: offset * 50,
                  y: isActive ? -10 : 30,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
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
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.7)",
                    position: "relative",
                  }}
                >
                  {/* Băng rôn title */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -40,
                      left: 0,
                      width: "100%",
                      bgcolor: "#8b1f20",
                      border: "2px solid #eeb72b",
                      borderRadius: "0 0 12px 12px",
                      p: 0.8,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#eeb72b",
                        fontWeight: 600,
                        fontSize: isMobile ? 11 : 13,
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* Cột phải: Nội dung */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 560,
            minHeight: 200,
            marginLeft: { xs: 0, md: 30 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#eeb72b",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: 16, sm: 18, md: 20 },
            }}
          >
            {cards[active].title}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: 14, sm: 15, md: 16 },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {cards[active].quote}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: 13, sm: 14 },
              lineHeight: 1.6,
            }}
          >
            {cards[active].description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
