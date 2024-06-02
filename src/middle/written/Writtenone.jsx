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

function Writtenone() {
  return (
    <div>
      <h3 className="paragraph pink">FEATURES</h3>
      <h4 className="heading-3">uifry premium</h4>
      <div className="mt-md">
        {data.map((item) => (
          <>
            <div className="card">
              <img src={item.image} alt="star" />
              <div className="paragraph sixhun">{item.heading}</div>
            </div>
            <p className="paragraph mt-sm">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem.
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

export default Writtenone;
