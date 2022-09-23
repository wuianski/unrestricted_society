import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import kjm from "../public/imgs/artist_profile/kjm.jpg";
import kkh from "../public/imgs/artist_profile/kkh.jpeg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/slitscope/Photo03Large.jpeg";
import work2 from "../public/imgs/artworks/slitscope/Photo06Large.jpeg";
import work3 from "../public/imgs/artworks/slitscope/Photo07Large.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function SlitscopeModal() {
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
          <div className={styles.Modal_title}>雙縫鏡 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>SLITSCOPE </div>
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
          <div className={styles.Modal_work}>我提問 7.0</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>I Question 7.0</div>
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
          <Box pt={1}>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              藝術家提供
            </Box>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              Photo courtesy of the artist
            </Box>
          </Box>
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
          <div className={styles.Modal_content}>2018</div>
          <div className={styles.Modal_content_nj}>人工智慧，750×300公分</div>
          <div className={styles.Modal_content_nj}>
            Artificial intelligence, 750 x 300 cm
          </div>
          <Box className={styles.Modal_content_nj} pt={3}>
            ✷本作品為「CREATORS國際交流計畫──ACC 」
            <div className={styles.Modal_content_nj}>支持展出</div>
          </Box>
          <div className={styles.Modal_content_nj}>
            ✷This work is supported by “CREATORS International Exchange
            Project—ACC.”
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            《我提問7.0》開始於一個問題：「人類可以和人工智慧就藝術進行討論嗎？」
            觀眾將透過作品所提供的QR Code
            參與對話，並上傳照片，這些照片以人工智慧所理解的一種形象化圖像成為作品的一部分，也讓我們思量人類與機器是否可以共同進化。
          </div>

          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              I Question 7.0
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              is an interactive media art where the artificial intelligence
              meets and has conversations with its audiences. The project began
              from a question, “Can human have conversations with AI about art?”
              Audience can participate in the conversation via a provided QR
              Code in
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              I Question 7.0
            </Box>
            <Box component="span" className={styles.Modal_content} ml={1}>
              and post pictures of theirs. The pictures become part of the work
              as a visualization of images that the AI has appreciated. The
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              I Question 7.0
            </Box>
            <Box component="span" className={styles.Modal_content} ml={1}>
              also throws us a point to ponder that if humans and machines can
              co-evolve together.
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
            <Image src={kjm} alt="artist profile" placeholder="blur" />
          </div>
          <div className={styles.profileContainer}>
            <Image src={kkh} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            新媒體藝術雙人組，由金制民和金根瑩組成。兩位藝術家分別活躍於藝術和科學領域，2018年因《我提問》而開始合作並發展此系列作品。「雙縫鏡」取自量子力學的雙縫實驗，此實驗研究人們沒有意識到的二重性存在之間的差距。作品包含：擅聊天，和觀眾討論藝術的人工智慧《我提問》；人工智慧舞者《MADI》、人工智慧空間打造《遊戲烏托邦》和人工智慧詩人《SIA》。
          </div>

          <div className={styles.Modal_content}>
            SLITSCOPE is a new media art team which consists of KIM Jae-Min and
            KIM Keun-Hyoung. The two artists have been active in their own
            fields, art and science respectively, and had the opportunity to
            collaborate on
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              I Question
            </Box>
            <Box component="span" className={styles.Modal_content} ml={1}>
              in 2018. SLITSCOPE got its name from the double-slit experiment,
              proposing to look into the gap between the existential duality
              that we are not aware of. Some of their artworks include: AI
              conversationalist
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              I Question
            </Box>
            <Box component="span" className={styles.Modal_content} ml={1}>
              who discusses art with people, AI dancer
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              MADI
            </Box>
            <Box component="span" className={styles.Modal_content} ml={1}>
              , AI room maker
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              Ludenstopia
            </Box>
            <Box component="span" className={styles.Modal_content} ml={1}>
              and AI poet
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              SIA.
            </Box>
          </div>
        </Item>
      </Stack>
    </>
  );
}
