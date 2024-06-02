import "./middle.scss";
import Image from "./image/Image";
import Written from "./written/Written";

import Testwritten from "./written/Testwritten";
import TestImage from "./image/TestImage";

function Testimonial() {
  return (
    <>
      <div className="paragraph">Testimonial</div>
      <div className="heading-3 fw700">
        what our users
        <br /> say about us?
      </div>
      <div className="middle">
        <Image>
          <TestImage />
        </Image>
        <Written>
          <Testwritten />
        </Written>
      </div>
    </>
  );
}

export default Testimonial;
