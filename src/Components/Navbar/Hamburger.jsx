import React, { useEffect, useState } from "react";

const Hamburger = ({ setSideBar }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setSideBar(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [setSideBar]);

  return (
    <div className="flex-center px-2 lg:hidden">
      <button onClick={() => setSideBar(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default Hamburger;
