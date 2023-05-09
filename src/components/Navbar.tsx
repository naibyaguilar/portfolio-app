/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import hero from "../styles/hero.module.css";
import about from "../styles/about.module.css";
import experience from "../styles/experience.module.css";
import projects from "../styles/projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import ReactGA from "react-ga";

export function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <div
      className={
        color
          ? styles["nav-wrapper"] + " " + styles.active
          : styles["nav-wrapper"]
      }
    >
      <div className={styles["hamburger"]} onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#7D52D9" }} />
        ) : (
          <FaBars size={30} style={{ color: "#7D52D9" }} />
        )}
      </div>
      <nav>
        <div
          className={
            color
              ? styles["nav-wrapper"] + " " + styles.active
              : styles["nav-wrapper"]
          }
        >
          <div
            className={styles["logo-wrapper"]}
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <Link
              to={hero["hero"]}
              spy
              smooth
              duration={500}
              onClick={() => {
                ReactGA.pageview("Home");
                closeMenu();
              }}
            >
              <img
                src={logo.src as string}
                alt="logo"
                className={styles["logo"]}
              />
            </Link>
          </div>
          <ul
            className={
              click
                ? styles["navitems"] + " " + styles.active
                : styles["navitems"]
            }
          >
            <li
              className={styles["nav-item"]}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <Link
                to={about["about"]}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  ReactGA.pageview("About");
                  closeMenu();
                }}
              >
                <span className={styles["num"]}>{"// 01. "}</span>
                <span>{"<About/>"}</span>
              </Link>
            </li>
            <li
              className={styles["nav-item"]}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <Link
                to={experience["experience"]}
                spy
                smooth
                duration={500}
                onClick={() => {
                  ReactGA.pageview("Experience");
                  closeMenu();
                }}
              >
                <span className={styles["num"]}>{"// 02."} </span>
                <span>{"<Experience/>"}</span>
              </Link>
            </li>
            <li
              className={styles["nav-item"]}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="150"
            >
              {" "}
              <Link
                to={projects["projects"]}
                spy
                smooth
                duration={500}
                onClick={() => {
                  ReactGA.pageview("Work");
                  closeMenu();
                }}
              >
                <span className={styles["num"]}>{"// 03."} </span>
                <span>{"<Work/>"}</span>
              </Link>
            </li>

            <li
              className={styles["nav-item"]}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <a
                href="/NAIBY AGUILAR SOFTWARE ENGINEER RESUME.pdf"
                target="_blank"
              >
                <button className={styles["btn"]}>{"<Resume/>"}</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
