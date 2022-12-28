import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import hsienYu from "../public/imgs/artist_profile/hsienYu.jpeg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/hy/001 Large.jpeg";
import work2 from "../public/imgs/artworks/hy/002 Large.jpeg";
import work3 from "../public/imgs/artworks/hy/003 Large.jpeg";
import work4 from "../public/imgs/artworks/hy/004 Large.jpeg";
import work5 from "../public/imgs/artworks/hy/005 Large.jpeg";
import work6 from "../public/imgs/artworks/hy/006 Large.jpeg";

import ReactPlayer from "react-player";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function HsienYuModal() {
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
          <div className={styles.Modal_title}>鄭先喻 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>CHENG Hsien-Yu</div>
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
          <div className={styles.Modal_work}>這可能是你</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>It Could Be You</div>
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
                    url="https://www.youtube.com/watch?v=hrDpojXeYYk"
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
              肖像產出是使用社群網站代號或是論壇暱稱，藉由
              Google圖片搜尋下載，再與人工智慧肖像產出工具「Generate Photo
              API」、「FaceGenerator with CelebA」合併生成。
            </Box>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              Face images are generated by “Generate Photo API” and “Face
              Generator with CelebA” re-dataset and merged by Google image
              search with name, social account ID.
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
          <div className={styles.Modal_content}>2022</div>
          <div className={styles.Modal_content_nj}>
            軟體、印表機、熱感紙，即時生成影像，裝置可變
          </div>
          <div className={styles.Modal_content_nj}>
            Software, printer, thermal paper, real-time generative video,
            installations may var
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            作品源自2019
            年鄭先喻的個展｛同化者｝中無題作品之延伸，藉由網路伺服器端應用，搜尋並搜集地區性線上論壇與即時聊天室資訊，建立資料庫模型以及視覺產出。當網路鄉民一留言，系統運用發文或留言者的帳號去搜尋可能的個人資料與肖像照片，再藉由合成資料技術結合機器學習成像，產出一系列的假想個資。
          </div>
          <div className={styles.Modal_content}>
            觀眾將於現場觀看網路鄉民即時訊息，現場列印機裝置則定時將合成的個人資料列印產出。
          </div>

          <div className={styles.Modal_content}>
            As a continuation of the untitled works featured in CHENG Hsien-Yu‘s
            solo exhibition｛Assimilator｝ in 2019, It Could Be You employs
            internet servers to collect messages from regional online forums and
            chatrooms to create a database model and to generate visual images.
            When netizens post a message, the system will detect it and
            instantly search for any personal information and portraits
            available by the users’ IDs, with which it adopts and integrates the
            technology of synthetic data with machine learning to generate
            images as a series of imaginary and fictional personal data.
          </div>

          <div className={styles.Modal_content}>
            Apart from the real-time and on-site display of the instant messages
            posted by netizens around the digital world, the installation will
            also print out the synthetic personal data at regular intervals.{" "}
          </div>

          {/* <Box className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              As a continuation of the untitled works featured in CHENG
              Hsien-Yu‘s solo exhibition｛Assimilator｝ in 2019,
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              It Could Be You
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              employs internet servers to collect messages from regional online
              forums and chatrooms to create a database model and to generate
              visual images. When netizens post a message, the system will
              detect it and instantly search for any personal information and
              portraits available by the users’ IDs, with which it adopts and
              integrates the technology of synthetic data with machine learning
              to generate images as a series of imaginary and fictional personal
              data.
            </Box>
          </Box> */}
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
            <Image src={hsienYu} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            1984年出生於臺灣高雄市，現居住、工作於臺北。國立臺北藝術大學劇場設計系，並於荷蘭格羅寧根漢斯大學密涅瓦藝術學院Frank
            Mohr
            Institute取得藝術碩士，現為藝術家與軟體開發人員。創作多以電子裝置、軟體、生物電子實驗裝置為主，內容多在探討人類行為、情感、軟體與機械之間的關係。2021年獲第19屆台新藝術獎——視覺藝術獎，個展、聯展於臺灣、亞洲與歐洲等地。
          </div>

          <div className={styles.Modal_content}>
            Born in Kaohsiung, Taiwan in 1984, CHENG Hsien-Yu currently works
            and lives in Taipei as an artist and software developer. He
            graduated with a BFA from the Department of Theatrical Design and
            Technology at Taipei National University of the Arts, and holds a MA
            from the Frank Mohr Institute in the Minerva Art Academy at Hanze
            University Groningen, the Netherlands, while his work mostly focuses
            on the relationships amongst human behavior, emotion, software, and
            machinery, as explored through his electronic installations,
            software, and experimental bio-electronic devices shown in both solo
            and group exhibitions around Taiwan, Asia, and Europe. He has
            received the 19th Taishin Arts Award (in the category of Visual Art)
            in 2021.
          </div>
        </Item>
      </Stack>
    </>
  );
}
