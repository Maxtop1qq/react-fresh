import "./header.css";
import logo from "./assets/img/Vector.svg";
import Button from "../Button";
const Header = ({ navigation }) => {
  return (
    <header class="header">
      <div class="container">
        <a href="#">
          <div class="header__logo">
            <img src={logo} alt="" />
            <p class="header__text">
              подбор <br />
              плана питания
            </p>
          </div>
        </a>

        <nav class="header__nav">
          {navigation &&
            navigation.map((link) => (
              <a class="header__item" href={link.href}>
                {link.title}
              </a>
            ))}
        </nav>
        <div class="header__right">
          <a class="header__link" href="#">
            +7 (950) 567-11-22
          </a>
          <Button text={"Регистрация"} />
        </div>
        <div class="header__menu">
          <label for="header__label" class="header__btnmenu">
            <img src="./assets/img/burger.svg" alt="" />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
