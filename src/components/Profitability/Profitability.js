import img from "../../assets/Profitability/img.webp";
import "./Profitability.css";

const Profitability = () => {
  return(
    <section className="profitability">
      <div className="_fake"></div>
      <div className="profitability__container _container">
        <div className="profitability__content">
          <div className="profitability__title-wrap">
            <h3 className="profitability__title">Ваша доходность</h3>
            <p className="profitability-points__txt">После деления квартиры на три, каждая квартира сдается посуточно</p>
          </div>
          

          <div className="profitability__points-wrap profitability-points">
            <div className="profitability-points__item">
              <h5 className="profitability-points__title">1. Аренда первой квартиры</h5>
              <p className="profitability-points__txt">Прибыль с аренды первой квартиры: 3200 шек в месяц</p>
            </div>

            <div className="profitability-points__item">
              <h5 className="profitability-points__title">2. Аренда второй квартиры</h5>
              <p className="profitability-points__txt">Прибыль с аренды второй квартиры: 3000 шек в месяц</p>
            </div>

            <div className="profitability-points__item">
              <h5 className="profitability-points__title">3. Аренда третьей квартиры.</h5>
              <p className="profitability-points__txt">Прибыль с аренды третьей квартиры: 2800 шек в месяц</p>
            </div>

            <div className="profitability-points__item">
              <h5 className="profitability-points__title">4. Расходы в месяц: </h5>
              <p className="profitability-points__txt">Комунальные услуги 500 шек и возврат ипотеки 3500 шек</p>
            </div>
          </div>

          <div className="profitability__block">
            <h4 className="profitability-points__title">Сумма чистой прибыли</h4>
            <p className="profitability__txt">
              <span>1. 212.500 шек личное участие в покупке + 220.000шек (переоборудование квартиры, покупка техники) =432.500 шек</span>
              <span>2. Доход от сдачи трех квартир в аренду = 3200+3000+2800= 9000 шек</span>
              <span>3. Вычет расходов на комунальные услуги 500 и 3500 возврат ипотеки 9000-500-3500 = 5000 шек сумма чистой прибыли в месяц.</span>
              <span>4. 5000 шек*12 (год)=60.000шек в год</span>
            </p>
          </div>

          <div className="profitability__block">
            <h4 className="profitability-points__title">Вложение 432.500 шек принесет 13.8% прибыли в год!</h4>
            <p className="profitability__txt">
              <span>212.500 шек покупка + 220000 переоборудование</span>
            </p>
          </div>

        </div>
        <div className="profitability__img-wrap">
          <img src={img} alt="our profitability" className="profitability__img" />
          <a href="#feedback" className="profitability__consult consult-btn how-work__consult">Заказать консультацию</a>
        </div>
      </div>
    </section>
  )
}

export default Profitability;