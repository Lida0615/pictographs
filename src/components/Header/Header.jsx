import "./header.scss";
import Logo from "../../assets/svg/logo.svg";
import Apple from "../../assets/svg/apple.svg";
import GooglePl from "../../assets/svg/google-play.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const menu = () => {
    document.querySelector(".header").classList.toggle("toggle");
    document.querySelector("body").classList.toggle("shadow");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <div className="logo_text">PICTOGRAPHS</div>
          <div className="logo_img">
            <img src={Logo} alt="" />
          </div>
        </div>
        <nav className="header_nav">
          <ul className="header_nav__menu">
            <li>
              <Link to="/">Project</Link>
            </li>
            <li>
              <Link to="/">Marketplace</Link>
            </li>
            <li>
              <Link to="/">Buy $PICT</Link>
            </li>
            <li>
              <Link to="/">White Paper</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/" className="language">
                Language
                <ul className="language_list">
                  <li>
                    <Link to="/">English</Link>
                  </li>
                  <li>
                    <Link to="/">Русский</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="/">Download</Link>
            </li>
          </ul>
          <ul className="header_nav__app">
            <li>
              <Link to="/">
                <img src={Apple} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={GooglePl} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div onClick={menu} className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Header;
