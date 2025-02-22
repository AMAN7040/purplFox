import React, { useState } from "react";
import styles from "../HeroSection_5/HeroSection_5.module.css";

const AccordianItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordia-item border-t-1 border-b-1 border-gray-300 px-[16px]">
      <div className="accordian-header break-words">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex w-full cursor-pointer items-center border-none py-[16px] font-primary text-primary"
        >
          <span>kuch </span>
          <span className="mb-0 grow pr-[12px] text-left text-sm xs:text-base">
            {title}
          </span>
          <span className="z-1 inline-flex size-[36px] cursor-pointer items-center justify-center border-0 break-all text-primary sm:size-[44px]">
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
      <div
        className={`${isOpen ? styles.open : styles.close} accordian-Content px-[36px]`}
      >
        <p
          className={`${isOpen ? styles.itemContentOpen : styles.itemContentClose} mb-[32px]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const Accordian = ({ Items, index }) => {
  return (
    <div className="accordian">
      {Items.map((item) => (
        <AccordianItem
          key={item?.title}
          title={item?.title}
          content={item?.content}
        />
      ))}
    </div>
  );
};

export default Accordian;
