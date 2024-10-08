import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Reviews.css";

const Reviews = ({content}) => {
  return(
    <section className="reviews">
      <div className="reviews__container _container">
        <h4 className="reviews__title">{content.title}</h4>
        <div className="reviews__list">

          {
            content.list.map((el, i) => (
              <div key={i} className="reviews__item">
                <div className="reviews__top">
                  <img src={el.photo} alt="avatar" className="reviews__avatar" />
                  <div className="reviews__about">
                    <h6 className="reviews__name">{el.name}</h6>
                    <p className="reviews__status">{el.status}</p>
                  </div>
                </div>
                <div className="reviews__bottom">
                  <div className="reviews__stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="reviews__text">{el.text}</p>
                </div>
              </div>
            ))
          }

          
        </div>
      </div>
    </section>
  )
}

export default Reviews;