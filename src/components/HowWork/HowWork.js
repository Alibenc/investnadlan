import "./HowWork.css";
import mainImg from "../../assets/HowWork/main.webp"
import shekelIMG from "../../assets/HowWork/shekel.webp"

const HowWork = ({content}) => {
  return(
    <section className="how-work">
      <div id="how-work" className="_fake"></div>
      <div className="how-work__container _container">
        <h2 className="how-work__title">{content.title}</h2>
        <div className="how-work__content-wrap">
          <div className="how-work__content">
            <img src={mainImg} alt="how this work?" className="how-work__img" />
            <div className="how-work__content-txt">
              <h4 className="how-work__mini-title">{content.content.title}</h4>
              <p className="how-work__txt">{content.content.text}</p>
            </div>
          </div>
          <div className="how-work__statistic how-statistic">
            <div className="how-statistic__top">
              <h3 className="how-statistic__title">{content.statistic.title}</h3>
              <div className="how-statistic__diagram">
                <div className="how-statistic__diagram-data">
                  <p className="how-statistic__diagram-data-txt">75%</p>
                  <p className="how-statistic__diagram-data-txt">25%</p>
                </div>
                <img src={shekelIMG} alt="shekel" className="how-statistic__diagram-shekel" />
              </div>
            </div>
            <div className="how-statistic__bottom">
              <div className="how-statistic__bottom-item orange">
                <span className="how-statistic__percent">25%</span>
                <div className="how-statistic__text-wrap">
                  <h4 className="how-work__mini-title">{content.statistic.percents[0]}</h4>
                </div>
              </div>

              <div className="how-statistic__bottom-item">
                <span className="how-statistic__percent">75%</span>
                <div className="how-statistic__text-wrap">
                  <h4 className="how-work__mini-title">{content.statistic.percents[1]}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a href="#feedback" className="how-work__consult consult-btn">{content.button}</a>
      </div>
    </section>
  )
}

export default HowWork;