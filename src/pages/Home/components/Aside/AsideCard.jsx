import React from "react";
import "./asideCard.css";
import AsideCardIcon from "../../../../assets/img/icon.svg";
const AsideCard = ({ title, text }) => {
  return (
    <>
      <div class="aside__items">
        <img src={AsideCardIcon} alt="" />
        <div class="aside__item">
          <p class="aside__title">{title}</p>
          <p class="aside__text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default AsideCard;
