import "./footer.scss";
import Logo from "../../assets/logo.svg";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/phone.svg";

const data = {
  link: "Links",
  linknames: [
    { linkname: "Home" },
    { linkname: "About Us" },
    { linkname: "Booking" },
    { linkname: "Blog" },
  ],
  legal: "Legal",
  legalnames: [
    { linkname: "Terms Of Use" },
    { linkname: "Privacy Policy" },
    { linkname: "Cookie Policy" },
  ],
  product: "Product",
  productnames: [
    { linkname: "Take Tour" },
    { linkname: "Live Chat" },
    { linkname: "Reveiws" },
  ],
  letter: "Newsletter",
  letternames: [{ linkname: "Stay up to date" }],
};

function Footer() {
  return (
    <>
      <footer>
        <div class="column">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <img src={Mail} alt="mail" />{" "}
            <div
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.6rem",
                fontWeight: "500",
              }}
            >
              help@frybix.com
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <img src={Phone} alt="mail" />{" "}
            <div
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.6rem",
                fontWeight: "500",
              }}
            >
              +123445667889
            </div>
          </div>
        </div>
        <div class="column">
          <div
            style={{
              fontSize: "3.2rem",
              lineHeight: "4.2rem",
              fontWeight: "500",
            }}
          >
            {data.link}
          </div>
          {data.linknames.map((item) => (
            <div
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.6rem",
                fontWeight: "500",
              }}
            >
              {item.linkname}
            </div>
          ))}
        </div>
        <div class="column">
          <div
            style={{
              fontSize: "3.2rem",
              lineHeight: "4.2rem",
              fontWeight: "500",
            }}
          >
            {data.legal}
          </div>
          {data.legalnames.map((item) => (
            <div
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.6rem",
                fontWeight: "500",
              }}
            >
              {item.linkname}
            </div>
          ))}
        </div>
        <div class="column">
          <div
            style={{
              fontSize: "3.2rem",
              lineHeight: "4.2rem",
              fontWeight: "500",
            }}
          >
            {data.product}
          </div>
          {data.productnames.map((item) => (
            <div
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.6rem",
                fontWeight: "500",
              }}
            >
              {item.linkname}
            </div>
          ))}
        </div>
        <div class="column">
          <div
            style={{
              fontSize: "3.2rem",
              lineHeight: "4.2rem",
              fontWeight: "500",
            }}
          >
            {data.letter}
          </div>
          {data.letternames.map((item) => (
            <div
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.6rem",
                fontWeight: "500",
              }}
            >
              {item.linkname}
            </div>
          ))}
        </div>
        <div class="column">
          <div className="newsd readyflex">
            <input
              type="text"
              className="inputemail"
              placeholder="Your Email"
            />
            <div className="readyflex btn blackherobtn">Subscribe</div>
          </div>
        </div>
      </footer>
      <div
        style={{
          fontSize: "1.6rem",
          lineHeight: "2.6rem",
          fontWeight: "500",
        }}
        className="copyright"
      >
        Copyright 2022 uifry.com all rights reserved
      </div>
    </>
  );
}

export default Footer;
