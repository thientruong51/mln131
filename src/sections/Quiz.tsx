// src/sections/Quiz.tsx
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from "@mui/icons-material/Replay";
import InfoIcon from "@mui/icons-material/Info";

type QA = {
  q: string;
  opts: string[];
  a: number; // index of correct option
  explanation: string;
};

const questions: QA[] = [
  {
    q: "Điểm khác biệt cơ bản trong tư tưởng độc lập dân tộc của Hồ Chí Minh so với Phan Bội Châu là gì?",
    opts: [
      "Phan Bội Châu chủ trương dựa vào ngoại bang và bạo động vũ trang, còn Hồ Chí Minh nhấn mạnh tự lực tự cường, dựa vào sức mạnh nhân dân",
      "Phan Bội Châu chủ trương dựa vào quần chúng trong nước, còn Hồ Chí Minh thiên về liên minh với ngoại bang để giành độc lập",
      "Phan Bội Châu kết hợp cải cách xã hội và cách mạng vô sản, còn Hồ Chí Minh chỉ nhấn mạnh cải cách văn hóa"
    ],
    a: 0,
    explanation: "Hồ Chí Minh chủ trương dựa vào sức mạnh dân tộc và nhân dân, khác với Phan Bội Châu vốn đặt niềm tin vào ngoại bang như Nhật Bản."
  },
  {
    q: "Phan Châu Trinh khác Hồ Chí Minh ở điểm nào trong cách tiếp cận vấn đề độc lập dân tộc?",
    opts: [
      "Phan Châu Trinh thiên về bạo động, dựa vào Nhật Bản, còn Hồ Chí Minh thiên về cải cách văn hóa dựa vào trí thức",
      "Phan Châu Trinh chủ trương cải cách, dựa vào Pháp, còn Hồ Chí Minh chủ trương cách mạng giải phóng dân tộc bằng sức mạnh toàn dân",
      "Phan Châu Trinh chủ trương khai dân trí, chấn dân khí, hậu dân sinh, còn Hồ Chí Minh chỉ dừng lại ở mục tiêu độc lập chính trị"
    ],
    a: 1,
    explanation: "Phan Châu Trinh đi theo hướng cải cách, dựa vào Pháp, trong khi Hồ Chí Minh chủ trương cách mạng giải phóng bằng lực lượng toàn dân."
  },
  {
    q: "Trong tư tưởng Hồ Chí Minh, độc lập dân tộc phải gắn liền với điều gì?",
    opts: [
      "Độc lập phải gắn với tự do và hạnh phúc của nhân dân, coi nhân dân là chủ thể thụ hưởng thành quả cách mạng",
      "Độc lập gắn với việc dựa vào một cường quốc để được bảo hộ, từ đó mới có thể xây dựng đời sống nhân dân",
      "Độc lập gắn với việc canh tân đất nước theo mô hình phương Tây, trước hết về kinh tế và giáo dục"
    ],
    a: 0,
    explanation: "Hồ Chí Minh khẳng định độc lập phải gắn liền với tự do, hạnh phúc của nhân dân, khác với quan niệm lệ thuộc ngoại bang hoặc chỉ thiên về cải cách."
  },
  {
    q: "Câu nói 'Không có gì quý hơn độc lập, tự do' thể hiện tư tưởng gì của Hồ Chí Minh?",
    opts: [
      "Khẳng định độc lập dân tộc chỉ cần thiết khi có sự bảo trợ từ quốc tế, nhờ đó mới duy trì tự do",
      "Khẳng định cần ưu tiên cải cách xã hội và nâng cao dân trí, rồi sau đó mới nghĩ đến vấn đề độc lập dân tộc",
      "Khẳng định giá trị tối cao của độc lập dân tộc gắn với tự do, sẵn sàng hy sinh để bảo vệ Tổ quốc",

    ],
    a: 2,
    explanation: "Câu nói khẳng định độc lập gắn với tự do là giá trị thiêng liêng nhất, không thể thay thế bằng cải cách đơn thuần hay sự bảo hộ quốc tế."
  },
  {
    q: "Phong trào Đông Du của Phan Bội Châu thất bại chủ yếu vì lý do nào?",
    opts: [
      "Nhân dân Việt Nam lúc đó chưa có khát vọng độc lập nên không ủng hộ phong trào, dẫn đến thất bại",
      "Nhật Bản thỏa hiệp với Pháp và trục xuất lưu học sinh, phong trào thiếu cơ sở trong nước nên nhanh chóng tan rã",
      "Phan Châu Trinh và các trí thức cải cách đã công khai phản đối nên phong trào mất uy tín và suy yếu"
    ],
    a: 1,
    explanation: "Phong trào thất bại vì dựa vào Nhật, khi Nhật trục xuất lưu học sinh thì mất chỗ dựa, trong nước chưa có cơ sở vững chắc."
  },
  {
    q: "Hồ Chí Minh đã kết hợp sức mạnh dân tộc với yếu tố nào để giành độc lập?",
    opts: [
      "Kết hợp sức mạnh dân tộc với sự bảo hộ của các nước đế quốc, nhằm tránh bị cô lập về chính trị",
      "Kết hợp sức mạnh dân tộc với cải cách kinh tế - xã hội theo mô hình phương Tây, lấy phát triển làm nền tảng",
      "Kết hợp sức mạnh dân tộc với phong trào cách mạng thế giới, tạo sự cộng hưởng giữa dân tộc và thời đại",

    ],
    a: 2,
    explanation: "Hồ Chí Minh gắn cách mạng Việt Nam với phong trào cách mạng thế giới, chứ không phụ thuộc vào bảo hộ hay chỉ cải cách nội bộ."
  },
  {
    q: "Giá trị thời đại của tư tưởng Hồ Chí Minh về độc lập dân tộc là gì?",
    opts: [
      "Truyền cảm hứng cho phong trào giải phóng dân tộc ở châu Á, Phi, Mỹ Latinh, khẳng định quyền thiêng liêng của mọi dân tộc",
      "Chỉ có ý nghĩa cho cách mạng Việt Nam, không phù hợp với bối cảnh quốc tế vì mang tính địa phương",
      "Chủ yếu phục vụ cho quan hệ ngoại giao của Việt Nam, ít ảnh hưởng đến các phong trào giải phóng ở nơi khác"
    ],
    a: 0,
    explanation: "Tư tưởng Hồ Chí Minh có giá trị toàn cầu, cổ vũ phong trào giải phóng dân tộc ở nhiều châu lục."
  },
  {
    q: "Khác với các tiền nhân, Hồ Chí Minh gắn độc lập dân tộc với mục tiêu nào?",
    opts: [
      "Gắn độc lập dân tộc với việc phục hồi chế độ quân chủ, xem đó là nền tảng giữ gìn bản sắc dân tộc",
      "Gắn độc lập dân tộc với chủ nghĩa xã hội, coi đây là con đường bảo đảm hạnh phúc, công bằng, dân chủ",
      "Gắn độc lập dân tộc với việc canh tân theo mô hình tư sản, xây dựng xã hội theo kiểu phương Tây"
    ],
    a: 1,
    explanation: "Hồ Chí Minh khẳng định độc lập dân tộc phải gắn với chủ nghĩa xã hội, không dừng lại ở khôi phục quân chủ hay tư sản hóa."
  },
  {
    q: "Trong Tuyên ngôn Độc lập 1945, Hồ Chí Minh đã trích dẫn những văn kiện nào để khẳng định quyền độc lập của dân tộc Việt Nam?",
    opts: [
      "Trích Tuyên ngôn Độc lập Mỹ 1776 và Tuyên ngôn Nhân quyền và Dân quyền Pháp 1791 để khẳng định quyền tự do, bình đẳng của mọi dân tộc",
      "Trích Hiến pháp Liên Xô 1918 và Cương lĩnh Quốc tế Cộng sản để nhấn mạnh tính tiên phong của giai cấp vô sản",
      "Trích Tuyên ngôn của Anh về quyền công dân và Tuyên ngôn Nhân quyền của Liên Hợp Quốc để khẳng định giá trị phổ quát"
    ],
    a: 0,
    explanation: "Hồ Chí Minh trích dẫn Mỹ và Pháp để khẳng định quyền độc lập của Việt Nam là phù hợp với các giá trị phổ quát mà chính họ công nhận."
  },
  {
    q: "Điểm chung giữa các tiền nhân và Hồ Chí Minh trong tư tưởng độc lập dân tộc là gì?",
    opts: [
      "Đều dựa vào sự giúp đỡ trực tiếp của ngoại bang để giành độc lập và phát triển đất nước",
      "Đều coi cải cách xã hội là điều kiện tiên quyết, sau đó mới đặt vấn đề độc lập dân tộc",
      "Đều đặt khát vọng độc lập dân tộc lên hàng đầu, dù con đường thực hiện có sự khác nhau",
    ],
    a: 2,
    explanation: "Điểm chung là khát vọng độc lập dân tộc, khác nhau ở chỗ con đường: Hồ Chí Minh tự lực, tiền nhân phụ thuộc ngoại bang hoặc cải cách."
  }

];


export default function Quiz() {
  const [idx, setIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const q = questions[idx];
  const progress = Math.round((idx / questions.length) * 100);

  const pick = (optIndex: number) => {
    setSelected(optIndex);

    if (optIndex === q.a) {
      setAnswers((prev) => {
        const copy = [...prev];
        copy[idx] = optIndex;
        return copy;
      });
      setScore((s) => (answers[idx] === null ? s + 1 : s));
      setShowExplanation(true);
    }
  };

  const next = () => {
    setSelected(null);
    setShowExplanation(false);
    if (idx + 1 >= questions.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  };

  const prev = () => {
    if (idx === 0) return;
    setIdx((i) => i - 1);
    setSelected(answers[idx - 1] ?? null);
    setShowExplanation(answers[idx - 1] !== null);
  };

  const retry = () => {
    setIdx(0);
    setScore(0);
    setSelected(null);
    setDone(false);
    setAnswers(Array(questions.length).fill(null));
    setShowExplanation(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", py: 8, px: { xs: 2, md: 8 }, color: "#fff" }}>
      <Typography variant="h4" sx={{ color: "#eeb72b", mb: 5 }}>
        Mini Quiz — Tư tưởng & lịch sử
      </Typography>

      {!done ? (
        <Card sx={{ maxWidth: 840, mx: "auto", bgcolor: "rgba(255,255,255,0.03)" }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography variant="subtitle2" sx={{ color: "rgba(255, 217, 0, 0.9)" }}>
                  Câu {idx + 1} / {questions.length}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {q.q}
                </Typography>
              </Box>

              <Box sx={{ width: 220 }}>
                <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 2 }} />
                <Typography variant="caption" sx={{ color: "rgba(255, 217, 0, 0.9)", mt: 0.5 }}>
                  Tiến trình: {idx}/{questions.length}
                </Typography>
              </Box>
            </Stack>

            {/* danh sách đáp án */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
              {q.opts.map((opt, oi) => {
                const isSelected = selected === oi;
                const isCorrect = q.a === oi;

                const bg =
                  isSelected && !isCorrect
                    ? "rgba(244, 67, 54, 0.08)"
                    : isSelected && isCorrect
                    ? "rgba(76, 175, 80, 0.12)"
                    : "transparent";

                return (
                  <Button
                    key={opt}
                    onClick={() => pick(oi)}
                    sx={{
                      textTransform: "none",
                      justifyContent: "flex-start",
                      bgcolor: bg,
                      borderRadius: 2,
                      border: "1px solid rgba(238,183,43,0.12)",
                      color: "#fff",
                      p: 2,
                      "&:hover": { bgcolor: "rgba(238,183,43,0.06)" },
                    }}
                  >
                    <Box sx={{ mr: 2, minWidth: 28 }}>
                      {isSelected ? (
                        isCorrect ? <CheckCircleIcon sx={{ color: "#9be15d" }} /> : <CloseIcon sx={{ color: "#ff6b6b" }} />
                      ) : (
                        <Box sx={{ width: 24 }} />
                      )}
                    </Box>
                    <Typography variant="body1">{opt}</Typography>
                  </Button>
                );
              })}
            </Box>

            {/* giải thích và điều khiển */}
            <Box sx={{ display: "flex", gap: 2, mt: 3, alignItems: "center" }}>
              {showExplanation ? (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: "#9be15d", mb: 1 }}>
                    <CheckCircleIcon sx={{ color: "#9be15d", mr: 1 }} /> Chính xác!
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                    <InfoIcon sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
                    {q.explanation}
                  </Typography>
                </Box>
              ) : selected !== null ? (
                <Typography variant="subtitle2" sx={{ color: "#ff6b6b" }}>
                  Sai rồi, hãy thử lại!
                </Typography>
              ) : (
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Chọn một đáp án để trả lời.
                </Typography>
              )}

              <Box>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    onClick={prev}
                    disabled={idx === 0}
                    sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    Trước
                  </Button>

                  <Button
                    variant="contained"
                    onClick={next}
                    disabled={!showExplanation}
                    sx={{
                      bgcolor: "#eeb72b",
                      color: "#8b1f20",
                      "&:disabled": { bgcolor: "rgba(238,183,43,0.25)" },
                    }}
                  >
                    {idx + 1 === questions.length ? "Hoàn tất" : "Câu tiếp"}
                  </Button>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ) : (
        // Phần kết quả
        <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Bạn đã hoàn thành quiz!
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Điểm của bạn: {score} / {questions.length}
          </Typography>
          <Button
            variant="contained"
            startIcon={<ReplayIcon />}
            onClick={retry}
            sx={{ bgcolor: "#eeb72b", color: "#8b1f20" }}
          >
            Thử lại
          </Button>
        </Box>
      )}
    </Box>
  );
}
