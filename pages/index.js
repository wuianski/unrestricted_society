import Head from "next/head";
import styles from "../styles/Home.module.css";
import InvewComponent from "../components/InvewComponent";
import UserWindow from "../components/UserWindow";
import NonSSRWrapper from "../components/NonSSRWrapper";

export default function Home() {
  return (
    <NonSSRWrapper>
      <div className={styles.container}>
        <Head>
          <title>超限社會 The Unrestricted Society</title>
          <meta
            name="description"
            content="超限社會 The Unrestricted Society"
          />
          <meta
            property="og:url"
            content="theunrestrictedsociety.clab.org.tw"
            key="ogurl"
          />
          {/* <meta property="og:image" content={previewImage} key="ogimage" /> */}
          <meta
            property="og:site_name"
            content="超限社會 The Unrestricted Society"
            key="ogsitename"
          />
          <meta
            property="og:title"
            content="超限社會 The Unrestricted Society"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="超限社會 The Unrestricted Society"
            key="ogdesc"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <>
            <div className={styles.bgBlock}>
              <InvewComponent />
              {/* <UserWindow /> */}
            </div>
          </>
        </main>
      </div>
    </NonSSRWrapper>
  );
}
