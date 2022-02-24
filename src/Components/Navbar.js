import React from 'react';
// import img from "../Assets/imgs/logo.png";
import Typical from 'react-typical';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const toggleb= ()=>{
        document.querySelector(".nav-wrapper").classList.toggle("change");
    }


  return( <>
<div className="nnaavvee">
      <div className="banner">
        <div className="logo">
          <a href="#"><img src={img} alt="logo" /></a>
        </div>
        <div fluid className='image' >
        <h1 className='heading'>I am Qasim Qayyum</h1>
        <p className='Heading__para' style={{color: '#fff'}}>
            <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
                'WebSite Developer', 2500,
                'Reactjs Developer',2500,
                'WebSite Designer', 2500
            ]}/>
        </p>
    </div>
        {/* <div className="btn-wrapper">
          <button className="banner-btn">Explore More</button>
        </div> */}
      </div>
      <div className="nav-wrapper">
        <div className="hamburger-menu" onClick={toggleb}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <nav className="top-nav">
          <ul className="nav-list">
            <li><NavLink to="/" className="nav-link" data-text="Home">Home</NavLink></li>
            <li>
              <NavLink to= "/about-me" className="nav-link" data-text="About Me">About Me</NavLink>
            </li>
            <li>
              <NavLink to= "/service" className="nav-link" data-text="Service">Service</NavLink>
            </li>
            <li>
              <NavLink to= "/portfolio" className="nav-link" data-text="Portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to= "/contact-us" className="nav-link" data-text="Contact">Contact</NavLink>
            </li>
          </ul>
          {/* <ul className="nav-list">
            <li><a href="#" className="nav-link" data-text="Home">Home</a></li>
            <li>
              <a href="#" className="nav-link" data-text="About Me">About Me</a>
            </li>
            <li>
              <a href="#" className="nav-link" data-text="Service">Service</a>
            </li>
            <li>
              <a href="#" className="nav-link" data-text="Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#" className="nav-link" data-text="Contact">Contact</a>
            </li>
          </ul> */}
        </nav>
        <nav className="bottom-nav">
          <ul className="icons">
            <li className="icon-item">
              <a href="" className="icon-link"><i className="fab fa-facebook-f"></i></a>
            </li>
          
            <li className="icon-item">
              <a href="" className="icon-link"><i className="fab fa-instagram"></i></a>
            </li>
          
            <li className="icon-item">
              <a href="" className="icon-link"><i className="fab fa-twitter"></i></a>
            </li>
          
            <li className="icon-item">
              <a href="" className="icon-link"><i className="fab fa-linkedin"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>



  </>)
};

export default Navbar;
