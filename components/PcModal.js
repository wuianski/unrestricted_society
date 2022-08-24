import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import pc from "../public/imgs/artist_profile/pc.png";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function PcModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>保羅．奇里奧</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Paolo CIRIO</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={pc} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            以挑釁、批判和具前瞻性的手法，體現資訊社會複雜性固有的矛盾、倫理、限制和潛能。作品涉及的權力結構、全球大眾媒體和網路藝術中的普羅大眾，從中審視當代社會、政治與經濟的進程，使得他經常受到調查，並承受來自各權力組織與網民的威脅。曾獲2014林茲電子藝術大獎金尼卡獎、2006
            Transmediale跨媒體藝術節二獎等。
          </div>

          <div className={styles.Modal_content}>
            CIRIO’s work embodies the contradictions, ethics, limits, and
            potentials inherent to the social complexity of information society
            through a provocative, critical, and proactive approach. His
            artworks engage power structures, global mass media, and the general
            public in Internet art that examine contemporary social, political,
            and economic processes. As a result of his performances, CIRIO has
            often been subject to investigations and personal threats by
            governmental and military authorities, as well as online crowds of
            ordinary people. He has won a number of awards, including Golden
            Nica first prize at Ars Electronica in Linz, 2014 and Transmediale
            second prize in Berlin, 2006; among others awards.
          </div>
        </Item>
      </Stack>
    </>
  );
}
