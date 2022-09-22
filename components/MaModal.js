import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import ma from "../public/imgs/artist_profile/ma.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/ma/MSA_DeepMeditations_Sonar2019-1 Large.jpeg";
import work2 from "../public/imgs/artworks/ma/MSA_DeepMeditations_Sonar2019-2 Large.jpeg";
import work3 from "../public/imgs/artworks/ma/MSA_DeepMeditations_Sonar2019-3 Large.jpeg";
import work4 from "../public/imgs/artworks/ma/MSA_DeepMeditations_Sonar2019-4 Large.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function MaModal() {
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
          <div className={styles.Modal_title}>米莫．艾克滕</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Memo AKTEN</div>
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
          <div className={styles.Modal_work}>深度冥想：60 分鐘的萬物簡史</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>
            Deep Meditations: A Brief History of Almost Everything in 60 Minutes
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
          <Box pt={1} ml={2} mr={2}>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              《深度冥想：60 分鐘的萬物簡史》2019 年於西班牙巴塞隆納Sonar+D
              前衛音樂暨新媒體藝術國際音樂節展出照。藝術家提供
            </Box>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              <Box
                sx={{ fontStyle: "italic", textAlign: "center" }}
                component="span"
                className={styles.Modal_content}
              >
                Deep Meditations: A Brief History of Almost Everything in 60
                Minutes
              </Box>
              <Box
                component="span"
                ml={1}
                className={styles.Modal_content}
                sx={{ textAlign: "center" }}
              >
                at Sonar+D, Barcelona, Spain, 2019. Photo courtesy of the artist
              </Box>
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
          <div className={styles.Modal_content_nj}>
            沉浸式大型聲音及錄像裝置、三頻道錄像、立體聲 ，60 分鐘
          </div>
          <div className={styles.Modal_content_nj}>
            Immersive, large-scale video and sound installation, 3-channel
            videos, stereo audio, 60’
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            這是一個大型影音裝置、多頻道的一小時抽象電影，也是一座歡慶生命、大自然、宇宙，以及我們對宇宙主觀體驗的紀念碑。作品透過對深度人工神經網路的想像，以緩慢冥想式和不斷演變的圖像與聲音，邀請觀眾走一趟精神之旅。
          </div>

          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              Deep Meditations: A Brief History of Almost Everything in 60
              Minutes
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              is a large-scale video and sound installation; a multi-channel,
              one-hour abstract film; a monument that celebrates life, nature,
              the universe, and our subjective experience of it. The work
              invites us on a spiritual journey through slow, meditative,
              continuously evolving images and sounds, told through the
              imagination of a deep artificial neural network.
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
            <Image src={ma} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            來自土耳其伊斯坦堡的跨域藝術家、實驗電影工作者、音樂人和電腦科學家。他以新興科技和運算作為媒介，創作影像、聲音、電影、大型反應裝置與表演。倫敦大學金匠學院博士，主修人工智慧與表現型人機互動，現任教於加州大學聖地牙哥分校運算與新媒體藝術學系。
          </div>

          <div className={styles.Modal_content}>
            Memo AKTEN is a multi-disciplinary artist, experimental filmmaker,
            musician, and computer scientist from Istanbul, Turkey. He works
            with emerging technologies and computation as a medium, to create
            images, sounds, films, large-scale responsive installations, and
            performances. He has a PhD in artificial intelligence and expressive
            human-machine interaction from Goldsmiths University of London and
            is assistant professor of Computational/New Media Art at University
            of California, San Diego (UCSD).
          </div>
        </Item>
      </Stack>
    </>
  );
}
