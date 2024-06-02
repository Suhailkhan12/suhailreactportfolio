import Ellipse from "../../assets/ellipse.svg";
import Frontmiddleone from "../../assets/testimage.png";
import Dot from "../../assets/dot.svg";

function TestImage() {
  return (
    <div className="partone__ellipse">
      <img src={Ellipse} alt="Iphone" className="partone__ellipse" />
      <img src={Frontmiddleone} alt="Iphone" className="partone__testimage" />
      <img src={Dot} alt="Iphone" className="partone__dot" />
    </div>
  );
}

export default TestImage;
