import React, { useState } from "react";
import styles from "../HeroSection_6/HeroSection_6.module.css";
import useIntersection from "../../../hooks/useIntersection";
import Carousel from "./Carousel";
import blue_shorts from "../../../assets/blue_shorts.png";
import black_Shorts from "../../../assets/black_Shorts.png";
import dark_blue_shorts from "../../../assets/dark_blue_shorts.png";
import grey_shorts from "../../../assets/grey_short.png";

const HeroSection_6 = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { imageUrl: blue_shorts, name: "Sky Blue - Fresh & Energetic" },
    { imageUrl: dark_blue_shorts, name: "Dark Blue - Strong & Grounded" },
    { imageUrl: grey_shorts, name: "Dark Grey - Sleek & Versatile" },
    { imageUrl: black_Shorts, name: "Black - Bold & Timeless" },
  ];

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div ref={sectionRef} className={`${styles.heroSection6}`}>
      <div className="pt-0 pb-[calc(var(--spacing)*7)]">
        <div className="w-full px-[calc(var(--spacing)*2.5)] text-left lg:px-[calc(var(--spacing)*4)]">
          <div className="s-header pb-[calc(var(--spacing)*4)]">
            <div className={`${styles.headerContent} p-0`}>
              {" "}
              <h2
                className={` ${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""} mb-0 max-w-[1000px] font-primary text-[26px] font-[350] break-words text-primary xs:text-2xl sm:text-3xl sm:leading-6 md:text-4xl md:leading-4 lg:leading-3`}
              >
                From Bold to Classic — Find Your Shade
              </h2>
            </div>
          </div>
          <div className="s-content">
            <div className="relative block">
              <Carousel
                isVisible={isVisible}
                items={items}
                currentIndex={currentIndex}
              />
              <div className="absolute top-[50%] left-0 z-1 -mx-[5px] flex w-full -translate-y-1/2 transform justify-between md:hidden">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`${
                    currentIndex === 0
                      ? "cursor-not-allowed bg-gray-200"
                      : "bg-black"
                  } inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[50%] border-0 p-0 text-white transition-all duration-300 ease-in-out`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex === items.length - 1}
                  className={`${
                    currentIndex === items.length - 1
                      ? "cursor-not-allowed bg-gray-200"
                      : "bg-black"
                  } inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[50%] border-0 bg-black p-0 text-white transition-all duration-300 ease-in-out`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="s-footer pt-[calc(var(--spacing)*4)] text-left">
            <a
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-[50px] border-0 bg-black px-[24px] font-secondary text-[12px] font-light break-all text-white xs:min-h-[56px] xs:text-sm"
              href="#"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_6;
