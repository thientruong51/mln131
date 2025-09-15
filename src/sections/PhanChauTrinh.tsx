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
import pctPortrait from "../assets/PhanChauTrinh.jpg";
import pctVideo from "../assets/videoplayback (3).mp4";

export default function PhanChauTrinh() {
  const [openDetail, setOpenDetail] = useState(false);

  const milestones = [
    { year: "1903", text: "Đỗ Phó bảng, từ quan sớm để dấn thân cải cách" },
    {
      year: "1906",
      text: "Cùng với Huỳnh Thúc Kháng, Trần Quý Cáp vận động Duy Tân ở Trung Kỳ",
    },
    {
      year: "1908",
      text: "Phong trào chống thuế miền Trung, bị bắt và kết án tử hình (sau giảm án)",
    },
    { year: "1911", text: "Sang Pháp, vận động cải cách và tố cáo chính sách thực dân" },
    {
      year: "1925",
      text: "Về nước, diễn thuyết nổi tiếng tại Sài Gòn, kêu gọi dân quyền và cải cách",
    },
    { year: "1926", text: "Qua đời, tang lễ trở thành phong trào chính trị lớn" },
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
      <Box
        component="video"
        src={pctVideo}
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
      {/* Overlay tối để chữ nổi bật */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.55)",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: 6,
          alignItems: "flex-start",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Văn bản + timeline */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" sx={{ color: "#eeb72b" }}>
            Nhà cải cách – Tư tưởng dân quyền
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#fff", mt: 1, mb: 3 }}
          >
            Phan Châu Trinh (1872 – 1926)
          </Typography>

          <Typography sx={{ fontStyle: "italic", color: "#eeb72b", mb: 3 }}>
            “Khai dân trí, chấn dân khí, hậu dân sinh.”
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
            <Button
              variant="outlined"
              component="a"
              href="https://thptphanchautrinh.hcm.edu.vn/gioi-thieu/tieu-su-cu-phan-chau-trinh/ctmb/26910/123330"
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

        {/* Ảnh + overlay storytelling */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: 420 },
            mt:15,
            height: 560,
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
            src={pctPortrait}
            alt="Phan Châu Trinh"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />

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
              Phan Châu Trinh (1872 – 1926)
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Chủ trương cải cách xã hội thay vì bạo động.
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Nhà cải cách, khởi xướng tư tưởng dân quyền
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Khẩu hiệu nổi tiếng: “Khai dân trí, chấn dân khí, hậu dân sinh”.
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Tin rằng phải dựa vào Pháp để “canh tân đất nước”.
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Tin vào cải cách hòa bình qua giáo dục & pháp luật
            </Typography>
            <Typography variant="body2" className="fadeItem" sx={{ mb: 1 }}>
              • Hạn chế: đặt niềm tin vào ngoại bang, chưa gắn độc lập với sức mạnh toàn dân.
            </Typography>
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
          Chủ trương và phong trào cải cách
        </DialogTitle>
        <DialogContent
          sx={{
            textAlign: "justify",
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Phan Châu Trinh không chủ trương bạo động, mà kêu gọi cải cách xã hội dựa
            trên <b>“Khai dân trí, chấn dân khí, hậu dân sinh”</b>. Ông tin rằng muốn
            cứu nước phải nâng cao dân trí, phát huy tinh thần dân tộc và cải thiện
            đời sống nhân dân.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Ông cùng Huỳnh Thúc Kháng, Trần Quý Cáp phát động phong trào Duy Tân (1906),
            vận động mở trường học, phát triển kinh tế, khuyến khích bỏ hủ tục lạc hậu.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Sau phong trào chống thuế 1908, ông bị bắt và kết án tử hình, nhưng sau
            được giảm án và đày ra Côn Đảo, rồi sang Pháp. Tại đây, ông tiếp tục diễn
            thuyết, viết báo, tố cáo chế độ thực dân và kêu gọi cải cách dân quyền.
          </Typography>
          <Typography>
            Năm 1925, ông về nước và có các bài diễn thuyết lớn tại Sài Gòn, khẳng định
            con đường cải cách hòa bình. Khi ông qua đời (1926), lễ tang trở thành một
            phong trào chính trị rộng lớn, thể hiện ảnh hưởng sâu rộng của tư tưởng dân
            quyền.
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
