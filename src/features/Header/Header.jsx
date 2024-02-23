import { useState } from "react";
import "./header.scss";
import Headroom from "react-headroom";
import Socialicon from "../Socialicon/Socialicon";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";
import Resume from "../../assets/Resume.pdf";
import { motion } from "framer-motion";
import useAnimationref from "../hooks/useAnimationref";
import { appearence, smallHeadingcrunch } from "../../animations/animations";

function Header({ headerdata }) {
  const [menushow, setmenuShow] = useState(true);
  const { maincontrol, ref } = useAnimationref();

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
            htmlFor="navi-toggle"
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
            <motion.ul
              ref={ref}
              variants={appearence}
              initial="hidden"
              animate={maincontrol}
              className="navigation__list"
            >
              {headerdata.map((item) => (
                <motion.li
                  ref={ref}
                  variants={smallHeadingcrunch}
                  initial="hidden"
                  animate={maincontrol}
                  className="navigation__item"
                  key={item.id}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    onClick={handleToggleNav}
                    className="navigation__link"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                ref={ref}
                variants={smallHeadingcrunch}
                initial="hidden"
                animate={maincontrol}
                className="navigation__item"
              >
                <Link1
                  to={Resume}
                  download="Resume"
                  target="_blank"
                  rel="noreferrer"
                  className="navigation__link"
                >
                  Resume
                </Link1>
              </motion.li>
            </motion.ul>
            <Socialicon />
          </nav>
        </div>
      </Headroom>
    </>
  );
}

export default Header;
