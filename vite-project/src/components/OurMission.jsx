import React from "react";

const OurMission = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="our mission" />
        </div>
        <div className="banner">
          
          <h3>OurMission</h3>
          <p>
          Our mission is to support Wellness Medical Institute in delivering high-quality healthcare
           through a centralized, user-friendly management system. We aim to improve operational efficiency,
            enhance patient satisfaction, and foster a collaborative healthcare environment.
          </p>
          <p>
          With the Wellness Medical Institute Hospital Management System, we strive to redefine 
          healthcare management by empowering both patients and providers with an integrated, intuitive, 
          and effective digital experience.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default OurMission;
