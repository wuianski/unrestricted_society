import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import ts from "../public/imgs/artist_profile/ts.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/ts/001 Large.jpeg";
import work2 from "../public/imgs/artworks/ts/002 Large.jpeg";
import work3 from "../public/imgs/artworks/ts/003 Large.jpeg";
import work4 from "../public/imgs/artworks/ts/004 Large.jpeg";
import work5 from "../public/imgs/artworks/ts/005 Large.jpeg";
import work6 from "../public/imgs/artworks/ts/006 Large.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function TsModal() {
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
          <div className={styles.Modal_title}>泰瑞莎．舒柏特 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Theresa SCHUBERT</div>
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
          <div className={styles.Modal_work}>（吃）我的肉</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>mEat me</div>
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
              卡佩利卡藝廊提供，Tina LAGLER 攝影
            </Box>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              Photo courtesy of Kapelica Gallery, photo credit: Tina LAGLER
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
            複合表演、人體肌肉細胞、人體血清、實驗室材料、影片、聲音及生理回
            饋、機器學習模型、文本、肉、培育箱、工具，尺寸依場地而定
          </div>
          <div className={styles.Modal_content_nj}>
            Hybrid performance, human muscle cells, human serum, lab materials,
            video, sound & biofeedback, machine learning models, text, meat,
            incubator, tools, dimensions variable
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            面對當前科技已滲入社會每個層面，且最終得以重構人類身體的時代，《（吃）我的肉》要人們重新評估我們與肉、身體和物質的關係，以及實驗室流程的倫理面。
          </div>
          <div className={styles.Modal_content}>
            許多後人類主義思想家都強調以非人類中心的視角來觀看世界，停止對物種進行等級劃分。舒柏特在此提出了更激進的結論：如果我們將人類也視為一種動物，那麼人也應該是物質和食物。她拿自己作實驗，從血液裡分離出血清，以此複製出她的肌肉細胞，成為以人類組織為基礎的培植肉；此舉消融了人與動物間既有的消費主義階級，並提出食物供給的新觀點。運用創新的生物科技，舒柏特的演出行動遊走於煉金術和未來工業元素之間，作品質疑人體的不可侵犯性，同時批評資本主義的肉類生產。這個看似使人類受傷害的行為，意在喚醒人們對生命政治的認知，進而能更有意識地面對自然與所有生物。{" "}
          </div>

          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              mEat me
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              asks for a re-evaluation of our dealings with meat, one’s own body
              and materiality in times where technology has entered every part
              of our society and finally also made our bodies reconstructable,
              as well as the ethical aspect of laboratory processes.
            </Box>
          </Box>

          <Box className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              Many thinkers of Posthumanism stress a non-human-centred
              perspective on the world that we should stop hierarchizing
              species. SCHUBERT has drawn the radical consequence that if we see
              the human as an animal, then we should also be material and food.
              In the project
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              mEat me
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              , a serum, gained out of her own blood, was used to reproduce her
              muscle cells that had prior been extracted. The resulting cultured
              meat based on human tissue shifts normative borders and dissolves
              the consumerist hierarchies between humans and animals to suggest
              a new perspective on food supply.
            </Box>
          </Box>

          <Box className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              The resulting performance
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              mEat me
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              moves between elements of alchemistic practice and futuristic
              industry, while questioning the inviolability of the human body
              and criticizing capitalist meat production at the same time.
              Making the human vulnerable can also be understood as a strategy
              for raising awareness of biopolitical issues and a more conscious
              dealing with nature and its living beings at large.
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
            <Image src={ts} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            威瑪包浩斯大學媒體藝術博士，定居柏林的藝術家、研究者和策展人。在煉金術和科幻小說的美學中，多個獲獎作品皆在質疑人類中心主義，並化另類視角和感官體驗為可能。創作形式從音像與複合媒材的結合，到觀念與沉浸式裝置或表演。作品展出遍及全球，包含林茲電子藝術節、柏林藝術實驗室、伊斯坦堡雙年展、歐洲媒體藝術節等。
          </div>

          <div className={styles.Modal_content}>
            SCHUBERT is a Berlin-based artist, researcher, and curator. She
            holds a PhD in Media Art from Bauhaus-University Weimar. In an
            aesthetic between alchemy and science fiction, SCHUBERT’s multiple
            award-winning works question anthropocentrism and enable alternative
            visions and/or new sensory experiences. Her practice combines
            audiovisual and hybrid media to conceptual and immersive
            installations or performances. Her work has been exhibited
            internationally. Venues include: Ars Electronica, Linz, Art
            Laboratory Berlin, Istanbul Biennial, European Media Art Festival,
            etc.
          </div>
        </Item>
      </Stack>
    </>
  );
}
