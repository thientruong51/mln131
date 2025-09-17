// sections/TransparencyAI.tsx
import { Box, Typography, Card, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg from "../assets/AI.png";
import Navbar from "../components/Navbar";
export default function TransparencyAI() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        py: 10,
        px: 2,
      }}
    >
         <Navbar onNavigate={() => {}} active="transparency" />
      <Card
        sx={{
          maxWidth: 900,
          width: "100%",
          borderRadius: 3,
          p: 4,
          background: "rgba(23, 22, 22, 0.85)", // nền tối trong mờ
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          color: "text.primary",
        }}
      >
        {/* Tiêu đề */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "secondary.main",
            mb: 3,
          }}
        >
          Tính minh bạch trong ứng dụng AI
        </Typography>

        {/* 1. Công cụ AI */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            1. Công cụ AI đã sử dụng
          </Typography>
          <Typography>
            Remini: Dùng để phục hồi và làm rõ các ảnh tư liệu cũ để hiển thị trên sản phẩm web.
          </Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 2. Mục đích */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            2. Mục đích sử dụng AI
          </Typography>
          <Typography>
            Remini: Cải thiện chất lượng hình ảnh tư liệu cũ (ảnh mờ, scan) → giúp hình ảnh rõ nét, thuận tiện minh họa.
          </Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 3. Vai trò hỗ trợ */}
        <Box
          mb={3}
          sx={{
            p: 2,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "secondary.main",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            3. Vai trò hỗ trợ – không thay thế
          </Typography>
          <Typography>• Làm rõ chi tiết ảnh tư liệu, tăng chất lượng hiển thị.</Typography>
          <Typography>• Không thay thế nghiên cứu nội dung, phân tích và trình bày học thuật.</Typography>
          <Typography>• Các phần quan trọng như biên soạn, xây dựng website, trình bày đều do sinh viên thực hiện.</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 4. Kiểm tra */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            4. Kiểm tra và chỉnh sửa sau khi dùng AI
          </Typography>
          <Typography>• Ảnh gốc: mờ, độ phân giải thấp.</Typography>
          <Typography>• Ảnh sau Remini: rõ hơn, chi tiết sáng và sắc nét.</Typography>
          <Typography>• Sinh viên: kiểm chứng, chỉnh sửa, gắn nguồn và cross-check trước khi đưa vào web.</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 5. Cam kết */}
        <Box mb={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            5. Cam kết liêm chính học thuật
          </Typography>
          <Typography>• Vai trò hỗ trợ: Remini chỉ phục dựng ảnh, không thay thế toàn bộ quá trình học thuật.</Typography>
          <Typography>• Kiểm tra và chỉnh sửa: toàn bộ văn bản, phân tích, luận điểm do sinh viên biên soạn và chịu trách nhiệm.</Typography>
        </Box>

        {/* Nút quay lại */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 700,
              px: 4,
              borderRadius: "999px",
            }}
            onClick={() => navigate("/")}
          >
            ← Về trang chủ
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
