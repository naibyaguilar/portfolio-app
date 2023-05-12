import React, { useEffect, useState } from "react";
import styles from "@/styles/hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdMail } from "react-icons/io";
import { Box, Collapse, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Typed from "react-typed";
import { hero } from "../common/data/hero";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { languages } from "@/common/data/languages";

export function Hero() {
  const [open, setOpen] = useState(false);
  const { index } = useAppSelector((state) => state.app);
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
            {hero[languages[index].language].light[0]}
          </span>
          <br />
          <Typed
            strings={[hero[languages[index].language].name]}
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
          {hero[languages[index].language].me}
          <span className={styles["light"]}>
            {" "}
            {hero[languages[index].language].light[1]}{" "}
          </span>
          {hero[languages[index].language].base}
          <span className={styles["light"]}>
            {" "}
            {hero[languages[index].language].light[2]}
          </span>{" "}
          {hero[languages[index].language].career}
          <span className={styles["light"]}>
            {" "}
            {hero[languages[index].language].light[3]}{" "}
          </span>
        </h2>
        <br />
        <h2
          className={styles["summary"]}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
        >
          {hero[languages[index].language].love}
          <span className={styles["light"]}>
            {hero[languages[index].language].light[4]}
          </span>
          {hero[languages[index].language].opportunity}
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
