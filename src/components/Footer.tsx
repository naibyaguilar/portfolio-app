import React, { useEffect } from "react";
import styles from "@/styles/footer.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { footer } from "@/common/data/footer";
import { languages } from "@/common/data/languages";
import { useAppSelector } from "@/store/hooks/useAppSelector";

export function Footer() {
  const { index } = useAppSelector((state) => state.app);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id={styles["credits"]}>
      <div
        className={styles["ending-credits"]}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        <div>{footer[languages[index].language].text}</div>
      </div>
    </div>
  );
}
