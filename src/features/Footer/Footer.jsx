import "./footer.scss";

function Footer({ footerdata }) {
  const { content } = footerdata;
  return (
    <div className="footer">
      <h4 className="heading-4 footer__heading">{content}</h4>
    </div>
  );
}

export default Footer;
