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
import work1 from "../public/imgs/artworks/yt/001 Large.jpeg";
import work2 from "../public/imgs/artworks/yt/002 Large.jpeg";
import work3 from "../public/imgs/artworks/yt/003 Large.jpeg";
import work4 from "../public/imgs/artworks/yt/004 Large.jpeg";
import work5 from "../public/imgs/artworks/yt/005 Large.jpeg";
import work6 from "../public/imgs/artworks/yt/006 Large.jpeg";

import ReactPlayer from "react-player";

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
                <div className="keen-slider__slide">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url="https://www.youtube.com/watch?v=xYNr2Ebl8m0"
                    className={styles.react_player}
                    controls={true}
                  />
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
            從透視法、暗箱，發展到現今的擴增實境（AR）、虛擬實境（VR），科技持續拓展人類觀看世界的視角與象限。原本人們透過視覺、聽覺等感知所建構的世界，在數位化加劇推進的情況下，產生了新面貌：由巨量微感測運算與數據調控所形成的世界，一個身體感官所無法觸及（無所感）的世界，一個不可見的景（scape）。
          </div>
          <div className={styles.Modal_content}>
            在「scape.unseen」系列作品的概念脈絡下，張永達進行一系列透過對資訊科技、資料數據監測的轉譯，以微觀至宏觀的尺度，在空間裝置、雕塑、聲音、程式數據和即時生成影像之間，建構環境與科技的關係，並在科技輔具的協助下，提供人們在當代加速度層層堆疊的資訊中，找尋觀看的「參考點」。{" "}
          </div>
          <div className={styles.Modal_content}>
            《scape.unseen-co_2[ch.]》對展場空間的二氧化碳濃度進行偵測，轉譯為即時生成的聲音和影像裝置，將數據處理過程如爆炸圖展開，以切片標本的方式現，從感測器＞微處理晶片＞電腦＞程式＞視覺＞聲音的層層過程，提供從不同的面向觀看和探索作品與環境、人的關係。
          </div>

          <Box className={styles.Modal_content}>
            <div className={styles.Modal_content}>
              From perspective and camera obscura to today’s AR and VR, the
              advancement of technology has continuously broadened the possible
              angles and dimensions for us to observe the world. Driven by the
              accelerating digitalization, the world originally perceived
              through physical senses such as sight and hearing now adopts a new
              look, described by the artist as the invisible “scape,” a
              physically intangible world built on massive microsensory
              computation and data adaptation which cannot be sensed or felt.{" "}
            </div>
            <div className={styles.Modal_content}>
              It is within the context of scape.unseen that CHANG Yung-Ta has
              conducted a series of translations based on information technology
              and data monitoring. From a microcosmic to macrocosmic scale, the
              artist attempts to construct the relationship between the
              environment and technology through the interlinked space
              installations, sculptures, sounds, program data, and real-time
              generative images, employing technology devices as its support to
              provide a “point of reference” for viewing when one is overwhelmed
              by the rapid accumulation of information in today’s world.{" "}
            </div>
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
