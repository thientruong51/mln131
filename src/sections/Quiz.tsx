// src/sections/Quiz.tsx
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Stack,
  IconButton,
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
    q: "Mục tiêu chính của phong trào Đông Du do Phan Bội Châu khởi xướng là gì?",
    opts: [
      "Cho thanh niên sang Nhật học nghề, tìm trợ lực hiện đại để giúp độc lập",
      "Kêu gọi cải cách hòa bình thông qua luật pháp Pháp",
      "Thành lập ngay một chính quyền cộng sản",
    ],
    a: 0,
    explanation:
      "Đông Du (đầu thế kỷ 20) chủ yếu đưa thanh niên sang Nhật học, tiếp thu kỹ thuật, tư tưởng hiện đại và tìm kiếm sự ủng hộ đối ngoại — khác với đường cải cách ôn hòa hay thành lập đảng cộng sản sau này.",
  },
  {
    q: "Tinh thần 'khai dân trí' của Phan Châu Trinh nhắm tới điều gì chủ yếu?",
    opts: [
      "Kêu gọi bạo động để lật đổ chính quyền thực dân",
      "Nâng cao dân trí, phát triển giáo dục và pháp quyền để đổi mới xã hội",
      "Tập trung vào xuất khẩu lao động và tiền tệ",
    ],
    a: 1,
    explanation:
      "'Khai dân trí' nghĩa là nâng cao hiểu biết và năng lực của nhân dân bằng giáo dục, truyền thông, cải cách xã hội — tin vào con đường cải cách ôn hòa chứ không bạo động.",
  },
  {
    q: "Tại Hội nghị Versailles (1919) Hồ Chí Minh đã làm gì liên quan đến quyền dân tộc?",
    opts: [
      "Gửi Bản Yêu sách của nhân dân An Nam yêu cầu quyền tự quyết và công bằng",
      "Tham gia đại diện chính thức của Pháp",
      "Ký hiệp ước quân sự với các nước đồng minh",
    ],
    a: 0,
    explanation:
      "Năm 1919, Người gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles, đòi các quyền dân tộc cơ bản — đây là hành động pháp lý, chính trị nhằm đòi quyền tự quyết.",
  },
  {
    q: "Câu 'Không có gì quý hơn độc lập, tự do' thể hiện ý nghĩa gì trong tư tưởng HCM?",
    opts: [
      "Đặt độc lập dân tộc và quyền con người trên các lợi ích khác; là giá trị tối thượng",
      "Ưu tiên phát triển kinh tế hơn quyền tự do",
      "Tức kêu gọi phụ thuộc vào ngoại bang để đổi lấy tự do",
    ],
    a: 0,
    explanation:
      "Câu nói nhấn mạnh độc lập và tự do là giá trị tối thượng của dân tộc — cần phải đạt được và giữ gìn, không thể đánh đổi; không cổ xúy lệ thuộc hay bỏ qua tự do cá nhân.",
  },
  {
    q: "Khác biệt căn bản giữa đường lối của Phan Bội Châu và Hồ Chí Minh là gì?",
    opts: [
      "Phan Bội Châu chủ trương dựa vào lực lượng ngoại bang; Hồ Chí Minh xây dựng phong trào quần chúng kết hợp lý luận cách mạng để tự lực giành độc lập",
      "Cả hai đều chỉ dùng con đường pháp lý hòa bình",
      "Không có khác biệt — họ cùng chiến lược và phương pháp",
    ],
    a: 0,
    explanation:
      "Phan Bội Châu từng tìm cách dựa vào nước ngoài (ví dụ Nhật) và chú trọng hành động vũ trang; Hồ Chí Minh tập trung xây dựng lực lượng trong nước, liên kết quần chúng với một đường lối cách mạng có hệ tư tưởng rõ ràng để giành độc lập lâu dài.",
  },
];

export default function Quiz() {
  const [idx, setIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const q = questions[idx];
  const progress = Math.round((idx / questions.length) * 100);

  const pick = (optIndex: number) => {
    if (selected !== null) return; // already answered this question
    setSelected(optIndex);

    setAnswers((prev) => {
      const copy = [...prev];
      copy[idx] = optIndex;
      return copy;
    });

    if (optIndex === q.a) {
      setScore((s) => s + 1);
    }
  };

  const next = () => {
    setSelected(null);
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
  };

  const retry = () => {
    setIdx(0);
    setScore(0);
    setSelected(null);
    setDone(false);
    setAnswers(Array(questions.length).fill(null));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, md: 8 },
        bgcolor: "transparent",
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ color: "#eeb72b", mb: 25 }}>
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

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
              {q.opts.map((opt, oi) => {
                const isSelected = selected === oi;
                const answered = selected !== null;
                const isCorrect = q.a === oi;
                // button color logic
                const bg =
                  answered && isCorrect
                    ? "rgba(76, 175, 80, 0.12)"
                    : answered && isSelected && !isCorrect
                    ? "rgba(244, 67, 54, 0.08)"
                    : "transparent";
                const border =
                  answered && isCorrect
                    ? `1px solid rgba(76,175,80,0.35)`
                    : answered && isSelected && !isCorrect
                    ? `1px solid rgba(244, 241, 54, 0.25)`
                    : `1px solid rgba(238,183,43,0.12)`;

                return (
                  <Button
                    key={opt}
                    onClick={() => pick(oi)}
                    disabled={selected !== null}
                    sx={{
                      textTransform: "none",
                      justifyContent: "flex-start",
                      bgcolor: bg,
                      borderRadius: 2,
                      border,
                      color: "#fff",
                      p: 2,
                      "&:hover": { bgcolor: selected === null ? "rgba(238,183,43,0.06)" : bg },
                    }}
                  >
                    <Box sx={{ mr: 2, minWidth: 28 }}>
                      {answered ? (
                        isCorrect ? (
                          <CheckCircleIcon sx={{ color: "#9be15d" }} />
                        ) : isSelected ? (
                          <CloseIcon sx={{ color: "#ff6b6b" }} />
                        ) : (
                          <Box sx={{ width: 24 }} />
                        )
                      ) : (
                        <Box sx={{ width: 24 }} />
                      )}
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography variant="body1">{opt}</Typography>
                    </Box>
                  </Button>
                );
              })}
            </Box>

            {/* explanation + controls */}
            <Box sx={{ display: "flex", gap: 2, mt: 3, alignItems: "center" }}>
              {selected !== null ? (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.9)", mb: 1 }}>
                    {selected === q.a ? (
                      <>
                        <CheckCircleIcon sx={{ color: "#9be15d", mr: 1 }} /> Chính xác!
                      </>
                    ) : (
                      <>
                        <CloseIcon sx={{ color: "#ff6b6b", mr: 1 }} /> Đáp án đúng:
                        <strong> {q.opts[q.a]}</strong>
                      </>
                    )}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                    <InfoIcon sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
                    {q.explanation}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Chọn một đáp án để xem lời giải thích.
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
                    disabled={selected === null}
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
        // results
        <Box sx={{ maxWidth: 820, mx: "auto" }}>
          <Card sx={{ bgcolor: "rgba(255,255,255,0.03)" }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h5" sx={{ color: "#eeb72b" }}>
                    Kết quả: {score}/{questions.length}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
                    {score === questions.length
                      ? "Tuyệt vời — bạn trả lời đúng tất cả!"
                      : score >= Math.ceil(questions.length * 0.6)
                      ? "Tốt — bạn nắm khá rõ nội dung."
                      : "Thử lại để ghi nhớ hơn nhé."}
                  </Typography>
                </Box>

                <Box>
                  <IconButton
                    onClick={retry}
                    sx={{ color: "#fff", border: "1px solid rgba(255,255,255,0.06)" }}
                    title="Thử lại"
                  >
                    <ReplayIcon />
                  </IconButton>
                </Box>
              </Stack>

              {/* review each question */}
              <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                {questions.map((qq, i) => {
                  const user = answers[i];
                  const correct = qq.a;
                  const ok = user === correct;
                  return (
                    <Card key={i} sx={{ bgcolor: "rgba(0,0,0,0.45)", p: 1 }}>
                      <CardContent>
                        <Typography variant="subtitle1" sx={{ color: "#eeb72b", mb: 1 }}>
                          Câu {i + 1}: {qq.q}
                        </Typography>
                        <Typography sx={{ color: ok ? "#9be15d" : "#ff6b6b", fontWeight: 700 }}>
                          {ok ? "Bạn trả lời đúng" : "Bạn trả lời sai"}
                        </Typography>
                        <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.9)" }}>
                          Đáp án bạn chọn:{" "}
                          <strong>{user !== null ? qq.opts[user] : <em>Không chọn</em>}</strong>
                        </Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 0.5 }}>
                          Đáp án đúng: <strong>{qq.opts[correct]}</strong>
                        </Typography>
                        <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.85)" }}>
                          <InfoIcon sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
                          {qq.explanation}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>

              <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // go back to beginning and allow review
                    setDone(false);
                    setIdx(0);
                    setSelected(null);
                  }}
                  sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.08)" }}
                >
                  Xem lại
                </Button>

                <Button
                  variant="contained"
                  onClick={retry}
                  startIcon={<ReplayIcon />}
                  sx={{ bgcolor: "#eeb72b", color: "#8b1f20" }}
                >
                  Thử lại
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
