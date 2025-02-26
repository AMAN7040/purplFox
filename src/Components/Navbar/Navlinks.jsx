import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const AboutUsComp = ({ handleToggleOpen, isOpen, position }) => {
  return (
    <details onClick={handleToggleOpen}>
      <summary
        className={`${styles.menu_link} grid list-none grid-cols-[1fr_24px] items-center gap-4 outline-0`}
        aria-expanded={`${isOpen ? true : false}`}
        aria-controls="about-dropdown"
      >
        About us
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <ul
        className={`${
          styles.about_dropdown
        } ${position} top-full left-0 w-75 list-none border bg-white ${
          position === "absolute" ? "border-gray-200" : "border-white"
        } py-3`}
        id="about-dropdownList"
      >
        <li className={`${styles.sub_dropdownItem} cursor-pointer px-5 py-3`}>
          <Link to="/pages/about-us">Our Story</Link>
        </li>
        <li className={`${styles.sub_dropdownItem} cursor-pointer px-5 py-3`}>
          <Link to="/pages/our-partners">Our Partners</Link>
        </li>
      </ul>
    </details>
  );
};

const NavItem = ({ handleToggleOpen, isOpen, position }) => {
  return (
    <>
      <li className="cursor-pointer px-4 py-6 font-primary text-primary">
        <Link to="/">Home</Link>
      </li>
      <li className="relative cursor-pointer px-4 py-6 font-primary text-primary">
        <AboutUsComp
          handleToggleOpen={handleToggleOpen}
          isOpen={isOpen}
          position={position}
        />
      </li>
    </>
  );
};

const Navlinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="w-full flex-1 max-lg:hidden">
      <ul className="flex h-full list-none flex-wrap items-center justify-center">
        <NavItem
          handleToggleOpen={handleToggleOpen}
          isOpen={isOpen}
          position="absolute"
        />
      </ul>
    </nav>
  );
};

export { NavItem };

export default Navlinks;
