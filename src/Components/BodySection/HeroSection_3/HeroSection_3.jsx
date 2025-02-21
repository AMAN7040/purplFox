import React, { useState } from "react";
import styles from "../HeroSection_3/HeroSection_3.module.css";

const HeroSection_3 = () => {
  const Items = new Array(5).fill("Introducing VersaFlex");
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="heroSection3">
      <div className="pt-0 pb-[calc(var(--spacing)*4)]">
        <div
          className={`${styles.marquee} relative z-1 flex w-full items-center overflow-hidden whitespace-nowrap text-white`}
        >
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className={`${styles.marqueeGroup} -z-1 flex shrink-0 justify-around pt-[12px] pb-[16px] ${isPlaying ? "" : styles.paused}`}
            >
              {Items.map((text, index) => (
                <span key={index} className={`${styles.marqueeItem}`}>
                  {text}
                </span>
              ))}
            </div>
          ))}
          <div className="absolute top-0 right-0 z-2 flex h-full items-center px-[12px] sm:px-[20px]">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-[50px] border-1 border-black bg-white p-0 font-secondary text-[1.4rem] break-all text-primary shadow-[0_0_0_3px_rgba(16,16,16,0.1)] transition-all duration-300 ease-in-out sm:size-11"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="8 5 20 12 8 19 8 5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_3;
