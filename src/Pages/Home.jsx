import Hero from "../features/Hero/Hero";
import "./Home.scss";

import Middle from "../middle/Middle";
import Middletwo from "../middle/Middletwo";
import MiddleThree from "../middle/MiddleThree";
import Testimonial from "../middle/Testimonial";
import Faqs from "../faq/Faqs";
import Downloadapp from "../Downloadapp/Downloadapp";
import Footer from "../features/Footer/Footer";

function Home({ resumeData }) {
  return (
    <main className="container">
      <Hero />
      <Middle />
      <Middletwo />
      <MiddleThree />
      <Testimonial />
      <Faqs />
      <Downloadapp />
      <Footer />
    </main>
  );
}

export default Home;
