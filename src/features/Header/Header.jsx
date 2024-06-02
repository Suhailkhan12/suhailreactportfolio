import "./header.scss";
import Headroom from "react-headroom";

import { Link as Link1 } from "react-router-dom";

import Logo from "../../assets/logo.svg";

function Header({ headerdata }) {
  return (
    <>
      <Headroom
        style={{
          zIndex: 999,
        }}
      >
        <div className="navigation">
          <div className="navigation__logo">
            <img src={Logo} alt="" className="navigation__logo--img" />
            <Link1
              target="_blank"
              rel="noreferrer"
              className="navigation__link"
            >
              Home
            </Link1>
            <Link1
              target="_blank"
              rel="noreferrer"
              className="navigation__link"
            >
              About Us
            </Link1>
            <Link1
              target="_blank"
              rel="noreferrer"
              className="navigation__link"
            >
              Pricing
            </Link1>
            <Link1
              target="_blank"
              rel="noreferrer"
              className="navigation__link"
            >
              Features
            </Link1>
          </div>

          <Link1
            to="project__id"
            smooth={true}
            className=" btnheader paragraph"
          >
            Download
          </Link1>
        </div>
      </Headroom>
    </>
  );
}

export default Header;
