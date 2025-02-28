import React from "react";
import useIntersection from "../../../hooks/useIntersection";
import styles from "../Section_3/Section_3.module.css";

const Section_3 = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });
  return (
    <div ref={sectionRef} className={`${styles.sect3}`}>
      <div className={`${styles.cntr}`}>
        <div className={`${styles.clm} m-auto text-center break-words`}>
          <h2
            className={` ${styles.hasAnimation} ${isVisible ? styles.fadeIn : ""} m-auto max-w-[1000px] mb-0 font-primary text-[27px] xs:text-[30px] md:text-[35px]`}
          >
            Our Designers
          </h2>
          <div
            className={`${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""}`}
          >
            <div className={`mt-[24px] md:mt-[36px] lg:mt-[48px] mx-auto max-w-[650px]`}>
              <h5 className="text-[16px] xs:text-[17px] font-primary">
                Our talented designers put immense effort into creating
                <strong> unique, stylish, and comfortable pieces </strong>
                that reflect our brand's values. Their dedication and creativity
                ensure that each piece is not only
                <strong> fashionable </strong>
                but also
                <strong>
                  , offering the perfect blend of style and performance.{" "}
                </strong>
              </h5>
              <h5 className="text-[16px] xs:text-[17px]">
                Through their hard work and innovative designs, they continue to
                <strong> push the boundaries </strong>
                of fashion while maintaining the highest standards of
                <strong> quality and sustainability </strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
