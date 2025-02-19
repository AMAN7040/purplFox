import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Actions from "./Actions";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="text-primary font-secondary text-sm border-b-1 border-gray-200 h-18 ">
      {/* Smaller Screens */}
      <nav className="flex px-7.5 py-2.5 lg:hidden text-primary font-secondary">
        <div className="flex items-center flex-grow">
          <Hamburger />
          <Logo />
        </div>
        <Actions />
      </nav>

      {/* Larger screens */}
      <nav className="hidden lg:grid grid-cols-[250px_1fr_250px] items-center gap-4 px-16">
        <Logo />
        <Navlinks />
        <Actions />
      </nav>
    </header>
  );
};

export default Navbar;
