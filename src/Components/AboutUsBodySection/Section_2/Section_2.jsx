import React from "react";
import styles from "../Section_2/Section_2.module.css";
import image from "../../../assets/aboutSection_2.png";

const Section_2 = () => {
  return (
    <div className={`${styles.subSect2} relative`}>
      <div className={`${styles.ctnrBanner} ${styles.bannerWrapper} relative`}>
        <div className="absolute top-0 left-0 h-full w-full px-[calc(var(--spacing)*2.5)] md:px-[calc(var(--spacing)*4)]">
          <div className="relative h-full w-full overflow-hidden">
            <div className="block h-full w-full">
              <img
                src={image}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
