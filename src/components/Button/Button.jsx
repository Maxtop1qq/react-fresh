import React from "react";
import "./button.css";
const Button = ({ text, size = "small" }) => {
  return (
    <button class={size == "small" ? "header__btn" : "section__btn"}>
      {text}
    </button>
  );
};

export default Button;
