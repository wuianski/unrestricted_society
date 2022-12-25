import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import hb from "../public/imgs/artist_profile/hb.jpg";
import fp from "../public/imgs/artist_profile/fp.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/hbfp/001 Large.jpeg";
import work2 from "../public/imgs/artworks/hbfp/002 Large.jpeg";
import work3 from "../public/imgs/artworks/hbfp/003 Large.jpeg";
import work4 from "../public/imgs/artworks/hbfp/004 Large.jpeg";
import work5 from "../public/imgs/artworks/hbfp/005 Large.jpeg";
import work6 from "../public/imgs/artworks/hbfp/006 Large.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function HbFpModal() {
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
          <div className={styles.Modal_title}>哈爾西．布根地</div>
          <div className={styles.Modal_title}>法蘭西絲卡．帕內塔</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Halsey BURGUND</div>
          <div className={styles.Modal_title_en}>Francesca PANETTA</div>
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
          <div className={styles.Modal_work}>如果登月失敗</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_work_en_nc}>
            In Event of Moon Disaster
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
                  {/*** artwork sider text ***/}
                  {/* <Box pt={1} ml={2} mr={2}>
                    <Box
                      className={styles.Modal_content}
                      sx={{ textAlign: "center" }}
                    >
                      演員路易．D．惠勒使用深度學習技術轉變為理查．尼克森總統。
                    </Box>
                    <Box
                      className={styles.Modal_content}
                      sx={{ textAlign: "center" }}
                    >
                      Actor, Lewis D. WHEELER, is transformed into President
                      Richard NIXON using deep learning techniques.
                    </Box>
                  </Box> */}
                </div>
                <div className="keen-slider__slide">
                  <Image src={work2} alt="artworks" placeholder="blur" />
                  {/*** artwork sider text ***/}
                  {/* <Box pt={1} ml={2} mr={2}>
                    <Box
                      className={styles.Modal_content}
                      sx={{ textAlign: "center" }}
                    >
                      2019
                      年《如果登月失敗》於阿姆斯特丹國際紀錄片電影節展出照片。
                    </Box>
                    <Box
                      className={styles.Modal_content}
                      sx={{ textAlign: "center" }}
                    >
                      <Box
                        component="span"
                        sx={{ fontStyle: "italic" }}
                        className={styles.Modal_content}
                      >
                        In Event of Moon Disastetr
                      </Box>
                      <Box
                        component="span"
                        className={styles.Modal_content}
                        ml={1}
                      >
                        installation at International Documentary Film Festival
                        Amsterdam, 2019.
                      </Box>
                    </Box>
                  </Box> */}
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
          <div className={styles.Modal_content}>2019</div>
          <div className={styles.Modal_content_nj}>
            空間裝置包含老式電視、7 分鐘影片，430×662 公分
          </div>
          <div className={styles.Modal_content_nj}>
            Physical installation including vintage TV with 7’ film, 430×662 cm
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            1969年7月，世界大部分的人在慶祝「人類的一大步」；五十年後，沒什麼比這更簡單了。「阿波羅十一號」成功讓人類登陸月球，透過重新想像這個具有深遠影響的事件，《如果登月失敗》展示深偽技術（deepfake）的可能性。試想，如果當年任務出狀況而太空人無法回家，那會如何？為了這種可能性，尼克森總統準備了應變講稿，但從未發表過，直到現在。{" "}
          </div>
          <div className={styles.Modal_content}>
            布根地與帕內塔使用各種能製造假資訊的技術，重新創造這場意外事故演講。從簡單的「廉價偽造」（cheap
            fakes）軟體，到複雜的人工智慧增強深偽技術，並使用深度學習技術創造「完整深偽」——意即聲音與影像皆為合成，以此操弄歷史影像，讓尼克森現身發表該演說。
          </div>
          <div className={styles.Modal_content}>
            作品邀請你進入另一段歷史，探問新科技可能如何扭曲、重新錨定和混淆圍繞我們的真實；探究當代社會的錯誤資訊，和深偽科技的影響力與普及性，同時為人工智慧合成媒體可能的創意，提供另一種觀看視角。
          </div>

          <Box className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              In July 1969, much of the world celebrated “one giant leap for
              mankind.” Fifty years Later, nothing is quite so straightforward.
            </Box>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
              ml={1}
            >
              In Event of Moon Disastetr
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              illustrates the possibilities of deepfake technologies by
              reimagining this seminal event. What if the Apollo 11 mission had
              gone wrong and the astronauts had not been able to return home? A
              contingency speech for this possibility was prepared for, but
              never delivered by, President Nixon—until now.
            </Box>
          </Box>
          <Box className={styles.Modal_content}>
            <Box
              component="span"
              sx={{ fontStyle: "italic" }}
              className={styles.Modal_content}
            >
              In Event of Moon Disastetr
            </Box>
            <Box component="span" ml={1} className={styles.Modal_content}>
              is an immersive art project inviting you into an alternative
              history, asking us all to consider how new technologies can bend,
              redirect, and obfuscate the truth around us. To construct the
              story a variety of techniques of misinformation were used—from
              simple deceptive editing “cheap fakes” to more complex AI-enhanced
              deepfake technologies. To recreate the contingency speech, the
              piece used deep learning techniques to create a “complete
              deepfake,” meaning both audio and video were created
              synthetically. The synthetic voice of Nixon used speech-to-speech
              voice conversion technology and the visuals used “video dialogue
              replacement” techniques to manipulate archival footage to make
              Nixon appear as though he voiced the contingency speech.
            </Box>
          </Box>
          <div className={styles.Modal_content}>
            By creating this alternative history, the project explores the
            influence and pervasiveness of disinformation and deepfake
            technologies in our modern society, warns of the dangers this new
            technology presents, and provides a window into the creative
            opportunities AI-enhanced synthetic media can create.{" "}
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
            <Image src={hb} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_nameInGroup}>哈爾西．布根地</div>
          <div className={styles.Modal_nameInGroup_en}>Halsey BURGUND</div>
          <div className={styles.Modal_content}>
            擁有地球物理學、傢俱設計和建造學位，曾於高科技產業工作，後為獨立藝術家和創意科技人員逾十五年。作品包含沉浸式聲音裝置、定位語音擴增實境（AR）體驗，與Aesthetic
            Evidence樂團的音樂表演。現為麻省理工學院開放紀錄片實驗室與哈佛大學metaLAB成員。作品於國際博物館和藝廊展出，近期作品探討使用人工智慧和擴增實境等前沿科技，對社會的助益和對潛藏的破壞性。{" "}
          </div>

          <div className={styles.Modal_content}>
            After getting a degree in geophysics, designing and building
            furniture and working in the high-tech industry, Halsey BURGUND has
            been an independent artist and creative technologist for over 15
            years. His works span immersive sound installations, geo-located
            audio augmented reality experiences and musical performances with
            his band, Aesthetic Evidence. He is currently a fellow in the MIT
            Open Documentary Lab and an Affiliate at Harvard metaLAB. His works
            have been exhibited internationally in museums and galleries. His
            recent works explore the prosocial and potentially damaging uses of
            cutting edge technologies, including artificial intelligence and
            augmented reality.
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
            <Image src={fp} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_nameInGroup}>法蘭西絲卡．帕內塔</div>
          <div className={styles.Modal_nameInGroup_en}>Francesca PANETTA</div>
          <div className={styles.Modal_content}>
            曾獲艾美獎肯定的實驗紀錄片工作者，也是記者和策展人。她運用新興科技，開創具社會影響力的敘事形式。現為雪菲爾德紀錄片影展另類真實單元策展人，曾任麻省理工學院創意總監，並曾在《衛報》任執行編輯，負責包含虛擬實境（VR）在內的新型態敘事。
          </div>

          <div className={styles.Modal_content}>
            Francesca PANETTA is an Emmy award-winning experimental documentary
            maker, journalist, and curator. She uses emerging technologies to
            innovate new forms of storytelling that have social impact. She is
            currently curator of Sheffield DocFest’s Alternate Realities
            programme. She worked as a Creative Director at MIT, and the
            executive editor at Guardian for new forms of storytelling including
            virtual reality.
          </div>
        </Item>
      </Stack>
    </>
  );
}
