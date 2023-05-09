import React, { useEffect } from "react";
import styles from "@/styles/footer.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

export function Footer() {
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
        <div>Thank you for coming here </div>
      </div>
    </div>
  );
}
