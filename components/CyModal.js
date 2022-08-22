import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import cy from "../public/imgs/artist_profile/cy.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function CyModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>陳乂</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}> CHEN Yi</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={cy} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            於跨領域的藝術實踐中，透過現實與虛擬意識的觀察比對，探討存在、意識、慾望、數據、環境、政治、經濟與社會等議題。畢業於國立臺北藝術大學科技藝術研究所，獲2006臺北美術獎，
            2010年與友成立豪華朗機工，團隊曾參與曼徹斯特亞洲三年展（2014）、泰國雙年展（2018）、越後妻有三年展（2022）等，於2019年獲得第10屆總統文化獎。
          </div>

          <div className={styles.Modal_content}>
            CHEN Yi is known for his interdisciplinary artistic practice which
            explores issues including existence, consciousness, human desire,
            data, environment, politics, economy, and society through the
            observation and comparison of tangible substance and virtual
            consciousness. Graduating from Taipei National University of Arts,
            he was the top-prize recipient at the “2006 Taipei Arts Award” and
            later co-founded the artist collective LuxuryLogico in 2010, with
            works shown at Asia Triennial Manchester 2014, Thailand Biennale
            2018, Echigo Tsumari Art Triennale 2022. In 2019, LuxuryLogico
            received Presidential Culture Award, Youth Creative Award, Taiwan.
            etc.
          </div>
        </Item>
      </Stack>
    </>
  );
}
