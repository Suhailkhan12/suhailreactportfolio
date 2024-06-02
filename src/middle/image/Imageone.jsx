import Ellipse from "../../assets/ellipse.svg";
import Frontmiddleone from "../../assets/frontmiddleone.svg";
import Dot from "../../assets/dot.svg";

function Imageone() {
  return (
    <div className="partone__ellipse">
      <img src={Ellipse} alt="Iphone" className="partone__ellipse" />
      <img src={Frontmiddleone} alt="Iphone" className="partone__front" />
      <img src={Dot} alt="Iphone" className="partone__dot" />
    </div>
  );
}

export default Imageone;
