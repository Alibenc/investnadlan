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
import textData from "../textData";
import Reviews from "../components/Reviews/Reviews"
import { useEffect } from "react";
import "../globalCSS/rtl.css"

const Israel = () => {
  const content = textData.israel;
  useEffect(() => {
    document.documentElement.lang = "he-IL";
  }, [])

  return(
    <div id="home" className="App _wrapper _rtl _il">
      <Header content={content.header} />
      <MainSection content={content.mainSection} />
      <Advantages content={content.adventages} />
      <TextBlock content={content.textBlock} />
      <HowWork content={content.howWork} />
      <Profitability content={content.profitability} />
      <Steps content={content.steps} lang="il" />
      <Portfolio lang="il" direction="rtl" content={content.objects} />
      <Reviews content={content.reviews} />
      <About content={content.about} />
      <Feedback content={content.feedback} />
      <Footer content={content.header} />
    </div>
  )
}

export default Israel;