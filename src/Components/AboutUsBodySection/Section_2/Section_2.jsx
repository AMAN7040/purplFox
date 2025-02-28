import React from "react";
import styles from "../Section_2/Section_2.module.css";
import image from "../../../assets/aboutSection_2.png";

const Section_2 = () => {
  return (
    <div className={`${styles.subSect2} relative`}>
      <div className={`${styles.ctnrBanner} ${styles.bannerWrapper} relative`}>
        <div className="absolute top-0 left-0 h-full w-full px-[calc(var(--spacing)*2.5)] md:px-[calc(var(--spacing)*4)]">
          <div className="relative h-full w-full overflow-hidden">
            <div className="block h-full w-full brightness-90">
              <img src={image} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        <div
          className={`${styles.subSect2} flex-center relative z-1 w-full flex-col px-[calc(var(--spacing)*2.5)] py-[calc(var(--spacing)*5)] text-center md:px-[calc(var(--spacing)*4)]`}
        >
          <div className="max-h-full w-full">
            <div
              className={`${styles.container2} m-auto max-h-full overflow-hidden text-center`}
            >
              <div className="mx-auto mt-[calc(var(--spacing)*3)] max-w-[650px]">
                <h2 className="font-primary text-[27px] text-white xs:text-[30px] md:text-[35px]">
                  <strong>The Creative Minds Behind Our Journey</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
