import human from "../../assets/About/human.webp";
import logo from "../../assets/About/logo.webp";
import phone from "../../assets/HeaderFooter/Header/phone.svg";
import "./About.css";

const About = ({content}) => {
  return(
    <section className="about">
      <div id="about" className="_fake"></div>
      <div className="about__container _container">
        <h5 className="about__title">{content.title}</h5>
        <div className="about__content">
          <img src={human} alt="human" className="about__human" />
          
          <div className="about__content-text">
            <div className="about__main">
              <div className="about__main-title-wrap">
                <img src={logo} alt="logo" className="about__logo" />
                <h6 className="about__main-title">GRAND <span>CAPITAL</span></h6>
              </div>
              
              <div className="about__txt-wrap">
                <p className="about__txt">{content.text}</p>
                <a href="tel:052-561-7889" className="header__tel">
                  <img src={phone} alt="phone" className="header__tel-icon" />
                  <span className="header__tel-txt">052-561-7889</span>
                </a>
              </div>
              
            </div>

            {/* <div className="about__items">
              <div className="about__item">
                <img src={alarm} alt="alarm" className="about__icon" />
                <p className="about__txt">{content.items[0]}</p>
              </div>

              <div className="about__item">
                <img src={diploma} alt="diploma" className="about__icon" />
                <p className="about__txt">{content.items[1]}</p>
              </div>

              <div className="about__item">
                <img src={calendar} alt="calendar" className="about__icon" />
                <p className="about__txt">{content.items[2]}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;