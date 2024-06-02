import Hero from "../features/Hero/Hero";
import "./Home.scss";
import About from "../features/About/About";
import Project from "../features/Project/Project";
import WhatIdo from "../features/WhatIdo/WhatIdo";
import Footer from "../features/Footer/Footer";
import Middle from "../middle/Middle";
import Middletwo from "../middle/Middletwo";
import MiddleThree from "../middle/MiddleThree";
import Testimonial from "../middle/Testimonial";
import Faqs from "../faq/Faqs";

function Home({ resumeData }) {
  return (
    <main className="container">
      <Hero />
      <Middle />
      <Middletwo />
      <MiddleThree />
      <Testimonial />
      <Faqs />
      {/* <About about={resumeData.about} />
      <WhatIdo whatdata={resumeData.whatidoref} />
      <Project projectdata={resumeData.projectdata} /> */}
      {/* 
      <Footer footerdata={resumeData.footercontent} /> */}
    </main>
  );
}

export default Home;
