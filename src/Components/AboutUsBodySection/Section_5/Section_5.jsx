import React from "react";
import useIntersection from "../../../hooks/useIntersection";
import styles from "../Section_5/Section_5.module.css";

const Section_5 = () => {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });
  return (
    <div ref={sectionRef} className={`${styles.sect5}`}>
      <div className={`${styles.cntr}`}>
        <div className={`${styles.clm} m-auto text-center break-words`}>
          <h2
            className={` ${styles.hasAnimation} ${isVisible ? styles.fadeIn : ""} m-auto mb-0 max-w-[1000px] font-primary text-[27px] xs:text-[30px] md:text-[35px]`}
          >
            Our Fabric Curators
          </h2>
          <div
            className={`${styles.hasAnimation} ${isVisible ? styles.fadeInDelayed : ""}`}
          >
            <div
              className={`mx-auto mt-[24px] max-w-[650px] md:mt-[36px] lg:mt-[48px]`}
            >
              <h5 className="font-primary text-[16px] xs:text-[17px]">
                Our fabric curators carefully select materials that meet our
                high standards for
                <strong> quality </strong>
                and reflect our commitment to
                <strong> sustainable </strong>
                <strong> sourcing </strong>. They work closely with suppliers to
                ensure every fabric is crafted with integrity and respect for
                both people and the planet.
              </h5>
              <h5 className="text-[16px] xs:text-[17px]">
                By
                <strong> partnering </strong>
                with skilled textile
                <strong> experts </strong>, we bring you garments that
                <strong>blend</strong>
                style with
                <strong>sustainability</strong>, ensuring that each piece is
                made from materials chosen for durability,
                <strong>comfort</strong>, and
                <strong>environmental</strong>
                impact.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_5;
