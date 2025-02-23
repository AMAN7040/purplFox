import React from "react";
import CarouselCard from "./CarouselCard";
import styles from "../HeroSection_6/HeroSection_6.module.css";

const Carousel = ({ isVisible, items, currentIndex }) => {
  return (
    <>
      <div
        className={` ${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""} -mx-[16px] hidden md:flex md:flex-wrap`}
      >
        {items.map((item) => (
          <CarouselCard key={item?.name} item={item} />
        ))}
      </div>

      <div
        className={` ${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""} relative  hidden flex-shrink-0 overflow-hidden transition-transform duration-500 ease-in-out xs:flex md:hidden`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 50}%)`,
            width: `${items.length * 100}%`,
          }}
        >
          {items.map((item, index) => (
            <CarouselCard
              key={item?.name}
              item={item}
              className="w-full flex-none"
            />
          ))}
        </div>
      </div>

      <div
        className={` ${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""} relative -mx-[22px] flex flex-shrink-0 overflow-hidden transition-transform duration-500 ease-in-out xs:hidden`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}vw)`, // Use vw to match the viewport width
            width: `${items.length * 100}vw`, // Ensure the width covers all items
          }}
        >
          {items.map((item, index) => (
            <div key={item?.name} className="w-screen flex-shrink-0">
              <CarouselCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
