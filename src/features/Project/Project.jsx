import { useState } from "react";
import "./project.scss";
import Projectcard from "./Projectcard";

function Project({ projectdata }) {
  const [showdataProject, setShowdataProject] = useState(true);

  function showClickProject() {
    setShowdataProject((s) => !s);
  }

  const lessdata = projectdata
    .filter((_, idx) => idx < 2)
    .map((item) => <Projectcard data={item} key={item.id} />);

  const fulldata = projectdata.map((item) => (
    <Projectcard data={item} key={item.id} showdataProject={showdataProject} />
  ));

  return (
    <>
      <div className="projects" id="project__id">
        <h2 className="projects__heading heading-2 mb-lg">My Projects</h2>
        {showdataProject ? lessdata : fulldata}
        <div
          className="btn projects__show projects__show__btn"
          onClick={showClickProject}
        >
          {showdataProject ? "Show more" : "Show less"}
        </div>
      </div>
    </>
  );
}

export default Project;
