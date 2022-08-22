import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import ma from "../public/imgs/artist_profile/ma.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function MaModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>米莫．艾克滕</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Memo AKTEN</div>
        </Item>
      </Stack>

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
