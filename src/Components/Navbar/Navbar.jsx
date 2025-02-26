import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Actions from "./Actions";
import Hamburger from "./Hamburger";
import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const prevScroll = useRef(0);
  const [isSticky, setSticky] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [isSideBar, setSideBar] = useState(false);
  const [isCart, setCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setSticky(currentScroll > 114);

      if (currentScroll > prevScroll.current) {
        setHidden(true);
      } else if (currentScroll < prevScroll.current) {
        setHidden(false);
      }

      prevScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSideBar || isCart ? "hidden" : "auto";
  }, [isCart, isSideBar]);

  const handleClose = () => {
    setSideBar(false);
  };

  const handleCloseCart = () => {
    setCart(false);
  };

  return (
    <>
      <header
        className={`relative z-4 h-18 border-b-1 border-gray-200 font-secondary text-sm text-primary transition-transform duration-300 ease-out ${isSticky ? styles.navbarSticky : ""} ${isHidden ? styles.hidden : styles.visible}`}
      >
        {/* Smaller Screens */}
        <nav className="flex px-7.5 py-2.5 font-secondary text-primary lg:hidden">
          <div className="flex flex-grow items-center">
            <Hamburger setSideBar={setSideBar} />
            <Logo />
          </div>
          <Actions setCart={setCart} />
        </nav>

        {/* Larger screens */}
        <nav className="hidden grid-cols-[250px_1fr_250px] items-center gap-4 px-16 lg:grid">
          <Logo />
          <Navlinks />
          <Actions setCart={setCart} />
        </nav>
      </header>
      <Sidebar isSideBar={isSideBar} onClose={handleClose} />
      <Cart isCart={isCart} onClose={handleCloseCart} />
    </>
  );
};

export default Navbar;
