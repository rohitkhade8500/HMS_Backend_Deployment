import React from "react";

const OurValues = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="our values" />
        </div>
        <div className="banner">
          
          <h3>OurValues</h3>
          <p>
          Compassionate Care: We prioritize patient comfort and satisfaction, 
          making sure that each user's experience is personalized and hassle-free.
          </p>
          <p>
          Innovation in Healthcare: By embracing the latest technologies, our system allows medical 
          professionals to provide better care through efficient processes and comprehensive data insights.
          </p>
          <p>
          Data Security and Privacy: We are committed to protecting sensitive patient 
          data by employing the highest standards of data security.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurValues;
