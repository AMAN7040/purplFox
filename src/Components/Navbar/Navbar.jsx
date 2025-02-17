import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Actions from "./Actions";

const Navbar = () => {
  return (
    <header>
      <Logo />
      <Navlinks />
      <Actions />
    </header>
  );
};

export default Navbar;
