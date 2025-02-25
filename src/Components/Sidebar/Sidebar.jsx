import React, { useEffect, useState } from "react";
import { NavItem } from "../Navbar/Navlinks";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isSideBar, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "overlay") {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles.overlay} ${isSideBar ? styles.show : ""}`}
      id="overlay"
    >
      <aside
        className={`${
          isSideBar ? styles.slideIn : styles.slideOut
        } fixed top-0 left-0 z-100 h-full w-full max-w-[480px] flex-1 flex-col overflow-y-scroll border-r border-black bg-white`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 py-5 pr-4 pl-6">
          <h2 className="font-secondary text-[17px] text-primary">Menu</h2>
          <button onClick={onClose} aria-label="Close Sidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-1 cursor-pointer"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="z-5 border-b border-gray-200 px-2 py-3">
          <nav className="font-primary text-primary">
            <ul className="flex-col justify-center">
              <NavItem
                handleToggleOpen={handleToggleOpen}
                isOpen={isOpen}
                position="relative"
              />
            </ul>
          </nav>
        </div>
        <div>
          <address className="contact-section mt-5 mb-2 border-b border-gray-200 px-6 pt-4 pb-8 not-italic">
            <span className="mb-6 inline-block font-primary text-primary">
              Contact us
            </span>
            <div className="px-2">
              <a
                href="mailto:admin@purpelfox.com"
                className="flex cursor-pointer items-center justify-start gap-3 font-primary text-inherit decoration-0"
              >
                <span className="">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                admin@purpelfox.com
              </a>
            </div>
          </address>
          <div className="account-section mt-4 pt-4">
            <div className="mb-4 flex items-center gap-4 px-6 font-secondary text-primary">
              Your Account
              <a
                aria-label="Login"
                className="cursor-pointer underline underline-offset-4"
              >
                Login
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap px-6">
              <li className="flex-center">
                <a
                  href="https://www.instagram.com/purplfox.in"
                  className="flex-center min-h-11 min-w-11 cursor-pointer rounded-full border-0 bg-black text-white"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 11.37C16.1234 12.2023 15.9675 13.0566 15.5607 13.7917C15.1539 14.5267 14.5183 15.1036 13.7479 15.438C12.9775 15.7724 12.1145 15.8463 11.2892 15.6495C10.464 15.4526 9.71395 14.9948 9.15502 14.3354C8.59609 13.676 8.25593 12.8493 8.17697 11.9795C8.09801 11.1097 8.28354 10.2353 8.70855 9.46983C9.13355 8.70431 9.77907 8.08131 10.5534 7.68943C11.3278 7.29756 12.1988 7.15767 13.0562 7.28886C13.9137 7.42005 14.7253 7.81671 15.3784 8.42858C16.0315 9.04044 16.4939 9.83748 16.7112 10.7176"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
