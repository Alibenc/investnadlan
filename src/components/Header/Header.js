import logo from "../../assets/HeaderFooter/logo.png";
import phone from "../../assets/HeaderFooter/Header/phone.svg";
import phone2 from "../../assets/HeaderFooter/Header/phone2.svg";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    setIsScroll(() => {
      if (window.scrollY > 0) {
        return true;
      } else {
        return false;
      }
    })
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, []);

  useEffect(() => {
    const body = document.body;
    isMenu ? body.classList.add('_lock') : body.classList.remove('_lock');
  }, [isMenu, setIsMenu]);


  return(
    <header className={isScroll ? "header _scrolled" : "header"}>
      <div className="header__container _container">
        <a href="#home" className="header__logo-wrap">
          <img src={logo} alt="logo" className="header__logo" />
        </a>
        <div className={isMenu ? "header__menu menu _active" : "header__menu menu"}>
          <div className="menu__body">
            <nav className="header__nav">
              <a onClick={() => setIsMenu(false)} href="#home" className="header__link">Главная</a>
              <a onClick={() => setIsMenu(false)} href="#how-work" className="header__link">Как это работает</a>
              <a onClick={() => setIsMenu(false)} href="#steps" className="header__link">Пошаговый план</a>
              <a onClick={() => setIsMenu(false)} href="#feedback" className="header__link">Консультация</a>
              <a onClick={() => setIsMenu(false)} href="#about" className="header__link">О нас</a>
              <a onClick={() => setIsMenu(false)} href="#portfolio" className="header__link">Примеры объектов</a>
            </nav>
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
          <div onClick={() => setIsMenu(!isMenu)} className="menu__icon">
            <span></span>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header;