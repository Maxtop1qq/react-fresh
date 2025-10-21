import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./article.css";
const Article = () => {
  return (
    <>
      <section class="article">
        <div class="container">
          <ArticleCard
            title={"Лучшее предложение среди конкурентов"}
            saleprice={"1 890 ₽"}
            mainsale={"5 690 ₽"}
            btn={"Получить доступ"}
          />
        </div>
      </section>
    </>
  );
};

export default Article;
