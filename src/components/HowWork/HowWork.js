import "./HowWork.css";
import mainImg from "../../assets/HowWork/main.webp"
import shekelIMG from "../../assets/HowWork/shekel.webp"

const HowWork = () => {
  return(
    <section className="how-work">
      <div id="how-work" className="_fake"></div>
      <div className="how-work__container _container">
        <h2 className="how-work__title">Как это работает?</h2>
        <div className="how-work__content-wrap">
          <div className="how-work__content">
            <img src={mainImg} alt="how this work?" className="how-work__img" />
            <div className="how-work__content-txt">
              <h4 className="how-work__mini-title">Параметры для расчета</h4>
              <p className="how-work__txt">Давайте возьмем пример, что вы купили трехкомнатную квартиру стоимостью 850 000 шек с целью разделить ее на 3 однокомнатные квартиры. В этом случае, ипотека может составлять 75% от стоимости квартиры — 637 500 шек, ваше личное участие при взятии машканты — 25% от стоимости квартиры — 212 500 шек. По нашему опыту, затраты на переоборудование квартиры на 3 отдельных включая мебель, необходимая сантехника и бытовые приборы — 220 000 шек</p>
            </div>
          </div>
          <div className="how-work__statistic how-statistic">
            <div className="how-statistic__top">
              <h3 className="how-statistic__title">Квартира 3 комнаты — 850 000 шек</h3>
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
                  <h4 className="how-work__mini-title">Доля инвестора 25 % от стоимости 212.500 шек</h4>
                  {/* <p className="how-work__txt">
                    Nisi lobortis turpis quis ultrices facilisis.Lorem ipsum dolor sit amet consectetur. Nisi lobortis 
                    Nisi lobortis turpis quis ultrices facilisis.Lorem ipsum dolor sit amet consectetur. Nisi lobortis turpis quis ultrices.
                  </p> */}
                </div>
              </div>

              <div className="how-statistic__bottom-item">
                <span className="how-statistic__percent">75%</span>
                <div className="how-statistic__text-wrap">
                  <h4 className="how-work__mini-title">Ипотека 75% от стоимости 637.500 шек</h4>
                  {/* <p className="how-work__txt">
                    Nisi lobortis turpis quis ultrices facilisis.Lorem ipsum dolor sit amet consectetur. Nisi lobortis 
                    Nisi lobortis turpis quis ultrices facilisis.Lorem ipsum dolor sit amet consectetur. Nisi lobortis turpis quis ultrices.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a href="#feedback" className="how-work__consult consult-btn">Заказать консультацию</a>
      </div>
    </section>
  )
}

export default HowWork;