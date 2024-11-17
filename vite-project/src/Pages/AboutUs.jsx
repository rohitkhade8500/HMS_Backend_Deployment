import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import OurMission from "../components/OurMission";
import OurValues from "../components/OurValues";
const AboutUs = () => {
  return (
    <><><>
      <Hero
        title={"Learn More About Us | WellNess Medical Institute"}
        imageUrl={"/about.png"} />
      <Biography imageUrl={"/whoweare.png"} />
    </><OurMission imageUrl={"/services.png"}>

      </OurMission></><OurValues imageUrl={"/signin.png"}>
        </OurValues></>
  );
};

export default AboutUs;
