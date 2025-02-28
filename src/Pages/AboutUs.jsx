import React from "react";
import BreadCrumps from "../Components/BreadCrumps/BreadCrumps";
import Section_2 from "../Components/AboutUsBodySection/Section_2";
import Section_3 from "../Components/AboutUsBodySection/Section_3";
import Section_4 from "../Components/AboutUsBodySection/Section_4";
import Section_5 from "../Components/AboutUsBodySection/Section_5";

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
      <div className="section-5">
        <Section_5 />
      </div>
    </main>
  );
};

export default AboutUs;
