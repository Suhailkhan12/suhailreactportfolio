import Hero from "../features/Hero/Hero";
import "./Home.scss";
import resumeData from "../../Projectdata";
import About from "../features/About/About";
import Project from "../features/Project/Project";
import WhatIdo from "../features/WhatIdo/WhatIdo";
import Footer from "../features/Footer/Footer";
import Gmail from "../features/Gmail/Gmail";
import Getintouch from "../features/Getintouch/Getintouch";

function Home() {
  return (
    <main className="container">
      <Hero intro={resumeData.intro} />
      <About about={resumeData.about} />
      <WhatIdo whatdata={resumeData.whatidoref} />
      <Project projectdata={resumeData.projectdata} />
      <Getintouch />
      <Footer footerdata={resumeData.footercontent} />
      <Gmail />
    </main>
  );
}

export default Home;
