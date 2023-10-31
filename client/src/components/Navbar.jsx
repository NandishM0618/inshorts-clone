import { useState } from "react";
import "../styles/styles.css";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
export default function Navbar(params) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav">
        <div className="navbar-content">
          <div className="heading">
            <button onClick={toggleMenu} className="btn">
              {isOpen ? (
                <MdClose className="close-btn" />
              ) : (
                <MdMenu className="menu-btn" />
              )}
            </button>
          </div>
          {isOpen && (
            <ul className="navmenu">
              <li className="navitem">
                <a href="/">Indian</a>
              </li>
              <li className="navitem">
                <a href="/">Poilitical</a>
              </li>
              <li className="navitem">
                <a href="/">Sports</a>
              </li>
              <li className="navitem">
                <a href="/">President</a>
              </li>
              <li className="navitem">
                <a href="/">Prime minister</a>
              </li>
              <li className="navitem">
                <a href="/">States Controversy</a>
              </li>
              <li className="navitem">
                <a href="/">Water And Such Problems</a>
              </li>
              <li className="navitem">
                <a href="/">Celebraties</a>
              </li>
            </ul>
          )}
        </div>
        <div className="hero-heading">
          <a href="/">
            <img
              src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
              alt="logo"
              className="logo-img"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
