import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";
import fameme from "../public/imgs/artist_profile/fameme.jpg";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function FamemeModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>法咪咪</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>FAMEME</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.profileContainer}>
            <Image src={fameme} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            亞洲榴槤大亨「法咪咪」，以幽默詼諧的方式宣傳這外殼有刺、散發極濃氣味的水果之王。2019年至今開設包含：紐約「榴槤美術館」、首爾「榴槤健身房」、臺北「榴槤製藥廠」概念店，2021年攜手春豔發行單曲〈Charlie的叭叭洗澎澎〉，2022年再創臺北快閃店「Durian
            Duty to Be
            Free」。法咪咪媒體化的身份遊走在名人、商人、設計師及歌手間，以跨界形式向資本社會宣告他的時代已來臨。
          </div>

          <div className={styles.Modal_content}>
            FAMEME, a durian tycoon from the tropical Asia, promotes the thorny
            and odorous king of fruits in a humorous way. Since 2019, he has
            presented “Museum of Durian” in New York, “Durian Exercise Room” in
            Seoul, “Durian Pharmaceutical Co., Ltd.” as the concept store in
            Taipei, the single “Rub a Dub Charlies Angel in the Tub” (with the
            Taiwanese hip-hop artist Chunyan) in 2021, and the pop-up store
            “Durian Duty to Be Free” in Taipei in 2022. His mediated persona
            freely and frequently switches between different
            identities—including the celebrity, merchant, designer, and singer,
            making an interdisciplinary announcement to the Capitalist society
            that he is the future arrived.
          </div>
        </Item>
      </Stack>
    </>
  );
}
