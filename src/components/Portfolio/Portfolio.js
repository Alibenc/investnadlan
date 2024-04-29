import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import Item from './Item';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Portfolio.css";


import video1 from "../../assets/Portfolio/1.mp4";
import video2 from "../../assets/Portfolio/2.mp4";
import video3 from "../../assets/Portfolio/3.mp4";

const content = {
  first: {
    txtContent: {
      titleMain: "Хайфа",
      text: [
        "Стоимость квартиры — 850 000 шек",
        "Размер машканты — 637 500 шек",
        "Личное участие — 362 500 шек",
        "Стоимость ремонта для разделения на 2 жилых единицы + мебель и электротовары — 150 000 шек",
        "Стоимость аренды (посуточно) за месяц — 6800 шек",
        "Средняя рентабельность — 10.5%",
      ]
    }
  },
  secound: {
    txtContent: {
      titleMain: "Хайфа",
      text: [
        "Стоимость квартиры — 700 000 шек",
        "Размер машканты — 525 500 шек",
        "Личное участие — 325 000 шек",
        "Стоимость ремонта для разделения на 2 жилых единицы + мебель и электротовары — 150 000 шек",
        "Стоимость аренды (посуточно) в месяц — 6200 шек",
        "Средняя рентабельность — 15.9%",
      ]
    }
  },
  third: {
    txtContent: {
      titleMain: "Хайфа",
      text: [
        "Стоимость квартиры — 1 000 000 шек",
        "Размер машканты — 750 000 шек",
        "Личное участие — 450 000 шек",
        "Стоимость ремонта для разделения на 3 жилых единицы + мебель и электротовары — 200 000 шек",
        "Стоимость аренды (посуточно) в месяц — 8700 шек",
        "Средняя рентабельность — 10.4%",
      ]
    }
  }
}

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(null);

  return(
    <section className="portfolio">
      <div id="portfolio" className="_fake"></div>
      <div className="portfolio__container _container">
        <div className="portfolio__title-wrap">
          <h4 className="portfolio__title">Примеры наших объектов</h4>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__swiper-parent">
            <Swiper
              className="portfolio__swiper"
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.portfolio__next',
                prevEl: '.portfolio__prev',
              }}
              pagination={{
                el: '.portfolio__pagination',
                clickable: true
              }}
              onSwiper={(e) => {
                setActiveSlide(e.activeIndex);
              }}
              onSlideChange={(e) => {
                setActiveSlide(e.activeIndex);
                const slides = document.querySelectorAll('.portfolio__slide');
                const video = slides[activeSlide].querySelector('video');
                video && video.pause();
              }}
            >
              <SwiperSlide className="portfolio__slide">
                <Item video={video1} itemData={content.first}/>
              </SwiperSlide>
              <SwiperSlide className="portfolio__slide">
                <Item video={video2} itemData={content.secound}/>
              </SwiperSlide>
              <SwiperSlide className="portfolio__slide">
                <Item video={video3} itemData={content.third}/>
              </SwiperSlide>
            </Swiper>
            <div className="portfolio__nav-wrap-parent">
              <div className="portfolio__nav-wrap">
                <div className="portfolio__prev swiper-button-prev portfolio__nav"></div>
                <div className="portfolio__next swiper-button-next portfolio__nav"></div>
              </div>
              <div className="portfolio__pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio;