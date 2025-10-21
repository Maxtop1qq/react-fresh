import React from "react";
import "./articleCard.css";
const ArticleCard = ({ title, saleprice, mainsale, btn }) => {
  return (
    <>
      <h5 class="article__title">{title}</h5>
      <div class="article__price">
        <div class="article__saleprice">{saleprice}</div>
        <div class="article__mainprice">{mainsale}</div>
      </div>
      <button class="article__btn">{btn}</button>
    </>
  );
};

export default ArticleCard;
