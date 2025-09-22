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
import bgImg from "../assets/sosanhbg.png";
type QA = {
  q: string;
  opts: string[];
  a: number; // index of correct option
  explanation: string;
};

const questions: QA[] = [
  {
    q: "Nguyên tắc cốt lõi bảo đảm dân chủ xã hội chủ nghĩa ở Việt Nam là gì?",
    opts: [
      "Quyền công dân chỉ phát sinh khi tham gia hoạt động chính trị – xã hội cụ thể",
      "Quyền lực nhân dân luôn đứng trên pháp luật, không chịu sự ràng buộc từ hệ thống",
      "Pháp luật và kỷ cương có thể được điều chỉnh để phù hợp với từng nhóm lợi ích",
      "Quyền của nhân dân luôn đi đôi với nghĩa vụ, pháp luật, kỷ cương và trách nhiệm"
    ],
    a: 3,
    explanation: "Dân chủ XHCN gắn với pháp luật, kỷ cương và trách nhiệm công dân; quyền luôn đi liền với nghĩa vụ."
  },
  {
    q: "Điểm khác biệt căn bản của Nhà nước pháp quyền XHCN Việt Nam so với nhà nước pháp quyền tư sản là gì?",
    opts: [
      "Quyền lực nhà nước được phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp",
      "Tổ chức và hoạt động đều dựa trên nguyên tắc tập trung dân chủ trong toàn bộ hệ thống",
      "Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và hướng tới mục tiêu xã hội chủ nghĩa",
      "Nhà nước thượng tôn Hiến pháp, pháp luật và bảo đảm sự bình đẳng của mọi công dân"
    ],
    a: 2,
    explanation: "Khác biệt căn bản là Nhà nước XHCN đặt dưới sự lãnh đạo của Đảng và hướng tới mục tiêu XHCN."
  },
  {
    q: "Cơ chế 'Đảng lãnh đạo – Nhà nước quản lý – Nhân dân làm chủ' phản ánh điều gì?",
    opts: [
      "Sự vận hành thống nhất bảo đảm dân chủ thực chất chứ không dừng lại ở hình thức",
      "Sự phân tầng quyền lực trong đó Đảng giữ toàn bộ quyền lực, Nhà nước chỉ thực thi",
      "Sự phân công cứng nhắc giữa ba chủ thể quyền lực trong toàn bộ hệ thống chính trị",
      "Sự tách biệt hoàn toàn quyền lực nhằm ngăn ngừa lạm quyền và tập trung quá mức"
    ],
    a: 0,
    explanation: "Cơ chế này phản ánh sự vận hành thống nhất, bảo đảm dân chủ thực sự; không phải phân tầng hay tách biệt."
  },
  {
    q: "Theo lý thuyết, dân chủ trong lĩnh vực kinh tế của nhân dân được thể hiện ở điểm nào?",
    opts: [
      "Quyền tham gia quản lý xã hội, ứng cử vào cơ quan quyền lực và trưng cầu ý dân",
      "Quyền sáng tạo, hưởng thụ các giá trị văn hóa, giáo dục, khoa học và y tế hiện đại",
      "Quyền làm chủ về tài sản công, quyền lựa chọn việc làm, kinh doanh và phân phối",
      "Quyền tham gia giám sát, phản biện xã hội đối với hoạt động của bộ máy nhà nước"
    ],
    a: 2,
    explanation: "Dân chủ kinh tế thể hiện ở quyền làm chủ tài sản công, lựa chọn việc làm, kinh doanh và hưởng thụ thành quả."
  },
  {
    q: "Một trong những đặc trưng cơ bản của Nhà nước pháp quyền XHCN Việt Nam là gì?",
    opts: [
      "Quyền lực nhà nước thống nhất nhưng có sự phân công, phối hợp và kiểm soát chặt chẽ",
      "Quyền lực được chia tách hoàn toàn, không có cơ chế phối hợp giữa các cơ quan nhà nước",
      "Quyền lập pháp giữ vị trí tối cao, hành pháp và tư pháp chỉ thi hành theo mệnh lệnh",
      "Quyền lực được phân tán cho nhiều đảng phái, phản ánh mô hình đa nguyên chính trị"
    ],
    a: 0,
    explanation: "Đặc trưng nổi bật là quyền lực thống nhất nhưng có phân công, phối hợp, kiểm soát giữa lập pháp, hành pháp, tư pháp."
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
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, md: 8 },
        color: "#fff",
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.6)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",

        backdropFilter: { md: "blur(0.5px)" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 38,
          left: 56,
          px: 2.2,
          py: 1.2,
          background: "#6464641a",
          borderLeft: `10px solid #bd0009ff`,
          borderRadius: 1,
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.4)",
          zIndex: 5,
          maxWidth: 950,
          mb:10
        }}
      >
        <Typography sx={{ fontWeight: 900, fontSize: 30, lineHeight: 1.1, color: "#eeb72b" }}>
          Mini Quiz
        </Typography>
       
      </Box>

      {!done ? (
        <Card sx={{ maxWidth: 1050, mx: "auto", bgcolor: "rgba(255,255,255,0.03)",mt:20,ml:50 }}>
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

              <Box sx={{ width: 150 }}>
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
