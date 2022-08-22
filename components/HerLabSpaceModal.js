import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import sowYee from "../public/imgs/artist_profile/sowYee.jpg";
import yowRuu from "../public/imgs/artist_profile/yowRuu.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function HerLabSpaceModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>她的實驗室空間集</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Her Lab Space</div>
        </Item>
      </Stack>

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
            received the Honorable Mention Award at the 2021 Taipei Art Awards,
            and her works have been shown in the 2022 Busan Biennale—We, on the
            Rising Wave, the 2018 Taipei Biennial: Post-Nature—A Museum as an
            Ecosystem, etc. She is also a guest writer for online magazine No
            Man’s Land and co-founder of Kuala Lumpur’s Rumah Attap Library and
            Collective.
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
            (2022), Glory Hole (the 2022 Taipei Arts Festival), Night Monster
            (the 2022 The Taipei Childrens Arts Festival), etc. She also
            participated in the group exhibition Letter．Callus．Post-War in
            2019 and was selected as the sponsored artist-in-residence at
            Akiyoshidai International Art Village in Japan in the same year.
          </div>
        </Item>
      </Stack>
    </>
  );
}
