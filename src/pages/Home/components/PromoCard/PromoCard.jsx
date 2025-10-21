import React from "react";
import "./promoCard.css";
const PromoCard = ({ url, text }) => {
  return (
    <div class="section__items">
      <img src={url} alt="" />
      <p class="section__text">{text}</p>
    </div>
  );
};

export default PromoCard;
