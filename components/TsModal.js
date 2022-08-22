import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import ts from "../public/imgs/artist_profile/ts.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function TsModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>泰瑞莎．舒柏特</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Theresa SCHUBERT</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={ts} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            威瑪包浩斯大學媒體藝術博士，定居柏林的藝術家、研究者和策展人。在鍊金術和科幻小說的美學中，多個獲獎作品皆在質疑人類中心主義，並化另類視角和感官體驗為可能。創作形式從音像與複合媒材的結合，到觀念與沉浸式裝置或表演。作品展出遍及全球，包含林茲電子藝術節、柏林藝術實驗室、伊斯坦堡雙年展、歐洲媒體藝術節等。
          </div>

          <div className={styles.Modal_content}>
            SCHUBERT is a Berlin-based artist, researcher, and curator. She
            holds a PhD in Media Art from Bauhaus-University Weimar. In an
            aesthetic between alchemy and science fiction, SCHUBERT’s multiple
            award-winning works question anthropocentrism and enable alternative
            visions and/or new sensory experiences. Her practice combines
            audiovisual and hybrid media to conceptual and immersive
            installations or performances. Her work has been exhibited
            internationally. Venues include: Ars Electronica, Linz, Art
            Laboratory Berlin, Istanbul Biennial, European Media Art Festival,
            etc.
          </div>
        </Item>
      </Stack>
    </>
  );
}
