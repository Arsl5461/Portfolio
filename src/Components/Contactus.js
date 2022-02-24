import React from "react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const myFunction = () => {
    alert("Thanks for contact us. we will get back soon through your given email adress");
  }; 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qasim2",
        "template_bt43s7m",
        e.target,
        "user_vvDEJxSOKVZIY3AvAEISp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="parallex1">
        <div className="contact-foam">
          <div className="contact-foam-1">
            <h4>Send Message</h4>
            <h5 style={{ color: "#0078ff" }}>_________</h5>

            <form onSubmit={sendEmail} >
              <div className="foam-name">
                <div className="foam-name-1">
                  <input
                    type="text"
                    className="foam-text"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                <div className="foam-name-1">
                  <input
                    type="email"
                    className="foam-text"
                    placeholder="email address"
                    name="email"
                  />
                </div>
                <div className="foam-name-1">
                  <input
                    type="text"
                    className="foam-text"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="foam-name-1">
                  <textarea
                    className="foam-text"
                    id=""
                    cols="24"
                    rows="8"
                    placeholder="Your Message"
                    name="message"
                  ></textarea>
                </div>
                <div className="foam_button">
                <button type="submit" onClick={()=> myFunction()} className="foam_btn" role="send">Send Message</button>

                  {/* <input
                    type="submit"
                    onClick={()=> myFunction()}
                    className="btn btn-info btn-animated"
                    value="Send Message"
                  /> */}
                </div>
              </div>
            </form>
          </div>

          <div className="contact-foam-2">
            <h4>Get in Touch</h4>
            <h5 style={{ color: "#0078ff" }}>_________</h5><br />
            <p>
              Hello! I am Arslan Akmal(Software Engineer from University of South Asia). 
            </p>
            <p>Frontend Developer with a demonstrated history of working in the
            information technology and services industry. Skilled in React.js,
            Node.js, C++, Java, HTML and Cascading Style Sheets (CSS). Strong
            engineering professional with a Bachelor of Science - BS focused in
            Computer Software Engineering from The University of Lahore. I enjoy
            developing new ideas, building community and mentoring newer IT
            professionals. </p>
            <p>
          Skilled in Front-end Development: - ReactJS -
            JavaScript - EcmaScript(ES6 to ES10) - SCSS/SASS - CSS3 - Html 5
           
          </p>
          <p> Skilled in Backend technologies : - NodeJS - C++ - Java Strong
            Object-Oriented Programming (OOP) concepts.</p>
          <p></p>
            <p>
              <img src="https://img.icons8.com/office/20/000000/worldwide-location--v1.png" />
              &nbsp; Lahore, Pakistan
            </p>
            <p>
              <img src="https://img.icons8.com/ultraviolet/20/000000/shake-phone.png" />
              &nbsp; +92 3074254897
            </p>
            <p>
              <img src="https://img.icons8.com/ultraviolet/20/000000/email-open--v2.png" />
              &nbsp; arxlan62@gmail.com{" "}
            </p>
            {/* <div className="socialmedia">
                <a href="https://www.linkedin.com/in/qasim-qayyum-78a490214/" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/linkedin.png"/></a>
                <a href="https://www.facebook.com/profile.php?id=100007514293159" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/facebook-new.png"/></a>
                <a href="https://instagram.com/i.m_gr0ot?utm_medium=copy_link" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/instagram-new.png"/></a>
                <a href="https://twitter.com/Qasim20Qayyum" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/twitter-circled--v1.png"/></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
