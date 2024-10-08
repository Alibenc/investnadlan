import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Advantages from "./components/Advantages/Advantages";
import HowWork from "./components/HowWork/HowWork"
import Profitability from "./components/Profitability/Profitability";
import Steps from "./components/Steps/Steps";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import TextBlock from "./components/TextBlock/TextBlock";


import Russia from "./componentsCountryes/Russia";
import Israel from "./componentsCountryes/Israel";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Israel />} />
      <Route path="/ru" element={<Russia />} />
    </Routes>


    // <div id="home" className="App _wrapper">
    //   <Header/>
    //   <MainSection/>
    //   <Advantages/>
    //   <TextBlock/>
    //   <HowWork/>
    //   <Profitability/>
    //   <Steps/>
    //   <Portfolio/>
    //   <About/>
    //   <Feedback/>
    //   <Footer/>
    // </div>
  );
}

export default App;
