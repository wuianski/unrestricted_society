import React from "react";
import Image from "next/image";

export default function VideoInSVG() {
  return (
    <>
      {/* <img
        src="/imgs/mdn_logo_only_color.png"
        alt="Picture of the author"
        width={200}
        height={200}
      /> */}
      {/* <img src="/imgs/mdn_logo_only_color.png" height={200} width={200} /> */}
      <foreignObject x="10" y="10">
        <iframe
          xmlns="http://www.w3.org/1999/xhtml"
          width="595"
          height="341"
          src="https://www.youtube.com/embed/IZg_fRvqEks?&autoplay=0&controls=0&autohide=1&rel=0&iv_load_policy=0"
        ></iframe>
      </foreignObject>
    </>
  );
}
