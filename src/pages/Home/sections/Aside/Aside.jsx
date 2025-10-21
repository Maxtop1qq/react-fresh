import React, { useState } from "react";
import AsideCard from "../../components/Aside/AsideCard";
import "./aside.css";
const Aside = () => {
  const [AsideCardData, setAsideCardData] = useState([
    {
      id: 1,
      text: "   Перепробовали различные диеты и хотите вписать здоровое питание в свою жизнь раз и навсегда.",
      title: "Вы категоричны",
    },
    {
      id: 2,
      text: "Хотите начать, но обилие различной информации не даёт понять, как сделать первый шаг.",
      title: "Только начинаете",
    },
    {
      id: 3,
      text: "      Много времени уделяете семье, детям и хотите построить свою систему здорового питания.",
      title: "Заботитесь о близких",
    },

    {
      id: 4,
      text: "Много работаете и не успеваете разобраться как правильно создать план питания.",
      title: "Часто заняты",
    },
  ]);
  return (
    <>
      <section class="aside">
        <div class="container">
          <h3 class="aside__head">
            Для всех, <br />
            кто заботится <br />о здоровье
          </h3>
          <div class="aside__wraps">
            {AsideCardData.map((card) => (
              <AsideCard
                AsideCardIcon={card.AsideCardIcon}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Aside;
