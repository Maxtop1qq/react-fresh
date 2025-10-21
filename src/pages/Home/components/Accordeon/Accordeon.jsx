import React from "react";
import Img1 from "../../../../assets/img/Icon1.svg";
import "./accordeon.css";
const Accordeon = ({ heading, text, index }) => {
  return (
    <>
      <div class="accordeon">
        <label for={"accordeon__toggler" + index} class="accordeon__header">
          <p class="accordeon__heading">{heading}</p>
          <div class="accordeon__cross">
            <img src={Img1} alt="" />
          </div>
        </label>
        <input
          type="checkbox"
          id={"accordeon__toggler" + index}
          class="accordeon__toggler"
        />
        <div class="accordeon__body">
          <p class="accordeon__text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Accordeon;
