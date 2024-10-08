import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import Advantages from "../components/Advantages/Advantages";
import TextBlock from "../components/TextBlock/TextBlock";
import HowWork from "../components/HowWork/HowWork";
import Profitability from "../components/Profitability/Profitability";
import Steps from "../components/Steps/Steps";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Reviews from "../components/Reviews/Reviews";
import textData from "../textData";
import { useEffect } from "react";

const Russia = () => {
  const content = textData.rus;
  useEffect(() => {
    document.documentElement.lang = "ru";
  }, [])



  return(
    <div id="home" className="App _wrapper _rus">
      <Header content={content.header} />
      <MainSection content={content.mainSection} />
      <Advantages content={content.adventages} />
      <TextBlock content={content.textBlock} />
      <HowWork content={content.howWork} />
      <Profitability content={content.profitability} />
      <Steps content={content.steps} lang="ru" />
      <Portfolio lang="ru" direction="ltr" content={content.objects} />
      <Reviews content={content.reviews} />
      <About content={content.about} />
      <Feedback content={content.feedback} />
      <Footer content={content.header} />
    </div>
  )
}

export default Russia;