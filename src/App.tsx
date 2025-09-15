// App.tsx
import { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import PhanBoiChau from "./sections/PhanBoiChau";
import PhanChauTrinh from "./sections/PhanChauTrinh";
import HoChiMinh from "./sections/HoChiMinh";
import Comparison from "./sections/Comparison";
import Values from "./sections/Values";
import Quiz from "./sections/Quiz";
import HoChiMinhInfor from "./sections/HoChiMinhinfor";

function App() {
  // refs
  const homeRef = useRef<HTMLDivElement | null>(null);
  const pbcRef = useRef<HTMLDivElement | null>(null);
  const pctRef = useRef<HTMLDivElement | null>(null);
  const hcmRef = useRef<HTMLDivElement | null>(null);
  const hcmInforRef = useRef<HTMLDivElement | null>(null); // ✅ thêm ref
  const comparisonRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const quizRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState<string>("home");

  const sections = [
    { id: "home", ref: homeRef },
    { id: "pbc", ref: pbcRef },
    { id: "pct", ref: pctRef },
    { id: "hcm", ref: hcmRef },
    { id: "hcmInfor", ref: hcmInforRef }, 
    { id: "comparison", ref: comparisonRef },
    { id: "values", ref: valuesRef },
    { id: "quiz", ref: quizRef },
  ];

  const handleScrollTo = (ref: { current: HTMLDivElement | null }) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).dataset.section;
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar
        active={active}
        onNavigate={(section) => {
          const target = sections.find((s) => s.id === section);
          if (target) handleScrollTo(target.ref);
        }}
      />

      <Box ref={homeRef} data-section="home"><Hero /></Box>
      <Box ref={pbcRef} data-section="pbc"><PhanBoiChau /></Box>
      <Box ref={pctRef} data-section="pct"><PhanChauTrinh /></Box>
      <Box ref={hcmInforRef} data-section="hcmInfor"><HoChiMinhInfor /></Box> 
      <Box ref={hcmRef} data-section="hcm"><HoChiMinh /></Box>
      <Box ref={comparisonRef} data-section="comparison"><Comparison /></Box>
      <Box ref={valuesRef} data-section="values"><Values /></Box>
      <Box ref={quizRef} data-section="quiz"><Quiz /></Box>
    </>
  );
}

export default App;
