// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#ae3034" },    // đỏ chủ đạo
    secondary: { main: "#eeb72b" },  // vàng điểm nhấn
    background: { default: "#0b0b0b", paper: "#171616" },
    text: { primary: "#fff", secondary: "#e0e0e0" },
  },
  typography: {
    fontFamily: "'Montserrat', 'Roboto', sans-serif",
    h2: { fontWeight: 800 },
    h4: { fontWeight: 700 },
  },
});

export default theme;
