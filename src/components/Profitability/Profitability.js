import img from "../../assets/Profitability/img.webp";
import "./Profitability.css";

const Profitability = ({content}) => {
  return(
    <section className="profitability">
      <div className="_fake"></div>
      <div className="profitability__container _container">
        <div className="profitability__content">
          <div className="profitability__title-wrap">
            <h3 className="profitability__title">{content.title}</h3>
            <p className="profitability-points__txt">{content.subTitle}</p>
          </div>
          

          <div className="profitability__points-wrap profitability-points">
            {
              content.rent.map((el, i) => (
                <div key={i} className="profitability-points__item">
                  <h5 className="profitability-points__title">{el[0]}</h5>
                  <p className="profitability-points__txt">{el[1]}</p>
                </div>
              ))
            }
          </div>

          <div className="profitability__block">
            <h4 className="profitability-points__title">{content.profit.title}</h4>
            <p className="profitability__txt">
              {
                content.profit.list.map((text, i) => (
                  <span key={i}>{text}</span>
                ))
              }
            </p>
          </div>

          <div className="profitability__block">
            <h4 className="profitability-points__title">{content.attachment[0]}</h4>
            <p className="profitability__txt">
              <span>{content.attachment[1]}</span>
            </p>
          </div>

        </div>
        <div className="profitability__img-wrap">
          <img src={img} alt="our profitability" className="profitability__img" />
          <a href="#feedback" className="profitability__consult consult-btn how-work__consult">{content.button}</a>
        </div>
      </div>
    </section>
  )
}

export default Profitability;