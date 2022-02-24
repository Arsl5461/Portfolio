import React from "react";
const Services = (props) => {
  return (
    <div>
        <div className="service_card">
          <img className="icon_img" src= {props.imgsc} alt="Icon" />
          <div className="card_text">
            <h4>
              <b>{props.namesc}</b>
            </h4>
            <p>{props.textsc}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Services;
