import React from 'react'
import ReactPlayer from 'react-player'
import preview from "../../assets/Portfolio/preview.webp"

const Item = ({itemData, video}) => {
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
          <h4 className="item__title">{itemData.txtContent.titleMain}</h4>
        </div>
        <div className="item__text-wrap">
          {
            itemData.txtContent.text.map((string, i) => {
              return(
                <p key={i} className="item__txt">{string}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Item;