import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import pc from "../public/imgs/artist_profile/pc.png";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/pc/001 Large.jpeg";
import work2 from "../public/imgs/artworks/pc/002 Large.jpeg";
import work3 from "../public/imgs/artworks/pc/003 Large.jpeg";
import work4 from "../public/imgs/artworks/pc/004 Large.jpeg";
import work5 from "../public/imgs/artworks/pc/005 Large.jpeg";
import work6 from "../public/imgs/artworks/pc/006 Large.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function PcModal() {
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
          <div className={styles.Modal_title}>保羅．奇里奧 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Paolo CIRIO</div>
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
          <div className={styles.Modal_work}>捕捉</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>Capture</div>
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
          {/* <Box pt={1}>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              藝術家提供
            </Box>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              Photo courtesy of the artist
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
            噴墨印刷，尺寸依場地而定
          </div>
          <div className={styles.Modal_content_nj}>
            Inkjet prints, dimensions variable
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            作品由四千名法國警察的臉組成，他們曾出現在2010至2020
            年間法國的抗爭運動中。奇里奧搜集了一千張含有警察的照片，並以人臉辨識軟體分析，再將所獲得的四千張警察臉孔，創建為一個線上資料庫，透過群眾的力量，逐一指認他們的身分。不僅如此，奇里奧還印出這些警察的大頭照，張貼在巴黎各處，讓他們暴露在公共場所。
          </div>
          <div className={styles.Modal_content}>
            藉由討論人臉辨識系統和人工智慧潛在的使用與錯用，《捕捉》質疑牽涉
            其中的不對等權力。而這類科技對隱私權規範的匱乏，最終將逆轉，用以
            對抗主張強力使用它們的當權者。這件作品的挑釁意味，在2020年展出
            時也引發法國內政部長與警察工會對其強行審查。
          </div>
          <div className={styles.Modal_content}>
            作為一名行動主義者，奇里奧在2021年發起「廢除歐洲人臉辨識系統」運動（#BanFacialRecognitionEU），將包含其研究結果的法律訴狀，與超過五萬人簽名支持的連署書，寄給數個歐洲機構。歐洲執委會則回覆，認同有必要對人工智慧的使用進行立法限制。{" "}
          </div>

          <Box className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              The series of photos
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              Capture
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              is composed of French police officers’ faces. Paolo CIRIO
              collected 1,000 public images of police in photos taken during
              protests in France from 2010 to 2020 and processed them with
              facial recognition software. CIRIO then created an online platform
              with a database of the resulting 4,000 faces of police officers to
              crowdsource their identification by name. Moreover, CIRIO printed
              the officers’ headshots as street art posters and posted them
              throughout Paris to expose them also in the public space.
            </Box>
          </Box>
          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              //ml={1}
            >
              Capture
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              commented on the potential uses and misuses of facial recognition
              and artificial intelligence by questioning the asymmetry of power
              at play. The lack of privacy regulations of such technology
              eventually turned against the same authorities that urge the use
              of it. This provocation triggered the reactions of the Interior
              Minister of France and the police unions which forced censorship
              of the artwork, despite it being celebrated by the French citizens
              and the international press.
            </Box>
          </Box>

          <div className={styles.Modal_content}>
            Initially, as an activist, CIRIO introduced a campaign to ban facial
            recognition technology in all of Europe. In 2021 for his campaign
            #BanFacialRecognitionEU, CIRIO delivered a package to various
            European institutions containing a legal complaint with his research
            and petition with over 50,000 signatures supporting a ban on facial
            recognition in Europe. The European Commission replied to CIRIO‘s
            complaint by acknowledging the need to legally restrict the use of
            artificial intelligence.
          </div>
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
            <Image src={pc} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            以挑釁、批判和具前瞻性的手法，體現資訊社會複雜性固有的矛盾、倫理、限制和潛能。作品涉及的權力結構、全球大眾媒體和網路藝術中的普羅大眾，從中審視當代社會、政治與經濟的進程，使得他經常受到調查，並承受來自各權力組織與網民的威脅。曾獲2014林茲電子藝術大獎金尼卡獎、2006
            Transmediale跨媒體藝術節二獎等。
          </div>

          <div className={styles.Modal_content}>
            CIRIO’s work embodies the contradictions, ethics, limits, and
            potentials inherent to the social complexity of information society
            through a provocative, critical, and proactive approach. His
            artworks engage power structures, global mass media, and the general
            public in Internet art that examine contemporary social, political,
            and economic processes. As a result of his performances, CIRIO has
            often been subject to investigations and personal threats by
            governmental and military authorities, as well as online crowds of
            ordinary people. He has won a number of awards, including Golden
            Nica first prize at Ars Electronica in Linz, 2014 and Transmediale
            second prize in Berlin, 2006 among others awards.
          </div>
        </Item>
      </Stack>
    </>
  );
}
