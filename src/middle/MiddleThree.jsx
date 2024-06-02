import Image from "./image/Image";
import ImageThree from "./image/ImageThree";
import Written from "./written/Written";
import Writtenthree from "./written/Writtenthree";

function MiddleThree() {
  return (
    <div className="middle">
      <Image>
        <ImageThree />
      </Image>
      <Written>
        <Writtenthree />
      </Written>
    </div>
  );
}

export default MiddleThree;
