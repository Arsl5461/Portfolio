import React from "react";
import CountUp from "react-countup";

const Clients = () => {
  return (
    <div>
    <div className="parallex">
      <div className="client">
        <div className="client_com">
        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/FFFFFF/external-tick-delivery-kiranshastry-lineal-kiranshastry.png"/>          <p></p>
          <CountUp start={0} end={20} duration={5} />
          <h4 className="client_h4">Works Completed</h4>
        </div>
        <div className="client_com">
        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/FFFFFF/external-journal-news-kiranshastry-lineal-kiranshastry.png"/>          <p></p>
          <CountUp start={0} end={4} duration={2} />
          <h4 className="client_h4">Month of experience</h4>
        </div>
        <div className="client_com">
        <img src="https://img.icons8.com/ios/50/FFFFFF/conference-call.png"/>          <p></p>
          <CountUp start={0} end={2} duration={2} />
          <h4 className="client_h4">Total Clients</h4>
        </div>
        <div className="client_com">
        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/FFFFFF/external-tick-delivery-kiranshastry-lineal-kiranshastry.png"/>          <p></p>
          <CountUp start={0} end={17} duration={5} />
          <h4 className="client_h4">Skills</h4>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Clients;
