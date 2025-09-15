import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Độc lập dân tộc – Từ khát vọng của tiền nhân đến tư tưởng Hồ Chí Minh
      </Typography>
      <Typography variant="body1" gutterBottom>
        Trong suốt chiều dài lịch sử, khát vọng độc lập luôn cháy bỏng trong tim mỗi người Việt...
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" component={Link} to="/phan-boi-chau">
          Khám phá hành trình
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
