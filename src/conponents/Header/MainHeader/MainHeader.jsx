import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./MainHeader.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-up-color">
        <div className="Nav-up-color-title">
          <span className="element"></span>
          <span className="element">
            <FaPhone />
            +91-9102129391
          </span>
          <span className="element">|</span>
          <span className="element">
            <MdAttachEmail /> info@hamzaconsultancy.in
          </span>
          <span className="element">|</span>
          <span className="element">
            <FaWhatsapp /> +91-9102129391
          </span>

          <span className="element-media">
            <Link to="https://www.instagram.com/aftabakhtar7?igsh=Zjc3ZzhmbjhxaDg=">
              <FaInstagramSquare />
            </Link>
          </span>
          <span className="element-media"></span>
          <span className="element-media">
            <Link to="https://www.facebook.com/profile.php?id=61559974225558">
              <FaFacebookSquare />
            </Link>
          </span>
          <span className="element-media"></span>
          <span className="element-media">
            <FaLinkedin />
          </span>
          <span className="element-media"></span>

          <span className="element-media">
            <Link to="www.youtube.com">
              <IoLogoYoutube />
            </Link>
          </span>
        </div>
      </div>

      <div className="logo">
        <NavLink to="/">
          <img src="\MyLogo.png" alt="Event Logo" />
        </NavLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className="nav-links-container">
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <div
              onClick={window.innerWidth <= 768 ? toggleDropdown : null}
              onMouseEnter={
                window.innerWidth > 768 ? () => setIsDropdownOpen(true) : null
              }
              onMouseLeave={
                window.innerWidth > 768 ? () => setIsDropdownOpen(false) : null
              }
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {/* <NavLink
                to="/upcoming-event"
                className={({ isActive }) =>
                  isActive ? "nav active-link" : "nav"
                }
              > */}
              Upcoming Courses
              {/* </NavLink> */}
              <ArrowDropDownIcon />
            </div>
            {(isDropdownOpen || window.innerWidth > 768) && (
              <ul className="dropdown-content">
                <li>
                  <NavLink className="dropdown-nav" to="/ConfrencePage">
                    updating
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-nav" to="/Nutrition">
                    updating
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-nav" to="/Emerging">
                    updating
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <Link
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="nav-register-button">
          <a href="https://forms.office.com/r/aeJc7rRSqx">
            <button className="button-2">Register</button>
          </a>
        </div>
        <a href="https://wa.me/7322822761">
          {" "}
          <img
            className="Whatsapp"
            alt="Chat on WhatsApp"
            src="WhatsApp_icon.png.webp"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
