import React, { useState } from "react";

import Accordeon from "../../components/Accordeon/Accordeon";

import "./last.css";
const Last = () => {
  const [accordeonData, setAccordeonData] = useState([
    {
      id: 1,
      heading: "Сколько это стоит?",
      text: "Индивидуальный подбор плана питания, онлайн тестирование, модуль анализа, доступ в закрытый чат с экспертом.",
    },
    {
      id: 2,
      heading: "Что входит в подбор?",
      text: "Оплата происходит онлайн через защищённый платёжный шлюз. Доступны карты Visa/Mastercard и электронные кошельки.",
    },
    {
      id: 3,
      heading: "Как вернуть средства?",
      text: "План питания обновляется еженедельно в течение всего срока подписки. Минимальный период - 1 месяц.",
    },
    {
      id: 4,
      heading: "Почему это выгодно?",
      text: "Да, вы можете корректировать план через личный кабинет или запросить изменения у вашего куратора.",
    },
    {
      id: 5,
      heading: "Какие гарантии качества?",
      text: "Через онлайн-чат в личном кабинете или по email support@example.com. Среднее время ответа - 15 минут в рабочее время.",
    },
  ]);
  return (
    <>
      <section class="last">
        <div class="container">
          <h2 class="last__title">Ответы на вопросы</h2>
          <div class="accordeon__list">
            {accordeonData.map((card, index) => (
              <Accordeon
                text={card.text}
                heading={card.heading}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Last;
