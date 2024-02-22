import { motion } from "framer-motion";
import { useState } from "react";
import "./project.scss";
import Projectcard from "./Projectcard";
import useAnimationref from "../hooks/useAnimationref";
import { appearence } from "../../animations/animations";

function Project({ projectdata }) {
  const [visible, setVisible] = useState(3);
  const [btnstate, setBtnstate] = useState(true);
  const { ref, maincontrol } = useAnimationref();

  function showClickProject() {
    if (visible <= projectdata.length) {
      setVisible((prev) => prev + 3);
    } else {
      setBtnstate(false);
    }
  }

  return (
    <>
      <div className="projects" id="project__id">
        <motion.h2
          ref={ref}
          variants={appearence}
          initial="hidden"
          animate={maincontrol}
          className="projects__heading heading-2 mb-lg"
        >
          My Projects
        </motion.h2>
        {projectdata.slice(0, visible).map((item) => (
          <Projectcard data={item} key={item.id} />
        ))}
        <div
          className="btn projects__show projects__show__btn"
          onClick={showClickProject}
        >
          {btnstate ? "Load More" : "No More data"}
        </div>
      </div>
    </>
  );
}

export default Project;
