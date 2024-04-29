import "./Steps.css";
import step1 from "../../assets/Step/step1.jpg";
import step2 from "../../assets/Step/step2.jpg";
import step3 from "../../assets/Step/step3.jpg";
import step4 from "../../assets/Step/step4.jpg";
import step5 from "../../assets/Step/step5.jpg";
import step6 from "../../assets/Step/step6.jpg";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const stepsArr = [
  {
    number: 1,
    image: step1,
    title: "Консультация",
    text: "Личная встреча или встреча по Zoom с дипломированным финансовым консультантом, с которым вы обсуждаете наиболее выгодные варианты финансирования покупки квартиры.",
  },
  {
    number: 2,
    image: step2,
    title: "Подбор квартиры",
    text: "Мы предлагаем инвестору различные варианты квартир, которые лучше всего подходят клиенту с точки зрения его потребностей и экономических возможностей для инвестиций.",
  },
  {
    number: 3,
    image: step3,
    title: "Проверка",
    text: "После выбора объекта, мы передаем объект адвокату, который проверяет, что все в порядке с недвижимостью и что нет долгов, которые могли бы остановить или помешать нам продолжить процесс",
  },
  {
    number: 4,
    image: step4,
    title: "Подготовка квартиры",
    text: 'Проектирование, ремонт, разделение квартиры. По завершении ремонта мы оборудуем квартиры  новой мебелью и электроприборами. После чего, инвестор получает готовые, обставленные и красивые квартиры.',
  },
  {
    number: 5,
    image: step5,
    title: "Получение ключей",
    text: 'Инвестор получает ключи от переоборудованных, отремонтированных, готовых к заселению,  новых и красивых квартир.',
  },
  {
    number: 6,
    image: step6,
    title: "Сдача в аренду",
    text: 'Как только квартиры готовы, они сразу переходят в наш отдел управления и аренды, который заботится об управлении объектами и поиске подходящих арендаторов.',
  },
]

const Steps = () => {
  const [lineStyleHeight, setLineStyleHeight] = useState(0);

  useEffect(() => {
    let screenHeight = document.documentElement.offsetHeight;
    let lineHeigh = document.querySelector('.steps__line').getBoundingClientRect().top;
    
    window.addEventListener("scroll", () => {
      lineHeigh = document.querySelector('.steps__line').getBoundingClientRect().top
      if (screenHeight / 2 > lineHeigh) {
        setLineStyleHeight((window.scrollY + screenHeight / 2) - (lineHeigh + window.pageYOffset));
      } else {
        setLineStyleHeight(0);
      }
    })
  }, [])

  return(
    <section  className="steps">
      <div id="steps" className="_fake"></div>
      <div className="steps__container _container">
        <h3 className="steps__title">Пошаговый план действий</h3>

        <div className="steps__content">
          <div className="steps__line">
            <div style={{height: lineStyleHeight + 'px'}} className="steps__line-inner"></div>
          </div>

          <div className="steps__cards">
            {
              stepsArr.map((obj, i) => {
                return(
                  <Fade direction={!Number.isInteger((i + 1) / 2) || i + 1 / 1 === 1 ? "right" : "left"} className="steps__card-wrap" key={i}>
                    <div className="steps__card">
                      <p className="steps__number">{obj.number}</p>
                      <img src={obj.image} alt={`step${i + 1}`} className="steps__image" />
                      <div className="steps__txt-content">
                        <h6 className="steps__title-card">{obj.title}</h6>
                        <p className="steps__txt">{obj.text}</p>
                      </div>
                    </div>
                  </Fade>
                )
              })
            }
            
            

            {/* <div className="steps__card-wrap">
              <div className="steps__card">
                <p className="steps__number">2</p>
                <img src={step2} alt="step2" className="steps__image" />
                <div className="steps__txt-content">
                  <h6 className="steps__title-card">Lorem ipsum</h6>
                  <p className="steps__txt">Lorem ipsum dolor sit amet consectetur. Nisi lobortis  Lorem ipsum dolor sit amet consectetur. Nisi lobortis  Lorem ipsum dolor sit amet consectetur. Nisi lobortis  Lorem ipsum dolor sit amet consectetur. Nisi lobortis  Lorem ipsum dolor sit amet consectetur. Nisi lobortis </p>
                </div>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps;