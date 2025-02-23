import React from "react";
import styles from "../HeroSection_5/HeroSection_5.module.css";
import useIntersection from "../../../hooks/useIntersection";
import image from "../../../assets/Hero_section-1.png";
import Accordian from "./Accordian";

const HeroSection_5 = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

  const accordionItems = [
    { title: "Feature 1", content: "This is feature 1" },
    { title: "Feature 2", content: "This is feature 2" },
    { title: "Feature 3", content: "This is feature 3" },
  ];

  return (
    <div ref={sectionRef} className="Herosection5">
      <div className={`${styles.container5}`}>
        <div className="mx-auto my-0 w-full px-[calc(var(--spacing)*2.5)] lg:px-[calc(var(--spacing)*4)]">
          <div className="s-header pb-[calc(var(--spacing)*4)]">
            <div className={`${styles.headerContent} p-0`}>
              <div
                className={`${styles.hasAnimation} ${isVisible ? styles.fadeIn : ""} mb-[calc(var(--spacing)*1.5)] inline-block font-primary text-lg font-normal text-primary uppercase`}
              >
                Why Choose VersaFlex Shorts?
              </div>
              <h2
                className={` ${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""} mb-0 max-w-[1000px] font-primary text-[26px] font-[350] break-words text-primary xs:text-2xl sm:text-3xl sm:leading-6 md:text-4xl md:leading-4 lg:leading-3`}
              >
                VersaFlex Shorts isn’t just activewear; it’s a lifestyle.
                Designed for individuals who demand more, our shorts blend
                versatility, comfort, and style—perfect for every occasion.
              </h2>
            </div>
          </div>
          <div className="s-content">
            <div className="gap:[48px] -mx-[8px] flex flex-row-reverse flex-wrap justify-start xs:gap-[0px] md:-mx-[12px] md:flex-nowrap lg:-mx-[16px]">
              <div
                className={`${styles.subCont} px-[8px] md:px-[12px] lg:px-[16px]`}
              >
                <Accordian Items={accordionItems} />
              </div>
              <div
                className={`${styles.photoContainer} px-[8px] md:px-[12px] lg:px-[16px]`}
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`${styles.photoAnimation} ${isVisible ? styles.scaleIn : ""} block overflow-hidden`}
                  >
                    <div className="relative block aspect-2/3">
                      <img
                        src={image}
                        className="object-[53.2952% 25.8676%] aspect-2/3 h-auto w-full object-cover transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
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

export default HeroSection_5;
