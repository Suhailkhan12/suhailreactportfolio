import Slide from "../../assets/testgroup.png";

import Cube from "../../assets/cube-02.svg";
import CubeTwo from "../../assets/cube-04.svg";

const data = [
  {
    image: Slide,
    heading: "the best financial accounting app ever!",
    para: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
    name: "nick jonas",
  },
];

function Testwritten() {
  return (
    <div>
      {/* <h3 className="paragraph pink">FEATURES</h3>
      <h4 className="heading-3">uifry premium</h4> */}
      <div className="mt-md">
        {data.map((item) => (
          <>
            <div className="card">
              <div className="paragraph ft sixhun ">{item.heading}</div>
            </div>
            <p className="paragraph mt-sm">{item.para}</p>
            <img src={item.image} alt="star" />
            <div className="paragraph">{item.name}</div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Testwritten;
