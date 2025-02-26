import React, { useEffect, useState } from "react";
import styles from "../Cart/Cart.module.css";

const Cart = ({ isCart, onClose }) => {
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
      className={`${styles.overlay} ${isCart ? styles.show : ""} ${isCart ? "bg-black/55" : ""}`}
      id="overlay"
    >
      <aside
        className={`${
          isCart ? styles.slideIn : styles.slideOut
        } fixed top-0 right-0 z-100 h-full w-full max-w-[480px] flex-1 flex-col border-l border-gray-300 bg-white`}
      >
        <div className="flex justify-between border-b border-gray-200 py-[16px] pr-[16px] pl-[24px]">
          <h2 className="font-secondary text-[17px] font-light -tracking-[1px] text-primary">
            Cart
          </h2>
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
        <div className="flex h-full flex-1 flex-col items-center justify-center overflow-y-scroll p-[20px] xs:p-[24px]">
          <span className="mb-[32px] font-primary text-lg font-light">
            Your cart is empty
          </span>
          <a
            href="#"
            className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-[50px] border border-gray-200 bg-black px-[24px] text-[14px] text-white shadow-md md:min-h-[56px]"
          >
            Continue Shopping
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
