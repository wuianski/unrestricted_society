import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import fameme from "../public/imgs/artist_profile/fameme.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import work1 from "../public/imgs/artworks/fameme/fameme1.png";
import work2 from "../public/imgs/artworks/fameme/fameme2.jpg";
import work3 from "../public/imgs/artworks/fameme/fameme3.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function FamemeModal() {
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
          <div className={styles.Modal_title}>法咪咪 </div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>FAMEME </div>
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
          <div className={styles.Modal_work_en_nc}>FAMETAVERSE</div>
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
              © 咪式媒體 Thorny Media
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
            3D數位影音、虛擬實境，尺寸依場地而定
          </div>
          <div className={styles.Modal_content_nj}>
            3D digital image and sound, VR, dimensions variable
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            「FAMETAVERSE」
            利用元宇宙平台所具備的持久化及去中心化思維，建立在線的三維虛擬空間，於HTC
            VIVERSE 創造首個元宇宙空間：在這座無限符號的島嶼領地上，重新檔案化自
            2019年以來數個跨國沉浸式空間裝置。
            此計畫透過虛擬世界介面，將法咪咪世界的遊戲性與參與性，拓展至元宇宙的社群連結與媒體化展演，對法咪咪來說：
            FAMETAVERSE ！ A bit of my universe ！
          </div>

          <Box className={styles.Modal_content}>
            The collaboration between FAMEME and HTC employs the ideas of
            persistence and decentralisation, which are essential to the
            metaverse platform, to create a three-dimensional virtual space
            online, “FAMETAVERSE,” as the first metaverse space at HTC VIVERSE.
            On the island as a territory of infinite symbols, several
            transnational immersive space installations. The project adopts
            virtual-world interfaces, further bringing the playful game and
            interactive engagement of FAMEME into the networked communities and
            hyper-mediated performance in the metaverse, as what FAMEME
            celebrates: “FAMETAVERSE! A bit of my universe!
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
            <Image src={fameme} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            亞洲榴槤大亨「法咪咪」，以幽默詼諧的方式宣傳這外殼有刺、散發極濃氣味的水果之王。2019年至今開設包含：紐約「榴槤美術館」、首爾「榴槤健身房」、臺北「榴槤製藥廠」概念店，2021年攜手春豔發行單曲〈Charlie的叭叭洗澎澎〉，2022年再創臺北快閃店「Durian
            Duty to Be
            Free」。法咪咪媒體化的身分遊走在名人、商人、設計師及歌手間，以跨界形式向資本社會宣告他的時代已來臨。
          </div>

          <div className={styles.Modal_content}>
            FAMEME, a durian tycoon from the tropical Asia, promotes the thorny
            and odorous king of fruits in a humorous way. Since 2019, he has
            presented “Museum of Durian” in New York, “Durian Exercise Room” in
            Seoul, “Durian Pharmaceutical Co., Ltd.” as the concept store in
            Taipei, the single “Rub a Dub Charlies Angel in the Tub” (with the
            Taiwanese hip-hop artist Chunyan) in 2021, and the pop-up store
            “Durian Duty to Be Free” in Taipei in 2022. His mediated persona
            freely and frequently switches between different
            identities—including the celebrity, merchant, designer, and singer,
            making an interdisciplinary announcement to the Capitalist society
            that he is the future arrived.
          </div>
        </Item>
      </Stack>
    </>
  );
}
