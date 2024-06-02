import "./middle.scss";
import Image from "./image/Image";
import Written from "./written/Written";
import Imageone from "./image/Imageone";
import Writtenone from "./written/Writtenone";

function Middle() {
  return (
    <div className="middle">
      <Image>
        <Imageone />
      </Image>
      <Written>
        <Writtenone />
      </Written>
    </div>
  );
}

export default Middle;
