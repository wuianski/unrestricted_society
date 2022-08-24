import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import styles from "./InfoModal.module.css";
import map from "../public/imgs/map.png";
import sponser from "../public/imgs/sponser.png";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#ff0000",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#ooo",
  boxShadow: "none",
}));

export default function InfoModal() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        // mb={{ xs: 1, sm: 15, md: 5, lg: 5, xl: 5 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div className={styles.info_title}>超限社會</div>
        </Item>
        <Item sx={{ width: { xs: "80vw", sm: "65vw", md: "65vw" } }}>
          <div className={styles.info_title_en}>The Unrestricted Society </div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 4, sm: 4, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "90vw", sm: "45vw", md: "35vw" } }}>
          <div className={styles.info_textBlk}>
            <div className={styles.info_text_small}>展期 Date</div>
            <div className={styles.info_text_big}>2022/09/24-11/27 </div>
          </div>
          <div className={styles.info_textBlk}>
            <div className={styles.info_text_small}>開放時間 Opening Hours</div>
            <div className={styles.info_text_medium}>
              週二至週日 Tue. – Sun. 11:00-18:00
            </div>
          </div>
          <div className={styles.info_textBlk}>
            <div className={styles.info_text_small}>
              國慶連假期間10/8(六)－10/10(一)
            </div>
            <div className={styles.info_text_small}>
              展場照常開放，原定週一休館日順延至10/11(二)休館。{" "}
            </div>
            <div className={styles.info_text_small}>
              The exhibition will remain open during the National Day holiday
              from 10/8 (SAT)-10/10 (MON) and will be closed on 10/11 (TUE)
              instead.
            </div>
          </div>
          <Box
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            pt={2}
          >
            <div className={styles.info_textBlk}>
              <div className={styles.info_text_small}>
                02-87735087｜info@clab.org.tw
              </div>
              <div className={styles.info_text_small}>
                捷運：忠孝新生站6號出口（沿濟南路步行約5分鐘）
              </div>
              <div className={styles.info_text_small}>
                忠孝復興站2號出口（沿忠孝東路步行約6分鐘）{" "}
              </div>
              <div className={styles.info_text_small}>
                ubike：建國濟南路口站
              </div>
              <div className={styles.info_text_small}>
                公車：空軍總部站 204、298、298區、953、紅57
              </div>
            </div>
          </Box>
        </Item>
        <Item
          sx={{
            width: { xs: "95vw", sm: "50vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.info_textBlk}>
            <div className={styles.info_text_small}>地點 Venues </div>
            <div className={styles.info_text_big}>臺灣當代文化實驗場</div>
            <div className={styles.info_text_big}>
              Taiwan Contemporary Culture Lab
            </div>
          </div>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            ml={-1}
          >
            <Item
              sx={{
                width: { xs: "90vw", sm: "45vw", md: "45%" },
              }}
            >
              <div className={styles.info_textBlk}>
                <div className={styles.info_text_small}>
                  展覽場地 Exhibition Venues
                </div>
                <ul>
                  <li className={styles.info_text_medium}>圖書館展演空間</li>
                  <div className={styles.info_text_medium}>Art Space II</div>
                  <li className={styles.info_text_medium}>
                    臺灣聲響實驗室立體聲場
                  </li>
                  <div className={styles.info_text_medium}>
                    Spatial Audio Field
                  </div>
                </ul>
              </div>
            </Item>
            <Item
              sx={{
                width: { xs: "95vw", sm: "45vw", md: "50%" },
              }}
            >
              <div className={styles.info_textBlk}>
                <div className={styles.info_text_small}>
                  活動場地 Event Venues{" "}
                </div>
                <ul>
                  <li className={styles.info_text_medium}>西服務中心 </li>
                  <div className={styles.info_text_medium}>West i-CENTER</div>
                  <li className={styles.info_text_medium}>
                    CREATORS空間102 共享吧
                  </li>
                  <div className={styles.info_text_medium}>
                    CREATORS Space R102 Coworking Space
                  </div>
                  <li className={styles.info_text_medium}>
                    動畫創作者基地1樓多功能廳
                  </li>
                  <div className={styles.info_text_medium}>
                    R116 Multi-function Space of Creative Base for Animators
                  </div>
                </ul>
              </div>
            </Item>
          </Stack>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <div className={styles.info_textBlk_sp}>
              <div className={styles.info_text_small}>
                02-87735087｜info@clab.org.tw
              </div>
              <div className={styles.info_text_small}>
                捷運：忠孝新生站6號出口（沿濟南路步行約5分鐘）
              </div>
              <div className={styles.info_text_small}>
                忠孝復興站2號出口（沿忠孝東路步行約6分鐘）{" "}
              </div>
              <div className={styles.info_text_small}>
                ubike：建國濟南路口站
              </div>
              <div className={styles.info_text_small}>
                公車：空軍總部站 204、298、298區、953、紅57
              </div>
            </div>
          </Box>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "100vw" },
          }}
        >
          <div className={styles.mapBlk}>
            <Image src={map} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "50vw" },
          }}
        >
          <div className={styles.sponserBlk}>
            <Image src={sponser} alt="artist profile" placeholder="blur" />
          </div>
        </Item>
      </Stack>
    </>
  );
}
