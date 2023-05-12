import isElementInViewport from "@/common/utils/isElementInViewport";
import { About } from "@/layout/About";
import { Experience } from "@/layout/Experience";
import { Hero } from "@/layout/Hero";
import { Projects } from "@/layout/Projects";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [section, setSection] = useState(true);

  const handleScroll = () => {
    const hero = document.getElementById("hero");
    const isHeroVisible = isElementInViewport(hero);
    setSection(isHeroVisible);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <section>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </section>
    </>
  );
}
