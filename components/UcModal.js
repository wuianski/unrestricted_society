import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import uc from "../public/imgs/artist_profile/uc.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/uc/uc1.jpeg";
import work2 from "../public/imgs/artworks/uc/uc3.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function UcModal() {
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
          <div className={styles.Modal_title}>哀傷電路 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Unhappy Circuit</div>
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
          <div className={styles.Modal_work}>用九種語言寫給星際的訊息</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>
            Interstellar Message Written in 9 Languages of the Earth
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
          <div className={styles.Modal_content}>2022</div>
          <div className={styles.Modal_content_nj}>
            視聽影像，單頻道錄像、雙聲道、10-15 分鐘
          </div>
          <div className={styles.Modal_content_nj}>
            Audio visual, 1-channel video, 2-channel sound, 10’-15’
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
            《用九種語言寫給星際的訊息》以韓文、湄公河五國（緬甸、寮國、泰國、柬埔寨和越南）和三個臺灣的語言（中文、臺語、客家語），書寫成外星智慧生物可理解的星際訊息。作品最後一部分的書寫是關於全球氣候變遷，這反映了人類現況。
          </div>

          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              Interstellar Message Written in 9 Languages of the Earth
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              is an Interstellar Message aimed at making information written in
              the languages of South Korea, five Mekong countries (Myanma,
              Thailand, Laos, Cambodia, and Vietnam) and Taiwan’s three
              languages (Mandarin, Hokkien, and Hakka) understandable to
              extraterrestrial intelligence. Above all, the last part of this
              work is written about global climate change. This message reflects
              the present of humanity. The Interstellar Message heading into
              distant space is, after all, echoes of the universe toward
              humanity.
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
            <Image src={uc} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            韓國新媒體藝術家，他的作品融合藝術、科學和科技，創作以人類學、生態學、未來學和宇宙學等跨學科觀點為基礎。貫穿他作品的主題是對未知的探索，希望藉此獲得的洞見能擴展我們對自身和周遭世界的理解，並最終尋求人類的下一個方向。作品曾入選林茲電子藝術節、SIGGRAPH
            Asia Art Gallery與濟州現代美術館典藏。
          </div>

          <div className={styles.Modal_content}>
            Unhappy Circuit is a new media artist in Korea. His works consist of
            the convergence of art, science, and technology, which take a
            multidisciplinary perspective based on anthropology, ecology,
            futurology, and cosmology. The main theme that penetrates his work
            is an exploration of the unknown. He wants to expand our
            understanding of ourselves and the world surrounding us through
            insights gained from exploring the unknown possibilities, and
            ultimately seeks the next direction for humanity. His works were
            selected for Ars Electronica, SIGGRAPH Asia Art Gallery, and Jeju
            Museum of Contemporary Art Collection.
          </div>
        </Item>
      </Stack>
    </>
  );
}
