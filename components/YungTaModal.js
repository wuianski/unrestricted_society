import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import yungTa from "../public/imgs/artist_profile/yungTa.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function YungTaModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>張永達</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>CHANG Yung-Ta</div>
        </Item>
      </Stack>

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
