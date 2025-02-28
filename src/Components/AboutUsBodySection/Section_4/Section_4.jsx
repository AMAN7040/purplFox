import React from "react";
import styles from "../Section_4/Section_4.module.css";
import img from "../../../assets/AboutSection_4.png";

const Section_4 = () => {
  return (
    <div className="relative overflow-hidden pt-[36px] pb-0 md:pt-[48px] lg:pt-[64px]">
      <div className="m-0 flex w-full p-0">
        <div className={`${styles.sect4} ${styles.cntr} relative flex`}>
          <div className="relative h-full w-full">
            <div
              className={`${styles.cntr} absolute top-1/2 left-1/2 z-1 h-full -translate-x-1/2 -translate-y-1/2 transform w-full`}
            >
              <img className="h-full w-full object-cover" src={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
