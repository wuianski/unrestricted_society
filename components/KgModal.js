import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import kg from "../public/imgs/artist_profile/kg.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/kg/kg3-1.jpeg";
import work2 from "../public/imgs/artworks/kg/kg6-1.jpeg";
import work3 from "../public/imgs/artworks/kg/kg9-1.jpeg";
import work4 from "../public/imgs/artworks/kg/kg9.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function KgModal() {
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
          <div className={styles.Modal_title}>奇里亞姬．戈妮 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Kyriaki GONI</div>
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
          <div className={styles.Modal_work}>禁止演算法觀眾</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>
            Not Allowed for Algorithmic Audiences
          </div>
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
                <div className="keen-slider__slide ">
                  <Image src={work3} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide ">
                  <Image src={work4} alt="artworks" placeholder="blur" />
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
          <div className={styles.Modal_content}>2021</div>
          <div className={styles.Modal_content_nj}>
            4K電腦生成影片、旁白、聲音景觀、原始文本、34 個人聲卡典割字、3
            張鋁版印刷，27 分 36 秒影片、卡典割字 18（高）公分、鋁版印刷每張
            75（高）× 60（寬）公分
          </div>
          <div className={styles.Modal_content_nj}>
            4K CGI Video, 3D model, voice over, soundscape, original text, 34
            words from the human sounds ontology vinyl lettering, 3 digital
            prints on aluminum, video: 27’ 36’’, vinyl lettering: 18 (h) cm,
            digital prints: 75 (h) x 60 (w) cm each
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            《禁止演算法觀眾》是一件半虛構作品，戈妮將目前在人工智慧、語音介面，以及人機關係的大量研究結果融入敘事中；這位數位助理揭露了與監聽基礎建設有關的資料，以及基於社會失能所設計出的程式和運算，同時討論了人工智慧的足跡，與其不被人看見的勞動，和對周邊的衝擊。{" "}
          </div>

          <Box className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              The semi-fictional work
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              Not Allowed for Algorithmic Audiences
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              reveals data regarding the listening infrastructures, as well as
              the social dysfunctions on which its programming and operation is
              based. It discusses the footprint of artificial intelligence, the
              hidden labor and the impact on the peripheries. On the last day,
              before it patent expires, in a final effort to reconcile humans
              and machines, it shares tips with us on how it can manage not to
              be heard by algorithms.
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
            <Image src={kg} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            媒體藝術家，定居雅典。擅用多媒材，以創作探索科技的政治、情感和環境層面。關注開發主義、監視、分散式網路，以及人與非人類的關係，其裝置作品建立另類的生態系統。曾受機構委託，並在全球各地以個人和團體的形式展出，包含2021林茲電子藝術節、2020年摩登之愛（或稱冷親密時代的愛情）、2020
            Transmediale跨媒體藝術節等。
          </div>

          <div className={styles.Modal_content}>
            Kyriaki GONI is a media artist based in Athens. Employing a variety
            of media, her practice explores the political, affective, and
            environmental aspects of technology. She focuses on extractivism,
            surveillance, human and other than human relations, distributed
            networks, and infrastructures. Her installations build alternative
            ecosystems and shared experiences by connecting the fictional with
            the scientific. Her works have been commissioned by institutions and
            exhibited worldwide in solo and group settings, including Ars
            Electronica 2021, Modern Love (or the Love in the Age of Cold
            Intimacies), Transmediale 2020, etc.
          </div>
        </Item>
      </Stack>
    </>
  );
}
