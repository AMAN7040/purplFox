import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Actions from "./Actions";

const Navbar = () => {
  return (
    <header className="text-primary font-secondary h-18 px-16 grid grid-cols-[250px_1fr_250px] items-center gap-4 text-sm border-b-1 border-gray-200 ">
      <Logo />
      <Navlinks />
      <Actions />
    </header>
  );
};

export default Navbar;
