import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [ 
   { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Expriance (2019-Present)", logoSrc: "work-history.svg" },
    { label: "Expriance (2018-2019)", logoSrc: "work-history.svg" },
    { label: "Expriance (2017)", logoSrc: "work-history.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "python", ratingPercentage: 85 },
    { skill: "Django", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 80 },
    { skill: "Git", ratingPercentage: 80 },
    { skill: "MSSQL", ratingPercentage: 80 },
    { skill: "MySql", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 80 },
   

  ];

  // const projectsDetails = [
  //   {
  //     title: "Personal Portfolio Website",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "A Personal Portfolio website to showcase all my details and projects at one place.",
  //     subHeading: "Technologies Used: React JS, Bootsrap",
  //   },
  //   {
  //     title: "Mobile E-shop ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "An ecommerce application designed to sell products online wth payment system integration",
  //     subHeading:
  //       "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  //   },
  //   {
  //     title: "Ecommerce Website ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
  //     subHeading:
  //       "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
  //   },
  // ];

  const resumeDetails = [

     /* PROGRAMMING SKILLS */
     <div
     className="resume-screen-container programming-skills-container"
     key="programming-skills"
   >
     {programmingSkillsDetails.map((skill, index) => (
       <div className="skill-parent" key={index}>
         <div className="heading-bullet"></div>
         <span>{skill.skill}</span>
         <div className="skill-percentage">
           <div
             style={{ width: skill.ratingPercentage + "%" }}
             className="active-percentage-bar"
           ></div>
         </div>
       </div>
     ))}
   </div>,
    <div className="resume-screen-container resume-education" key="education">
      <ResumeHeading
        heading={"ADAMA UNIVERSTY, ETHIOPIA"}
        subHeading={"BACHELOR OF SCIENCE IN INFORMATION SCIENCE"}
        fromDate={"2008"}
        toDate={"2010"}
      />
     
      <ResumeHeading
        heading={"EVANGADI BOOTCAMP"}
        subHeading={"FULL-STACK DEVELOPMENT USING JAVASCRIPT"}
        fromDate={"2018"}
        toDate={"2019"}
      />
       <ResumeHeading
        heading={"CODING DOJO "}
        subHeading={"FULL-STACK DEVELOPENT USING PYTHON"}
        fromDate={"2017"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"KAL ACADEMY BOOTCAMP"}
        subHeading={"FULL-STACK DEVELOPMENT USING C# AND MICROSERVICE"}
        fromDate={"2017"}
        toDate={"2018"}
      />
      
    </div>,

    

    /* WORK EXPERIENCE */
    <div className="resume-screen-container resume-expriance1" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Flex Logistic and Transportation"}
          subHeading={"FRONTEND DEVELOPER"}
          fromDate={"June 2019"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
              ▪ Collaborated with backend dev including client facing applications. <br />
              ▪ Implemented new features and bug fixes to improve the user experience.<br />
              ▪ Optimized the performance of the web applications by utilizing React.<br />
              ▪ Performed comprehensive unit testing on complex code.<br />
              ▪ Responsible for creating an efficient design and developing user interaction<br />
              screens using React, Redux, CSS3, JavaScript, jQuery, and JSON.<br />
              ▪ Designed frontend within object-oriented JavaScript libraries<br />
              ▪ Working on creating a responsive website for smart devices using media queries.<br />
              

          </span>
        </div>
      </div>
      
    </div>,

<div className="resume-screen-container resume-expriance" key="work-experience">
<div className="experience-container">
  <ResumeHeading
    heading={"Flex Logistic and Transportation"}
    subHeading={"BACKEND DEVELOPER"}
    fromDate={"Jan 2018"}
    toDate={"May 2019"}
  />
  <div className="experience-description">
    <span className="resume-description-text">
          ▪ Designed and developed the server module and resolved issues and was
          responsible for its enhancements. <br />
          ▪ Architected and developed Python and Django for the backend development <br />
          ▪ Worked on Django ORM module for signing complex queries. <br />
          ▪ Developed views and templates with Django view controller and template to
          create a user-friendly website interface. <br />
          ▪ Worked on Jira for managing the tasks and improving performance. 

    </span>
  </div>

  
  
</div>

</div>,

<div className="resume-screen-container resume-expriance" key="work-experience">
<div className="experience-container">
  <ResumeHeading
    heading={"Various Clients"}
    subHeading={"FREELANCE"}
    fromDate={"Feb 2017"}
    toDate={"Dec 2017"}
  />
  <div className="experience-description">
    <span className="resume-description-text">
    
        ▪ Developed and maintained web applications using the MERN stack and related 
           technologies for a variety of clients. <br/>
        ▪ Worked closely with clients to understand their needs and deliver high-quality solutions on tight deadlines. <br/>
        ▪ Implemented a responsive mobile design for the project. <br/>
        ▪ Utilized agile development methodologies and strong communication skills to successfully deliver projects on time and on budget.  <br/>
       

    </span>
  </div>

  
  
</div>

</div>,

   

    /* PROJECTS */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,

    /* Interests */
    <div className="resume-screen-container1" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="It's satisfying to see progress in people both academically and non-academically and also I believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
