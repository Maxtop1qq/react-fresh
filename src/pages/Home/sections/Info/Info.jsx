import React, { useState } from "react";
import InfoCard from "../../components/Info/InfoCard";
import InfoCardBlock from "../../components/InfoCardBlock/InfoCardBlock";

import "./info.css";
const Info = () => {
  const [infoCardBlockData, setinfoCardBlockData] = useState([
    {
      id: 1,
      global: "Онлайн тестирование",
      read: "За 20 минут узнаем о вашем текущем образе жизни. Вы ответите на вопросы, и мы определим ваши физиологические особенности, текущий пищевой и питьевой режим, а также физическую активность.",
    },
    {
      id: 2,
      global: "Модуль анализа",
      read: "Проанализируем текущий рацион, поможем сформулировать ваши цели и выявить нормы питания.",
    },
    {
      id: 3,
      global: "Доступ в чат",
      read: "Доступ в закрытый чат в Telegram с членом Ассоциации диетологов для дополнительных консультаций.",
    },
  ]);
  return (
    <>
      <section class="info">
        <div class="container">
          <div class="info__main">
            <InfoCard
              title={"Индивидуальный подбор плана питания"}
              text={"План питания будет включать в себя:"}
            />
          </div>
        </div>
      </section>
      <section class="info2">
        <div class="container">
          <div class="info__wraps">
            {infoCardBlockData.map((block) => (
              <InfoCardBlock global={block.global} read={block.read} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
