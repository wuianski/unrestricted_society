import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./Modal.module.css";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
}));

export default function ExModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mb={5}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_title}>超限社會策展論述</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div>??</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.Modal_name}>策展人/莊偉慈</div>
          <div className={styles.Modal_name_en}>Curator/Chuang Wei Tzu</div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            「超限社會」一展中，藝術家從不同角度探討科技發展所產生的問題與困境：比如「我們即數據」意義下該如何看待數位隱私權；思索數位監控、臉部辨識以及深偽技術可能帶來的問題；或運用細胞複製技術思考糧食危機的可能選項等。除此之外，站在技術具有中介角色的特質上，展覽中的作品也可看到藝術家嘗試跨領域協作，運用新技術探索藝術觀念能如何轉化抽象的資料或內容，進而創造出新的感官體驗。
          </div>
          <div className={styles.Modal_content}>
            一直以來，技術總被視為是人類擺脫桎梏的工具，然而透過它所創造的自由是否為真，還是那樣的自由其實是幻象？在「超限社會」展覽中，將提供觀眾另一種理解技術的方式。
          </div>
          <div className={styles.Modal_content}>
            In the exhibition The Unrestricted Society, the artists probe into
            the issues and dilemmas surrounding technological development from
            different perspectives, such as the way we view digital privacy in
            the sense of “we are the data,” potential problems with digital
            surveillance, facial recognition and deepfakes, as well as looking
            at possible options for alleviating food crises through cloning.
            Besides, given the intermediary role of technology, the works
            featured in this exhibition reveal the artists’ attempt at
            transdisciplinary collaboration. They employ new technologies to
            explore how artistic concepts can transmute abstract data or
            contents, insofar as to create unprecedented sensory experiences.
          </div>
          <div className={styles.Modal_content}>
            Technology has always been deemed a tool to liberate the human race.
            However, we may wonder whether the liberation it created is genuine
            freedom or all an illusion. The exhibition The Unrestricted Society
            will provide the visitors with an alternative way of understanding
            technology.
          </div>
        </Item>
      </Stack>
    </>
  );
}
