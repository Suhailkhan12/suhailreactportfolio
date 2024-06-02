import "./hero.scss";
import One from "../../assets/heroimageone.svg";
import Dot from "../../assets/dot.svg";
import Front from "../../assets/front.svg";
import Back from "../../assets/back.svg";
import Ellipse from "../../assets/ellipse.svg";
import Star from "../../assets/star.svg";

import Backback from "../../assets/backback.svg";
import { HiArrowRight } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";

function Hero({ intro }) {
  return (
    <section className="hero">
      <div className="hero__one">
        <img src={Dot} alt="Dot" className="hero__one__dot" />
        <h2 className="heading-1">Make The Best Financial Decisions</h2>
        <p className="paragraph capitalize">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="hero__one__button">
          <div className="readyflex btn blackherobtn">
            Get Started
            <HiArrowRight />
          </div>
          <div className="readyflex btn whiteherobtn">
            <IoPlayCircleOutline className="size" /> Watch Video
          </div>
        </div>
        <div className="starone">
          <img src={Star} alt="one" />
        </div>
        <div className="startwo">
          <img src={Star} alt="one" />
        </div>
        <div className="starthree">
          <img src={Star} alt="one" />
        </div>
        <div className="starfour">
          <img src={Star} alt="one" />
        </div>
        <div className="imagewrapper">
          <img src={One} alt="one" />
        </div>
      </div>
      <div className="hero__two">
        <div className="hero__two__front">
          <img src={Front} alt="Iphone" />
        </div>
        <div className="hero__two__back">
          <img src={Back} alt="Iphone" />
        </div>
        <div className="hero__two__backback">
          <img src={Backback} alt="Iphone" />
        </div>
        <div className="hero__two__ellipse">
          <img src={Ellipse} alt="Iphone" className="hero__two__ellipse__img" />
        </div>
        <div className="hero__two__dot">
          <img src={Dot} alt="Iphone" className="hero__two__ellipse__img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
