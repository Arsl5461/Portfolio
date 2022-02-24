import React from "react";
import Services from "./Services";
import Sdata from "./Sdata";
function ServiceCards(valueS) {
  return (
    <Services
      imgsc={valueS.imgsrc}
      namesc={valueS.sname}
      textsc={valueS.text}
    />
  );
}
const ServiceCard = () => {
  return (
    <div>
      <div className="Service_card1">
        <h1>SERVICES</h1>
        <p>I am providing these services for you.</p>
      </div>
      <div className="card_responsive">{Sdata.map(ServiceCards)}</div>
    </div>
  );
};

export default ServiceCard;
