import React from "react";
import "./InfoCardBlock.css";
const InfoCardBlock = ({ global, read }) => {
  return (
    <>
      <div class="info__items">
        <p class="info__global info__global_fix">{global}</p>
        <p class="info__read">{read}</p>
      </div>
    </>
  );
};

export default InfoCardBlock;
