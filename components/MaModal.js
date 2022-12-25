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
import work1 from "../public/imgs/artworks/ma/001 Large.jpeg";
import work2 from "../public/imgs/artworks/ma/002 Large.jpeg";
import work3 from "../public/imgs/artworks/ma/003 Large.jpeg";
import work4 from "../public/imgs/artworks/ma/004 Large.jpeg";
import work5 from "../public/imgs/artworks/ma/005 Large.jpeg";
import work6 from "../public/imgs/artworks/ma/006 Large.jpeg";

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
                <div className="keen-slider__slide ">
                  <Image src={work5} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide ">
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
            這是一個大型影音裝置、多頻道的一小時抽象電影，也是一座歡慶生命、
            大自然、宇宙，以及我們對宇宙主觀體驗的紀念碑。作品透過對深度人工
            神經網路的想像，以緩慢冥想式和不斷演變的圖像與聲音，邀請觀眾走一
            趟精神之旅。
          </div>
          <div className={styles.Modal_content}>
            何謂愛、信仰、儀式、崇敬和上帝？我們能夠教育機器這些非常抽象、主
            觀的人類概念嗎？由於沒有明確定義和客觀視覺呈現，一個人工神經網路
            就被用來訓練我們對這類概念的主觀體驗，而雲端成為這些集體意識的保
            存者，影像存檔決定其模樣。
          </div>
          <div className={styles.Modal_content}>
            艾克滕運用程式語言自動下載的方式，從Flickr
            抓取數十萬張標記包含上述與其他字詞的圖片，來訓練這個神經網路，最終作品圖像由該網路深處的記憶碎片重新生成。聲音則來自YouTube
            上世界各地的禱文、祈禱和儀式，並以另一個人工神經網路訓練後產生。《深度冥想：60
            分鐘的萬物簡史》帶我們歷經宇宙的誕生、行星和地球的生成、演化、生態的形成、人類的誕生、文明、戰爭、藝術、宗教、科學⋯⋯。
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
          <div className={styles.Modal_content}>
            What does love look like? What does faith look like? Or ritual?
            Worship? What does God look like? Could we teach a machine about
            these very abstract, subjectively human concepts? As they have no
            clearly defined, objective visual representations， an artificial
            neural network is instead trained on our subjective experiences of
            them, specifically, on what the keepers of our collective
            consciousness thinks they look like, archived by our new overseers
            in the cloud.
          </div>
          <div className={styles.Modal_content}>
            Hundreds of thousands of images were scraped (i.e. autonomously
            downloaded by a script) from the photo sharing website Flickr,
            tagged with these words (and many more) to train the neural network.
            The images seen in the final work are not the images downloaded, but
            are generated from scratch from the fragments of memories in the
            depths of the neural network. Sound is generated by another
            artificial neural network trained on hours of religious and
            spiritual chants, prayers, and rituals from around the world,
            scraped from YouTube. The abstract narrative of the film takes us
            through the birth of the cosmos, formation of the planets and earth,
            evolution, formation of ecosystems, the birth of humanity,
            civilization, culture, war, art, religion, science….
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
