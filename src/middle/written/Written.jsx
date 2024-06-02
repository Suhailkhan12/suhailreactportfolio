import "./written.scss";
import Starmiddle from "../../assets/starmiddle.svg";

import Cube from "../../assets/cube-02.svg";
import CubeTwo from "../../assets/cube-04.svg";

const data = [
  {
    image: Starmiddle,
    heading: "budgeting intervals",
    para: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem.",
  },
  {
    image: Cube,
    heading: "budgeting intervals",
    para: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem.",
  },
  {
    image: CubeTwo,
    heading: "budgeting intervals",
    para: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem.",
  },
];

function Written({ children }) {
  return <div className="parttwo">{children}</div>;
}

export default Written;
