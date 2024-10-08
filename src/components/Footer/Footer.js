import "./Footer.css";
import logo from "../../assets/HeaderFooter/logo.png"

import phone from "../../assets/HeaderFooter/Header/phone.svg"
import phone2 from "../../assets/HeaderFooter/Header/phone2.svg"

const Footer = ({content}) => {
  return(
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__top">
          <a href="" className="footer__logo-wrap">
            <img src={logo} alt="logo" className="footer__logo" />
          </a>

          <ul className="footer__menu">
            {
              content.menu.map((el, i) =>(
                <li key={i}><a href={el[0]} className="footer__link">{el[1]}</a></li>
              ))
            }
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