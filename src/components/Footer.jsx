import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>
        Made with &#10084;&#65039; and <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
