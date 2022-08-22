import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  useTime,
  useTransform,
} from "framer-motion";
import Zoom from "@mui/material/Zoom";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";
import styles from "./InvewComponent.module.css";
import React from "react";
import ReactPlayer from "react-player";

import Image from "next/image";
import closeIcon from "../public/imgs/close_icon.jpg";
// import profilePic from "../public/imgs/artist_temp.png";
// import VideoInSVG from "./VideoInSVG";
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

import Drawer from "@mui/material/Drawer";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  return (
    <section className={styles.section} ref={ref}>
      {/* <span
        className={styles.span}
        style={{
          transform: isInView ? "translateX(5vw)" : "translateX(0px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      > */}
      {children}
      {/* </span> */}
    </section>
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

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    // return () => {
    //   window.removeEventListener("resize", setDimension);
    // };
    // console.log("screenSize: ", screenSize.dynamicWidth);
    // console.log("Element is in view 2: ", isInView2);

    if (isInView1 == true) {
      controls_viewbox.start({
        viewBox: `0 0 ${screenSize.dynamicWidth * 1.2} ${
          screenSize.dynamicHeight * 1.2
        }`,
        transition: { type: "spring", duration: 2 },
      });
      controls_pattern.start({
        // x: -100,
        // y: -100,
        rotate: [0, 5],
        transition: { type: "spring", duration: 2 },
      });
      controls_title.start({
        width: "150%",
        x: 0,
        y: 120,
        transition: { type: "tween", duration: "1" },
      });
      controls_content.start({
        rotate: [40, -5],
        scale: [0, 1],
        opacity: [0, 1],
        transition: { type: "spring", duration: 1.8 },
      });
    } else if (isInView2 == true) {
      controls_viewbox.start({
        viewBox: `${screenSize.dynamicWidth * 1.4} 0 ${
          screenSize.dynamicWidth * 1.2
        } ${screenSize.dynamicHeight * 1.2}`,
        transition: { type: "spring", duration: 2 },
      });
      controls_pattern.start({
        // x: 100,
        // y: -100,
        rotate: [5, 0],
        transition: { type: "spring", duration: 2 },
      });
      controls_content.start({
        rotate: [40, 0],
        scale: [0, 1],
        opacity: [0, 1],
        transition: { type: "spring", duration: 1.8 },
      });
    } else if (isInView3 == true) {
      controls_viewbox.start({
        viewBox: `${screenSize.dynamicWidth * 1.4} ${
          screenSize.dynamicHeight * 2.6
        } ${screenSize.dynamicWidth * 1.2} ${screenSize.dynamicHeight * 1.2}`,
        transition: { type: "spring", duration: 2 },
      });
      controls_pattern.start({
        // x: 100,
        // y: -180,
        rotate: [0, 5],
        transition: { type: "spring", duration: 2 },
      });
      controls_content.start({
        rotate: [40, 0],
        scale: [0, 1],
        opacity: [0, 1],
        transition: { type: "spring", duration: 1.8 },
      });
    } else if (isInView4 == true) {
      controls_viewbox.start({
        viewBox: `${screenSize.dynamicWidth * 1} ${
          screenSize.dynamicHeight * 4.2
        } ${screenSize.dynamicWidth * 1.2} ${screenSize.dynamicHeight * 1.2}`,
        transition: { type: "spring", duration: 2 },
      });
      controls_pattern.start({
        // x: 100,
        // y: -180,
        rotate: [0, 5],
        transition: { type: "spring", duration: 2 },
      });
      controls_content.start({
        rotate: [40, 0],
        scale: [0, 1],
        opacity: [0, 1],
        transition: { type: "spring", duration: 1.8 },
      });
    } else if (isInView5 == true) {
      controls_viewbox.start({
        viewBox: `0 ${screenSize.dynamicHeight * 3.4} ${
          screenSize.dynamicWidth * 1.2
        } ${screenSize.dynamicHeight * 1.2}`,
        transition: { type: "spring", duration: 2 },
      });
      controls_pattern.start({
        // x: 100,
        // y: -180,
        rotate: [5, 0],
        transition: { type: "spring", duration: 2 },
      });
      controls_content.start({
        rotate: [40, 0],
        scale: [0, 1],
        opacity: [0, 1],
        transition: { type: "spring", duration: 1.8 },
      });
    }
  }, [isInView1, isInView2, isInView3, isInView4, isInView5, screenSize]);

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
      // opacity: 0.8,

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
      // backgroundColor: "#fff",
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

  return (
    <>
      {/*** menu ***/}
      <div className={styles.siteTitle}>
        <div>
          <a href="#home">
            <div className={styles.menuBtn}>The Unrestricted Society</div>
          </a>
        </div>
      </div>
      <div className={styles.menu}>
        <ul>
          <div>
            {/* <div>
              <a href="#exhibition">
                <div className={styles.menuBtn}>EXHIBITION</div>
                
              </a>
            </div> */}
            <motion.a href="#exhibition">
              <motion.div
                className={styles.container}
                initial="collapsed"
                whileHover="expanded"
                animation="expanded"
              >
                <motion.div className={styles.zhText} variants={ZhTextVariant}>
                  展覽資訊
                </motion.div>

                <motion.div className={styles.textBG} variants={BGVariant} />
                <motion.div className={styles.enText} variants={EnTextVariant}>
                  {" "}
                  Exhibition{" "}
                </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div>
            {/* <div>
              <a href="#artist">
                <div className={styles.menuBtn}>ARTIST</div>
              </a>
            </div> */}
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
                  {" "}
                  artist{" "}
                </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div className={styles.menuBtn}>
            {/* <div>
              <a href="#talk">
                <div className={styles.menuBtn}>TALK</div>
              </a>
            </div> */}
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
                  {" "}
                  Talk{" "}
                </motion.div>
              </motion.div>
            </motion.a>
          </div>

          <div className={styles.menuBtn}>
            {/* <div>
              <a href="#tour">
                <div className={styles.menuBtn}>GUIDED TOUR</div>
              </a>
            </div> */}
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
                  {" "}
                  Guided Tour{" "}
                </motion.div>
              </motion.div>
            </motion.a>
          </div>
        </ul>
      </div>

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
                超限社會 THE UNRESTRICTED SOCIETY 2022/09/25 - 11/27
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
      <div className={styles.bgBlock}>
        <motion.svg
          // width="100%"
          // height="100%"
          viewBox={`0 0 ${screenSize.dynamicWidth} ${screenSize.dynamicHeight}`}
          animate={controls_viewbox}
        >
          <image xlinkHref="/imgs/bg_s.png" />
          {/* <image xlinkHref="/imgs/pattern_s.png" /> */}
          <motion.image
            xlinkHref="/imgs/pattern_s.png"
            animate={controls_pattern}
            //width="200%"
            // height="100%"
            //width={`${screenSize.dynamicWidth * 1}`}
            // height="auto"
            //height={`${screenSize.dynamicHeight * 1}`}
          />
        </motion.svg>
      </div>

      {/*** section home ***/}
      <Section>
        <div ref={ref1} id="home" className={styles.secBlk}>
          <motion.div className={styles.vid} animate={controls_content}>
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=o_th8s3MHs4"
              className={styles.react_player}
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
            <div className={styles.exTitle}>超限社會策展論述</div>
            <div className={styles.exCurator}>策展人/莊偉慈</div>
            <div className={styles.exCurator_en}>Curator/Chuang Wei Tzu</div>
            <div className={styles.exContent}>
              「超限社會」一展中，藝術家從不同角度探討科技發展所產生的問題與困境：比如「我們即數據」意義下該如何看待數位隱私權；思索數位監控、臉部辨識以及深偽技術可能帶來的問題；或運用細胞複製技術思考糧食危機的可能選項等。除此之外，站在技術具有中介角色的特質上，展覽中的作品也可看到藝術家嘗試跨領域協作，運用新技術探索藝術觀念能如何轉化抽象的資料或內容，進而創造出新的感官體驗。
              一直以來，技術總被視為是人類擺脫桎梏的工具，然而透過它所創造的自由是否為真，還是那樣的自由其實是幻象？在「超限社會」展覽中，將提供觀眾另一種理解技術的方式。
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
              Technology has always been deemed a tool to liberate the human
              race. However, we may wonder whether the liberation it created is
              genuine freedom or all an illusion. The exhibition The
              Unrestricted Society will provide the visitors with an alternative
              way of understanding technology.
            </div>
            <div className={styles.exMore}>more</div>
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
                      <div
                        className={styles.closeModal}
                        onClick={handleCloseMA}
                      >
                        <Image
                          src={closeIcon}
                          alt="Icon of close modal"
                          width={73}
                          height={73}
                        />
                      </div>
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
                <span className={styles.artistName_en}>Hsien-Yu CHENG</span>
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
                  雙縫鏡（金制民&金根瑩）
                </span>
                <span className={styles.artistName_en}>
                  SLITSCOPE (KIM Jae-min &KIM KeunHyoung)
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
                  哈爾西．布根地 & 法蘭西絲卡．帕內塔
                </span>
                <span className={styles.artistName_en}>
                  Halsey BURGUND & Francesca PANETTA
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
                  Her Lab Space (AU Sow Yee, CHEN Yow Ruu)
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
                <div>
                  <div className={styles.talkTitle}>藝術家座談</div>
                  <div className={styles.talkTitle}>Artist Talk</div>
                </div>
                <div className={styles.talkDate}>09／24 (SAT) 14:00-15:30</div>
                <div>
                  <div className={styles.talkContent}>
                    金根瑩KIM Keun-Hyoung×哀傷電路Unhappy
                    Circuit×吳達坤WU Dar-Kuen（主持Moderator）
                  </div>
                  <div className={styles.talkContent}>
                    @ 動畫創作者基地一樓多功能廳 R116 Multi-function Space of
                    Creative Base for Animators
                  </div>
                </div>
              </div>
              <div className={styles.talkBlk}>
                <div>
                  <div className={styles.talkTitle}>藝術家座談</div>
                  <div className={styles.talkTitle}>Artist Talk</div>
                </div>
                <div className={styles.talkDate}>10／02 (SUN) 17:00-18:30 </div>
                <div>
                  <div className={styles.talkContent}>
                    法咪咪FAMEME×張永達CHANG Yung-Ta×陳乂CHEN Yi×鄭先喻CHENG
                    Hsien-Yu×莊偉慈CHUANG Wei-Tzu（Moderator）
                  </div>
                  <div className={styles.talkContent}>
                    @ 動畫創作者基地一樓多功能廳 R116 Multi-function Space of
                    Creative Base for Animators
                  </div>
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
                  <div className={styles.talkContent}>黃豆泥 mashbean</div>
                  <div className={styles.talkContent}>
                    @ 西服務中心2樓 West i-CENTER, 2F
                  </div>
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
                  <div className={styles.talkContent}>羅禾淋 LUO He-Lin</div>
                  <div className={styles.talkContent}>
                    @ CREATORS空間102 共享吧 CREATORS’Space R102 Coworking Space
                  </div>
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
                  <div className={styles.tourContent}>
                    專家導覽 Expert Guided Tour｜邱誌勇 Chih-Yung Aaron CHIU
                  </div>
                  <div className={styles.tourContent}>
                    @西服務中心集合 Meeting Point: West i-CENTER, 1F
                  </div>
                </div>
              </div>
              <div className={styles.tourBlk}>
                <div>
                  <div className={styles.tourTitle}>策展人導覽 </div>
                  <div className={styles.tourTitle}>Curator’s Tour</div>
                </div>
                <div className={styles.tourDate}>11／06 (SUN) 14:00-15:00 </div>
                <div>
                  <div className={styles.tourContent}>
                    策展人導覽 Curator’s Tour｜莊偉慈 CHUANG Wei-Tzu
                  </div>
                  <div className={styles.tourContent}>
                    @西服務中心集合 Meeting Point: West i-CENTER, 1F
                  </div>
                </div>
              </div>
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
