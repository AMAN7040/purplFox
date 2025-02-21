import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Actions from "./Actions";
import Hamburger from "./Hamburger";
import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [isSideBar, setSideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPrevScroll((prev) => {
        const currentScroll = window.scrollY;

        if (currentScroll > 114) {
          setSticky(true);
          setHidden(currentScroll > prev);
        } else {
          setSticky(false);
          setHidden(false);
        }

        return currentScroll;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setSideBar(false); // Close the sidebar visually first
  };

  return (
    <>
      <header
        className={`relative z-4 h-18 border-b-1 border-gray-200 font-secondary text-sm text-primary transition-transform duration-300 ease-out ${isSticky ? styles.navbarSticky : ""} ${isHidden ? styles.hidden : styles.visible}`}
      >
        {/* Smaller Screens */}
        <nav className="flex px-7.5 py-2.5 font-secondary text-primary lg:hidden">
          <div className="flex flex-grow items-center">
            <Hamburger  setSideBar={setSideBar}/>
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
      <Sidebar isSideBar={isSideBar} onClose={handleClose} />
    </>
  );
};

export default Navbar;
