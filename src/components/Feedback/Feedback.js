import "./Feedback.css"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import FormResult from "./FormResult";


const Feedback = ({content}) => {
  const form = useRef();
  const [isErr, setIsErr] = useState(null);
  const [isLoad, setIsLoad] = useState(null);
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoad(true);
    setIsValid(true);

    emailjs.sendForm(
      'service_cu9nyn4', 
      'template_5od4nop', 
      form.current, {
        publicKey: 'y5Is_w2dfuYSvN_3W',
      }).then(() => {setIsErr(false)},
        (error) => {setIsErr(true); console.log(error)},);
  };
  return(
    <section className="feedback">
      <div className="feedback__bg"></div>
      <FormResult content={content} isErr={isErr} setIsErr={setIsErr} isLoad={isLoad} setIsLoad={setIsLoad}/>
      <div id="feedback" className="_fake"></div>
      <div className="feedback__blur"></div>
      <div className="feedback__container _container">
        <div className="feedback__container-inner">
          <div className="feedback__content">
            <h5 className="feedback__title">{content.title[0]} <br /><span>{content.title[1]}</span></h5>
            <form onChange={() => setMessage(`name: ${nameValue}, phone: ${phoneValue}`)} 
              onSubmit={(e) => {
                if (phoneValue && nameValue !== '') {
                  sendEmail(e);
                } else {
                  e.preventDefault();
                  setIsValid(false);
                }
              }}
              ref={form} className="feedback__form"
            >
              <input onChange={(e) => {
                setNameValue(e.target.value);
              }} placeholder={content.placeholderName} type="text" className="feedback__input" />
              <input onChange={(e) => {
                setPhoneValue(e.target.value);
              }} placeholder={content.placeholderPhone} type="text" className="feedback__input" />

              <textarea name="message" value={message} className="feedback__textarea" />
              <button className="feedback__submit">{content.send}</button>
              <p className={isValid ? "feedback__warn" : "feedback__warn _active"}>{content.error}</p>
            </form>
            <p className="feedback__txt">{content.text} <a href="tel:052-5617889">052-5617889</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback;