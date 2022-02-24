import React from "react";
import img from "../Assets/imgs/arslan.jpg";

const About = () => {
  return (
    <div>
      <div className="about_main">
        <div className="about_main_1">
          <div className="about_main_1_top">
            <div>
              <img
                src={img}
                alt="img"
                style={{ height: "9rem", width: "10rem", margin: "1rem" }}
              />
            </div>
            <div>
              <p>
                Name:<span> Muhammad Arslan Akmal</span>
              </p>
              <p>
                Profile:<span> Full Stack Developer</span>
              </p>
              <p>
                Email:<span> arxlan62@gmail.com</span>
              </p>
              <p>
                Phone:<span> +92 3074254897</span>
              </p>
            </div>
          </div>

          <div className="about_main_1_down w3-container ">
            
            <div class="w3-light-grey">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active animate"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                
                >
                  85%
                </div>
              </div>
            </div>
            <p>HTML</p>
            

            <div class="w3-light-grey">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active animate2"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
            <p>CSS3</p>
            

            <div class="w3-light-grey">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active animate3"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <p>SAAS</p>

            

            <div class="w3-light-grey">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active animate4"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
            <p>ReactJS</p>

            

            <div class="w3-light-grey">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active animate5"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                >
                  40%
                </div>
              </div>
            </div>
            <p>NodeJS</p>
            <div class="w3-light-grey">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active animate6"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "50%" }}
                >
                  50%
                </div>
              </div>
            </div>
            <p>BootStrap</p>
          </div>
        </div>

        <div className="about_main_2">
          <h4>About Me</h4>
          <h5 style={{ color: "#0078ff" }}>_________</h5>
          <p>
            Frontend Developer with a demonstrated history of working in the
            information technology and services industry. Skilled in React.js,
            Node.js, C++, Java, HTML and Cascading Style Sheets (CSS). Strong
            engineering professional with a Bachelor of Science - BS focused in
            Computer Software Engineering from The University of South Asia. I enjoy
            developing new ideas, building community and mentoring newer IT
            professionals. 
          </p>
          -
          <p>
          Skilled in Front-end Development: - ReactJS -
            JavaScript - EcmaScript(ES6 to ES10) - SCSS/SASS - CSS3 - Html 5
           
          </p>
          <p> Skilled in Backend technologies : - NodeJS - C++ - Java Strong
            Object-Oriented Programming (OOP) concepts.</p>
          <p>
            I love writing code. Ever since writing my first program in C++ and
            manipulating it to produce the desired output, I have been obsessed
            with the idea of using software to solve practical problems.
            Software engineering is a never-ending puzzle that I am passionately
            engaged in solving. I believe in the power of programming to
            transform and improves the lives of people around the world. 
           
          </p>
          <p> Dedicated reader who loves to expand horizons by learning new
            languages.  Project Management.  Negotiation skills. 
            Communication skills.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
