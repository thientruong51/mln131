import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { motion } from "framer-motion";
import pbcPortrait from "../assets/PhanBoiChau.png";
import videoBg from "../assets/videoplayback (1).mp4";

export default function PhanBoiChau() {
  const [openDetail, setOpenDetail] = useState(false);

  const milestones = [
    { year: "1904", text: "Thành lập Duy Tân Hội" },
    { year: "1905", text: "Khởi xướng phong trào Đông Du" },
    { year: "1912", text: "Thành lập Việt Nam Quang Phục Hội" },
    { year: "1925", text: "Bị Pháp bắt tại Thượng Hải, đưa về quản thúc ở Huế" },
    { year: "1940", text: "Qua đời tại Huế sau nhiều năm bị quản thúc" },
  ];

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
      {/* Video background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        src={videoBg}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75) 20%, rgba(174,48,52,0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Nội dung */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "flex-start",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Ảnh + overlay hover */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: 420 },
            height: 560,
            mt: 15,
            border: "4px solid rgba(238,183,43,0.3)",
            borderRadius: 2,
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover img": {
              transform: "scale(1.05)",
            },
            "&:hover .infoOverlay": {
              opacity: 1,
              transform: "translateY(0)",
            },
            "&:hover .fadeItem": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        >
          <Box
            component="img"
            src={pbcPortrait}
            alt="Phan Bội Châu"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />

          {/* Overlay hiện khi hover */}
          <Box
            className="infoOverlay"
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
              "& .fadeItem": {
                opacity: 0,
                transform: "translateY(15px)",
                transition: "all 0.6s ease",
              },
              "& .fadeItem:nth-of-type(1)": {
                transitionDelay: "0.1s",
              },
              "& .fadeItem:nth-of-type(2)": {
                transitionDelay: "0.3s",
              },
              "& .fadeItem:nth-of-type(3)": {
                transitionDelay: "0.5s",
              },
              "& .fadeItem:nth-of-type(4)": {
                transitionDelay: "0.7s",
              },
            }}
          >
            <Typography
              variant="h6"
              className="fadeItem"
              sx={{ color: "#eeb72b", mb: 1 }}
            >
              Phan Bội Châu (1867 – 1940)
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Lãnh tụ phong trào Đông Du (1905), kêu gọi thanh niên sang Nhật học tập.
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Chủ trương dựa vào ngoại bang (Nhật Bản) để giành lại độc lập.
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Tin tưởng vào con đường bạo động, vũ trang khởi nghĩa.
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Tuy nhiên, phong trào sớm thất bại do bị Nhật trục xuất và thiếu lực lượng trong nước.
            </Typography>
          </Box>
        </Box>

        {/* Văn bản + timeline */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" sx={{ color: "#eeb72b" }}>
            Lãnh tụ – Đông Du
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#fff", mt: 1, mb: 3 }}
          >
            Phan Bội Châu (1867 – 1940)
          </Typography>

          <Typography sx={{ fontStyle: "italic", color: "#eeb72b", mb: 3 }}>
            “Người ta sinh ra ở đời, ai cũng có một cái Tổ quốc để lo.”
          </Typography>

          {/* Nút */}
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
            <Button
              variant="outlined"
              component="a"
              href="https://thcsphansaonam.hcm.edu.vn/gioi-thieu/tieu-su-cu-phan-boi-chau/ctmb/11963/72348"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "#fff",
                borderRadius: "999px",
              }}
            >
              Nguồn
            </Button>
          </Box>

          {/* Timeline dọc với animation */}
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
                  {/* Node tròn pulse */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: [1.2, 1], opacity: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    style={{
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

      {/* Dialog chi tiết */}
      <Dialog
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: "rgba(20,0,0,0.9)",
            backdropFilter: "blur(8px)",
            borderRadius: 3,
            p: 3,
            color: "#fff",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, color: "#eeb72b" }}>
          Phong trào Đông Du
        </DialogTitle>
        <DialogContent
          sx={{
            textAlign: "justify",
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Năm 1905, Phan Bội Châu khởi xướng <b>Phong trào Đông Du</b>, với mục
            tiêu đưa thanh niên Việt Nam sang Nhật Bản học tập, tiếp thu khoa học –
            kỹ thuật và tinh thần canh tân để chuẩn bị lực lượng cho công cuộc giành
            độc lập.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Trong khoảng 1905–1908, hơn 200 thanh niên Việt Nam được đưa sang Nhật.
            Phan Bội Châu tranh thủ sự ủng hộ của các chính khách và tổ chức cách
            mạng Nhật Bản, đồng thời kết nối với phong trào cách mạng Trung Quốc.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Tuy nhiên, sau Hiệp ước Pháp – Nhật 1907, chính phủ Nhật ra lệnh trục xuất
            lưu học sinh Việt Nam. Phong trào Đông Du tan rã vào năm 1908.
          </Typography>
          <Typography>
            Dù thất bại, Đông Du có ý nghĩa to lớn: khơi dậy lòng yêu nước, tinh thần
            học hỏi phương Tây và phương Đông, tạo nền tảng cho các phong trào cách
            mạng sau này, đặc biệt là tư tưởng kết hợp độc lập dân tộc với canh tân
            đất nước.
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
