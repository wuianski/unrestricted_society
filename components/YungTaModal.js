import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import yungTa from "../public/imgs/artist_profile/yungTa.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/yt/yt2.jpg";
import work2 from "../public/imgs/artworks/yt/yt6.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function YungTaModal() {
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
          <div className={styles.Modal_title}>張永達 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>CHANG Yung-Ta</div>
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
          <div className={styles.Modal_work}></div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>scape.unseen-co_2[ch.]</div>
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
            不鏽鋼、壓克力、13 吋 LCD
            面板、arduino、電腦、二氧化碳感測晶片、全音域單體喇叭、擴大晶片，86（寬）×306（深）×180（高）公分，共兩組件
          </div>
          <div className={styles.Modal_content_nj}>
            Stainless steel, acrylic, 13-inch LCD panel, arduino, computer, CO2
            sensor chip, full- range speaker driver, amplifier module, 86 (w) x
            306 (d) x 180 (h) cm, 2 sets
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            《scape.unseen-co_2[ch.]》對展場空間的二氧化碳濃度進行偵測，轉譯為即時生成的聲音和影像裝置，將數據處理過程如爆炸圖展開，以切片標本的方式現，從感測器＞微處理晶片＞電腦＞程式＞視覺＞聲音的層層過程，提供從不同的面向觀看和探索作品與環境、人的關係。
          </div>

          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              scape.unseen-co_2[ch.]
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              detects the density of carbon dioxide in the exhibition space and
              translates it into real-time generative sounds and images,
              rendering its data processing as an explosive image and displaying
              it as a slice sample. Through the multi-layered process from
              sensor, microprocessor chip, computer, and program to vision and
              sound, the project provides different perspectives to observe and
              explore its relationships with humans and the environment.
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
            <Image src={yungTa} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            1981年生於臺灣，現居於臺北。創作關注於生活中細微、易於忽略的物理現象和聲響，透過對於聲音、材質、科學、資料數據之間的實驗和研究，思考人與科技、環境之間的關係。作品形式包含聲音－影像、實驗聲響、聲音裝置和現場演出。作品曾展出於：龐畢度中心梅茲分館（2021）、2020台北雙年展、ARTEFACT:
            Chernobyl 33（2019）等。
          </div>

          <div className={styles.Modal_content}>
            Born in Taiwan in 1981, CHANG Yung-Ta currently lives in Taipei.
            Drawing on the rigorous experiments and studies on sound, materials,
            science, and data, his artistic practice explores the subtle,
            negligible physical phenomena and aural experiences in our quotidian
            existence to discusses the relations among humankind, technology,
            and environment. CHANG’s works encompass multiple forms that range
            from audio-visual and experimental sound to sound installation and
            live performance, as presented in numerous solo exhibitions, joint
            exhibitions, and art festivals, including Centre Pompidou-Metz
            (2021), Taipei Biennial (2020), ARTEFACT: Chernobyl 33 (2019), etc
          </div>
        </Item>
      </Stack>
    </>
  );
}
