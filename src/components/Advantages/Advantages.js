import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import capital from "../../assets/Advantages/capital.svg"
import investors from "../../assets/Advantages/investors.svg"
import projects from "../../assets/Advantages/projects.svg"
import rent from "../../assets/Advantages/rent.svg"
import "./Advantages.css"

const Advantages = ({content}) => {
  const [ investVal, setInvestVal ] = useState(0);
  const [ projectsVal, setProjectsVal ] = useState(0);
  const [ capitalVal, setCapitalVal ] = useState(0);
  const [ rentVal, setRentVal ] = useState(0);
  const [ refAdvantages, isAnimStart ]  =  useInView();

  useEffect(() => {
    if (isAnimStart) {
      let val = 1000;
      let time = 10;

      investVal !== val && setTimeout(setInvestVal, time, investVal + 5);
    }
  }, [ investVal, isAnimStart]);

  useEffect(() => {
    if (isAnimStart) {
      let val = 136;
      let time = 15;
      projectsVal !== val && setTimeout(setProjectsVal, time, projectsVal + 1);
    }
  }, [ projectsVal, isAnimStart]);

  useEffect(() => {
    if (isAnimStart) {
      let val = 25;
      let time = 80;
      capitalVal !== val && setTimeout(setCapitalVal, time, capitalVal + 1);
    }
  }, [ capitalVal, isAnimStart]);

  useEffect(() => {
    if (isAnimStart) {
      let val = 12;
      let time = 100;
      rentVal !== val && setTimeout(setRentVal, time, rentVal + 1);
    }
  }, [ rentVal, isAnimStart]);



  return(
    <section ref={refAdvantages} className={isAnimStart ? "advantages _active" : "advantages"}  >
      <div className="_fake"></div>
      <div className="advantages__container _container">
        <div className="advantages__item">
          <h3 className="advantages__title">{investVal}+</h3>
          <p className="advantages__text">{content[0]}</p>
          <img src={investors} alt="investors" className="advantages__icon" />
        </div>

        <div className="advantages__item">
          <h3 className="advantages__title">{projectsVal}</h3>
          <p className="advantages__text">{content[1]}</p>
          <img src={projects} alt="projects" className="advantages__icon" />
        </div>

        <div className="advantages__item">
          <h3 className="advantages__title">{capitalVal}%</h3>
          <p className="advantages__text">{content[2]}</p>
          <img src={capital} alt="capital" className="advantages__icon" />
        </div>

        <div className="advantages__item">
          <h3 className="advantages__title">{rentVal}%+</h3>
          <p className="advantages__text">{content[3]}</p>
          <img src={rent} alt="rent" className="advantages__icon" />
        </div>
      </div>
    </section>
  )
}

export default Advantages;