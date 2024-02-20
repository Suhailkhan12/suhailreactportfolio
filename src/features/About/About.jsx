import "./about.scss";
import { HiArrowRightCircle } from "react-icons/hi2";

function About({ about }) {
  const { aboutdesc, paragraph, skillone, skilltwo, imageURL } = about;

  return (
    <>
      <section className="content" id="about__id">
        <h2 className="heading-2 mb-lg">{aboutdesc}</h2>
        {paragraph.map((par) => (
          <p className="paragraph">{par}</p>
        ))}

        <div className="content__skill">
          <div className="content__skill--1">
            {skillone.map((skill) => (
              <span className="content__skill--name heading-4">
                <div className="content__skill--icon">
                  <HiArrowRightCircle />
                </div>
                <div className="content__skill--text">{skill}</div>
              </span>
            ))}
          </div>
          <div className="content__skill--2">
            {skilltwo.map((skill) => (
              <span className="content__skill--name heading-4">
                <div className="content__skill--icon">
                  <HiArrowRightCircle />
                </div>
                <div className="content__skill--text">{skill}</div>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="image">
        <figure className="image__fig">
          <img src={imageURL} alt={aboutdesc} className="image__fig--photo" />
        </figure>
      </section>
    </>
  );
}

export default About;
