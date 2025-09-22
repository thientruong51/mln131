// sections/Hero.tsx
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Tooltip,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import tuyengon from "../assets/tuyengon.png";
import backgroundVideo from "../assets/videoplayback (4).mp4";

export default function Hero() {
  const [openIntro, setOpenIntro] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
        pt: "64px", // tránh navbar đè lên
      }}
    >
      {/* Video background */}
       <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(174,48,52,0.75) 0%, rgba(22,6,6,0.6) 80%)",
          zIndex: 1,
        }}
      />

      {/* Ảnh Tuyên ngôn với tooltip */}
      <Tooltip
        title="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình, ngày 2/9/1945."
        arrow
      >
        <Box
          component="img"
          src={tuyengon}
          alt="Tuyên ngôn độc lập"
          sx={{
            position: "absolute",
            bottom: { xs: "15%", md: "20%" },
            right: { xs: "5%", md: "5%" },
            width: { xs: "220px", md: "350px" },
            border: "4px solid #eeb72b",
            borderRadius: "8px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
            zIndex: 2,
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      </Tooltip>

      {/* Nội dung chữ */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "left",
          maxWidth: 950,
          px: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#eeb72b",
            fontSize: { xs: 28, md: 48 },
            fontWeight: 800,
            mb: 2,
          }}
        >
          DÂN CHỦ XÃ HỘI CHỦ NGHĨA VÀ NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgba(255,255,255,0.9)", mb: 3 }}
        >
          Dân chủ xã hội chủ nghĩa và nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ fontWeight: 700, borderRadius: "999px" }}
            onClick={() => setOpenIntro(true)}
          >
            Khám phá hành trình
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.6)",
              borderRadius: "999px",
            }}
            onClick={() => setOpenVideo(true)}
          >
            Xem Tuyên ngôn
          </Button>
        </Box>
      </Box>

      {/* Dialog hiển thị đoạn giới thiệu */}
      <Dialog
  open={openIntro}
  onClose={() => setOpenIntro(false)}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      background: "rgba(20, 0, 0, 0.75)", // nền đỏ đen trong suốt
      backdropFilter: "blur(8px)",        // làm mờ background phía sau
      borderRadius: 3,
      p: 3,
      boxShadow: "0 8px 40px rgba(0,0,0,0.7)",
      color: "white",
    },
  }}
>
  <DialogTitle
    sx={{
      fontWeight: 700,
      fontSize: 22,
      color: "#eeb72b",
      textAlign: "center",
      pb: 2,
    }}
  >
    Giới thiệu
  </DialogTitle>

  <DialogContent sx={{ textAlign: "justify" }}>
    <Typography
      variant="body1"
      sx={{ lineHeight: 1.8, fontSize: 18, color: "rgba(255,255,255,0.95)" }}
    >
      “Dân chủ xã hội chủ nghĩa và Nhà nước pháp quyền XHCN ở Việt Nam là thành quả của lịch sử đấu tranh giành độc lập, đồng thời là sự lựa chọn phát triển của dân tộc. Đây là mô hình chính trị – pháp lý gắn quyền lực nhà nước với quyền làm chủ của nhân dân, bảo đảm mọi quyết định vì lợi ích của dân, do dân và phục vụ nhân dân. Khám phá hành trình này chính là tìm hiểu những giá trị, nền tảng và định hướng xây dựng đất nước trong thời kỳ mới.”
    </Typography>
  </DialogContent>

  <Box sx={{ textAlign: "center", mt: 2 }}>
    <Button
      variant="contained"
      onClick={() => setOpenIntro(false)}
      sx={{
        backgroundColor: "#ae3034",
        color: "#fff",
        fontWeight: 600,
        borderRadius: "999px",
        px: 4,
        "&:hover": {
          backgroundColor: "#8b2327",
        },
      }}
    >
      Đóng
    </Button>
  </Box>
</Dialog>


     
      {/* Dialog video YouTube */}
<Dialog
  open={openVideo}
  onClose={() => setOpenVideo(false)}
  maxWidth="lg"
  fullWidth
  PaperProps={{
    sx: {
      backgroundColor: "black",
      boxShadow: "none",
    },
  }}
>
  <DialogTitle sx={{ p: 1 }}>
    <IconButton
      onClick={() => setOpenVideo(false)}
      sx={{ color: "white", float: "right" }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent
    sx={{
      p: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%", // 16:9 aspect ratio
      }}
    >
      <Box
        component="iframe"
        src="https://www.youtube.com/embed/dWAXQHot4ig?autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </Box>
  </DialogContent>
</Dialog>

    </Box>
  );
}
