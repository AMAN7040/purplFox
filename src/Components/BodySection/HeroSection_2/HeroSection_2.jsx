import React from "react";
import styles from "../HeroSection_2/HeroSection_2.module.css";

const HeroSection_2 = () => {
  return (
    <div>
      <div className={`${styles.subsection2} mx-auto my-0 w-full pt-0`}>
        <div className="pb-0! text-center">
          <div
            className={`${styles.container2} m-auto p-0 text-center break-words`}
          >
            <h2 className="m-auto mb-0 max-w-[1000px] font-primary text-3xl break-words xs:text-4xl">
              Our Story
            </h2>
            <div className="last:mb-0">
              <div className="mx-auto mt-[calc(var(--spacing)*3)] max-w-[650px]">
                <h3 className="mb-[8px] font-primary text-2xl font-light text-primary xs:text-3xl">
                  Born from personal challenges, our brand is dedicated to
                  creating activewear that meets the real needs of women
                </h3>
              </div>
              <div className="mt-[calc(var(--spacing)*4.5)] inline-flex max-w-[650px] flex-wrap justify-center">
                <a
                  href="#"
                  className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-[50px] border-0 bg-black px-[24px] font-secondary text-[14px] tracking-[-0.12em] text-white sm:min-h-[56px]"
                >
                  Read Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_2;
