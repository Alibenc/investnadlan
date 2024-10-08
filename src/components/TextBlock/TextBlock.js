import "./TextBlock.css"

const TextBlock = ({content}) => {
  return(
    <section className="text-block">
      <div className="text-block__container _container">
        <h3 className="how-work__title">{content.title}</h3>
        <div className="text-block__content">
          {
            content.list.map((el, i) => (
              <p key={i} className="how-work__txt"><b>{el[0]}</b>{el[1]}</p>
            ))
          }
        </div>
        <h5 className="how-work__title text-block__sub-title">{content.miniTitle}</h5>
      </div>
    </section>
  )
}

export default TextBlock;