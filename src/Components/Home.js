import React from 'react';
import About from './About';
import Clients from './Clients';
import Contactus from './Contactus';
import PortfolioCard from './Portfolio/PortfolioCard';
import ServiceCard from './ServiceCard';
import Header from "./Header";



const Home = () => {
  return (<>
    <Header/>
    <About/>
    <ServiceCard/>
    <Clients/>
    <PortfolioCard/>
    <Contactus/>
  </>
  );
};

export default Home;
