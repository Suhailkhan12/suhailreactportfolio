import Faq from "./Faq";
import "./faqs.scss";

function Faqs() {
  return (
    <>
      <div className="headeralign">
        <h2 className="paragraph pink">FAQ</h2>
        <h3 className="heading-3">
          Frequently asked
          <br /> questions
        </h3>
      </div>
      <div className="faqs">
        <div className="faqs__one">
          <Faq bgcolor="#ff5555" color="#fff" />
          <Faq bgcolor="#fff" color="#000" />
          <Faq bgcolor="#ff5555" color="#fff" />
        </div>
        <div className="faqs__two">
          <Faq bgcolor="#fff" color="#000" />
          <Faq bgcolor="#ff5555" color="#fff" />
          <Faq bgcolor="#fff" color="#000" />
        </div>
      </div>
    </>
  );
}

export default Faqs;
