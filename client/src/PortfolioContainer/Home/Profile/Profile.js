import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import github from '../../../assets/Home/github.png'
import facebook from '../../../assets/Home/facebook.png'
import linkedin from '../../../assets/Home/linkedin.png'
import twitter from '../../../assets/Home/twitter.png'
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
           
              <a href="https://github.com/Melijah5">
              <img className="client-info" src={github} alt="no internet connection" ></img>
              </a>
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <img className="client-info" src={facebook} alt="no internet connection" ></img>
              </a>
              <a href="https://www.linkedin.com/in/elias-woldeselassie/">
              <img className="client-info" src={linkedin} alt="no internet connection" ></img>
              </a>
              <a href="#">
              <img className="client-info" src={twitter} alt="no internet connection" ></img>
              </a>
              
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Elias W.</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                   
                    "MERN stack Dev 📱",
                    4000,
                    "Cross Platform Dev 🔴",
                    3000,
                    "React developer 🌐",
                    4000,
                    "Python/Django Developer 💻",
                    4000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Full-Stack Engineer | Software developer | MERN stack | Frontend developer <br/>
             Node.js | React developer | Python developer | Django | MongoDB
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="elias_woldeselassie_resume.pdf" download="elias_woldeselassie_resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
