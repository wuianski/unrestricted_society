import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import kjm from "../public/imgs/artist_profile/kjm.jpg";
import kkh from "../public/imgs/artist_profile/kkh.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function SlitscopeModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>雙縫鏡</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>SLITSCOPE</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={kjm} alt="artist profile" placeholder="blur" />
          </div>
          <div className={styles.profileContainer}>
            <Image src={kkh} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            新媒體藝術雙人組，由金制民和金根瑩組成。兩位藝術家分別活躍於藝術和科學領域，2018年因《我提問》而開始合作並發展此系列作品。「雙縫鏡」取自量子力學的雙縫實驗，此實驗研究人們沒有意識到的二重性存在之間的差距。作品包含：擅聊天，和觀眾討論藝術的人工智慧《我提問》；人工智慧舞者《MADI》、人工智慧空間打造《遊戲烏托邦》和人工智慧詩人《SIA》。
          </div>

          <div className={styles.Modal_content}>
            SLITSCOPE is a new media art team which consists of KIM Jae-Min and
            KIM Keun-Hyoung. The two artists have been active in their own
            fields, art and science respectively, and had the opportunity to
            collaborate on I Question in 2018. SLITSCOPE got its name from the
            double-slit experiment, proposing to look into the gap between the
            existential duality that we are not aware of. Some of their artworks
            include: AI conversationalist I Question who discusses art with
            people, AI dancer MADI, AI room maker Ludenstopia, and AI poet SIA.
          </div>
        </Item>
      </Stack>
    </>
  );
}
