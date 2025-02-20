import React from "react";
import styles from "../HeroSection_1/HeroSection_1.module.css";
import image from "../../../assets/Hero_section-1.png";

const HeroSection_1 = () => {
  return (
    <div className="HeroSection_1 min-h-[70vh] py-8 xs:min-h-screen md:py-12 lg:py-16">
      <div
        className={`${styles.bannerWrapper} relative min-h-[70vh] xs:min-h-screen`}
      >
        <div
          className={`${styles.bannerWrapper} absolute top-0 left-0 h-full w-full`}
        >
          <div className="relative h-full w-full overflow-hidden">
            <div className="block h-full w-full">
              <img
                src={image}
                className="h-full w-full object-cover"
                alt="Hero Section-1"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black/20"></div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.bannerPadding} flex-center z-1 min-h-[70vh] w-full flex-col text-center text-white xs:min-h-screen`}
        >
          <div className="max-h-full w-full">
            <div
              className={`${styles.containerContent} relative z-10 m-auto max-h-full overflow-hidden p-0 text-center break-words`}
            >
              <h2 className="m-auto max-w-[1000px] text-center font-primary text-4xl font-extralight break-normal whitespace-pre-wrap text-white brightness-125 xs:font-light md:text-5xl sm:leading-5.5 md:leading-4.5 xl:text-6xl xl:leading-5">
                Empowering Your Fitness Journey with Thoughtfully Designed
                Activewear
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_1;
