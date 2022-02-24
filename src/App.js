import React from "react";
import "./Assets/style.css";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import ServiceCard from "./Components/ServiceCard";
import Clients from "./Components/Clients";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import PortfolioD from "./Components/Portfolio/PortfolioD";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/service" element={<ServiceCard />} />
          <Route path="/service" element={<Clients />} />
          <Route path="/portfolio" element={<PortfolioD />} />
          <Route path="/contact-us" element={<Contactus />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
