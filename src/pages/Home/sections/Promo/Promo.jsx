import React, { useState } from "react";
import Img1 from "../../../../assets/img/1.svg";
import Img2 from "../../../../assets/img/2.svg";
import Img3 from "../../../../assets/img/3.svg";
import Img4 from "../../../../assets/img/4.svg";
import Img5 from "../../../../assets/img/5.svg";
import "./promo.css";
import PromoCard from "../../../../pages/Home/components/PromoCard/PromoCard";
import Button from "../../../../components/Button/Button";
const Promo = () => {
  const [promoCardData, setPromoCardData] = useState([
    {
      id: 1,
      url: Img1,
      text: "Годовой рацион на 5 приёмов пищи в день",
    },
    {
      id: 2,
      url: Img2,
      text: " Индивидуальный  расчёт КБЖУ",
    },
    {
      id: 3,
      url: Img3,
      text: "Расчёт витаминов и микроэлементов",
    },

    {
      id: 4,
      url: Img4,
      text: "Расчёт водного баланса и питьевого режима",
    },
    {
      id: 5,
      url: Img5,
      text: " Доступ в закрытый чат в Telegram с членом Ассоциации диетологов",
    },
  ]);
  return (
    <>
      <section class="section">
        <div class="container">
          <h1 class="section__title">Сервис онлайн-подбора плана питания</h1>

          <p class="section__posttitle">
            Пройдите тестирование и получите индивидуальный план питания
          </p>

          <div class="section__wraps">
            {promoCardData.map((card) => (
              <PromoCard url={card.url} text={card.text} />
            ))}
          </div>
          <Button text={"Узнать подробнее"} size="medium" />
        </div>
      </section>
    </>
  );
};

export default Promo;
