import { useState } from "react";
import "./project.scss";
import Projectcard from "./Projectcard";

function Project({ projectdata }) {
  const [visible, setVisible] = useState(2);
  const [btnstate, setBtnstate] = useState(true);

  function showClickProject() {
    if (visible !== projectdata.length) {
      setVisible((prev) => prev + 1);
    } else {
      setBtnstate(false);
    }
  }

  return (
    <>
      <div className="projects" id="project__id">
        <h2 className="projects__heading heading-2 mb-lg">My Projects</h2>
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
