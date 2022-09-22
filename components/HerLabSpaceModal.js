import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import sowYee from "../public/imgs/artist_profile/sowYee.jpg";
import yowRuu from "../public/imgs/artist_profile/yowRuu.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/herlabspace/herlabspace1.jpeg";
import work2 from "../public/imgs/artworks/herlabspace/herlabspace2.jpeg";
import work3 from "../public/imgs/artworks/herlabspace/herlabspace3.jpeg";
import work4 from "../public/imgs/artworks/herlabspace/herlabspace5.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function HerLabSpaceModal() {
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
          <div className={styles.Modal_title}>她的實驗室空間集</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Her Lab Space</div>
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
          <div className={styles.Modal_work}>
            如果，家族旅行：一個世界（2022）
          </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>
            A World: If, a Family Trip (2022)
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
                <div className="keen-slider__slide">
                  <Image src={work3} alt="artworks" placeholder="blur" />
                </div>
                <div className="keen-slider__slide">
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
              《如果，家族旅行：一個世界》（2021）演出一景，李欣哲攝影
            </Box>
            <Box className={styles.Modal_content} sx={{ textAlign: "center" }}>
              <Box component="span" className={styles.Modal_content} ml={1}>
                Performance view for
              </Box>
              <Box
                component="span"
                sx={{ fontStyle: "italic" }}
                className={styles.Modal_content}
              >
                If, A Family Trip: A World (2021).
              </Box>
              <Box component="span" className={styles.Modal_content} ml={1}>
                Photo credit: LEE Hsin-Che
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
          <div className={styles.Modal_content}>2021／2022</div>
          <div className={styles.Modal_content_nj}>
            影像、聲音、燈光裝置，尺寸依場地而定
          </div>
          <div className={styles.Modal_content_nj}>
            Video, sound, and lighting installation, dimensions variable
          </div>
          <Box className={styles.Modal_content_nj} pt={3}>
            ✷本作品演出時間為 11/26（六）—11/27（日）11:00
            -18:00，須事先報名，其餘時間未開放參觀。每趟旅程約 15 分鐘，一場限
            10 名參與者。
          </Box>
          <Box component="span" className={styles.Modal_content_nj}>
            11/15（二）
          </Box>
          <a href="https://www.accupass.com/go/aworld2022" target="blank">
            <Box
              className={styles.Modal_content_nj}
              sx={{ borderBottom: "1px solid #fff", width: "fit-content" }}
              component="span"
              ml={1}
            >
              開放報名
            </Box>
          </a>
          <Box className={styles.Modal_content_nj} pt={4}>
            ✷The performance will only take place at 11:00-18:00 on 11/26 (SAT)
            -11/27 (SUN). Prior registration is required. The 15-minute “trip”
            will start with 10 passengers only.
          </Box>
          <Box component="span" className={styles.Modal_content_nj}>
            11/15
          </Box>
          <a href="https://www.accupass.com/go/aworld2022" target="blank">
            <Box
              className={styles.Modal_content_nj}
              sx={{ borderBottom: "1px solid #fff", width: "fit-content" }}
              component="span"
              ml={1}
            >
              SIGN UP
            </Box>
          </a>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            《如果，家族旅行：一個世界（2022）》是一段恍如未來的私密旅行，敘事前沿的歌正要響起，這是聲音開始震動耳膜成為可辨感知前微幅游移的多重瞬間。
          </div>
          <div className={styles.Modal_content}>
            如果世界只有一個。創作者嘗試將「世界」置換成動詞——worlding——各種權力結構（含殖民）藉由旅行和書寫，以技術和科技製圖，展開各自的世界。
          </div>

          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              A World: If, a Family Trip (2022)
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              is a secret journey as if it were in the future. The prelude to
              the story is a song about to start, capturing the subtle moment,
              shifting in its plural forms, right before the sound reaches the
              eardrum and becomes a recognizable vibration to the ear.
            </Box>
          </Box>
          <Box className={styles.Modal_content}>
            If there is only one world—and we emphasize the “if.” The artist
            attempts to verify “world” into “worlding,” revealing how various
            power structures (including colonization) render their own worlds
            through traveling and writing with different mapping technologies.
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
            <Image src={sowYee} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_nameInGroup}>區秀詒</div>
          <div className={styles.Modal_nameInGroup_en}>AU Sow-Yee</div>
          <div className={styles.Modal_content}>
            出生成長於吉隆坡，現居臺北。創作主要以錄像、觀念、裝置等混合形式，探討和擴延影像與影像製造以及和歷史、政治、權力之間的關係。曾獲2021臺北美術獎優選，作品於2022釜山雙年展「We,
            on the Rising
            Wave」、2018台北雙年展「後自然：美術館作為一個生態系統」等展覽發表。現為《數位荒原》特約作者，「亞答屋84號圖書館」共同創辦人之一。
          </div>

          <div className={styles.Modal_content}>
            Born and raised in Kuala Lumpur, Malaysia, AU Sow-Yee now lives and
            works in Taipei, Taiwan. She specializes in mixed formats of video,
            conceptual art, and installation, while she creates artworks that
            explore and extend from images and the production of images, as well
            as the connections between history, politics, and power. She
            received the Honorable Mention Award at 2021 Taipei Art Awards, and
            her works have been shown in Busan Biennale 2022—We, on the Rising
            Wave, Taipei Biennial 2018: Post-Nature—A Museum as an Ecosystem,
            etc. She is also a guest writer for online magazine No Man’s Land
            and co-founder of Kuala Lumpur’s Rumah Attap Library and Collective.
          </div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
        mt={4}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={yowRuu} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_nameInGroup}>陳侑汝</div>
          <div className={styles.Modal_nameInGroup_en}>CHEN Yow-Ruu</div>
          <div className={styles.Modal_content}>
            生於高雄，現居臺北。畢業於國立臺北藝術大學劇場藝術創作研究所，主修導演。作品融合在地環境，並以聲音、影像、裝置和現場演出為創作手法。劇場導演作品：2022《失物之城》、2022臺北藝術節《黑洞春光》、2022臺北兒童藝術節《我的黑夜獸》等。2019年參與聯展「情書・手繭・後戰爭」，同年獲日本秋吉台國際藝術村獎助計畫。
          </div>

          <div className={styles.Modal_content}>
            Born in Kaohsiung, the Taipei-based artist CHEN Yow-Ruu received her
            MFA in Directing from the Graduate Institute of Theatre Performance
            and Playwriting at Taipei National University of Arts. Her works
            often integrate the local environment by using sound, video,
            installation, and live performances as creative tactics. Her theatre
            works as director include Hypnocity: An Immersive Musical Theatre
            (2022), Glory Hole (2022 Taipei Arts Festival), Night Monster (2022
            Taipei Children’s Arts Festival), etc. She also participated in the
            group exhibition Letter．Callus．Post-War in 2019 and was selected
            as the sponsored artist-in-residence at Akiyoshidai International
            Art Village in Japan in the same year.
          </div>
        </Item>
      </Stack>
    </>
  );
}
