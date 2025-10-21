import React, { useState } from "react";
import GlobalWraps from "../../../../pages/Home/components/GlobalWraps/GlobalWraps";
import Banner from "../../../../../public/assets/img/bg.png";
import Banner2 from "../../../../assets/img/bg2.png";
import Banner3 from "../../../../assets/img/bg3.png";
import "./global.css";
const Global = () => {
  const [globalWrapsData, setglobalWrapsData] = useState([
    {
      id: 1,
      img: Banner,
      title: "  Сервис заменяет консультацию с диетологом и нутрициологом",
      text: "  Не тратьте время и деньги на консультации с диетологом и нутрициологом. После онлайн тестирования у вас будет индивидуальный план питания с учётом вашего образа жизни и целей.",
    },
    {
      id: 2,
      img: Banner2,
      title:
        "  Опираясь на уже сформированные пищевые привычки, высока вероятность допустить ошибку",
      text: "       Исследование Ассоциации диетологов показало, что вероятность придерживаться здорового питания без консультаций с диетологом —36%.",
    },
    {
      id: 3,
      img: Banner3,
      title:
        "Перестаньте доверять  старым привычкам, интуиции и принимайте решения на основе точных данных  ",
      text: "    Исследование Ассоциации диетологов показало, что вероятность придерживаться здорового питания после сервиса онлайн-подбора плана питания — 88%..",
    },
  ]);
  return (
    <>
      <section class="global">
        <div class="container">
          <h2 class="global__head">Почему Фреш?</h2>
          <div class="global__wraps">
            {globalWrapsData.map((card) => (
              <GlobalWraps img={card.img} text={card.text} title={card.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Global;
