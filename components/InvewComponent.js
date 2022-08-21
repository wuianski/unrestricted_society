import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimationControls, useTime, useTransform } from "framer-motion";
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

  /**
   * Btn rotation effect
   */
  const textSvRef = useRef(null)
  const [isBtnHovered, setBtnHovered] = useState(false)

  const time = useTime()
  
  const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: true });
  const pause = useTransform(time, [0, 40000], [0, 0], { clamp: true });

  const btnBgVariants = {
    rest: {
      backgroundColor: "red",
      borderRadius: "80%",
      boxShadow: "0 0 90px 70px red",
      transition: {
        duration: .2,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      borderRadius: "50%",
      boxShadow: "0 0 20px 20px red",
      transition: {
        duration: .2,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
/**
 * Menu hover effect
 */
  const BGVariant = {
    expanded: {
      width: "350px",
      backgroundColor: "#fff"
    },
    collapsed:{
      width: "10px",
      transition: { delay: .2,  duration: 1}
    }
   };
  const ZhTextVariant = {
    expanded: () => ({
      opacity: 1,
      y: "3rem",
      transition: { delay:.1 }
    }),
    collapsed: () => ({
      opacity: 0,
      y: "200px",
      ease: "easeOut", duration: 0.2, type: "tween"
    })
   };
  const EnTextVariant = {
    expanded: () => ({
      opacity: 0,
      y: "6rem",
      transition: { delay: 0 }
    }),
    collapsed: () => ({
      opacity: 1,
      y: 0,
      ease: "easeOut", duration: 0, type: "tween"
    })
   };

  return (
    <>
      <div className={styles.menu}>
        <ul>
          <div className={styles.menuBtn}>
            <motion.a href="#11111" >
              <motion.div className={styles.container} initial="collapsed" whileHover="expanded" animation="expanded"> 
                <motion.div className={styles.zhText} variants={ZhTextVariant} > 
                  展覽資訊 
                </motion.div>
                <motion.div className={styles.textBG} variants={BGVariant} /> 
              <motion.div className={styles.enText} variants={EnTextVariant} > Exhibition </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div className={styles.menuBtn}>
            <div>
              <a href="#33333">
              <motion.div className={styles.container} initial="collapsed" whileHover="expanded" animation="expanded"> 
                <motion.div className={styles.zhText} variants={ZhTextVariant} > 
                  刊稿 
                </motion.div>
                <motion.div className={styles.textBG} variants={BGVariant} /> 
              <motion.div className={styles.enText} variants={EnTextVariant} > Essay </motion.div>
              </motion.div>
              </a>
            </div>
          </div>

          <div className={styles.menuBtn}>
            <div>
              <a href="#55555">
                <motion.div className={styles.container} initial="collapsed" whileHover="expanded" animation="expanded"> 
                  <motion.div className={styles.zhText} variants={ZhTextVariant} > 
                    參展藝術家
                  </motion.div>
                  <motion.div className={styles.textBG} variants={BGVariant} /> 
                <motion.div className={styles.enText} variants={EnTextVariant} > Artists </motion.div>
                </motion.div>
              </a>
            </div>
          </div>
        </ul>
      </div>

      <div className={styles.menuBtn_clab}>
        <motion.div 
          className={styles.btnWrap} 
          initial="rest" whileHover="hover" animate="rest"
        >
          <motion.svg viewBox="0 0 280 280" 
            className={styles.btnSvg}
            width="280px"  height="280px" 
            ref={textSvRef}
            style={ isBtnHovered ? {pause} : {rotate} }
            whileHover={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            >  
            <path id="curve"  fill="transparent" 
                d=" M 20, 140 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0 "   />
            <text width="500" >
              <textPath 
                className={styles.btnText} 
                xlinkHref="#curve" 
                alignmentBaseline="top" 
                spacing="auto"
                >
                超限社會 THE UNRESTRICTED SOCIETY 2022/09/25 - 11/27
              </textPath>
            </text>
          </motion.svg>
          <motion.div 
            className={styles.btnCircle}
            variants={btnBgVariants}
          >
          more info  
          </motion.div>
        </motion.div>
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
