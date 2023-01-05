import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  useTime,
  useTransform,
} from "framer-motion";

import Fade from "@mui/material/Fade";
import styles from "./InvewComponent.module.css";
import React from "react";
import ReactPlayer from "react-player";

import Image from "next/image";
import closeIcon from "../public/imgs/close_icon.jpg";
import UserWindow from "./UserWindow";

import Modal from "@mui/material/Modal";
import ExModal from "./ExModal";
import MaModal from "./MaModal";
import KgModal from "./KgModal";
import HsienYuModal from "./HsienYuModal";
import PcModal from "./PcModal";
import TsModal from "./TsModal";
import CyModal from "./CyModal";
import UcModal from "./UcModal";
import YungTaModal from "./YungTaModal";
import FamemeModal from "./FamemeModal";
import SlitscopeModal from "./SlitscopeModal";
import HbFpModal from "./HbFpModal";
import HerLabSpaceModal from "./HerLabSpaceModal";
import InfoModal from "./InfoModal";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import t1 from "../public/imgs/talk/區秀詒.png";
import t2 from "../public/imgs/talk/吳達坤.png";
import t3 from "../public/imgs/talk/宋皇志.png";
import t4 from "../public/imgs/talk/張永達.png";
import t5 from "../public/imgs/talk/法咪咪.png";
import t6 from "../public/imgs/talk/羅禾淋.png";
import t7 from "../public/imgs/talk/莊偉慈.png";
import t8 from "../public/imgs/talk/邱誌勇.png";
import t9 from "../public/imgs/talk/鄭先喻.png";
import t10 from "../public/imgs/talk/陳乂.png";
import t11 from "../public/imgs/talk/陳侑汝.png";
import t12 from "../public/imgs/talk/黃宗潔.png";
import t13 from "../public/imgs/talk/黃豆泥.png";

import t21 from "../public/imgs/talk/倫納德.png";
import t22 from "../public/imgs/talk/徐祥昊.png";
import t23 from "../public/imgs/talk/李收玲.png";
import t24 from "../public/imgs/talk/金泰潤.png";
import t25 from "../public/imgs/talk/金聖淵.png";
import t26 from "../public/imgs/talk/駱麗真.png";

import t27 from "../public/imgs/talk/金根瑩.png";
import t28 from "../public/imgs/talk/哀傷電路.png";

import tt12_1 from "../public/imgs/tour/12/01 Large.jpeg";
import tt12_2 from "../public/imgs/tour/12/02 Large.jpeg";
import tt12_3 from "../public/imgs/tour/12/03 Large.jpeg";
import tt12_4 from "../public/imgs/tour/12/04 Large.jpeg";
import tt12_5 from "../public/imgs/tour/12/05 Large.jpeg";
import tt12_6 from "../public/imgs/tour/12/06 Large.jpeg";
import tt12_7 from "../public/imgs/tour/12/07 Large.jpeg";
import tt12_8 from "../public/imgs/tour/12/08 Large.jpeg";
import tt12_9 from "../public/imgs/tour/12/09 Large.jpeg";
import tt12_10 from "../public/imgs/tour/12/10 Large.jpeg";
import tt12_11 from "../public/imgs/tour/12/11 Large.jpeg";
import tt12_12 from "../public/imgs/tour/12/12 Large.jpeg";
import tt12_13 from "../public/imgs/tour/12/13 Large.jpeg";
import tt12_14 from "../public/imgs/tour/12/14 Large.jpeg";
import tt12_15 from "../public/imgs/tour/12/15 Large.jpeg";
import tt12_16 from "../public/imgs/tour/12/16 Large.jpeg";
import tt12_17 from "../public/imgs/tour/12/17 Large.jpeg";
import tt12_18 from "../public/imgs/tour/12/18 Large.jpeg";
import tt12_19 from "../public/imgs/tour/12/19 Large.jpeg";
import tt12_20 from "../public/imgs/tour/12/20 Large.jpeg";
import tt12_21 from "../public/imgs/tour/12/21 Large.jpeg";
import tt12_22 from "../public/imgs/tour/12/22 Large.jpeg";
import tt12_23 from "../public/imgs/tour/12/23 Large.jpeg";
import tt12_24 from "../public/imgs/tour/12/24 Large.jpeg";

import tt2_1 from "../public/imgs/tour/02/01 Large.jpeg";
import tt2_2 from "../public/imgs/tour/02/02 Large.jpeg";
import tt2_3 from "../public/imgs/tour/02/03 Large.jpeg";
import tt2_4 from "../public/imgs/tour/02/04 Large.jpeg";

import tt6_1 from "../public/imgs/tour/06/01 Large.jpeg";
import tt6_2 from "../public/imgs/tour/06/02 Large.jpeg";
import tt6_3 from "../public/imgs/tour/06/03 Large.jpeg";
import tt6_4 from "../public/imgs/tour/06/04 Large.jpeg";

import tt11_1 from "../public/imgs/talk/11/01 Large.jpeg";
import tt11_2 from "../public/imgs/talk/11/02 Large.jpeg";
import tt11_3 from "../public/imgs/talk/11/03 Large.jpeg";
import tt11_4 from "../public/imgs/talk/11/04 Large.jpeg";
import tt11_5 from "../public/imgs/talk/11/05 Large.jpeg";
import tt11_6 from "../public/imgs/talk/11/06 Large.jpeg";
import tt11_7 from "../public/imgs/talk/11/07 Large.jpeg";
import tt11_8 from "../public/imgs/talk/11/08 Large.jpeg";

import tt1_1 from "../public/imgs/talk/01/01 Large.jpeg";
import tt1_2 from "../public/imgs/talk/01/02 Large.jpeg";
import tt1_3 from "../public/imgs/talk/01/03 Large.jpeg";
import tt1_4 from "../public/imgs/talk/01/04 Large.jpeg";

import tt3_1 from "../public/imgs/talk/03/01 Large.jpeg";
import tt3_2 from "../public/imgs/talk/03/02  Large.jpeg";
import tt3_3 from "../public/imgs/talk/03/03 Large.jpeg";
import tt3_4 from "../public/imgs/talk/03/04 Large.jpeg";
import tt3_5 from "../public/imgs/talk/03/05 Large.jpeg";
import tt3_6 from "../public/imgs/talk/03/06 Large.jpeg";
import tt3_7 from "../public/imgs/talk/03/07 Large.jpeg";

import tt4_1 from "../public/imgs/talk/04/01 Large.jpeg";
import tt4_2 from "../public/imgs/talk/04/02 Large.jpeg";
import tt4_3 from "../public/imgs/talk/04/03 Large.jpeg";
import tt4_4 from "../public/imgs/talk/04/04 Large.jpeg";

import tt5_1 from "../public/imgs/talk/05/01 Large.jpeg";
import tt5_2 from "../public/imgs/talk/05/02 Large.jpeg";
import tt5_3 from "../public/imgs/talk/05/03 Large.jpeg";
import tt5_4 from "../public/imgs/talk/05/04 Large.jpeg";

import tt7_1 from "../public/imgs/talk/07/01 Large.jpeg";
import tt7_2 from "../public/imgs/talk/07/02 Large.jpeg";
import tt7_3 from "../public/imgs/talk/07/03 Large.jpeg";
import tt7_4 from "../public/imgs/talk/07/04 Large.jpeg";

import tt8_1 from "../public/imgs/talk/08/01 Large.jpeg";
import tt8_2 from "../public/imgs/talk/08/02 Large.jpeg";

import tt9_1 from "../public/imgs/talk/09/01 Large.jpeg";
import tt9_2 from "../public/imgs/talk/09/02 Large.jpeg";
import tt9_3 from "../public/imgs/talk/09/03 Large.jpeg";

import tt10_1 from "../public/imgs/talk/10/01 Large.jpeg";
import tt10_2 from "../public/imgs/talk/10/02 Large.jpeg";
import tt10_3 from "../public/imgs/talk/10/03 Large.jpeg";
import tt10_4 from "../public/imgs/talk/10/04 Large.jpeg";

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
          transform: isInView ? "translateX(3vw)" : "translateX(0px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(ref5);

  const controls_viewbox = useAnimationControls();
  const controls_pattern = useAnimationControls();
  const controls_title = useAnimationControls();
  const controls_content = useAnimationControls();

  // const dynamicWidth = UserWindow();
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  /*** media query ***/
  const matches = useMediaQuery("(max-width:810px)");

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    // return () => {
    //   window.removeEventListener("resize", setDimension);
    // };
    // console.log("screenSize: ", screenSize.dynamicWidth);
    // console.log("Element is in view 2: ", isInView2);
    if (matches == false) {
      if (isInView1 == true && isInView2 == false) {
        controls_viewbox.start({
          viewBox: `0 0 ${screenSize.dynamicWidth} ${screenSize.dynamicHeight}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [0, 5],
          transition: { type: "spring", duration: 2.2 },
        });
        // controls_content.start({
        //   rotate: [40, -5],
        //   scale: [0, 1],
        //   opacity: [0, 1],
        //   transition: { type: "spring", duration: 1.8 },
        // });
      } else if (
        isInView2 == true &&
        isInView1 == false &&
        isInView3 == false
      ) {
        controls_viewbox.start({
          viewBox: `${screenSize.dynamicWidth * 1} 0 ${
            screenSize.dynamicWidth * 1
          } ${screenSize.dynamicHeight * 1}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [5, 0],
          transition: { type: "spring", duration: 2 },
        });
      } else if (
        isInView3 == true &&
        isInView2 == false &&
        isInView4 == false
      ) {
        controls_viewbox.start({
          viewBox: `${screenSize.dynamicWidth * 1} ${
            screenSize.dynamicHeight * 2
          } ${screenSize.dynamicWidth * 1} ${screenSize.dynamicHeight * 1}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [0, 5],
          transition: { type: "spring", duration: 2 },
        });
      } else if (
        isInView4 == true &&
        isInView3 == false &&
        isInView5 == false
      ) {
        controls_viewbox.start({
          viewBox: `${screenSize.dynamicWidth * 0.6} ${
            screenSize.dynamicHeight * 3
          } ${screenSize.dynamicWidth * 1} ${screenSize.dynamicHeight * 1}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [0, 5],
          transition: { type: "spring", duration: 2 },
        });
      } else if (isInView5 == true && isInView4 == false) {
        controls_viewbox.start({
          viewBox: `0 ${screenSize.dynamicHeight * 2.4} ${
            screenSize.dynamicWidth * 1
          } ${screenSize.dynamicHeight * 1}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [5, 0],
          transition: { type: "spring", duration: 2 },
        });
      }
    } else if (matches == true) {
      if (isInView1 == true && isInView2 == false) {
        controls_viewbox.start({
          viewBox: `0 0 ${screenSize.dynamicWidth} ${screenSize.dynamicHeight}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [0, 5],
          transition: { type: "spring", duration: 2 },
        });
      } else if (
        isInView2 == true &&
        isInView1 == false &&
        isInView3 == false
      ) {
        controls_viewbox.start({
          viewBox: `0 ${screenSize.dynamicHeight * 0.2} ${
            screenSize.dynamicWidth
          } ${screenSize.dynamicHeight}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [5, 0],
          transition: { type: "spring", duration: 2 },
        });
      } else if (
        isInView3 == true &&
        isInView2 == false &&
        isInView4 == false
      ) {
        controls_viewbox.start({
          viewBox: `0 ${screenSize.dynamicHeight * 0.4} ${
            screenSize.dynamicWidth
          } ${screenSize.dynamicHeight}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [0, 5],
          transition: { type: "spring", duration: 2 },
        });
      } else if (
        isInView4 == true &&
        isInView3 == false &&
        isInView5 == false
      ) {
        controls_viewbox.start({
          viewBox: `0 ${screenSize.dynamicHeight * 0.6} ${
            screenSize.dynamicWidth
          } ${screenSize.dynamicHeight}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [0, 5],
          transition: { type: "spring", duration: 2 },
        });
      } else if (isInView5 == true && isInView4 == false) {
        controls_viewbox.start({
          viewBox: `0 ${screenSize.dynamicHeight * 0.8} ${
            screenSize.dynamicWidth
          } ${screenSize.dynamicHeight}`,
          transition: { type: "spring", duration: 2 },
        });
        controls_pattern.start({
          rotate: [5, 0],
          transition: { type: "spring", duration: 2 },
        });
      }
    }
  }, [
    isInView1,
    isInView2,
    isInView3,
    isInView4,
    isInView5,
    screenSize,
    matches,
  ]);

  /*** modal exhibition ***/
  const [openEx, setOpenEx] = useState(false);
  const handleOpenEx = () => setOpenEx(true);
  const handleCloseEx = () => setOpenEx(false);
  /*** modal Memo AKTEN ***/
  const [openMA, setOpenMA] = useState(false);
  const handleOpenMA = () => setOpenMA(true);
  const handleCloseMA = () => setOpenMA(false);
  /*** modal Kyriaki GONI ***/
  const [openKG, setOpenKG] = useState(false);
  const handleOpenKG = () => setOpenKG(true);
  const handleCloseKG = () => setOpenKG(false);
  /*** modal Hsien-Yu CHENG ***/
  const [openHsienYu, setOpenHsienYu] = useState(false);
  const handleOpenHsienYu = () => setOpenHsienYu(true);
  const handleCloseHsienYu = () => setOpenHsienYu(false);
  /*** modal Paolo CIRIO ***/
  const [openPC, setOpenPC] = useState(false);
  const handleOpenPC = () => setOpenPC(true);
  const handleClosePC = () => setOpenPC(false);
  /*** modal SLITSCOPE ***/
  const [openSLITSCOPE, setOpenSLITSCOPE] = useState(false);
  const handleOpenSLITSCOPE = () => setOpenSLITSCOPE(true);
  const handleCloseSLITSCOPE = () => setOpenSLITSCOPE(false);
  /*** modal Theresa SCHUBERT ***/
  const [openTS, setOpenTS] = useState(false);
  const handleOpenTS = () => setOpenTS(true);
  const handleCloseTS = () => setOpenTS(false);
  /*** modal Halsey BURGUND & Francesca PANETTA ***/
  const [openHBFP, setOpenHBFP] = useState(false);
  const handleOpenHBFP = () => setOpenHBFP(true);
  const handleCloseHBFP = () => setOpenHBFP(false);
  /*** modal CHEN Yi ***/
  const [openCY, setOpenCY] = useState(false);
  const handleOpenCY = () => setOpenCY(true);
  const handleCloseCY = () => setOpenCY(false);
  /*** modal Unhappy Circuit ***/
  const [openUC, setOpenUC] = useState(false);
  const handleOpenUC = () => setOpenUC(true);
  const handleCloseUC = () => setOpenUC(false);
  /*** modal CHANG Yung-Ta ***/
  const [openYungTa, setOpenYungTa] = useState(false);
  const handleOpenYungTa = () => setOpenYungTa(true);
  const handleCloseYungTa = () => setOpenYungTa(false);
  /*** modal FAMEME ***/
  const [openFameme, setOpenFameme] = useState(false);
  const handleOpenFameme = () => setOpenFameme(true);
  const handleCloseFameme = () => setOpenFameme(false);
  /*** modal Her Lab Space ***/
  const [openHLS, setOpenHLS] = useState(false);
  const handleOpenHLS = () => setOpenHLS(true);
  const handleCloseHLS = () => setOpenHLS(false);

  /*** Btn rotation effect ***/
  const textSvRef = useRef(null);
  const [isBtnHovered, setBtnHovered] = useState(false);
  const time = useTime();
  const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: false });
  const pause = useTransform(time, [0, 40000], [0, 0], { clamp: true });
  const btnBgVariants = {
    rest: {
      backgroundColor: "rgba(255, 0,0, 0.9)",
      borderRadius: "0%",
      boxShadow: "0 0 90px 70px #ff0000",
      border: "none",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      backgroundColor: "rgba(255, 0,0, 0.85)",
      borderRadius: "0%",
      boxShadow: "0 0 90px 20px #ff0000",
      border: "none",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  /*** Menu hover effect ***/
  const BGVariant = {
    expanded: {
      width: "350px",
    },
    collapsed: {
      width: "10px",
      transition: { delay: 0.2, duration: 1 },
    },
  };
  const ZhTextVariant = {
    expanded: () => ({
      opacity: 1,
      y: "3rem",
      transition: { delay: 0.1 },
    }),
    collapsed: () => ({
      opacity: 0,
      y: "200px",
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    }),
  };
  const EnTextVariant = {
    expanded: () => ({
      opacity: 0,
      y: "6rem",
      transition: { delay: 0 },
    }),
    collapsed: () => ({
      opacity: 1,
      y: 0,
      ease: "easeOut",
      duration: 0,
      type: "tween",
    }),
  };

  /*** ***/
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  /*** tt12 slider ***/
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  /*** tt2 slider ***/
  const [currentSlidett2, setCurrentSlidett2] = useState(0);
  const [loadedtt2, setLoadedtt2] = useState(false);
  const [sliderReftt2, instanceReftt2] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett2(slider.track.details.rel);
    },
    created() {
      setLoadedtt2(true);
    },
  });

  /*** tt6 slider ***/
  const [currentSlidett6, setCurrentSlidett6] = useState(0);
  const [loadedtt6, setLoadedtt6] = useState(false);
  const [sliderReftt6, instanceReftt6] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett6(slider.track.details.rel);
    },
    created() {
      setLoadedtt6(true);
    },
  });

  /*** tt11 slider ***/
  const [currentSlidett11, setCurrentSlidett11] = useState(0);
  const [loadedtt11, setLoadedtt11] = useState(false);
  const [sliderReftt11, instanceReftt11] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett11(slider.track.details.rel);
    },
    created() {
      setLoadedtt11(true);
    },
  });

  /*** tt1 slider ***/
  const [currentSlidett1, setCurrentSlidett1] = useState(0);
  const [loadedtt1, setLoadedtt1] = useState(false);
  const [sliderReftt1, instanceReftt1] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett1(slider.track.details.rel);
    },
    created() {
      setLoadedtt1(true);
    },
  });

  /*** tt3 slider ***/
  const [currentSlidett3, setCurrentSlidett3] = useState(0);
  const [loadedtt3, setLoadedtt3] = useState(false);
  const [sliderReftt3, instanceReftt3] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett3(slider.track.details.rel);
    },
    created() {
      setLoadedtt3(true);
    },
  });

  /*** tt4 slider ***/
  const [currentSlidett4, setCurrentSlidett4] = useState(0);
  const [loadedtt4, setLoadedtt4] = useState(false);
  const [sliderReftt4, instanceReftt4] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett4(slider.track.details.rel);
    },
    created() {
      setLoadedtt4(true);
    },
  });

  /*** tt5 slider ***/
  const [currentSlidett5, setCurrentSlidett5] = useState(0);
  const [loadedtt5, setLoadedtt5] = useState(false);
  const [sliderReftt5, instanceReftt5] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett5(slider.track.details.rel);
    },
    created() {
      setLoadedtt5(true);
    },
  });

  /*** tt7 slider ***/
  const [currentSlidett7, setCurrentSlidett7] = useState(0);
  const [loadedtt7, setLoadedtt7] = useState(false);
  const [sliderReftt7, instanceReftt7] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett7(slider.track.details.rel);
    },
    created() {
      setLoadedtt7(true);
    },
  });

  /*** tt8 slider ***/
  const [currentSlidett8, setCurrentSlidett8] = useState(0);
  const [loadedtt8, setLoadedtt8] = useState(false);
  const [sliderReftt8, instanceReftt8] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett8(slider.track.details.rel);
    },
    created() {
      setLoadedtt8(true);
    },
  });

  /*** tt9 slider ***/
  const [currentSlidett9, setCurrentSlidett9] = useState(0);
  const [loadedtt9, setLoadedtt9] = useState(false);
  const [sliderReftt9, instanceReftt9] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett9(slider.track.details.rel);
    },
    created() {
      setLoadedtt9(true);
    },
  });

  /*** tt10 slider ***/
  const [currentSlidett10, setCurrentSlidett10] = useState(0);
  const [loadedtt10, setLoadedtt10] = useState(false);
  const [sliderReftt10, instanceReftt10] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlidett10(slider.track.details.rel);
    },
    created() {
      setLoadedtt10(true);
    },
  });

  return (
    <>
      {/*** menu ***/}
      <div className={styles.siteTitle}>
        <motion.a href="#home">
          <motion.div
            className={styles.container}
            initial="collapsed"
            whileHover="expanded"
            animation="expanded"
          >
            <motion.div className={styles.zhText} variants={ZhTextVariant}>
              超限社會
            </motion.div>
            <motion.div className={styles.textBG} variants={BGVariant} />
            <motion.div className={styles.enText} variants={EnTextVariant}>
              The Unrestricted Society
            </motion.div>
          </motion.div>
        </motion.a>
      </div>
      <div className={styles.menu}>
        <ul>
          <div>
            <motion.a href="#exhibition">
              <motion.div
                className={styles.container}
                initial="collapsed"
                whileHover="expanded"
                animation="expanded"
              >
                <motion.div className={styles.zhText} variants={ZhTextVariant}>
                  策展論述
                </motion.div>
                <motion.div className={styles.textBG} variants={BGVariant} />
                <motion.div className={styles.enText} variants={EnTextVariant}>
                  <div>Curatorial</div>
                  <div>Statement</div>
                </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div>
            <motion.a href="#artist">
              <motion.div
                className={styles.container}
                initial="collapsed"
                whileHover="expanded"
                animation="expanded"
              >
                <motion.div className={styles.zhText} variants={ZhTextVariant}>
                  藝術家
                </motion.div>
                <motion.div className={styles.textBG} variants={BGVariant} />
                <motion.div className={styles.enText} variants={EnTextVariant}>
                  artist
                </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div className={styles.menuBtn}>
            <motion.a href="#talk">
              <motion.div
                className={styles.container}
                initial="collapsed"
                whileHover="expanded"
                animation="expanded"
              >
                <motion.div className={styles.zhText} variants={ZhTextVariant}>
                  講座
                </motion.div>
                <motion.div className={styles.textBG} variants={BGVariant} />
                <motion.div className={styles.enText} variants={EnTextVariant}>
                  Talk
                </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div className={styles.menuBtn}>
            <motion.a href="#tour">
              <motion.div
                className={styles.container}
                initial="collapsed"
                whileHover="expanded"
                animation="expanded"
              >
                <motion.div className={styles.zhText} variants={ZhTextVariant}>
                  導覽
                </motion.div>

                <motion.div className={styles.textBG} variants={BGVariant} />
                <motion.div className={styles.enText} variants={EnTextVariant}>
                  Guided Tour
                </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div className={styles.menuBtn}>
            <motion.a
              href="https://drive.google.com/file/d/1FuwB5A5cFcS3f8GIy8_T8zzIz258yvvN/view"
              target="blank"
            >
              <motion.div
                className={styles.container}
                initial="collapsed"
                whileHover="expanded"
                animation="expanded"
              >
                <motion.div className={styles.zhText} variants={ZhTextVariant}>
                  展覽手冊
                </motion.div>

                <motion.div className={styles.textBG} variants={BGVariant} />
                <motion.div className={styles.enText} variants={EnTextVariant}>
                  BROCHURE
                </motion.div>
              </motion.div>
            </motion.a>
          </div>
        </ul>
      </div>

      {/*** info ***/}
      <div className={styles.menuBtn_clab} onClick={handleOpenDrawer}>
        <motion.div
          className={styles.btnWrap}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.svg
            viewBox="0 0 280 280"
            className={styles.btnSvg}
            width="280px"
            height="280px"
            ref={textSvRef}
            style={isBtnHovered ? { pause } : { rotate }}
            whileHover={() => setBtnHovered(true)}
            // onMouseLeave={() => setBtnHovered(false)}
            onHoverStart={(e) => {
              setBtnHovered(true);
            }}
            onHoverEnd={(e) => {
              setBtnHovered(false);
            }}
          >
            <path
              id="curve"
              fill="transparent"
              d=" M 20, 140 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0 "
            />
            <text>
              <textPath
                className={styles.btnText}
                xlinkHref="#curve"
                alignmentBaseline="top"
                spacing="auto"
              >
                超限社會 THE UNRESTRICTED SOCIETY 2022/09/24 - 11/27
              </textPath>
            </text>
          </motion.svg>
          <motion.div className={styles.btnCircle} variants={btnBgVariants}>
            more info
          </motion.div>
        </motion.div>
      </div>
      <Modal open={openDrawer} onClose={handleCloseDrawer}>
        <div className={styles.myDrawer}>
          <Fade in={openDrawer} timeout={1000}>
            <div>
              <div className={styles.closeModal} onClick={handleCloseDrawer}>
                <Image
                  src={closeIcon}
                  alt="Icon of close modal"
                  width={73}
                  height={73}
                />
              </div>

              <div>
                <InfoModal />
              </div>
            </div>
          </Fade>
        </div>
      </Modal>

      {/*** svg background ***/}
      {matches == false && (
        <div className={styles.bgBlock}>
          <motion.svg
            viewBox={`0 0 ${screenSize.dynamicWidth} ${screenSize.dynamicHeight}`}
            animate={controls_viewbox}
          >
            <image
              xlinkHref="/imgs/bg_4.png"
              width={`${screenSize.dynamicWidth * 2}`}
            />
            <motion.image
              xlinkHref="/imgs/pattern_4.png"
              animate={controls_pattern}
              width={`${screenSize.dynamicWidth * 2}`}
            />
          </motion.svg>
        </div>
      )}

      {matches == true && (
        <div className={styles.bgBlock}>
          <motion.svg
            viewBox={`0 0 ${screenSize.dynamicWidth} ${screenSize.dynamicHeight}`}
            animate={controls_viewbox}
          >
            <image
              xlinkHref="/imgs/bg_4.png"
              height={`${screenSize.dynamicHeight * 2}`}
            />
            <motion.image
              xlinkHref="/imgs/pattern_4.png"
              animate={controls_pattern}
              height={`${screenSize.dynamicHeight * 2}`}
            />
          </motion.svg>
        </div>
      )}

      {/*** section home ***/}
      <Section>
        <div ref={ref1} id="home" className={styles.secBlk}>
          <motion.div className={styles.vid} animate={controls_content}>
            <ReactPlayer
              width="100%"
              height="100%"
              //url="https://www.youtube.com/watch?v=tvBFKKhlYqM"
              url={[
                "https://www.youtube.com/watch?v=wHYNSS-Rhvo",
                "https://www.youtube.com/watch?v=3COrS5aDbhM",
                "https://www.youtube.com/watch?v=XGKpP37wKZk",
                "https://www.youtube.com/watch?v=_PcL2hyYHao",
                "https://www.youtube.com/watch?v=BGVLKgRCdFE",
              ]}
              className={styles.react_player}
              controls={true}
            />
          </motion.div>
        </div>
      </Section>

      <Section>
        <div></div>
      </Section>

      {/*** section exhibition ***/}
      <Section>
        <div ref={ref2} id="exhibition" className={styles.secBlk}>
          <motion.div
            className={styles.contentInner_ex}
            onClick={handleOpenEx}
            animate={controls_content}
          >
            <Box className={styles.exTitle}>
              <Box component="span" className={styles.exTitle}>
                策展論述
              </Box>
              <Box
                sx={{ display: { xs: "block", sm: "block", md: "inline" } }}
                className={styles.exTitle_en}
                ml={{ xs: 0, sm: 0, md: 2 }}
              >
                Curatorial Statement
              </Box>
            </Box>
            <div>
              <span className={styles.exCurator}>策展人</span>
              <Box
                className={styles.exCurator}
                sx={{ display: "inline" }}
                ml={1}
                mr={1}
              >
                /
              </Box>
              <span className={styles.exCurator}>莊偉慈</span>
            </div>

            <div className={styles.exCurator_en}>Curator / CHUANG Wei-Tzu</div>
            <div className={styles.exContent}>
              「超限社會」一展中，藝術家從不同角度探討科技發展所產生的問題與困境：比如「我們即數據」意義下該如何看待數位隱私權；思索數位監控、臉部辨識以及深偽技術可能帶來的問題；或運用細胞複製技術思考糧食危機的可能選項等。除此之外，站在技術具有中介角色的特質上，展覽中的作品也可看到藝術家嘗試跨領域協作，運用新技術探索藝術觀念能如何轉化抽象的資料或內容，進而創造出新的感官體驗。
            </div>
            <div className={styles.exContent}>
              一直以來，技術總被視為是人類擺脫桎梏的工具，然而透過它所創造的自由是否為真，還是那樣的自由其實是幻象？在「超限社會」展覽中，將提供觀眾另一種理解技術的方式。
            </div>
            <div className={styles.exContent}>
              In the exhibition The Unrestricted Society, the artists probe into
              the issues and dilemmas surrounding technological development from
              different perspectives, such as the way we view digital privacy in
              the sense of “we are the data,” potential problems with digital
              surveillance, facial recognition and deepfakes, as well as looking
              at possible options for alleviating food crises through cloning.
              Besides, given the intermediary role of technology, the works
              featured in this exhibition reveal the artists’ attempt at
              transdisciplinary collaboration. They employ new technologies to
              explore how artistic concepts can transmute abstract data or
              contents, insofar as to create unprecedented sensory experiences.
            </div>
            <div className={styles.exContent}>
              Technology has always been deemed a tool to liberate the human
              race. However, we may wonder whether the liberation it created is
              genuine freedom or all an illusion. The exhibition The
              Unrestricted Society will provide the visitors with an alternative
              way of understanding technology.
            </div>
            <div className={styles.exMore}>more...</div>
          </motion.div>
          <Modal
            open={openEx}
            onClose={handleCloseEx}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={styles.exModal}>
              <Fade in={openEx} timeout={1000}>
                <div>
                  <div className={styles.closeModal} onClick={handleCloseEx}>
                    <Image
                      src={closeIcon}
                      alt="Icon of close modal"
                      width={73}
                      height={73}
                    />
                  </div>

                  <div>
                    <ExModal />
                  </div>
                </div>
              </Fade>
            </div>
          </Modal>
        </div>
      </Section>

      <Section>
        <div></div>
      </Section>

      {/*** section artist ***/}
      <Section>
        <div ref={ref3} id="artist" className={styles.secBlk}>
          <motion.div
            className={styles.artistWapper}
            animate={controls_content}
          >
            <div className={styles.artistLineWapper}>
              <div className={styles.artistBlk} onClick={handleOpenMA}>
                <span className={styles.artistName}>米莫．艾克滕</span>
                <span className={styles.artistName_en}>Memo AKTEN</span>
              </div>
              <Modal
                open={openMA}
                onClose={handleCloseMA}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openMA} timeout={1000}>
                    <div>
                      <Box
                        className={styles.closeModal}
                        onClick={handleCloseMA}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </Box>
                      <MaModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
              <div className={styles.artistBlk} onClick={handleOpenKG}>
                <span className={styles.artistName}>奇里亞姬．戈妮</span>
                <span className={styles.artistName_en}>Kyriaki GONI</span>
              </div>
              <Modal
                open={openKG}
                onClose={handleCloseKG}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openKG} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseKG}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <KgModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
            <div className={styles.artistLineWapper}>
              <div className={styles.artistBlk} onClick={handleOpenHsienYu}>
                <span className={styles.artistName}>鄭先喻</span>
                <span className={styles.artistName_en}>CHENG Hsien-Yu</span>
              </div>
              <Modal
                open={openHsienYu}
                onClose={handleCloseHsienYu}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openHsienYu} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseHsienYu}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <HsienYuModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
              <div className={styles.artistBlk} onClick={handleOpenPC}>
                <span className={styles.artistName}>保羅．奇里奧</span>
                <span className={styles.artistName_en}>Paolo CIRIO</span>
              </div>
              <Modal
                open={openPC}
                onClose={handleClosePC}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openPC} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleClosePC}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <PcModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
            <div className={styles.artistLineWapper}>
              <div
                className={styles.artistBlkLong}
                onClick={handleOpenSLITSCOPE}
              >
                <span className={styles.artistName}>
                  雙縫鏡（金制民、金根瑩）
                </span>
                <span className={styles.artistName_en}>
                  SLITSCOPE (KIM Jae-Min, KIM Keun-Hyoung)
                </span>
              </div>
              <Modal
                open={openSLITSCOPE}
                onClose={handleCloseSLITSCOPE}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openSLITSCOPE} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseSLITSCOPE}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <SlitscopeModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
            <div className={styles.artistLineWapper}>
              <div className={styles.artistBlk} onClick={handleOpenTS}>
                <span className={styles.artistName}>泰瑞莎．舒柏特</span>
                <span className={styles.artistName_en}>Theresa SCHUBERT</span>
              </div>
              <Modal
                open={openTS}
                onClose={handleCloseTS}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openTS} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseTS}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <TsModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
            <div className={styles.artistLineWapper}>
              <div className={styles.artistBlkLong} onClick={handleOpenHBFP}>
                <span className={styles.artistName}>
                  哈爾西．布根地、法蘭西絲卡．帕內塔
                </span>
                <span className={styles.artistName_en}>
                  Halsey BURGUND, Francesca PANETTA
                </span>
              </div>
              <Modal
                open={openHBFP}
                onClose={handleCloseHBFP}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openHBFP} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseHBFP}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <HbFpModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
            <div className={styles.artistLineWapper}>
              <div className={styles.artistBlk} onClick={handleOpenCY}>
                <span className={styles.artistName}>陳乂</span>
                <span className={styles.artistName_en}>CHEN Yi</span>
              </div>
              <Modal
                open={openCY}
                onClose={handleCloseCY}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openCY} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseCY}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <CyModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
              <div className={styles.artistBlk} onClick={handleOpenUC}>
                <span className={styles.artistName}>哀傷電路</span>
                <span className={styles.artistName_en}>Unhappy Circuit</span>
              </div>
              <Modal
                open={openUC}
                onClose={handleCloseUC}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openUC} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseUC}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <UcModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
            <div className={styles.artistLineWapper}>
              <div className={styles.artistBlk} onClick={handleOpenYungTa}>
                <span className={styles.artistName}>張永達</span>
                <span className={styles.artistName_en}>CHANG Yung-Ta</span>
              </div>
              <Modal
                open={openYungTa}
                onClose={handleCloseYungTa}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openYungTa} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseYungTa}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <YungTaModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
              <div className={styles.artistBlk} onClick={handleOpenFameme}>
                <span className={styles.artistName}>法咪咪</span>
                <span className={styles.artistName_en}>FAMEME</span>
              </div>
              <Modal
                open={openFameme}
                onClose={handleCloseFameme}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openFameme} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseFameme}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <FamemeModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
            <div className={styles.artistLineWapper}>
              <div className={styles.artistBlkLong} onClick={handleOpenHLS}>
                <span className={styles.artistName}>
                  她的實驗室空間集（區秀詒、陳侑汝）
                </span>
                <span className={styles.artistName_en}>
                  Her Lab Space (AU Sow-Yee, CHEN Yow-Ruu)
                </span>
              </div>
              <Modal
                open={openHLS}
                onClose={handleCloseHLS}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.exModal}>
                  <Fade in={openHLS} timeout={1000}>
                    <div>
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseHLS}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
                      <HerLabSpaceModal />
                    </div>
                  </Fade>
                </div>
              </Modal>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div></div>
      </Section>

      {/*** section talk ***/}
      <Section>
        <div ref={ref4} id="talk" className={styles.secBlk}>
          <motion.div className={styles.talkWapper} animate={controls_content}>
            <div className={styles.talkLineWapper}>
              <div className={styles.talkBlk}>
                <div className={styles.talkDate}></div>
                <div>
                  <div className={styles.talkContent}>
                    2022年由策展人莊偉慈所策劃的年度展覽
                    <a
                      href="https://clab.org.tw/events/theunrestrictedsociety/"
                      target="blank"
                    >
                      <Box component="span" sx={{ fontWeight: "bold" }} mr={1}>
                        「超限社會」
                      </Box>
                    </a>
                    ，藉由各式議題的討論如演算法、數位隱私、臉部辨識、深偽技術、試管肉、加密貨幣和元宇宙等，探討科技發展所產生的問題與困境。除此之外，站在技術具有中介角色的特質上，展覽也呈現了藝術家跨領域協作的嘗試，運用新技術轉化抽象的資料或內容，進而創造出新的感官體驗。
                  </div>
                  <div className={styles.talkContent}>
                    呼應本次展覽主題，C-LAB將於展覽期間（2022/09/24-11/27）推出系列講座及導覽活動，邀請科技、哲學、傳播及法律等領域的專家學者，以不同角度重新審視技術與我們之間的關係，並探討技術發展如何影響人類的生活與社會面貌。
                  </div>
                </div>
                <div>
                  <div className={styles.talkContent}>
                    The 2022 C-LAB annual exhibition{" "}
                    <a
                      href="https://clab.org.tw/en/events/theunrestrictedsociety/"
                      target="blank"
                    >
                      <Box component="span" sx={{ fontWeight: "bold" }} mr={1}>
                        The Unrestricted Society
                      </Box>
                    </a>
                    curated by CHUANG Wei-Tzu takes different angles on the
                    issues and dilemmas arising from technological development,
                    such as digital surveillance, facial recognition, and
                    deep-fakes that involve digital privacy, as well as the
                    feasibility of applying cloning to food crisis management.
                    Treating technology as a medium, this exhibition also shows
                    that the artists employ novel technologies to explore how
                    artistic concepts can transmute abstract data and in turn
                    create new sensory experiences.
                  </div>
                  <div className={styles.talkContent}>
                    To deepen the discussion of this exhibition, the C-LAB will
                    invite specialists and scholars from the fields of
                    technology, philosophy, communication, and law who will
                    collectively reconsider our relation to technology from
                    different perspectives and investigate how technological
                    development affects human life and society.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.talkLineWapper}>
              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>藝術家座談</div>
                  <div className={styles.talkTitle}>Artist Talk</div>
                </div>
                <div className={styles.talkDate}>09／24 (SAT) 14:00-15:30</div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t27}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                        quality="100"
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t28}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                        quality="100"
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t2}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                        quality="100"
                      />
                    </Box>
                  </Box>
                  <div className={styles.talkContent}>
                    金根瑩KIM Keun-Hyoung×哀傷電路Unhappy
                    Circuit×吳達坤WU Dar-Kuen（主持Moderator）
                  </div>
                  <div className={styles.talkContent}>
                    @ 動畫創作者基地1樓多功能廳 R116 Multi-function Space of
                    Creative Base for Animators
                  </div>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour1 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt1} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt1_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt1_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt1_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt1_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt1 && instanceReftt1.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt1.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt1.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett1 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>

              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>藝術家座談</div>
                  <div className={styles.talkTitle}>Artist Talk</div>
                </div>
                <div className={styles.talkDate}>10／02 (SUN) 17:00-18:30 </div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t5}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t4}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t10}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t9}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t7}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.talkContent}>
                    法咪咪FAMEME×張永達CHANG Yung-Ta×陳乂CHEN Yi×鄭先喻CHENG
                    Hsien-Yu×莊偉慈CHUANG Wei-Tzu（主持Moderator）
                  </div>
                  <div className={styles.talkContent}>
                    @ 動畫創作者基地1樓多功能廳 R116 Multi-function Space of
                    Creative Base for Animators
                  </div>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour3 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt3} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt3_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt3_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt3_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt3_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt3_5}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt3_6}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt3_7}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt3 && instanceReftt3.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt3.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt3.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett3 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>
            </div>

            <div className={styles.talkLineWapper}>
              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>NFT社群臉孔，</div>
                  <div className={styles.talkTitle}>頭像價碼與社會資本</div>
                  <div className={styles.talkTitle}>
                    The Faces of NFT Communities, Bust Prices and Social Capital
                  </div>
                </div>
                <div className={styles.talkDate}>10／15 (SAT) 14:00-16:00 </div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t13}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.talkContent}>黃豆泥 mashbean</div>
                  <div className={styles.talkContent}>
                    @ 西服務中心2樓 West i-CENTER, 2F
                  </div>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      NFT於2021年風起雲湧，其中有八成交易量為俗稱「NFT項目方」的頭像式專案創造。過了一年至2022年夏天，全球經融市場進入大熊市，NFT項目方紛紛冷卻停擺不動，各大社群熱度漸漸降溫。講者黃豆泥為非營利NFT實踐者，以自身經驗與社群觀察，本講座討論web3世界社群互動的方式，究竟是充滿投機氣氛的曇花一現，還是本質上改變社會互動模式的典範轉移。
                    </div>
                  </Box>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      Non-fungible tokens (NFTs) thrived in 2021. Bust projects
                      launched by the so-called “NFT project teams” comprised
                      80% of NFT transactions. It was not until the summer of
                      2022 that bull markets began around the world in which
                      many NFT teams’ activities have come to a halt and the fad
                      has slackened among NFT communities. The speaker mashbean
                      is a non-profit NFT practitioner. Based on his personal
                      experience and observation of NFT communities, the talk
                      will address the question as to whether the interaction
                      among web3 communities is an ephemeral speculative venture
                      or a paradigm shift that radically alters the pattern of
                      social interaction.
                    </div>
                  </Box>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour4 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt4} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt4_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt4_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt4_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt4_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt4 && instanceReftt4.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt4.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt4.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett4 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>

              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>虛擬人時代—</div>
                  <div className={styles.talkTitle}>Vtuber來襲的社群年代</div>
                  <div className={styles.talkTitle}>
                    The Era of Virtual Beings—
                  </div>
                  <div className={styles.talkTitle}>
                    The Beginning of the Vtuber Epoch
                  </div>
                </div>
                <div className={styles.talkDate}>10／29 (SAT) 14:00-16:00 </div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t6}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.talkContent}>羅禾淋 LUO He-Lin</div>
                  <div className={styles.talkContent}>
                    @ CREATORS空間102 共享吧 CREATORS’Space R102 Coworking Space
                  </div>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      本講座以目前最熱門的虛擬主播Vtuber現象熱潮為探討的核心，包含從自媒體的YouTuber演變到Vtuber，也呼應元宇宙的到來，思考為何虛擬人反而比真人更受歡迎的風潮。
                    </div>
                  </Box>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      This talk revolves around the Vtuber phenomenon presently
                      in vogue, including the evolution from YouTuber to Vtuber.
                      Echoing the advent of metaverse, this talk also guides the
                      audience to cogitate upon why virtual characters is
                      instead more popular than real people under this trend.
                    </div>
                  </Box>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour5 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt5} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt5_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt5_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt5_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt5_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt5 && instanceReftt5.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt5.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt5.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett5 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>
            </div>

            <div className={styles.talkLineWapper}>
              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>
                    假新聞，在過去，也在未來
                  </div>
                  <div className={styles.talkTitle}>
                    Fake News, Not Only in the Past but Also in the Future
                  </div>
                </div>
                <div className={styles.talkDate}>11／05 (SAT) 14:00-15:30 </div>
                <div>
                  <div className={styles.talkContent}>
                    管中祥 KUANG Chung-Hshiang
                  </div>
                  <div className={styles.talkContent}>
                    ＠CREATORS空間102 共享吧CREATORS’Space R102 Coworking Space
                  </div>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      「假訊息」問題最近幾年讓不少國家備感困擾，不論是國家安全、國民健康、政治選擇、民生消費都受到假消息的影響，而臺灣因「關西機場事件」讓假訊息的爭議更受關注，再加上中國威脅、新冠疫情、社會對立，我們時時都在假訊息的威脅中。
                    </div>
                    <div>
                      但，假訊息不是什新鮮事，有人類就有假訊息，生物為了自保或侵略充滿了各式各樣的偽裝，這都是假訊息。只是，大眾與社群媒體的時代，假訊息又是如何練成的？數位技術讓假訊息變得更厲害？而假訊息如何影響人心人性？人心人性又如何影響假訊息？
                    </div>
                  </Box>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      In recent years, many countries are beset by the problem
                      of fake news, whether in terms of national security,
                      public health, political choice, or people’s livelihood
                      and consumption. “The incident of the Kansai International
                      Airport” further brings the issue of fake news into the
                      spotlight in Taiwan. On top of that, the growing threat
                      from China, the Covid-19 pandemic, and the social
                      antagonism all remind us that fake news has posed a
                      constant menace to us.
                    </div>
                    <div>
                      However, fake news is hardly new. Where there are people,
                      there is fake news. To protect themselves or invade
                      others, creatures have evolved camouflage of every stripe
                      that bewilders their enemies. We can’t help wondering how
                      fake news is formed in the age of mass and social media.
                      Does digital technology help fake news go viral? How do
                      fake news and people affect each other?
                    </div>
                  </Box>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour7 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt7} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt7_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt7_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt7_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt7_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt7 && instanceReftt7.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt7.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt7.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett7 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>

              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>
                    人工智慧偏見與演算法透明義務
                  </div>
                  <div className={styles.talkTitle}>
                    AI Bias and Algorithmic Transparency Obligations
                  </div>
                </div>
                <div className={styles.talkDate}>11／12 (SAT) 14:00-15:30 </div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t3}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.talkContent}>
                    宋皇志 SUNG Huang-Chih
                  </div>
                  <div className={styles.talkContent}>
                    @ 動畫創作者基地1樓多功能廳 R116 Multi-function Space of
                    Creative Base for Animators
                  </div>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      人工智慧已滲入人類社會的諸多角落，在帶給人們全新的生活體驗與便利性的同時，也衍生了許多關於法律、倫理、與道德的議題。本講座將聚焦於人工智慧所產生之偏見與歧視的問題。首先列舉多起國內外新聞為例，指出部份政府與企業所使用人工智慧存在對膚色、種族、或性別的偏見與歧視，於社會上掀起巨大漣漪。若欲消弭人工智慧的偏見與歧視，首應釐清偏見與歧視的來源。因此本講座從學理面與實務面提出人工智慧出現偏見歧視的四個可能原因，並針對每一原因提出可能的解方。本講座最後介紹國際上要求政府與企業應公開人工智慧演算法之呼籲，並說明企業的反彈與窒礙難行之處。
                    </div>
                  </Box>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      Artificial intelligence (AI) has infiltrated into many
                      aspects of human society, offering people novel life
                      experience and convenience whilst raising many legal,
                      ethical, and moral issues. Focusing on AI-induced
                      prejudice, this talk firstly draws examples from a number
                      of news home and abroad, so as to point out that the AI
                      algorithms used by some governments and corporations hold
                      color, racial or gender prejudice which has produced a
                      ripple effect upon our society. To eradicate AI-induced
                      prejudice, identifying its source is the top priority.
                      Accordingly, this talk not only presents four possible
                      causes of AI-induced prejudice in terms of theory and
                      practice, but also proposes feasible solutions to each of
                      them. This talk concludes with an introduction to the
                      international call for governments and corporations to
                      disclose AI algorithms, and explicates the backlash from
                      corporations and the difficulties in implementation.
                    </div>
                  </Box>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour8 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt8} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt8_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt8_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt8 && instanceReftt8.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt8.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt8.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett8 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>
            </div>

            <div className={styles.talkLineWapper}>
              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>（吃）誰的肉？</div>
                  <div className={styles.talkTitle}>
                    談人造肉、科學、倫理與當代藝術的交會
                  </div>
                  <div className={styles.talkTitle}>(Eat) Whose Meat?</div>
                  <div className={styles.talkTitle}>
                    On the Encounter among Cultured Meat, Science, Ethics, and
                    Contemporary Art
                  </div>
                </div>
                <div className={styles.talkDate}>11／19 (SAT) 14:00-16:00 </div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t12}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.talkContent}>
                    黃宗潔 HUANG Tsung-Chieh
                  </div>
                  <div className={styles.talkContent}>
                    @ 動畫創作者基地1樓多功能廳 R116 Multi-function Space of
                    Creative Base for Animators
                  </div>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      本次講座將由駐柏林藝術家泰瑞莎．舒柏特的《(吃)我的肉》（m(E)at
                      me）談起，藝術家在該作品的演出過程中吃下由自身血清培養而來的肌肉細胞。類似的藝術展演形式，至少可回溯至2003年澳洲藝術家奧隆．凱茨與艾奧娜特．祖爾的藝術作品《非具形烹飪》（Disembodied
                      Cuisine），該作品即以吃下法國第一塊以組織培養出的青蛙細胞肉排，並邀請民眾嘗試，碰觸人造肉的相關倫理思辨。但無論是當代藝術的展演形式及倫理界線，或人造肉技術與基因科技，始終不乏爭議的聲音。本次講座將由這些作品為起點，試圖透過當代藝術與科學、倫理之間難以理清的錯綜關係，進一步思考藝術為科學、倫理，以及人與動物關係所帶來的種種衝擊和啟發的可能性。
                    </div>
                  </Box>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      This talk will begin with m(E)at me, a project by
                      Berlin-based artist Theresa SCHUBERT who ate the muscle
                      cells cultured from her own serum during the performance.
                      Similar performances can be at least traced back to
                      Disembodied Cuisine (2003) by Australian artists Oron
                      CATTS and Ionat ZURR who aroused ethical concern about
                      cultured meat by eating the first frog cell steak made
                      from tissue culture in France and inviting the public to
                      taste it.
                    </div>
                    <div>
                      However, controversies persist over the presentation form
                      and ethical norm of contemporary art as well as the
                      cultured meat technology and genetic engineering. Treating
                      these works as the point of departure and by reference to
                      the intricate entanglements among contemporary art,
                      science, and ethics, this talk attempts to further
                      consider the impacts and inspirations that art may bring
                      to science, ethics, and the relationship between humans
                      and animals.
                    </div>
                  </Box>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour9 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt9} className="keen-slider">
                        <div className="keen-slider__slide">
                          <ReactPlayer
                            width="100%"
                            height="100%"
                            url="https://www.youtube.com/watch?v=aYRHmbgRYyY"
                            className={styles.react_player}
                            controls={true}
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt9_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt9_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt9_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt9 && instanceReftt9.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt9.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt9.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett9 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>

              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>藝術家座談</div>
                  <div className={styles.talkTitle}>Artist Talk</div>
                </div>
                <div className={styles.talkDate}>11/27 (SUN) 18:30-19:30</div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t1}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t11}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t7}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>

                  <div className={styles.talkContent}>
                    她的實驗室空間集（區秀詒、陳侑汝） Her Lab Space (AU
                    Sow-Yee, CHEN Yow-Ruu)、莊偉慈CHUANG
                    Wei-Tzu（主持Moderator）
                  </div>
                  <div className={styles.talkContent}>
                    @ CREATORS空間102 共享吧 CREATORS’ Space R102 Coworking
                    Space
                  </div>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour10 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt10} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt10_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt10_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt10_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt10_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt10 && instanceReftt10.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt10.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt10.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett10 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>
            </div>

            <div className={styles.talkLineWapper}>
              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>
                    超限連結：亞洲藝術交流論壇
                  </div>
                  <div className={styles.talkTitle}>
                    The Unrestricted Society Forum
                  </div>
                </div>
                <div className={styles.talkDate}>11／17 (THU) 14:00-17:00 </div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t25}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t22}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t24}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t21}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t23}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t26}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                    <Box component="span">
                      <Image
                        src={t2}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.talkContent}>
                    金聖淵Seong-Youn KIM×徐祥昊Sang-Ho SEO×金泰潤Tai-Yun
                    KIM×倫納德．巴托洛枚烏斯Leonard Bartolomeus×李收玲Sue R.
                    LEE×駱麗真LOH Li-Chen×吳達坤WU Dar-Kuen（主持Moderator）
                  </div>
                  <div className={styles.talkContent}>
                    @ 動畫創作者基地1樓多功能廳 R116 Multi-function Space of
                    Creative Base for Animators
                  </div>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      2022
                      C-LAB年度大展「超限社會」，透過國內外12組藝術家的作品探討現今快速科技發展所帶來的隱憂與困境，喚醒人們重新思考人與技術之間的雙向關係。
                    </div>
                    <div>
                      本次「超限連結：亞洲藝術交流論壇」特地邀請釜山雙年展執行董事金聖淵、釜山文化基金會文化進用與參與部主任徐祥昊、韓國現代汽車集團文化中心經理金泰潤、日本山口媒體藝術中心（YCAM）策展人倫納德．巴托洛枚烏斯、韓國藝術經營支援中心（KAMS）藝術實驗部門總監李收玲，等五位亞洲地區藝術機構專業人士來臺，與C-LAB當代藝術實驗平台總監吳達坤、台北當代藝術館館長駱麗真進行圓桌對談，交流分享各自藝術機構與國家如何因應快速科技社會所帶來的影響與困境。C-LAB年度大展「超限社會」，透過國內外12組藝術家的作品探討現今快速科技發展所帶來的隱憂與困境，喚醒人們重新思考人與技術之間的雙向關係。
                    </div>
                  </Box>
                  <Box className={styles.talkContent} pt={3}>
                    <div>
                      In the exhibition The Unrestricted Society, 12 artists
                      probe into the issues and dilemmas surrounding
                      technological development from different perspectives,
                      thereby raising awareness to understand the relationship
                      between humanity and technology.
                    </div>
                    <div>
                      This forum brings together five participating
                      professionals of Asian artistic organizations, including
                      the executive committee director of Busan Biennale
                      Seong-Youn KIM, head of the Busan Cultural Foundation‘s
                      Department of Cultural Access and Participation Sang-Ho
                      SEO, the senior manager of Hyundai Artlab Tai-Yun KIM, the
                      curator of YCAM Leonard Bartolomeus, the Arts Korea Lab of
                      Korea Arts Management Service (KAMS) the director of Sue
                      R. LEE in conversation with the director of C-LAB
                      Contemporary Art Platform WU Dar-Kuen and the director of
                      the Museum of Contemporary Art, Taipei Li-Chen Loh.
                      Sharing their experience and insights into how their art
                      organization and country the impact by the rapid
                      technology society.
                    </div>
                  </Box>
                </div>
                <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  {/* <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div> */}
                </a>
                <div>
                  {/*** talk11 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt11} className="keen-slider">
                        <div className="keen-slider__slide">
                          <ReactPlayer
                            width="100%"
                            height="100%"
                            url="https://www.youtube.com/watch?v=J3QPVDvazTc"
                            className={styles.react_player}
                            controls={true}
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt11_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt11_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt11_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt11_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt11_5}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt11_6}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt11_7}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt11_8}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt11 && instanceReftt11.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt11.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt11.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett11 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div></div>
      </Section>

      {/*** section tour ***/}
      <Section>
        <div ref={ref5} id="tour" className={styles.secBlk}>
          <motion.div className={styles.tourWapper} animate={controls_content}>
            <div className={styles.tourLineWapper}>
              <div className={styles.tourBlk}>
                <div>
                  <div className={styles.tourTitle}>專家導覽</div>
                  <div className={styles.tourTitle}>Expert Guided Tour</div>
                </div>
                <div className={styles.tourDate}>10／02 (SUN) 14:00-15:00</div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t8}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.tourContent}>
                    專家導覽 Expert Guided Tour｜邱誌勇 Chih-Yung Aaron CHIU
                  </div>
                  <div className={styles.tourContent}>
                    @ 西服務中心1樓集合 Meeting Point: West i-CENTER, 1F
                  </div>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour02 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt2} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt2_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt2_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt2_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt2_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt2 && instanceReftt2.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt2.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt2.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett2 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>
              <div className={styles.tourBlk}>
                <div>
                  <div className={styles.tourTitle}>策展人導覽 </div>
                  <div className={styles.tourTitle}>Curator’s Tour</div>
                </div>
                <div className={styles.tourDate}>11／06 (SUN) 14:00-15:00 </div>
                <div>
                  <Box>
                    <Box component="span">
                      <Image
                        src={t7}
                        alt="photo of speaker"
                        width={68}
                        height={68}
                      />
                    </Box>
                  </Box>
                  <div className={styles.tourContent}>
                    策展人導覽 Curator’s Tour｜莊偉慈 CHUANG Wei-Tzu
                  </div>
                  <div className={styles.tourContent}>
                    @ 西服務中心1樓集合 Meeting Point: West i-CENTER, 1F
                  </div>
                </div>
                {/* <a
                  href="https://clab.org.tw/project/the-unrestricted-society-events/"
                  target="blank"
                >
                  <div>
                    <div className={styles.tourLink}>報名 sign up</div>
                  </div>
                </a> */}
                <div>
                  {/*** tour06 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderReftt6} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt6_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt6_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt6_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt6_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    {loadedtt6 && instanceReftt6.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceReftt6.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceReftt6.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" +
                                (currentSlidett6 === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )}
                  </Box>
                </div>
              </div>
            </div>
            <div className={styles.tourLineWapper}>
              <div className={styles.tourBlk}>
                <div>
                  <div className={styles.tourTitle}>
                    超限社會｜共學導覽培訓計畫
                  </div>
                  <div className={styles.tourTitle}>
                    The Unrestricted Society｜Docent: A Project for Collectives
                  </div>
                </div>
                <div>
                  <div className={styles.tourContent}>
                    2022年C-LAB的年度展覽「超限社會」展覽主題圍繞著當今人們所面對飛速發展的各式科技，及其為我們帶來的種種便利與影響。展覽透過藝術語彙探討如演算法、數位隱私、臉部辨識、深偽技術、試管肉、加密貨幣和元宇宙等議題。
                    策劃團隊邀請策展人孫以臻規劃「超限社會：共學導覽培訓計畫」，從「閱讀」展覽開始，引領有志於擔任藝文導覽員的參與者們，一步步地透過拆解展覽，建構來自自身的問題意識，並帶入之後的導覽實踐中。
                  </div>
                </div>
                <div>
                  {/*** tour12 slider image ***/}
                  <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "30vw" } }}>
                    <div className="navigation-wrapper">
                      <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_1}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_2}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_3}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_4}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_5}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_6}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_7}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_8}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_9}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_10}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_11}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_12}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_13}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide">
                          <Image
                            src={tt12_14}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_15}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_16}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_17}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_18}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_19}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_20}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_21}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_22}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_23}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                        <div className="keen-slider__slide ">
                          <Image
                            src={tt12_24}
                            alt="artworks"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      {loaded && instanceRef.current && (
                        <>
                          <Arrow
                            left
                            onClick={(e) =>
                              e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                          />

                          <Arrow
                            onClick={(e) =>
                              e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                              currentSlide ===
                              instanceRef.current.track.details.slides.length -
                                1
                            }
                          />
                        </>
                      )}
                    </div>
                    {/* {loaded && instanceRef.current && (
                      <div className="dots">
                        {[
                          ...Array(
                            instanceRef.current.track.details.slides.length
                          ).keys(),
                        ].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                instanceRef.current?.moveToIdx(idx);
                              }}
                              className={
                                "dot" + (currentSlide === idx ? " active" : "")
                              }
                            ></button>
                          );
                        })}
                      </div>
                    )} */}
                  </Box>
                </div>
              </div>
              {/* <div className={styles.tourBlk}>
                <div>
                  <div className={styles.tourTitle}>團體預約導覽</div>
                  <div className={styles.tourTitle}>Group Guided Tours</div>
                </div>
                <a href="https://forms.gle/cS2UZ8gcfXmPVCJY9" target="blank">
                  <div>
                    <div className={styles.tourLink}>
                      團體預約導覽請按此填寫報名表單
                    </div>
                    <div className={styles.tourLink}>
                      Group guided tours are available by reservation. Make a
                      reservation online.
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div></div>
      </Section>
    </>
  );
}
