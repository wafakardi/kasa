import logoFooter from "../assets/logo2.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Logo Kasa" />
      <p>© 2025 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;