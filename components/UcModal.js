import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import uc from "../public/imgs/artist_profile/uc.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function UcModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>哀傷電路</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Unhappy Circuit</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={uc} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            韓國新媒體藝術家，他的作品融合藝術、科學和科技，創作以人類學、生態學、未來學和宇宙學等跨學科觀點為基礎。貫穿他作品的主題是對未知的探索，希望藉此獲得的洞見能擴展我們對自身和周遭世界的理解，並最終尋求人類的下一個方向。作品曾入選林茲電子藝術節、SIGGRAPH
            Asia Art Gallery與濟州現代美術館典藏。
          </div>

          <div className={styles.Modal_content}>
            Unhappy Circuit is a new media artist in Korea. His works consist of
            the convergence of art, science, and technology, which take a
            multidisciplinary perspective based on anthropology, ecology,
            futurology, and cosmology. The main theme that penetrates his work
            is an exploration of the unknown. He wants to expand our
            understanding of ourselves and the world surrounding us through
            insights gained from exploring the unknown possibilities, and
            ultimately seeks the next direction for humanity. His works were
            selected for Ars Electronica, SIGGRAPH Asia Art Gallery and Jeju
            Museum of Contemporary Art Collection.
          </div>
        </Item>
      </Stack>
    </>
  );
}
