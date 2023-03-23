import "./header.scss";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Apple, GooglePlay, Logo } from "../../assets";
import { clickDropDown } from "../../helpers/clickDropDown";
import { languageElements, navLinks } from "../../utils/const";

const Header = () => {
  const toggleRef = useRef(null);
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  clickDropDown(toggleRef, contentRef);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`header ${isOpen ? "toggle" : ""}`}>
        <div className="logo">
          <div className="logo_text">PICTOGRAPHS</div>
          <div className="logo_img">
            <img src={Logo} alt="" />
          </div>
        </div>
        <nav className="header_nav">
          <ul className="header_nav__menu">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link className="header_nav__link" to={item.to}>
                  {t(item.label)}
                </Link>
              </li>
            ))}

            <li className="dropDown">
              <div className="header_nav__link" ref={toggleRef}>
                Language
              </div>
              <ul className="dropDown_list" ref={contentRef}>
                {languageElements.map((item) => (
                  <li key={item.id} onClick={() => changeLanguage(item.lng)}>
                    <button>{item.label}</button>
                  </li>
                ))}
              </ul>
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
                <img src={GooglePlay} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={onOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Header;
