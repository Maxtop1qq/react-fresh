import React from "react";
import "./footer.css";
import logo from "./Vector.svg";
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="topfooter">
          <div class="container">
            <a href="#">
              <div class="topfooter__logo">
                <img src={logo} alt="" />
                <p class="topfooter__text">
                  подбор <br />
                  плана питания
                </p>
              </div>
            </a>
            <a href="#" class="topfooter__tel">
              +7 (950) 567-11-22
            </a>
          </div>
        </div>
        <div class="bottomfooter">
          <div class="container">
            <p class="bottomfooter__text">@ Фреш, 2022</p>
            <div class="bottomfooter__wraps">
              <a href="#" class="bottomfooter__items">
                example@yandex.ru
              </a>
              <a href="#" class="bottomfooter__items bottomfooter__items1">
                Договор оферты
              </a>
              <a href="#" class="bottomfooter__items bottomfooter__items_bg">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
