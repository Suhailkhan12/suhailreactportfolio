import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaSass,
  FaHtml5,
  FaReact,
  FaNode,
  FaBootstrap,
  FaPython,
  FaDatabase,
} from "react-icons/fa6";
import { Tilt } from "react-tilt";
import { IoLogoJavascript } from "react-icons/io5";
import "./WhatIdo.scss";
import ImageFullStack from "../../assets/fullstack.svg";
import {
  appearence,
  pathVariantsone,
  pathVariantstwo,
} from "../../animations/animations";
import useAnimationref from "../hooks/useAnimationref";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 50, // max tilt rotation (degrees)
  perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const icon = [
  {
    id: 1,
    html: <FaHtml5 />,
    color: "#E34C26",
  },
  {
    id: 2,
    html: <FaCss3Alt />,
    color: "#2565AE",
  },
  {
    id: 3,
    html: <FaSass />,
    color: "#FFC0CB",
  },
  {
    id: 4,
    html: <IoLogoJavascript />,
    color: "#f7df1e",
  },
  {
    id: 5,
    html: <FaReact />,
    color: "#04d8f9",
  },
  {
    id: 6,
    html: <FaNode />,
    color: "#68A063",
  },
  {
    id: 7,
    html: <FaBootstrap />,
    color: "#563d7c",
  },
  {
    id: 8,
    html: <FaPython />,
    color: "#306998",
  },
  {
    id: 9,
    html: <FaDatabase />,
    color: "#f29111",
  },
];

function WhatIdo({ whatdata }) {
  const { title, dowork } = whatdata;
  const { maincontrol, ref } = useAnimationref();

  return (
    <>
      <motion.h2
        variants={appearence}
        initial="hidden"
        animate={maincontrol}
        ref={ref}
        className="heading-2 dotitle"
        id="skill__id"
      >
        {title}
      </motion.h2>
      <motion.section
        variants={pathVariantsone}
        initial="hidden"
        animate={maincontrol}
        className="do"
        ref={ref}
      >
        <Tilt options={defaultOptions}>
          <figure className="do__fig">
            <img src={ImageFullStack} alt="" className="do__fig--photo" />
          </figure>
        </Tilt>
      </motion.section>
      <motion.section
        ref={ref}
        variants={pathVariantstwo}
        initial="hidden"
        animate={maincontrol}
        className="docontent"
      >
        <h2 className="heading-2">{dowork}</h2>
        <div className="docontent__svg">
          {icon.map((item) => (
            <figure className="docontent__svg--fig" key={item.id}>
              <div
                className="docontent__svg--photo"
                style={{ color: item.color }}
              >
                {item.html}
              </div>
            </figure>
          ))}
        </div>
        <div className="docontent__list">
          <ul className="paragraph">
            <li>Building responsive static websites using Next.js</li>
            <li>Building responsive Single Page Apps in React.js</li>
            <li>Building RESTful APIs in Express</li>
          </ul>
        </div>
      </motion.section>
    </>
  );
}

export default WhatIdo;
