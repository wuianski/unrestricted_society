import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import cy from "../public/imgs/artist_profile/cy.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/cy/001 Large.jpeg";
import work2 from "../public/imgs/artworks/cy/002 Large.jpeg";
import work3 from "../public/imgs/artworks/cy/003 Large.jpeg";
import work4 from "../public/imgs/artworks/cy/004 Large.jpeg";
import work5 from "../public/imgs/artworks/cy/005 Large.jpeg";
import work6 from "../public/imgs/artworks/cy/006 Large.jpeg";

import ReactPlayer from "react-player";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function CyModal() {
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
  return (
    <>
      {/*** artist name ***/}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={{ xs: 0, sm: -1, md: -2 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>陳乂 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>CHEN Yi</div>
        </Item>
      </Stack>

      {/*** artwork title ***/}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_work}>鎏 /</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>Current/y</div>
        </Item>
      </Stack>

      {/*** artwork slider stack ***/}
      <Stack
        direction={{ xs: "column" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={6}
        ml={{ xs: 0, sm: 2, md: 2 }}
      >
        <Item
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
            paddingLeft: { xs: 0, sm: 1, md: 1 },
          }}
        >
          {/*** artwork sider image ***/}
          <Box>
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url="https://www.youtube.com/watch?v=giGOnnZUuwE"
                    className={styles.react_player}
                    controls={true}
                  />
                </div>
                <div className="keen-slider__slide">
                  <Image src={work1} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide">
                  <Image src={work2} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide">
                  <Image src={work3} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide">
                  <Image src={work4} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide">
                  <Image src={work5} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide">
                  <Image src={work6} alt="artworks" placeholder="blur" />
                </div>
              </div>
            </div>
            {loaded && instanceRef.current && (
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
            )}
          </Box>

          {/*** artwork sider text ***/}
          {/* <Box pt={1} ml={2} mr={2}>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              藝術家提供，詹慶紅攝影
            </Box>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              Photo courtesy of the artist, photo credit: Sasha CHAN
            </Box>
          </Box> */}
        </Item>
      </Stack>

      {/*** artwork text ***/}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 4, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_content}>2020</div>
          <div className={styles.Modal_content_nj}>
            擴增實境、複合機械裝置，尺寸依場地而定
          </div>
          <div className={styles.Modal_content_nj}>
            AR, complex mechanical installation, dimensions variable
          </div>
          <Box className={styles.Modal_content_nj} pt={3}>
            © 陳乂工作室
            <div className={styles.Modal_content_nj}>© CHEN YI STUDIO</div>
          </Box>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            「鎏」，讀音同「流」，原意為色澤狀態好的金子，作為映照作品中數據流形成的來源——虛擬貨幣交易金流。Current有流動之意，與貨幣「Currency」為同根詞，後者強調流動自一人至另一人的狀態或事實。「Current/y」以斜線號表示「或者」、「及」；電腦語言中，斜線號也是資料夾與路徑的分隔符號，故以Current/y
            作為強調全球虛擬金流交易當下，即時狀況的轉換與流動路徑。
            價值的成立來自於人與人之間對於觀念、物質、情感的交換，共識達成時完成交易，並成就了集體價值的信仰。以區塊鏈透明的交易紀錄作為資訊來源，作品將其轉譯為物理資料流。交易產生流動，投射價值於加密貨幣上，流動量成就價值。
          </div>
          <div className={styles.Modal_content}>
            《鎏
            /》探詢價值交換在數位維度與技術相互萌發的混沌狀態。將貨幣流動方向與量值在空間中運算成像，使觀者能感受全球虛擬貨幣金融的價值流動，如自然環境的物理能量傳遞，時而徐緩，又瞬時劇烈。
            （文／李彥儀）
          </div>

          <Box className={styles.Modal_content}>
            <div className={styles.Modal_content}>
              The Mandarin title of the artwork “ 鎏” is a combination of two
              characters, “current”and “gold,” to refer to the gold of high
              purity, while its pronunciation comes from the former, as well as
              its English title. Based on its dual meanings, the artwork further
              reflects on the transaction flow of virtual currencies, with which
              the data flow of the work emerges. The current is a flow, sharing
              the same etymological root with Currency, while the latter
              emphasizes the situation of flowing from one person to another.
              The slash in its English title “Current/y” not only suggests the
              dual meanings of “either/or” but is also recognized as a
              separation mark in the programming language for folders and file
              paths. It thus highlights the instant transition and paths of flow
              in global transactions of virtual currencies. Values are
              established through an interpersonal exchange of ideas, materials,
              and feelings. They reach an agreement, complete the transaction,
              and share a belief in collective values. With blockchain and its
              transparent transaction records as its data source, the artwork
              translates it into a physical data flow. The transaction creates
              the current and projects values onto the cryptocurrency, while its
              values are determined and validated by the dimensions of the
              current.
            </div>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              Current/y
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              investigates the liminal state of value exchanges in the digital
              dimension, where it has a reciprocal relationship with the
              equivalently bourgeoning technology. It generates images in the
              space based on the direction of the currency flow and the
              turnover, allowing viewers to experience the current of virtual
              currencies around the world like the energy transfer in the
              natural and physical world–with its gentle or sometimes even
              drastic flow. (Written by LEE Yen-Yi)
            </Box>
          </Box>
        </Item>
      </Stack>

      {/*** artist bio ***/}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={cy} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            於跨領域的藝術實踐中，透過現實與虛擬意識的觀察比對，探討存在、意識、慾望、數據、環境、政治、經濟與社會等議題。畢業於國立臺北藝術大學科技藝術研究所，獲
            2006 臺北美術獎， 2010
            年與友成立豪華朗機工，團隊曾參與曼徹斯特亞洲三年展（ 2014
            ）、泰國雙年展（ 2018 ）、越後妻有三年展（ 2022 ）等，於 2019
            年獲得第10屆總統文化獎。
          </div>

          <div className={styles.Modal_content}>
            CHEN Yi is known for his interdisciplinary artistic practice which
            explores issues including existence, consciousness, human desire,
            data, environment, politics, economy, and society through the
            observation and comparison of tangible substance and virtual
            consciousness. Graduating from Taipei National University of Arts,
            he was the top-prize recipient at the 2006 Taipei Art Awards and
            later co-founded the artist collective LuxuryLogico in 2010, with
            works shown at Asia Triennial Manchester 2014, Thailand Biennale
            2018, Echigo Tsumari Art Triennale 2022. In 2019, LuxuryLogico
            received Presidential Culture Award, Youth Creative Award of
            Presidential Culture Award, Taiwan. etc.
          </div>
        </Item>
      </Stack>
    </>
  );
}
