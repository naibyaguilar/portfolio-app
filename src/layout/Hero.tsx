import React, { useEffect, useState } from "react";
import styles from "@/styles/hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdMail } from "react-icons/io";
import { Box, Collapse, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Typed from "react-typed";

export function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id={styles["hero"]}>
      <div className={styles["hero-container"]}>
        <div className={styles["type"]}>
          <span
            className={styles["textOne"]}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="50"
          >
            Hi, my name is
          </span>
          <br />
          <Typed
            strings={["Naiby Aguilar"]}
            loop={false}
            className={styles["textTwo"]}
          />
        </div>
        <h2
          className={styles["summary"]}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
        >
          I&apos;m a <span className={styles["light"]}>software engineer </span>
          based in
          <span className={styles["light"]}> Yucatán, México.</span> Although my
          career path started as an accident, I discovered in technology the
          opportunity to do something I&apos;m{" "}
          <span className={styles["light"]}>passionate </span>about.
        </h2>
        <br />
        <h2
          className={styles["summary"]}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
        >
          I love <span className={styles["light"]}>Frontend development </span>{" "}
          because it gives me the opportunity to combine my love for design with
          coding.
        </h2>
        <Box
          sx={{ width: "100%" }}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
        >
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(!open);
                  }}
                  sx={{ backgroundColor: "red" }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{
                mb: 2,
                backgroundColor: "#ccd6f6",
                color: "#0a192f",
                fontFamily: "NTR",
                fontSize: "1.5rem",
              }}
            >
              email me: naibycecilia@gmail.com
            </Alert>
          </Collapse>
          <button
            className={styles["btnmore"]}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <IoMdMail className={styles["mail"]} />
            Say Hi!
          </button>
        </Box>
      </div>
    </div>
  );
}
