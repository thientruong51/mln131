import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";

// Ảnh chân dung
import hcmPortrait from "../assets/HCM.jpg";
// Ảnh tư liệu
import hcmVersailles from "../assets/hcm_versailles.jpg";
import hcmRevolution from "../assets/hcm_august_revolution.jpg";
import hcmDeclaration from "../assets/hcm_declaration1945.jpg";

import bgVideo from "../assets/videoplayback (2).mp4";

export default function HoChiMinhInfor() {
  const [openDetail, setOpenDetail] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(0);

  const milestones = [ { year: "1919", text: "Gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Versailles, đòi quyền tự quyết và bình đẳng dân tộc.", }, { year: "1930", text: "Thành lập Đảng Cộng sản Việt Nam, khẳng định con đường cách mạng: độc lập dân tộc gắn liền với CNXH.", }, { year: "1941", text: "Trở về nước, thành lập Việt Minh, lãnh đạo nhân dân chuẩn bị Tổng khởi nghĩa.", }, { year: "1945", text: "Đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.", }, { year: "1966", text: "Khẳng định tư tưởng: 'Không có gì quý hơn độc lập, tự do.'", }, ];

  const documents = [
    {
      img: hcmVersailles,
      title: "Hội nghị Versailles 1919",
      desc: "Người gửi Bản Yêu sách của nhân dân An Nam, đòi quyền tự do, dân chủ, bình đẳng.",
    },
    {
      img: hcmRevolution,
      title: "Cách mạng Tháng Tám 1945",
      desc: "Lãnh đạo toàn dân nổi dậy giành chính quyền, mở ra kỷ nguyên độc lập tự do.",
    },
    {
      img: hcmDeclaration,
      title: "Tuyên ngôn Độc lập 1945",
      desc: "Ngày 2/9/1945 tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    },
  ];

  const nextDoc = () => {
    setCurrentDoc((prev) => (prev + 1) % documents.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        color: "#fff",
        py: 8,
        px: { xs: 2, md: 8 },
        overflow: "hidden",
      }}
    >
         <Box
        component="video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      />
      {/* Overlay tối để chữ rõ hơn */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.55)",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "flex-start",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Avatar HCM bên trái */}
        <Tooltip
          title="Hồ Chí Minh – người tìm ra con đường giải phóng dân tộc đúng đắn, gắn độc lập với hạnh phúc của nhân dân."
          placement="bottom"
          arrow
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 420 },
              height: 560,
              mt:15,
              border: "4px solid rgba(238,183,43,0.3)",
              borderRadius: 2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              overflow: "hidden",
              cursor: "pointer",
              "&:hover img": { transform: "scale(1.05)" },
            }}
          >
            <Box
              component="img"
              src={hcmPortrait}
              alt="Hồ Chí Minh"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
          </Box>
        </Tooltip>

        {/* Văn bản + timeline */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" sx={{ color: "#eeb72b" }}>
            Tư tưởng Hồ Chí Minh – Độc lập và Hạnh phúc
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#fff", mt: 1, mb: 3 }}
          >
            Hồ Chí Minh (1890 – 1969)
          </Typography>
          <Typography sx={{ fontStyle: "italic", color: "#eeb72b", mb: 3 }}>
            “Không có gì quý hơn độc lập, tự do.”
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 6 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#eeb72b",
                color: "#8b1f20",
                fontWeight: 700,
                borderRadius: "999px",
              }}
              onClick={() => setOpenDetail(true)}
            >
              Đọc thêm
            </Button>
          </Box>

          {/* Timeline */}
          <Box
            sx={{
              position: "relative",
              pl: 4,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "12px",
                width: "2px",
                height: "100%",
                bgcolor: "#eeb72b",
              },
            }}
          >
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Box sx={{ mb: 4, position: "relative", pl: 4 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 4,
                      left: "-4px",
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: "#eeb72b",
                      border: "2px solid #fff",
                      boxShadow: "0 0 12px rgba(238,183,43,0.6)",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#eeb72b", mb: 1 }}
                  >
                    {item.year}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Dialog */}
      <Dialog
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(8px)",
            borderRadius: 3,
            p: 3,
            color: "#fff",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, color: "#eeb72b" }}>
          Tư liệu lịch sử Hồ Chí Minh
        </DialogTitle>
        <DialogContent>
            <Box sx={{ mt: 2, mb:2 }}> <Typography sx={{ mb: 2 }}> Hồ Chí Minh kế thừa truyền thống yêu nước của dân tộc, nhưng đã tìm ra con đường mới: độc lập dân tộc gắn liền với chủ nghĩa xã hội. </Typography> <Typography sx={{ mb: 2 }}> Năm 1919 tại Hội nghị Versailles, Người gửi Bản Yêu sách của nhân dân An Nam, đòi quyền tự do, dân chủ, bình đẳng. Đây là bước ngoặt khẳng định con đường đấu tranh chính nghĩa. </Typography> <Typography sx={{ mb: 2 }}> Tháng 9 năm 1945, Người đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình: <i>“Nước Việt Nam có quyền hưởng tự do và độc lập...”</i> </Typography> <Typography> Tư tưởng Hồ Chí Minh là sự kết hợp độc lập dân tộc với hạnh phúc nhân dân, đặt nền móng cho con đường phát triển lâu dài của cách mạng Việt Nam. </Typography> </Box>
          {/* Chỉ hiển thị 1 ảnh */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
              cursor: "pointer",
              mb: 3,
              "&:hover img": { transform: "scale(1.08)" },
              "&:hover .overlay": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Box
              component="img"
              src={documents[currentDoc].img}
              alt={documents[currentDoc].title}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.65)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: 3,
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease",
              }}
            >
              <Typography variant="h6" sx={{ color: "#eeb72b", mb: 1 }}>
                {documents[currentDoc].title}
              </Typography>
              <Typography variant="body2">
                {documents[currentDoc].desc}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#eeb72b",
                color: "#eeb72b",
                borderRadius: "999px",
              }}
              onClick={nextDoc}
            >
              Tiếp theo
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
