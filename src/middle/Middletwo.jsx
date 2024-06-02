import Image from "./image/Image";
import ImageTwo from "./image/ImageTwo";
import Written from "./written/Written";
import WrittenTwo from "./written/WrittenTwo";

function Middletwo() {
  return (
    <div className="middle">
      <Written>
        <WrittenTwo />
      </Written>
      <Image>
        <ImageTwo />
      </Image>
    </div>
  );
}

export default Middletwo;
