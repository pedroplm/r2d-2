import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo-removebg-preview.png";

// BEM - Block Element Modifier (naming)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // if screen is less than 600px wide, setToggleMenu(true);

  //react component navbarLinks
  const Menu = () => (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wr2d2">What is R2D2</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
  return (
    <div className="r2d2__navbar">
      <div className="r2d2__navbar-links">
        <div className="r2d2__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="r2d2__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="r2d2__navbar-sign">
        <p>Sign In</p>
        <button className="btn btn-5" type="button">
          Sign Up
        </button>
      </div>
      <div className="r2d2__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="r2d2__navbar-menu_toggle"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="r2d2__navbar-menu_toggle"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="r2d2__navbar-menu_container scale-up-center">
            <div className="r2d2__navbar-menu_container-links">
              <Menu />
              <div className="r2d2__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button className="btn btn-5" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
