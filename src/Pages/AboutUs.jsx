import React from "react";
import BreadCrumps from "../Components/BreadCrumps/BreadCrumps";
import Section_2 from "../Components/AboutUsBodySection/Section_2";
import Section_3 from "../Components/AboutUsBodySection/Section_3";
import Section_4 from "../Components/AboutUsBodySection/Section_4";

const AboutUs = () => {
  return (
    <main>
      <div className="section-1">
        <BreadCrumps />
      </div>
      <div className="section-2">
        <Section_2 />
      </div>
      <div className="section-3">
        <Section_3 />
      </div>
      <div className="section-4">
        <Section_4 />
      </div>
    </main>
  );
};

export default AboutUs;
