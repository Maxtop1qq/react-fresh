import React from "react";
import "./globalWraps.css";
const GlobalWraps = ({ title, img, text }) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${img})` }} class="global__wraps">
        <img class="global__img" src={img} alt="" />
        <p class="global__title">{title}</p>
        <p class="global__text">{text}</p>
      </div>
    </>
  );
};

export default GlobalWraps;
// "./assets/img/image.png"
