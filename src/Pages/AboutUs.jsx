import React from "react";
import BreadCrumps from "../Components/BreadCrumps/BreadCrumps";
import Section_2 from "../Components/AboutUsBodySection/Section_2";

const AboutUs = () => {
  return (
    <main>
      <div className="section-1">
        <BreadCrumps />
      </div>
      <div className="section-2">
        <Section_2 />
      </div>
    </main>
  );
};

export default AboutUs;
