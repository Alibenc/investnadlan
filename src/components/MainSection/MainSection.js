import investIMG from "../../assets/MainSection/invest.webp"
import "./MainSection.css";

const MainSection = () => {
  return(
    <section id="main-section" className="main-section">
      <div className="_fake"></div>
      <div className="main-section__container _container">
        <img src={investIMG} alt="invest" className="main-section__image" />
        <div className="main-section__content">
          <h1 className="main-section__title">ИНВЕСТИЦИИ В <br /> <span>НЕДВИЖИМОСТЬ</span></h1>
        </div>
      </div>
    </section>
  )
}

export default MainSection;