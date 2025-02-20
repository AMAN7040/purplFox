import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Actions from "./Actions";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="h-18 border-b-1 border-gray-200 font-secondary text-sm text-primary">
      {/* Smaller Screens */}
      <nav className="flex px-7.5 py-2.5 font-secondary text-primary lg:hidden">
        <div className="flex flex-grow items-center">
          <Hamburger />
          <Logo />
        </div>
        <Actions />
      </nav>

      {/* Larger screens */}
      <nav className="hidden grid-cols-[250px_1fr_250px] items-center gap-4 px-16 lg:grid">
        <Logo />
        <Navlinks />
        <Actions />
      </nav>
    </header>
  );
};

export default Navbar;
