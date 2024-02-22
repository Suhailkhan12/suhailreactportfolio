import { motion } from "framer-motion";
import { HiArrowRightCircle } from "react-icons/hi2";
import useAnimationref from "../hooks/useAnimationref";
import "./about.scss";
import {
  appearence,
  pathVariantsone,
  pathVariantstwo,
} from "../../animations/animations";

function About({ about }) {
  const { aboutdesc, paragraph, skillone, skilltwo, imageURL } = about;
  const { maincontrol, ref } = useAnimationref();

  return (
    <>
      <motion.section
        variants={pathVariantsone}
        initial="hidden"
        animate={maincontrol}
        ref={ref}
        className="content"
        id="about__id"
      >
        <motion.h2 variants={appearence} className="heading-2 mb-lg">
          {aboutdesc}
        </motion.h2>
        {paragraph.map((par) => (
          <p className="paragraph" key={par}>
            {par}
          </p>
        ))}

        <div className="content__skill">
          <div className="content__skill--1">
            {skillone.map((skill) => (
              <span className="content__skill--name heading-4" key={skill}>
                <div className="content__skill--icon">
                  <HiArrowRightCircle />
                </div>
                <div className="content__skill--text">{skill}</div>
              </span>
            ))}
          </div>
          <div className="content__skill--2">
            {skilltwo.map((skill) => (
              <span className="content__skill--name heading-4" key={skill}>
                <div className="content__skill--icon">
                  <HiArrowRightCircle />
                </div>
                <div className="content__skill--text">{skill}</div>
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ref}
        variants={pathVariantstwo}
        initial="hidden"
        animate={maincontrol}
        className="image"
      >
        <figure className="image__fig">
          <img src={imageURL} alt={aboutdesc} className="image__fig--photo" />
        </figure>
      </motion.section>
    </>
  );
}

export default About;
