import "./Footer.css";
import logo from "../../assets/HeaderFooter/logo.png"

import phone from "../../assets/HeaderFooter/Header/phone.svg"
import phone2 from "../../assets/HeaderFooter/Header/phone2.svg"

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__top">
          <a href="" className="footer__logo-wrap">
            <img src={logo} alt="logo" className="footer__logo" />
          </a>

          <ul className="footer__menu">
            <li><a href="#home" className="footer__link">Главная</a></li>
            <li><a href="#how-work" className="footer__link">Как это работает</a></li>
            <li><a href="#steps" className="footer__link">Пошаговый план</a></li>
            <li><a href="#feedback" className="footer__link">Контакты</a></li>
            <li><a href="#about" className="footer__link">О нас</a></li>
            <li><a href="#portfolio" className="footer__link">Примеры объектов</a></li>
          </ul>
            <div className="header__tel-wrap">
              <a href="tel:052-5617889" className="header__tel">
                <img src={phone} alt="phone" className="header__tel-icon" />
                <span className="header__tel-txt">052-5617889</span>
              </a>

              <a href="tel:04-8884000" className="header__tel">
                <img src={phone2} alt="phone" className="header__tel-icon" />
                <span className="header__tel-txt">04-8884000</span>
              </a>
            </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">&#169; 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;