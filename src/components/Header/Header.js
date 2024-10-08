import logo from "../../assets/HeaderFooter/logo.png";
import phone from "../../assets/HeaderFooter/Header/phone.svg";
import israelFlag from "../../assets/HeaderFooter/Header/israel.webp"
import rusFlag from "../../assets/HeaderFooter/Header/russia.webp"
import arrow from "../../assets/HeaderFooter/Header/arrow.svg"
import phone2 from "../../assets/HeaderFooter/Header/phone2.svg";
import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({content}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [langUrl] = useState(() => {
    let pathname = window.location.pathname;
    return pathname.substr(1);
  });
  const [isLangSelect, setIsLangSelect] = useState(false);

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

    document.documentElement.addEventListener("click", (e) => {
      if (!e.target.closest(".header__lang")) {
        setIsLangSelect(false);
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
        <div className="header__logo-lang">
          <a href="#home" className="header__logo-wrap">
            <img src={logo} alt="logo" className="header__logo" />
          </a>

          <div 
            className={isLangSelect ? "header__lang lang _active" : "header__lang lang"}
            onClick={() => setIsLangSelect(!isLangSelect)}
          >
            
            <img src={langUrl === "ru" ? rusFlag : israelFlag} 
              alt="флаг" className="lang__flag" 
            />
            <img src={arrow} alt="стрелка" className="lang__trinagle"/>

            <div className="lang__select">
              <Link to={langUrl !== "ru" ? "/ru" : "/"} >
                <img src={langUrl !== "ru" ? rusFlag : israelFlag} 
                  alt="флаг" className="lang__flag" 
                />
              </Link>
            </div>
          </div>
        </div>
        
        <div className={isMenu ? "header__menu menu _active" : "header__menu menu"}>
          <div className="menu__body">
            <nav className="header__nav">
              {
                content.menu.map((el, i) => {
                  return(
                    <a onClick={() => setIsMenu(false)} href={el[0]} key={i} className="header__link">{el[1]}</a>
                  )
                })
              }
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