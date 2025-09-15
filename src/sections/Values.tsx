// src/sections/Values.tsx
import { Box, Typography, Card, CardContent } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import { motion } from "framer-motion";
import worldMap from "../assets/worldmap.jpg"; 

const MotionBox = motion(Box);

export default function Values() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 10,
        px: { xs: 2, md: 8 },
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${worldMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Opening */}
        <Typography variant="h4" sx={{ color: "#eeb72b", mb: 2 }}>
          Giá trị thời đại
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 16, md: 18 },
            mb: 6,
            maxWidth: 800,
            mx: "auto",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          “Tư tưởng độc lập dân tộc của Hồ Chí Minh không chỉ là ngọn đuốc soi đường
          cho cách mạng Việt Nam, mà còn mang giá trị thời đại, cổ vũ phong trào
          giải phóng dân tộc trên toàn thế giới.”
        </Typography>

        {/* Main cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
          }}
        >
          {/* Việt Nam */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              sx={{
                flex: 1,
                bgcolor: "rgba(59, 59, 59, 0.32)",
                borderRadius: 3,
                p: 2,
                minHeight: 300,
              }}
            >
              <CardContent>
                <FlagIcon sx={{ fontSize: 42, color: "#eeb72b", mb: 2 }} />
                <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                  Đối với Việt Nam
                </Typography>
                <Typography
                  sx={{ textAlign: "justify", color: "rgba(255,255,255,0.9)", lineHeight: 1.8 }}
                >
                  • Kim chỉ nam cho thắng lợi Cách mạng Tháng Tám 1945, lập nên
                  Nhà nước Việt Nam Dân chủ Cộng hòa. <br />
                  • Cổ vũ toàn dân trong các cuộc kháng chiến chống Pháp và chống Mỹ,
                  đưa đến đại thắng mùa Xuân 1975. <br />
                  • Khẳng định con đường phát triển: độc lập dân tộc gắn liền với
                  chủ nghĩa xã hội. <br />
                  • Là nền tảng tư tưởng cho sự nghiệp xây dựng và bảo vệ Tổ quốc hiện nay.
                </Typography>
              </CardContent>
            </Card>
          </MotionBox>

          {/* Thế giới */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              sx={{
                flex: 1,
                bgcolor: "rgba(59, 59, 59, 0.32)",
                borderRadius: 3,
                p: 2,
                minHeight: 300,
              }}
            >
              <CardContent>
                <PublicIcon sx={{ fontSize: 42, color: "#eeb72b", mb: 2 }} />
                <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                  Đối với Thế giới
                </Typography>
                <Typography
                  sx={{ textAlign: "justify", color: "rgba(255,255,255,0.9)", lineHeight: 1.8 }}
                >
                  • Khẳng định nguyên tắc: “Mọi dân tộc đều có quyền sống, quyền
                  sung sướng và quyền tự do.” <br />
                  • Trở thành nguồn cảm hứng cho phong trào giải phóng dân tộc ở
                  châu Á, châu Phi, Mỹ Latinh. <br />
                  • Góp phần vào sự phát triển của luật pháp quốc tế về quyền con
                  người và quyền dân tộc. <br />
                  • Thể hiện tư tưởng nhân văn: giải phóng dân tộc gắn liền với
                  giải phóng xã hội và giải phóng con người.
                </Typography>
              </CardContent>
            </Card>
          </MotionBox>
        </Box>

        {/* Highlight quote */}
        <Typography
          variant="h6"
          sx={{
            mt: 8,
            fontStyle: "italic",
            fontWeight: 600,
            color: "#eeb72b",
          }}
        >
          👉 “Không có gì quý hơn độc lập, tự do.”
        </Typography>

        {/* Caption */}
        <Typography
          sx={{
            mt: 2,
            fontSize: 15,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Tư tưởng Hồ Chí Minh có giá trị toàn cầu, khơi nguồn cảm hứng cho phong trào
          giải phóng dân tộc thế kỷ XX.
        </Typography>
      </Box>
    </Box>
  );
}
