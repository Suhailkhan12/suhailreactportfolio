import Bell from "../../assets/bell.svg";

const data = [
  {
    image: Bell,
    heading: "clever notifications",
    para: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
  },
];

function WrittenTwo() {
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
            <p className="paragraph mt-sm">{item.para}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default WrittenTwo;
