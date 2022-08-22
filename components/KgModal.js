import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import kg from "../public/imgs/artist_profile/kg.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function KgModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>奇里亞姬．戈妮</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Kyriaki GONI</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={kg} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            媒體藝術家，定居雅典。擅用多媒材，以創作探索科技的政治、情感和環境層面。關注開發主義、監視、分散式網路，以及人與非人類的關係，其裝置作品建立另類的生態系統。曾受機構委託，並在全球各地以個人和團體的形式展出，包含2021林茲電子藝術節、2020年「摩登之愛（或稱冷親密時代的愛情）」、2020
            Transmediale跨媒體藝術節等。
          </div>

          <div className={styles.Modal_content}>
            Kyriaki GONI is a media artist based in Athens. Employing a variety
            of media, her practice explores the political, affective, and
            environmental aspects of technology. She focuses on extractivism,
            surveillance, human and other than human relations, distributed
            networks, and infrastructures. Her installations build alternative
            ecosystems and shared experiences by connecting the fictional with
            the scientific. Her works have been commissioned by institutions and
            exhibited worldwide in solo and group settings, including Ars
            Electronica 2021, Modern Love (or the Love in the Age of Cold
            Intimacies), Transmediale 2020, etc.
          </div>
        </Item>
      </Stack>
    </>
  );
}
