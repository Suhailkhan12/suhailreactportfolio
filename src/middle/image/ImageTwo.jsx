import Ellipse from "../../assets/ellipse.svg";
import Frontmiddleone from "../../assets/iphonemiddlwtwo.svg";
import Dot from "../../assets/dot.svg";

function ImageTwo() {
  return (
    <div className="partone__ellipse">
      <img src={Ellipse} alt="Iphone" className="partone__ellipsetwo" />
      <img src={Frontmiddleone} alt="Iphone" className="partone__front" />
      <img src={Dot} alt="Iphone" className="partone__dot" />
    </div>
  );
}

export default ImageTwo;
