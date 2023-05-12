import { Navbar } from "@/components/Navbar";
import { SidebarNav } from "@/components/SidebarNav";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/config/theme";
import { Footer } from "@/components/Footer";
import BackgroundGeometry from "@/components/BackgroundGeometry";
import { useEffect, useState } from "react";
import isElementInViewport from "@/common/utils/isElementInViewport";
import styles from "@/styles/hero.module.css";
import { languages } from "@/common/data/languages";

interface Props {
  children: React.ReactNode;
}

function Wrapper({ children }: Props): React.ReactElement {
  const [section, setSection] = useState(true);
  const [index, setIndex] = useState(0);

  const handleScroll = () => {
    const hero = document.getElementById(styles["hero"]);
    const isHeroVisible = isElementInViewport(hero);
    setSection(isHeroVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="content">
          <div
            className="background-geometry"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <BackgroundGeometry section={section} />
          </div>
          {children}
        </div>
        <SidebarNav />
      </ThemeProvider>
      <Footer />
    </div>
  );
}
export default Wrapper;
