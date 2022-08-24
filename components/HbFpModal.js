import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import hb from "../public/imgs/artist_profile/hb.jpg";
import fp from "../public/imgs/artist_profile/fp.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function HbFpModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}></div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}></div>
        </Item>
      </Stack>

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
            Evidence樂團的音樂表演。現為麻省理工學院開放紀錄片實驗室與哈佛大學metaLAB成員。作品於國際博物館和藝廊展出，近期作品探討使用人工智慧和擴增實境等前沿科技，對社會的助益和對潛藏的破壞性。
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
            programme. She worked as a Creative Director at MIT, and executive
            editor at Guardian for new forms of storytelling including virtual
            reality.
          </div>
        </Item>
      </Stack>
    </>
  );
}
