import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import hsienYu from "../public/imgs/artist_profile/hsienYu.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function HsienYuModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>鄭先喻</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>CHENG Hsien-Yu</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={hsienYu} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            1984年出生於臺灣高雄市，現居住、工作於臺北。國立臺北藝術大學劇場設計系，並於荷蘭格羅寧根漢斯大學密涅瓦藝術學院Frank
            Mohr
            Institute取得藝術碩士，現為藝術家與軟體開發人員。創作多以電子裝置、軟體、生物電子實驗裝置為主，內容多在探討人類行為、情感、軟體與機械之間的關係。2021年獲第19屆台新藝術獎——視覺藝術獎，個展、聯展於臺灣、亞洲與歐洲等地。
          </div>

          <div className={styles.Modal_content}>
            Born in Kaohsiung, Taiwan in 1984, CHENG Hsien-Yu currently works
            and lives in Taipei as an artist and software developer. He
            graduated with a BFA from the Department of Theatrical Design and
            Technology at Taipei National University of the Arts, and holds a MA
            from the Frank Mohr Institute in the Minerva Art Academy at Hanze
            University Groningen, the Netherlands, while his work mostly focuses
            on the relationships amongst human behavior, emotion, software, and
            machinery, as explored through his electronic installations,
            software, and experimental bio-electronic devices shown in both solo
            and group exhibitions around Taiwan, Asia, and Europe. He has
            received the 19th Taishin Arts Award (in the category of Visual Art)
            in 2021.
          </div>
        </Item>
      </Stack>
    </>
  );
}
