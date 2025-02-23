import React from "react";
import styles from "../HeroSection_8/HeroSection_8.module.css";
import useIntersection from "../../../hooks/useIntersection";

const HeroSection_8 = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

  return (
    <div ref={sectionRef} className="HeroSection_8">
      <div className="pt-[32px] pb-0 md:pt-[48px] lg:pt-[64px]">
        <div className={`${styles.container8}`}>
          <div className="text-center">
            <div className={`${styles.subCont} m-auto p-0 text-center`}>
              <h2
                className={`${styles.hasAnimation} ${isVisible ? styles.fadeIn : ""} mx-auto mb-0 max-w-[800px] text-center font-primary text-[35px] font-[300] break-words text-primary`}
              >
                Join Us on Our Journey
              </h2>
              <div
                className={`${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""} pb-0`}
              >
                <div className="mx-auto mt-[calc(var(--spacing)*3)] max-w-[650px]">
                  <h5 className="text-[18px] font-extralight">
                    Stay updated with the latest, releases, and exclusive
                    content. Subscribe to our newsletter and be part of the
                    PurplFox community.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_8;
