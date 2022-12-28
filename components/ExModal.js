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
          <div className={styles.Modal_title}>策展論述</div>
        </Item>
        <Item sx={{ width: "65vw", paddingRight: "10vw" }}>
          <div className={styles.Modal_title_en}>Curatorial Statement</div>
        </Item>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        ml={2}
      >
        <Item sx={{ width: { xs: "80vw", sm: "35vw", md: "35vw" } }}>
          <div>
            <span className={styles.Modal_name}>策展人</span>
            <Box
              className={styles.Modal_name}
              sx={{ display: "inline" }}
              ml={1}
              mr={1}
            >
              /
            </Box>
            <span className={styles.Modal_name}>莊偉慈</span>
          </div>
          <div className={styles.Modal_name_en}>Curator / CHUANG Wei-Tzu</div>
        </Item>
        <Item
          sx={{
            width: { xs: "80vw", sm: "65vw", md: "65vw" },
            paddingRight: { xs: "0vw", sm: "10vw", md: "10vw" },
          }}
        >
          <div className={styles.Modal_content}>
            被譽為「科幻小說之父」的法國小說家凡爾納（Jules Gabriel
            VERNE），曾在1865
            年出版的小說《從地球到月球》，描述人類搭乘由巨大砲管所發射的砲彈飛上月球。儘管這個故事在當時被視為奇想，然而在一個世紀後的
            1969
            年，美國阿波羅十一號搭載三名太空人，展開人類史上首次的登月計畫並且獲致成功，這不只證明了一百年前凡爾納驚人的想像力，同時也象徵人類不斷進步的技術，完全超克自然環境所帶來的限制。技術因此被賦予一個烏托邦的想像，同時也徹底將人從自然中異化。{" "}
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              在 20
              世紀的下半葉，伴隨太空競賽和軍備競賽而推動的技術研發，人類社會的面貌與生活型態急遽轉變。從「巨型機器」（megamachine）
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              1
            </Box>
            <Box component="span" className={styles.Modal_content}>
              的出現——如航太工程的進步，突破地理空間限制並擴大人類的移動範圍，到媒體介面改寫文化傳播的作用，再到進入網路時代而出現具強烈速度感的液態特質。在過去近半個世紀，人類社會經歷一次次的變化，我們在科技技術的推動下邁入了加速社會。媒體理論學者麥克魯漢（Marshall
              MCLUHAN）在上個世紀就曾準確預言「媒體即訊息」，並指出科技的加速作用可被視為人類社會發展的主要動力。這樣的加速度，不只數次改變人類社會的樣貌，同時科技的更新也遠快過我們在道德法律面的建構工程。既然技術對人類生活影響深遠，「超限社會」一展試著從當代藝術的角度來測量科技的加速與其效應，並且提問：我們可以如何理解人與技術之間的關係？
            </Box>
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              在哲學家海德格（Martin
              HEIDEGGER）的論點中，技術是我們經驗世界方式的中介，換句話說，技術物（artifacts）形塑了人類與世界的關係。這樣的觀點在學者伊德（Don
              IHDE）的研究中有進一步討論，從將技術融入到身體經驗「具身關係」（如望遠鏡作為眼睛和遠景的中介），轉變經驗和意義的「詮釋關係」（如溫度計將溫度具體化為可閱讀的數字）到「關係存有論」
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              2
            </Box>
            <Box component="span" className={styles.Modal_content}>
              。人和技術之間存在著共同構造，換言之，人類已無法活在一個不受技術影響的社會——技術將世界呈現在我們面前，我們則透過技術影響這個世界。
            </Box>
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              站在上述基礎來理解技術的角色，就會發現多數技術在發明之初，常伴隨著科技樂觀主義（techno-optimism）的精神。技術確實超克人類原本的不足，但慢慢地，科技的發展也正改變著人類與科技之間的主從關係——人們正反過來被科技所控制。於是我們發現，網路固然創造出更好的服務，但個資也成為交換便利生活的商品，科技產業如電商、社群媒體，積極收集個資並以此圖利的結果，進而催生出「監控資本主義」（surveillance
              capitalism）
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              3
            </Box>
            <Box component="span" className={styles.Modal_content}>
              。另一方面，在數位時代的社會治理，則因監控技術的使用，對治理性（governmentality）產生極大的影響，當科技方案介入後，也將傳統的紀律管理形式轉向社會控制，人們的行為因此受到調控並開始自我管理以避免懲罰。
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              4
            </Box>
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              在展覽中所引用的「超限」
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              5
            </Box>
            <Box component="span" className={styles.Modal_content}>
              概念，不只是象徵著人將技術理想化與神聖化，乃至於相信技術能救世而不擇手段追求進步，更指涉科技技術在法律及倫理範疇的越界和溢出狀態。這種樂觀，使得技術在「人工智慧—人類」、「政府—人民」等各式關係的中介角色，隨著其加速發展而產生質變與不可控。「超限社會」一展中，藝術家從不同角度探討科技發展所產生的問題與困境：比如「我們即數據」意義下該如何看待數位隱私權；思索數位監控、臉部辨識以及深偽技術可能帶來的問題；或運用細胞複製技術思考糧食危機的可能選項等。除此之外，站在技術具有中介角色的特質上，展覽中的作品也可看到藝術家嘗試跨領域協作，運用新技術探索藝術觀念能如何轉化抽象的資料或內容，進而創造出新的感官體驗。
            </Box>
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              一直以來，技術總被視為是人類擺脫桎梏的工具，然而透過它所創造的自由是否為真，還是那樣的自由其實是幻象？在「超限社會」展覽中，將提供觀眾另一種理解技術的方式。
            </Box>
          </div>

          <Box component="ol" pt={3} pb={3}>
            <li className={styles.Modal_content}>
              美國學者路易斯・芒福德（Lewis
              MUMFORD）於《機器神話》一書中所提出。
            </li>
            <li className={styles.Modal_content}>
              唐・伊德（Don
              IHDE）著,韓連慶譯，《讓事物說話-後現象學與技術科學》，北京大學，2008
              年 5月，59-61 頁。
            </li>
            <li className={styles.Modal_content}>
              這個名詞源於哈佛大學教授祖波夫（Shoshana
              ZUBOFF）的著作《監控資本主義：在新的權力前沿為人類未來而戰》。
            </li>
            <li className={styles.Modal_content}>
              羅布・基欽（Rob KITCHIN）、阿里斯泰爾・弗瑞瑟（Alistair
              FRASER）著，黃開譯，《數位監控：我們如何拿回均衡的科技生活》，,時報文化，2021
              年 12 月，109 頁。
            </li>
            <li className={styles.Modal_content}>
              「超限」一詞來自中國作家喬良和前中國人民解放軍空軍大校王湘穗在其著作《超限戰》一書中所提出的概念，「超限戰」是與傳統戰爭不同的新戰爭手段，指的是以一切手段，超越傳統戰爭手段範圍的新型戰爭形式，特別著重技術在戰爭中的角色。
            </li>
          </Box>

          <div className={styles.Modal_content}>
            Renowned as the “father of science fiction,” French novelist Jules
            Gabriel VERNE published his novel De la Terre à la Lune (From the
            Earth to the Moon) in 1865, telling the story of human beings
            traveling to the Moon aboard a projectile fired by a giant cannon, a
            story belonged in the realms of fantasy then. However, in 1969, a
            century after the publication of VERNE’s novel, the Apollo 11
            spacecraft first landed three astronauts on the Moon. The success of
            the first manned Moon-landing program in human history was not only
            atestament to VERNE’s amazing imagination 100 years ago, but also an
            emblem of our ever-advancing technology that completely transcends
            the confines of natural environment.
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              While being ergo given an aura of utopian fantasy, technology has
              also radically alienatedhumankind from nature.In the second half
              of the 20th century, the technological R&D driven by the Space
              Race andarms races drastically changed the façade of human society
              and people’s lifestyle, from the emergence of “megamachine”
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              1
            </Box>
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              (e.g. the advances in aerospace engineering have broken through
              geospatial barriers and expanded the range of human movement), via
              the media interfaces that redefined the effect of cultural
              communication, to the liquid properties with a powerful sense of
              speed in the Internet era. Over the past half century, human
              beings have undergone a series of societal changes, and
              technological progress has ushered in an accelerated society. In
              the 20th century, Canadian media theorist Marshall MCLUHAN not
              only accurately predicted that “the medium is the message,” but
              also pointed out that the accelerating effect of technology counts
              as a major driving force behind the development of human society.
              Such acceleration has altered the appearance of human society
              several times. Meanwhile, the pace of technological innovation is
              much faster than that of our ethical and legal constructions. In
              view of the profound and far-reaching influence of technology on
              human life, the exhibition The Unrestricted Society attempts to
              measure the acceleration of technology and the ensuing effects
              from the perspective of contemporary art and thereby discover the
              ways to understand the relationship between humanity and
              technology. According to German philosopher Martin HEIDEGGER,
              technology is an essential medium of how we come to experience the
              world. That is to say, artifacts determine how the human species
              is related to the world. This point was elaborated in Don IHDE’s
              research, ranging from the “embodied relations” that integrate
              technology into physical experiences (e.g. telescopes as the
              interface between human eyes and distant views), via the
              “hermeneutic relations” that transform experiences and meanings
              (e.g. thermometers turn temperature into decimal numbers), to the
              “theory of relational being.”
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              2
            </Box>
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              Human beings and technologies share common structures. To put it
              another way, we live in a society of technological impacts, from
              which escape is nowhere on the horizon—technology presents the
              world in front of us, and we shape the world with technology.
              Understanding the role of technology on the aforementioned basis,
              we’ll find that most technologies are invented with a spirit of
              techno-optimism. It’s true that technologies have remedied human
              deficiencies, but technological evolution is gradually changing
              the master-slave relationship between humanity and technology—the
              former is instead controlled by the latter. We’re therefore
              conscious of the fact that our personal data have become
              commodities in exchange for a more convenient life, although the
              Internet has indeed created better services. Technology industries
              such as e-commerce and social media actively collect personal data
              and harness them for profit, hence the “surveillance capitalism.”
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              3
            </Box>
            <Box component="span" className={styles.Modal_content}>
              In terms of the social governance in the digital age, the use of
              surveillance technology has significantly affected
              governmentality. As technological solutions intervene, the
              governance pattern has been shifted from conventional discipline
              to social control. People’s behaviour is consequently regulated,
              and they began to conductthemselves in order to avoid punishment.
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              4
            </Box>
          </div>

          <div className={styles.Modal_content}>
            <Box component="span" className={styles.Modal_content}>
              The concept of “unrestricted”
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 10, verticalAlign: "super" }}
              mr={1}
            >
              5
            </Box>
            <Box component="span" className={styles.Modal_content}>
              applied in this exhibition not only symbolizes the idealization
              and sacralization of technology or even the phenomenon that people
              see technology as the saviour and stop at nothing to make
              technological advances, but also refers to the transgression and
              overflow of technology in the legal and ethical spheres. Such
              optimism has induced the qualitative change and uncontrollability
              of the intermediary role of technology in various relations like
              those between artificial intelligence and humanity or between
              government and people, and the accelerated development of
              technology inflames the situation. In the exhibition The
              Unrestricted Society, the artists probe into the issues and
              dilemmas surrounding technological development from different
              perspectives, such as the way we view digital privacy in the sense
              of “we are the data,” potential problems with digital
              surveillance, facial recognition and deepfakes, as well as looking
              at possible options for alleviating food crises through cloning.
              Besides, given the intermediary role of technology, the works
              featured in this exhibition reveal the artists’ attempt at
              transdisciplinary collaboration. They employ new technologies to
              explore how artistic concepts can transmute abstract data or
              contents, insofar as to create unprecedented sensory experiences.
            </Box>
          </div>

          <div className={styles.Modal_content}>
            Technology has always been deemed a tool to liberate the human race.
            However, we may wonder whether the liberation it created is genuine
            freedom or all an illusion. The exhibition The Unrestricted Society
            will provide the visitors with an alternative way of understanding
            technology.
          </div>

          <Box component="ol" pt={3} pb={3}>
            <li className={styles.Modal_content}>
              American scholar Lewis MUMFORD coined the term “megamachine” in
              his book titled The Myth of the Machine.
            </li>
            <li className={styles.Modal_content}>
              Don IHDE, Let Things Speak: Post-phenomenology and Technoscience,
              trans. HAN Lian-Qing (Peking University Press, 2008): pp. 59-61.
            </li>
            <li className={styles.Modal_content}>
              The term originated from The Age of Surveillance Capitalism: The
              Fight for a Human Future at the New Frontier of Power, a book
              authored by Harvard professor Shoshana ZUBOFF.
            </li>
            <li className={styles.Modal_content}>
              Rob KITCHIN and Alistair FRASER, Slow Computing: Why We Need
              Balanced Digital Lives, trans. HUANG Kai (China Times Publishing,
              2021), p. 109.
            </li>
            <li className={styles.Modal_content}>
              The term “unrestricted” is derived from Unrestricted Warfare, a
              book co-authored by Chinese writer QIAO Liang and senior colonel
              in the People’s Liberation Army WANG Xiang-Sui. Different from
              traditional warfare,“unrestricted warfare” is a new strategy for
              war that uses a variety of means and sets great store by
              technology.
            </li>
          </Box>
        </Item>
      </Stack>
    </>
  );
}
