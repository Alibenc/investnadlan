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
import video4 from "../../assets/Portfolio/4.mp4";
import video5 from "../../assets/Portfolio/5.mp4";
import ruVideo from "../../assets/Portfolio/rus.mp4"
import ilVideo from "../../assets/Portfolio/il.mp4";


const Portfolio = ({content, direction, lang}) => {
  const [activeSlide, setActiveSlide] = useState(null);

  return(
    <section className="portfolio">
      <div id="portfolio" className="_fake"></div>
      <div className="portfolio__container _container">
        <div className="portfolio__title-wrap">
          <h4 className="portfolio__title">{content.title}</h4>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__swiper-parent">
            <Swiper
              dir={direction}
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
              {
                lang === "ru" &&
                <SwiperSlide className="portfolio__slide">
                  <Item video={ruVideo} desc={null} itemData={content.items[0]}/>
                </SwiperSlide>
              }
              {
                lang === "il" &&
                <SwiperSlide className="portfolio__slide">
                  <Item video={ilVideo} desc={null} itemData={content.items[0]}/>
                </SwiperSlide>
              }
              <SwiperSlide className="portfolio__slide">
                <Item video={video1} itemData={content.items[0]}/>
              </SwiperSlide>
              <SwiperSlide className="portfolio__slide">
                <Item video={video2} itemData={content.items[1]}/>
              </SwiperSlide>
              <SwiperSlide className="portfolio__slide">
                <Item video={video3} itemData={content.items[2]}/>
              </SwiperSlide>
              <SwiperSlide className="portfolio__slide">
                <Item video={video4} itemData={content.items[3]}/>
              </SwiperSlide>
              <SwiperSlide className="portfolio__slide">
                <Item video={video5} itemData={content.items[4]}/>
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