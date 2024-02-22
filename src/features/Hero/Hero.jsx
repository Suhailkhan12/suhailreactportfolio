import "./hero.scss";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import useAnimationref from "../hooks/useAnimationref";
import { motion } from "framer-motion";
import { pathVariantsone, pathVariantstwo } from "../../animations/animations";

function Hero({ intro }) {
  const { ref, maincontrol } = useAnimationref();

  const { name, description, quality } = intro;

  return (
    <section className="hero">
      <motion.span
        ref={ref}
        variants={pathVariantsone}
        initial="hidden"
        animate={maincontrol}
        className="heading-4  hero__subheading"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        ref={ref}
        variants={pathVariantsone}
        initial="hidden"
        animate={maincontrol}
        className="heading-1 hero__heading"
      >
        {name}.
        <br />
        <span>{"<"}</span>
        <ReactTyped strings={quality} typeSpeed={40} backSpeed={50} loop />
        <span>{"/>"}</span>
      </motion.h1>
      <motion.p
        ref={ref}
        variants={pathVariantstwo}
        initial="hidden"
        animate={maincontrol}
        className="hero__para paragraph heading-4--dark"
      >
        {description}
      </motion.p>
      <Link to="project__id" smooth={true} className=" btn">
        Portfolio
      </Link>
    </section>
  );
}

export default Hero;
