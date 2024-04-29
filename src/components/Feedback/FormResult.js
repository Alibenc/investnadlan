import secsess from "../../assets/Feedback/FormResult/sucses.svg";
import error from "../../assets/Feedback/FormResult/error.svg";
import { useEffect } from "react";

const FormResult = ({isErr, setIsErr, isLoad, setIsLoad}) => {
  useEffect(() => {
    isLoad !== null ? document.body.classList.add('_lock') : document.body.classList.remove('_lock');
  }, [isLoad, setIsLoad])
  return(
    <div 
      onClick={() => { 
        isErr !== null && setIsErr(null); 
        isErr !== null && setIsLoad(null);
      }}
      className={isLoad !== null ? "form-result _active" : "form-result"}>
      {
        isErr !== null ?
        <div onClick={(e) => e.stopPropagation()} className={isErr ? "form-result__modal _err" : "form-result__modal"} >
          <h4 className="form-result__title">{isErr ? "Произошла ошибка. Попробуйте позже" : "Ваше обращение отправлено"}</h4>
          <div className="form-result__image-wrap">
            <img src={isErr ? error : secsess} alt="" className="form-result__image" />
          </div>
          <button onClick={() => {setIsErr(null); setIsLoad(null)}} className="form-result__ok">Закрыть</button>
        </div>
        :
        <div className="form-result__load"></div>
       }
      
    </div>
  )
}

export default FormResult;