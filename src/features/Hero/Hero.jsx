import "./hero.scss";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

function Hero({ intro }) {
  const { name, description, quality } = intro;

  console.log(quality);

  return (
    <section className="hero">
      <span className="heading-4  hero__subheading">Hi, my name is</span>
      <h1 className="heading-1 hero__heading">
        {name}.
        <br />
        <ReactTyped strings={quality} typeSpeed={40} backSpeed={50} loop />
      </h1>
      <p className="hero__para heading-4 heading-4--dark">{description}</p>
      <Link to="project__id" smooth={true} className=" btn">
        Portfolio
      </Link>
    </section>
  );
}

export default Hero;
