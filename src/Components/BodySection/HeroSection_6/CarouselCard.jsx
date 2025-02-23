import React from "react";
import styles from "../HeroSection_6/HeroSection_6.module.css";

const CarouselCard = ({ item, currentIndex }) => {
  return (
    <div className={`${styles.carouselCard}`}>
      <div className="block w-full overflow-hidden">
        <div className="relative block aspect-[3/4]">
          <img
            src={item?.imageUrl}
            className="object-[49.9411% 49.1836%] w-full object-cover"
            alt={item?.name}
          />
        </div>
      </div>
      <div className="text-center pt-[8px] md:pt-[12px] lg:pt-[16px]">
        <h3 className="mb-0">{item?.name}</h3>
      </div>
    </div>
  );
};

export default CarouselCard;
