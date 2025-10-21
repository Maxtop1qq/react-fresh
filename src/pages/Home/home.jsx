import React, { useState } from "react";

import Img1 from "../../assets/img/1.svg";
import Img2 from "../../assets/img/2.svg";
import Img3 from "../../assets/img/3.svg";
import Img4 from "../../assets/img/4.svg";
import Img5 from "../../assets/img/5.svg";
import Banner from "../../../public/assets/img/bg.png";
import Banner2 from "../../assets/img/bg2.png";
import Banner3 from "../../assets/img/bg3.png";

import Article from "./sections/Article/Article";
import Aside from "./sections/Aside/Aside";
import Global from "./sections/Global/Global";
import Info from "./sections/Info/Info";
import Last from "./sections/Last/Last";
import Promo from "./sections/Promo/promo";
import Stepsection from "./sections/Stepsection/Stepsection";

import "./home.css";

const Home = () => {


  return (
    <>
      <main>
        <Promo />
        <Global />
        <Aside />
        <Stepsection />
        <Article />
        <Info />
        <Last />
      </main>
    </>
  );
};

export default Home;
