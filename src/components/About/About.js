import human from "../../assets/About/human.webp";
import logo from "../../assets/About/logo.webp";
import alarm from "../../assets/About/alarm.svg";
import calendar from "../../assets/About/calendar.svg";
import diploma from "../../assets/About/diploma.svg";
import phone from "../../assets/HeaderFooter/Header/phone.svg";
import "./About.css";


const About = () => {
  return(
    <section className="about">
      <div id="about" className="_fake"></div>
      <div className="about__container _container">
        <h5 className="about__title">Почему мы</h5>
        <div className="about__content">
          <img src={human} alt="human" className="about__human" />
          
          <div className="about__content-text">
            <div className="about__main">
              <div className="about__main-title-wrap">
                <img src={logo} alt="logo" className="about__logo" />
                <h6 className="about__main-title">GRAND <span>CAPITAL</span></h6>
              </div>
              
              <div className="about__txt-wrap">
                <p className="about__txt">Генеральный директор компании Илан Чеботарь . Франчайзер всемирно известной компании Римакс. Владелец двух офисов в Хайфе Римакс Гранд. Римакс Гранд входит в тройку самых успешных риелторских офисов в Хайфе по продажам недвижимости</p>
                <a href="tel:052-561-7889" className="header__tel">
                  <img src={phone} alt="phone" className="header__tel-icon" />
                  <span className="header__tel-txt">052-561-7889</span>
                </a>
              </div>
              
            </div>

            <div className="about__items">
              <div className="about__item">
                <img src={alarm} alt="alarm" className="about__icon" />
                <p className="about__txt">Комплексное сопровождение для тех, кто хочет инвестировать в недвижимость. Мы позаботимся о каждом этапе процесса.</p>
              </div>

              <div className="about__item">
                <img src={diploma} alt="diploma" className="about__icon" />
                <p className="about__txt">Полная юридическая проверка объекта недвижимости, включая сопровождение сделки покупки</p>
              </div>

              <div className="about__item">
                <img src={calendar} alt="calendar" className="about__icon" />
                <p className="about__txt">Управление объектом и поиск арендаторов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;