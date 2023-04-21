import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import netflex from "../../../src/img/Testimonial/netflex.png";
import amazon from "../../../src/img/Testimonial/Amazon1.png";
import zoom from "../../../src/img/Testimonial/zoom.png";
import chatgpt from "../../../src/img/Testimonial/chatgpt.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import facebook from "../../../src/img/Testimonial/facebook.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Project"}
        subHeading={"Some list of my projects"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-10">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={netflex} alt="no internet connection"></img>
                    <p>
                    🎬 Netflix Clone 🔥 Made using React with firebase. Tmdb used for the API.
                    </p>                     
                  </div>
                  
                </div>
              </div>

              <div className="col-lg-10">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={amazon} alt="no internet connection"></img>
                    <p>
                    🛒🛒Amazon Shopping Site's clone version created using ReactJs.
                    </p>                     
                  </div>
                 
                </div>
              </div>

              <div className="col-lg-10">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={zoom} alt="no internet connection"></img>
                    <p>
                    Zoom clone Developed with Node.js, Express, Peer.js and Socket.io.
                    </p>                     
                  </div>
                 
                </div>
              </div>

              <div className="col-lg-10">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={facebook} alt="no internet connection"></img>
                    <p>
                    Building facebook application clone using React and MongoDB.
                    </p>                     
                  </div>
                  
                </div>
              </div>

              <div className="col-lg-10">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={chatgpt} alt="no internet connection"></img>
                    <p>
                    ChatGPT clone using openAI API , vite , Express and Node.js.
                    </p>                     
                  </div>
                  
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
