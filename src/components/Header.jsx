import logoHeader from "../assets/logo.png";
import "./Header.css";
function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo Kasa" />
      <nav>
        <a href="/">Accueil</a>
        <a href="/APropos">À propos</a>
      </nav>
    </header>
  );
}

export default Header;