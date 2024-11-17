import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to the Wellness Medical Institute Hospital Management System Good Health And Wellbeing
          - a comprehensive digital platform dedicated to streamlining and enhancing healthcare management processes
           for the Wellness Medical Institute. Our system is designed to provide patients, healthcare providers, and 
           administrative staff with seamless access to essential medical and administrative services, 
           ensuring that every patient receives exceptional care and every staff member is empowered to work efficiently.
          </p>
  
          <p>We are working on a MERN STACK PROJECT.</p>
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

export default Biography;
