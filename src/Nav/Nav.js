import React from "react";
import "./nav.css";
import { useState } from "react";
import Menu from "./Menu.js";

const Nav = () => {
  const [menuState, setMenuState] = useState(false);
  const menuHandle = () => {
    if (menuState === true) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
  };
  const burgerMenu = (
    <img
      onClick={menuHandle}
      className="burger"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
      alt="Menu"
    />
  );

  return (
    <div>
      <nav>
        <a href="https://www.google.com">D</a>
        <h1>Diggin Nav Bar</h1>
        {burgerMenu}
      </nav>
      {menuState === true && <Menu />}
    </div>
  );
};

export default Nav;
