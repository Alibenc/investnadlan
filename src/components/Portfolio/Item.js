import React from 'react'
import ReactPlayer from 'react-player'
import preview from "../../assets/Portfolio/preview.webp"
import logo from "../../assets/HeaderFooter/logo.png"

const Item = ({itemData, video, desc}) => {
  let isSwipe = false;

  return(
    <div 
      onMouseUp={() => {
        isSwipe = false;
      }}
     className="portfolio__item item">
      <div className="item__images">
        <ReactPlayer 
          className="portfolio__video"
          url={video}
          playing={true}
          controls
          light={preview}
        />
      </div>
      <div className="item__text-content">
        <div className="item__title-wrap">
          <h4 className="item__title">{itemData.title}</h4>
        </div>
        <div className={desc !== null ? "item__text-wrap" : "item__logo-wrap"} >
          {
            desc !== null ?
            itemData.text.map((string, i) => {
              return(
                <p key={i} className="item__txt">{string}</p>
              )
            })
            :
            <img src={logo} alt="logo" className="item__logo" />
          }
        </div>
      </div>
    </div>
  )
}

export default Item;