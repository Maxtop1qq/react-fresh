import React, { useState } from "react";
import Step from "../../components/Step/Step";
import "./stepsection.css";
const Stepsection = () => {
  const [stepData, setStepData] = useState([
    {
      id: 1,
      text: "Заполняете анкету",
    },
    {
      id: 2,
      text: "Заполняете анкету",
    },
    {
      id: 3,
      text: "Заполняете анкету",
    },
    {
      id: 4,
      text: "Заполняете анкету",
    },
  ]);
  return (
    <>
      <section class="stepsection">
        <div class="container">
          <h2 class="stepsection__title">Как это работает?</h2>
          <ol class="stepsection__steplist">
            {stepData.map((card) => (
              <Step text={card.text} />
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Stepsection;
