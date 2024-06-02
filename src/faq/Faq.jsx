import "./faq.scss";

function Faq({ bgcolor, color }) {
  return (
    <div style={{ backgroundColor: `${bgcolor}` }} className="faq">
      <div style={{ color: `${color}` }} className="heading-4 capitalize">
        the best financial accounting app ever!
      </div>
      <p style={{ color: `${color}` }} className="paragraph mt-sm">
        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris.
      </p>
    </div>
  );
}

export default Faq;
