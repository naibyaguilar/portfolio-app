/* eslint-disable react/jsx-key */
import React from "react";
import Head from "next/head";
import styles from "@/styles/projects.module.css";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import { projects } from "@/common/data/projects";
import { languages } from "@/common/data/languages";
import { useAppSelector } from "@/store/hooks/useAppSelector";

export default function Project() {
  const { query } = useRouter();
  const { index } = useAppSelector((state) => state.app);
  const repository = query.key as string;
  const videos_stack = projects[languages[index].language].repositories[
    repository
  ]?.portfolio?.videos as string[];
  const video_items = videos_stack?.map((key) => (
    <ReactPlayer url={key} autoplay loop playing muted playbackRate={2} />
  ));
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
      <section className={styles["portfolio"]}>
        <div
          className={styles["projects-heading"]}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <hr /> <span className={styles["projects-num"]}>{"// 03. "} </span>
          {projects[languages[index].language].heading} <hr />
        </div>
        <span className={styles["projects-heading"]}>{query.key}</span>
        <div>{video_items}</div>
      </section>
    </>
  );
}
