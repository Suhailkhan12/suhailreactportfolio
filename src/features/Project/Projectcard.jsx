function Projectcard({ data }) {
  const { projectimageURL, technolgy, projectName, projectDesc, projectLink } =
    data;

  return (
    <div className="project" id="project__id">
      <div className="project__link">
        <figure className="project__fig">
          <img src={projectimageURL} alt="" className="project__fig--photo" />
          <div className="project__fig__content">
            <h3 className="heading-3 project__fig__content--heading">
              Skill Used
            </h3>
            {technolgy.map((item) => (
              <span className="project__fig__content--image">
                <img src={item.imageURL} alt="" />
                {item.name}
              </span>
            ))}
          </div>
        </figure>
      </div>

      <div className="project__desc">
        <h3 className="heading-3">{projectName}</h3>
        <p className="paragraph">{projectDesc}</p>
        <a href={projectLink} className="btn project__desc--btn">
          See details
        </a>
      </div>
    </div>
  );
}

export default Projectcard;
