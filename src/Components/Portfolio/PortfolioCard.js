import React from "react";
import PortfolioP from "./PortfolioP";
import Pdata from "./Pdata";
function PortfolioCards(valueS) {
  return (
    <PortfolioP
      imgsc={valueS.imgsrc}
      namesc={valueS.sname}
      textsc={valueS.desc}
    />
  );
}
const PortfolioCard = () => {
  return (
    <div>
      <div className="Portfolio_card1">
        <h1>Recent Projects</h1>
        <p>Some Of My Recent Projects Done in different Technologies</p>
      </div>
      <div className="card_responsive">{Pdata.map(PortfolioCards)}</div>
    </div>
  );
};

export default PortfolioCard;
