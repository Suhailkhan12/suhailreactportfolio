import "./downloadapp.scss";
import Dimage from "../assets/dappimage.svg";
import Applelogo from "../assets/applelogo.svg";
import Sideline from "../assets/sideline.svg";
import Dot from "../assets/dot.svg";

function Downloadapp() {
  return (
    <div className="dapp">
      <div className="dapp__one">
        <h3
          className="heading-3"
          style={{ color: "#fff", textTransform: "capitalize", width: "150%" }}
        >
          ready to get started?
        </h3>
        <p className="paragraph" style={{ color: "#fff" }}>
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
        <div
          style={{ display: "inline-flex", borderRadius: "8px" }}
          className="readyflex btn whiteherobtn"
        >
          Download App <img src={Applelogo} alt="applelogo" />
        </div>
        <img src={Sideline} className="dapp__line" alt="ellipse" />
        <img src={Sideline} className="dapp__linetwo" alt="ellipse" />
        <img src={Dot} className="dapp__dot" alt="ellipse" />
      </div>
      <div className="dapp__two">
        <div className="dapp__imagewrapper">
          <img className="dapp__imagewrapper__img" src={Dimage} alt="app" />
        </div>
      </div>
    </div>
  );
}

export default Downloadapp;
