import React from "react";
import "./step.css";
const step = ({ text }) => {
  return (
    <>
      <li class="step">
        <div class="step__counter"></div>
        <p class="step__text">{text}</p>
      </li>
    </>
  );
};

export default step;
