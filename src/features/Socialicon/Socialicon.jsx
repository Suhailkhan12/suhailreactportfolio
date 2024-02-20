import "./socialicon.scss";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const social = [
  {
    icon: <FaLinkedin />,
    bgcolor: "#0077b5",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/suhail-khan-3b780016b/",
  },
  {
    icon: <FaSquareWhatsapp />,
    bgcolor: "#075e54",
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=9717146420",
  },
  {
    icon: <FaGithub />,
    bgcolor: "#2b3137",
    name: "Github",
    link: "https://github.com/Suhailkhan12",
  },
  {
    icon: <FaFacebook />,
    bgcolor: "#316FF6",
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100006513112190",
  },
];

function Socialicon() {
  return (
    <div className="socialicon__position">
      {social.map((item) => (
        <figure className="socialicon__content">
          <a href={item.link} target="blank">
            <span
              className="socialicon__content--icon"
              style={{ backgroundColor: item.bgcolor }}
            >
              {item.icon}
            </span>
          </a>
          <span className="socialicon__content--name">{item.name}</span>
        </figure>
      ))}
    </div>
  );
}

export default Socialicon;
