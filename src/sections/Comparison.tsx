// src/sections/Comparison.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import HistoryIcon from "@mui/icons-material/History";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

import hcmPortrait from "../assets/HCM.jpg";
import pbcPortrait from "../assets/PhanBoiChau.png";
import pctPortrait from "../assets/PhanChauTrinh.jpg";

const MotionBox = motion(Box) as any;

export default function Comparison() {
  const [show, setShow] = useState(false);

  const leaders = [
    {
      id: "pbc",
      name: "Phan Bội Châu",
      img: pbcPortrait,
      slogan:
        "Chủ trương tự lực, khởi nghĩa vũ trang, tìm kiếm lực lượng ngoại viện.",
      path:
        "Dựa vào Nhật, tổ chức Quang Phục Hội và các hoạt động vũ trang, kêu gọi thanh niên học tập, hành động nhằm giành độc lập.",
      limitations:
        "Phụ thuộc vào thế lực nước ngoài (Nhật), kế hoạch nhiều nơi bị thất bại, thiếu nguồn lực lâu dài.",
      contribution:
        "Kích thích tinh thần yêu nước, khơi dậy ý chí độc lập; đặt nền tảng tinh thần tự lực cho các phong trào sau này.",
      years: "Hoạt động mạnh: 1904–1925",
    },
    {
      id: "pct",
      name: "Phan Châu Trinh",
      img: pctPortrait,
      slogan: "Cải cách ôn hòa: khai dân trí, chấn dân khí, hậu dân sinh.",
      path:
        "Tập trung cải cách văn hoá - giáo dục, vận động lãnh đạo thực dân thực hiện cải cách dân quyền, dùng con đường hoà bình, vận động trí thức.",
      limitations:
        "Tin rằng có thể tiến hành 'cải cách' dựa vào chủ trương cải tổ của thực dân; do đó hiệu quả hạn chế trong hoàn cảnh thuộc địa.",
      contribution:
        "Mở đầu tư tưởng dân quyền, khuyến khích giáo dục, hiện đại hoá xã hội — ảnh hưởng lớn đến nhận thức công chúng.",
      years: "Hoạt động nổi bật: 1905–1926",
    },
    {
      id: "hcm",
      name: "Hồ Chí Minh",
      img: hcmPortrait,
      slogan:
        "Kết hợp độc lập dân tộc với chủ nghĩa xã hội; đặt quyền lợi, tự do, hạnh phúc của nhân dân làm mục tiêu.",
      path:
        "Tổ chức và liên kết phong trào cách mạng quần chúng, thành lập Đảng (1930), thành lập Việt Minh (1941), lãnh đạo Tổng khởi nghĩa (1945).",
      limitations: "Không có",
      contribution:
        "Con đường lựa chọn gắn với bối cảnh thế giới và ý thức hệ thời đại; Đem lại độc lập thực sự, gắn độc lập dân tộc với lợi ích xã hội của nhân dân; đặt nền móng cho xây dựng nhà nước mới.",
      years: "Hoạt động nổi bật: 1919–1969",
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 8 }, color: "#fff" }}>
      <Typography variant="h4" sx={{ color: "#eeb72b", mb: 1 }}>
        So sánh – Kế thừa & Sáng tạo
      </Typography>

      <Typography sx={{ mb: 3 }}>
        “Hồ Chí Minh đã kế thừa tinh thần yêu nước của tiền nhân, đồng thời sáng
        tạo một con đường mới phù hợp với thời đại.”
      </Typography>

      {/* Nút toggle */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Button
          variant="contained"
          onClick={() => setShow((s) => !s)}
          sx={{
            bgcolor: "#eeb72b",
            color: "#8b1f20",
            fontWeight: 700,
            borderRadius: "999px",
            px: 4,
            py: 1.2,
          }}
        >
          {show ? "Ẩn so sánh" : "So sánh"}
        </Button>
      </Box>

      {!show ? (
        // --- Trước khi so sánh ---
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 45 },
            flexWrap: "wrap",
          }}
        >
          {/* Left: PBC & PCT chồng lên nhau */}
          <Box
            sx={{
              width: { xs: "100%", sm: 260, md: 320 },
              position: "relative",
              height: { xs: 360, sm: 400, md: 460 },
            }}
          >
            <MotionBox
              animate={{ x: -15, rotate: -6 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              sx={{ position: "absolute", top: 40, left: 0, zIndex: 1 }}
            >
              <Card
                sx={{
                  width: { xs: 220, sm: 260, md: 320 },
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 8,
                }}
              >
                <CardMedia
                  component="img"
                  image={pbcPortrait}
                  alt="Phan Bội Châu"
                  sx={{ height: { xs: 320, sm: 380, md: 460 } }}
                />
              </Card>
            </MotionBox>
            <MotionBox
              animate={{ x: 25, rotate: 6 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              sx={{ position: "absolute", top: 0, left: 30, zIndex: 2 }}
            >
              <Card
                sx={{
                  width: { xs: 220, sm: 260, md: 320 },
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 10,
                }}
              >
                <CardMedia
                  component="img"
                  image={pctPortrait}
                  alt="Phan Châu Trinh"
                  sx={{ height: { xs: 320, sm: 380, md: 460 } }}
                />
              </Card>
            </MotionBox>
          </Box>

          {/* Right: HCM */}
          <Box
            sx={{
              width: { xs: "100%", sm: 260, md: 320 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: { xs: 220, sm: 260, md: 360 },
                borderRadius: 2,
                overflow: "hidden",
                border: "2px solid #eeb72b",
                boxShadow: 10,
              }}
            >
              <CardMedia
                component="img"
                image={hcmPortrait}
                alt="Hồ Chí Minh"
                sx={{ height: { xs: 320, sm: 380, md: 460 } }}
              />
            </Card>
          </Box>
        </Box>
      ) : (
        // --- Sau khi bấm So sánh ---
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {leaders.map((ld, idx) => (
            <MotionBox
              key={ld.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <Card
                sx={{
                  width: { xs: "100%", sm: 340, md: 420 },
                  borderRadius: 2,
                  overflow: "hidden",
                  border:
                    ld.id === "hcm"
                      ? "2px solid #eeb72b"
                      : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
                  bgcolor: "rgba(0,0,0,0.55)",
                }}
              >
                <CardMedia
                  component="img"
                  image={ld.img}
                  alt={ld.name}
                  sx={{ height: { xs: 300, sm: 420, md: 500 } }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: "#eeb72b", fontWeight: 800 }}
                  >
                    {ld.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 1, fontSize: { xs: 12, sm: 13 } }}
                  >
                    {ld.slogan}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <List dense>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <PublicIcon sx={{ color: "#eeb72b" }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Con đường:"
                        secondary={ld.path}
                        secondaryTypographyProps={{ fontSize: { xs: 12, sm: 13 } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CloseIcon sx={{ color: "#ff6b6b" }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Hạn chế:"
                        secondary={ld.limitations}
                        secondaryTypographyProps={{ fontSize: { xs: 12, sm: 13 } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon sx={{ color: "#9be15d" }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Đóng góp:"
                        secondary={ld.contribution}
                        secondaryTypographyProps={{ fontSize: { xs: 12, sm: 13 } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <HistoryIcon sx={{ color: "#eeb72b" }} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Thời kỳ:"
                        secondary={ld.years}
                        secondaryTypographyProps={{ fontSize: { xs: 12, sm: 13 } }}
                      />
                    </ListItem>
                  </List>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <StarIcon sx={{ color: "#eeb72b" }} />
                    <Typography variant="caption">
                      Kế thừa & sáng tạo
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>
      )}
    </Box>
  );
}
