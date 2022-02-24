import React from "react";
import { NavLink } from 'react-router-dom';
const PortfolioP = (props) => {
  return (
    <div>
        <div className="portfolio_card">
        <div className="portfolioimg">
          <img className="portfolio_img" src= {props.imgsc} alt="Arslan" />
        </div>
          <div className="portfolio_text">
            <h4>
              <b>{props.namesc}</b>
            </h4>
            <div className="portfolio_button" style={{display:"flex"}}>
            <p>{props.textsc}</p>
            <NavLink exact to="/portfolio"><img src="https://img.icons8.com/color/48/000000/plus--v3.png" alt="b"/></NavLink>
            </div>

          </div>
        </div>
      </div>
    
  );
};

export default PortfolioP;
