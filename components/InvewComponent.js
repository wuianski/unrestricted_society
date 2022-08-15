import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import styles from "./InvewComponent.module.css";

import Image from "next/image";
//import profilePic from '../public/me.png'

import VideoInSVG from "./VideoInSVG";

import React from "react";
import ReactPlayer from "react-player";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  return (
    <section className={styles.section} ref={ref}>
      <span
        className={styles.span}
        style={{
          transform: isInView ? "translateX(25%)" : "translateX(0px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  // const isInView3 = useInView(ref3, { once: true });

  const controls_viewbox = useAnimationControls();
  const controls_pattern = useAnimationControls();
  const controls_title = useAnimationControls();
  const controls_content = useAnimationControls();

  useEffect(() => {
    // console.log("Element is in view 1: ", isInView1);
    // console.log("Element is in view 2: ", isInView2);
    if (isInView1 == true) {
      controls_viewbox.start({
        viewBox: "0 0 720 1025",
        transition: { type: "spring", duration: 1 },
      });
      controls_pattern.start({
        x: -100,
        y: -100,
        rotate: [5, 0],
        transition: { type: "spring", duration: 3 },
      });
      controls_title.start({
        width: "150%",
        x: 0,
        y: 120,
        transition: { type: "tween", duration: "1" },
      });
      controls_content.start({
        rotate: [40, -5],
        scale: [0.2, 1],
        transition: { type: "spring", duration: "1.8" },
      });
    } else if (isInView2 == true) {
      controls_viewbox.start({
        viewBox: "720 0 720 1025",
        transition: { type: "spring", duration: 1 },
      });
      controls_pattern.start({
        x: 100,
        y: -100,
        rotate: [5, 0],
        transition: { type: "spring", duration: 3 },
      });
      controls_title.start({
        width: "150%",
        x: 720,
        y: -300,
        transition: { type: "tween", duration: "1" },
      });
    } else if (isInView3 == true) {
      controls_viewbox.start({
        viewBox: "720 720 720 1025",
        transition: { type: "spring", duration: 1 },
      });
      controls_pattern.start({
        x: 100,
        // y: -180,
        rotate: [5, 0],
        transition: { type: "spring", duration: 3 },
      });
      controls_title.start({
        width: "150%",
        x: 420,
        y: 180,
        transition: { type: "tween", duration: "1" },
      });
    }
  }, [isInView1, isInView2, isInView3]);

  return (
    <>
      <div className={styles.menu}>
        <ul>
          <div className={styles.menuBtn}>
            <div>
              <a href="#11111">
                <Image
                  src="/imgs/Exhibition.png"
                  layout="intrinsic"
                  width={313}
                  height={53}
                />
              </a>
            </div>
          </div>
          <div className={styles.menuBtn}>
            <div>
              <a href="#33333">
                <Image
                  src="/imgs/essay.png"
                  layout="intrinsic"
                  width={164}
                  height={64}
                />
              </a>
            </div>
          </div>

          <div className={styles.menuBtn}>
            <div>
              <a href="#55555">
                <Image
                  src="/imgs/artist.png"
                  layout="intrinsic"
                  width={168}
                  height={51}
                />
              </a>
            </div>
          </div>
        </ul>
      </div>

      <div className={styles.menuBtn_clab}>
        <Image
          src="/imgs/Clab_btn.png"
          layout="intrinsic"
          width={260}
          height={260}
        />
      </div>

      <div className={styles.bgBlock}>
        <motion.svg viewBox="0 0 1440 1024" animate={controls_viewbox}>
          <image xlinkHref="/imgs/bg_s.jpg" />
          {/* <motion.image
            xlinkHref="/imgs/showTitle.png"
            animate={controls_title}
          />*/}
          <motion.image
            xlinkHref="/imgs/pattern_s.png"
            animate={controls_pattern}
            width="1440px"
          />
        </motion.svg>
      </div>

      <Section>
        <div ref={ref1} id="11111" className={styles.contentBlk}>
          <div className={styles.contentInner}>
            <motion.div className={styles.vid} animate={controls_content}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=o_th8s3MHs4"
                //light="/imgs/pattern.png"
                //controls={true}
                config={{
                  youtube: {
                    playerVars: {
                      mute: 1,
                      showinfo: 0,
                      modestbranding: 0,
                      controls: 1,
                      autohide: 1,
                      autoplay: 1,
                    },
                  },
                }}
              />
            </motion.div>
          </div>
        </div>
      </Section>

      <Section>
        <div></div>
      </Section>

      <Section>
        <div ref={ref2} id="33333" className={styles.contentBlk}>
          <div className={styles.contentInner}>
            <Image
              src="/imgs/essay_temp.jpg"
              layout="intrinsic"
              width={552}
              height={504}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div></div>
      </Section>

      <Section>
        <div ref={ref3} id="55555" className={styles.essay}>
          <div className={styles.contentInner2}>
            <Image
              src="/imgs/artist_temp.png"
              layout="intrinsic"
              width={1119}
              height={696}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
