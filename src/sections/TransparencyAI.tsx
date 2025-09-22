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
          background: "rgba(23, 22, 22, 0.85)",
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
          Tính minh bạch khi dùng AI tạo hình ảnh (GPT & Gemini)
        </Typography>

        {/* 1. Công cụ AI */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            1. Công cụ AI đã sử dụng
          </Typography>
          <Typography>• <b>GPT (OpenAI)</b>: tạo minh hoạ, biểu tượng, texture và background theo prompt.</Typography>
          <Typography>• <b>Gemini (Google)</b>: tạo ảnh/đồ hoạ bổ sung và biến thể để đa dạng hoá trải nghiệm.</Typography>
          <Typography sx={{ mt: 1, opacity: 0.85 }}>
            → Ảnh AI được dùng <i>để minh hoạ khái niệm, timeline, poster mô phỏng phong cách cổ động</i>, giúp nội dung hấp dẫn và trực quan hơn.
          </Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 2. Mục đích sử dụng */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            2. Mục đích sử dụng AI
          </Typography>
          <Typography>• Nâng cao trải nghiệm người dùng bằng hình ảnh trực quan cho các phần: Dân chủ XHCN, NNPQ XHCN, mốc lịch sử, sơ đồ hoá khái niệm.</Typography>
          <Typography>• Tạo minh hoạ <i>không có sẵn</i> hoặc khó tìm nguồn mở phù hợp (như icon hệ thống, motif nền, đồ hoạ trừu tượng).</Typography>
          <Typography>• Tránh lạm dụng: hình AI chỉ mang tính minh hoạ, <b>không</b> dùng để thay thế tài liệu gốc hay chứng cứ lịch sử.</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 3. Vai trò hỗ trợ – không thay thế */}
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
          <Typography>• AI chỉ hỗ trợ tạo minh hoạ/đồ hoạ; nội dung học thuật, luận điểm, phân tích do sinh viên biên soạn.</Typography>
          <Typography>• Text, trích dẫn, lập luận đều trải qua biên tập thủ công và đối chiếu nguồn.</Typography>
          <Typography>• Không dùng AI để tạo giả mạo tư liệu lịch sử hay thay đổi ngữ cảnh tài liệu nguyên bản.</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 4. Quy trình kiểm tra & ghi nhãn */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            4. Quy trình kiểm tra và ghi nhãn nội dung
          </Typography>
          <Typography>• <b>Ghi nhãn</b>: nơi sử dụng hình AI sẽ gắn tag “AI-generated” trong chú thích/alt text hoặc góc ảnh.</Typography>
          <Typography>• <b>Kiểm duyệt</b>: lọc prompt/ảnh để loại nội dung sai lệch, nhạy cảm; kiểm tra tính phù hợp với ngữ cảnh học thuật.</Typography>
          <Typography>• <b>Nhật ký prompt</b>: lưu mô tả ngắn gọn (mục tiêu, style, ràng buộc) để truy vết và tái tạo khi cần.</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 5. Phạm vi & giới hạn sử dụng */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            5. Phạm vi và giới hạn
          </Typography>
          <Typography>• Không dùng ảnh AI để mô tả, nhại lại khuôn mặt cá nhân có thật hoặc logo/nhãn hiệu.</Typography>
          <Typography>• Tránh chủ đề nhạy cảm; không dùng AI để suy diễn, gán ghép, hay tạo “tư liệu” lịch sử.</Typography>
          <Typography>• Với biểu tượng/ảnh văn hoá – lịch sử: ưu tiên nguồn gốc mở/có phép; AI chỉ tạo hình <i>mang tính khái quát</i>.</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 6. Đạo đức – bản quyền – quyền sử dụng */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            6. Đạo đức, bản quyền và quyền sử dụng
          </Typography>
          <Typography>• Tôn trọng bản quyền: ghi nguồn tài liệu gốc; ảnh AI không sao chép nguyên mẫu có bảo hộ.</Typography>
          <Typography>• Hạn chế sử dụng phong cách cá nhân của nghệ sĩ đương đại nếu có rủi ro về quyền.</Typography>
          <Typography>• Lưu siêu dữ liệu (khi khả thi) để đánh dấu nguồn gốc AI trong tệp (IPTC/XMP).</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 7. An toàn & giảm rủi ro sai lệch */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            7. An toàn và giảm rủi ro sai lệch
          </Typography>
          <Typography>• Áp ràng buộc prompt: trung tính, không định kiến; không gợi ý hành vi nguy hiểm.</Typography>
          <Typography>• Soi chiếu nội dung: ảnh AI phải khớp mô tả, không tạo ngụy bằng chứng.</Typography>
          <Typography>• Quy trình “4 mắt”: người thứ hai duyệt lại trước khi đưa lên web.</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "secondary.main" }} />

        {/* 8. Cam kết minh bạch */}
        <Box mb={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "secondary.main" }}>
            8. Cam kết minh bạch và liêm chính học thuật
          </Typography>
          <Typography>• Công bố rõ nơi dùng hình AI; phân biệt minh hoạ AI với tư liệu gốc.</Typography>
          <Typography>• Nội dung học thuật (văn bản, biểu đồ số liệu, lập luận) do sinh viên chịu trách nhiệm biên soạn.</Typography>
          <Typography>• Sẵn sàng cung cấp prompt tóm tắt theo yêu cầu kiểm tra trong phạm vi học thuật.</Typography>
        </Box>

        {/* Nút quay lại */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 700, px: 4, borderRadius: "999px" }}
            onClick={() => navigate("/")}
          >
            ← Về trang chủ
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
