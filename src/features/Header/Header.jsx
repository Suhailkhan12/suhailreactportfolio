import { useState } from "react";
import "./header.scss";
import Headroom from "react-headroom";
import Socialicon from "../Socialicon/Socialicon";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";
import Resume from "../../assets/Resume.pdf";

function Header() {
  const [menushow, setmenuShow] = useState(true);

  function handleToggleNav() {
    setmenuShow((s) => !s);
  }

  return (
    <>
      <Headroom
        style={{
          zIndex: 999,
        }}
      >
        <div className="navigation">
          <div className="navigation__logo">
            <img
              src="https://suhailkhan12.github.io/react_portfolio/static/media/profilepic.5542103f56a18c9cf837.png"
              alt=""
              className="navigation__logo--img"
            />
          </div>

          <label
            for="navi-toggle"
            className="navigation__button"
            onClick={handleToggleNav}
          >
            <span
              className={
                menushow
                  ? "navigation__icon"
                  : "navigation__icon navigation__icon-open"
              }
            >
              &nbsp;
            </span>
          </label>

          <div
            className={
              menushow
                ? "navigation__backgroung"
                : "navigation__background navigation__background-open"
            }
          >
            &nbsp;
          </div>

          <nav
            className={
              menushow
                ? "navigation__nav"
                : "navigation__nav navigation__nav-open"
            }
          >
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="about__id" smooth={true} className="navigation__link">
                  About Me
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="skill__id" smooth={true} className="navigation__link">
                  SKill
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to="project__id"
                  smooth={true}
                  className="navigation__link"
                >
                  My Project
                </Link>
              </li>
              <li className="navigation__item">
                <Link1
                  to={Resume}
                  download="Resume"
                  target="_blank"
                  rel="noreferrer"
                  className="navigation__link"
                >
                  Resume
                </Link1>
              </li>
            </ul>
            <Socialicon />
          </nav>
        </div>
      </Headroom>
    </>
  );
}

export default Header;
