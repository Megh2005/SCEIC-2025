import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="local">
      <div className="logo">
        <img src="/favicon.png" alt="logo" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={1000}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} duration={1000}>
            About Us
          </Link>
          <Link to="services" spy={true} smooth={true} duration={1000}>
            Themes
          </Link>
          <Link to="anouncements" spy={true} smooth={true} duration={1000}>
            Calendar
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={1000}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
