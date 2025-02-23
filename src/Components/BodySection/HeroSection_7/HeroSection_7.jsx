import React from "react";
import styles from "../HeroSection_7/HeroSection_7.module.css";
import useIntersection from "../../../hooks/useIntersection";

const HeroSection_7 = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });
  return (
    <div ref={sectionRef} className="heroSection_7">
      <div className="w-full px-[20px] md:px-[30px] lg:px-[64px]">
        <div className="text-center">
          <div className={`${styles.container7} mx-auto text-center`}>
            <h2
              className={`${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""} mx-auto mb-0 max-w-[800px] text-center font-primary text-2xl font-[250] break-words text-primary xs:text-[26px] xs:leading-8 sm:leading-6 md:text-[28px] md:leading-8 lg:leading-9`}
            >
              "Our journey has been one of resilience, learning, and
              determination. We’re proud to share a product that’s been shaped
              by the stories of many women, including ours."
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_7;
