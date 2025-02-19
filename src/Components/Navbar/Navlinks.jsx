import React, { useState } from "react";
import styles from "./Navbar.module.css";

const AboutUsComp = ({ handleToggleOpen, isOpen, position }) => {
  return (
    <details onClick={handleToggleOpen}>
      <summary
        className={`${styles.menu_link} list-none grid grid-cols-[1fr_24px] gap-4 items-center outline-0`}
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
        } ${position} top-full left-0 w-75 list-none border ${
          position === "absolute" ? "border-gray-200" : "border-white"
        } py-3`}
        id="about-dropdownList"
      >
        <li className={`${styles.sub_dropdownItem} px-5 py-3 cursor-pointer`}>
          Our story
        </li>
        <li className={`${styles.sub_dropdownItem} px-5 py-3 cursor-pointer`}>
          Our Partners
        </li>
      </ul>
    </details>
  );
};

const NavItem = ({ handleToggleOpen, isOpen, position }) => {
  return (
    <>
      <li className="px-4 py-6 text-primary font-primary  cursor-pointer">
        Home
      </li>
      <li className="relative px-4 py-6 text-primary font-primary  cursor-pointer">
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
    <nav className="flex-1 w-full max-lg:hidden">
      <ul className="flex list-none items-center h-full justify-center flex-wrap">
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
