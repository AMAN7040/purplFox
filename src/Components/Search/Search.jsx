import React, { useEffect } from "react";
import styles from "../Search/Search.module.css";

const Search = ({ isSearch, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "overlay") {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <div
      className={`${styles.overlay} ${isSearch ? styles.show : ""} ${isSearch ? "bg-black/50" : ""}`}
      id="overlay"
    >
      <form
        className={`${styles.searchForm} ${
          isSearch ? styles.slideIn : styles.slideOut
        } fixed top-0 z-100 h-full w-full flex-1 flex-col overflow-y-scroll border-t border-black bg-white sm:pointer-events-auto sm:max-h-[142px]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-1 overflow-hidden">
          <div
            className={`${
              isSearch
                ? "translate-y-0 opacity-100 delay-300"
                : "translate-y-10 opacity-0 transition-all duration-500 ease-in-out"
            } lg:[64px] flex cursor-pointer border-b border-gray-200 px-[20px] py-[16px] ease-in-out xs:px-[30px]`}
          >
            <span className="flex-center size-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="6"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <label className="hidden" htmlFor="Search_input">
              Search
            </label>
            <input
              id="Search_input"
              className="w-full border-none px-[16px]"
              type="search"
              aria-label="Search"
              placeholder="Search..."
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
            />
            <button
              type="button"
              onClick={onClose}
              className="size-[40px] cursor-pointer border-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
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
        </div>
        <div
          className={`${
            isSearch
              ? "translate-y-0 opacity-100 delay-400"
              : "translate-y-10 opacity-0 transition-all duration-500 ease-in-out"
          } px-[20px] py-[24px] transition-all duration-500 ease-in-out sm:px-[30px] lg:px-[64px]`}
        >
          <div></div>
          <div className="block text-center font-secondary text-[13px] tracking-tighter">
            Enter keywords to see quick results
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Search;
