import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-me-container mb-2 p-2 rounded mt-5 pt-4" id="aboutMe">
      <h2 className="text-center text-info">About Me</h2>
      <ul className="about-me-ul m-1">
        <li>
          I am Karthikeya from Karimnagar, Telangana, with a B.Com in{" "}
          <b>Computer Applications</b>, I merge human-centric strategies with
          technical precision. Trained in Nxtwave’s <strong>MERN stack</strong>,
          I build scalable, user-centric solutions while mastering foundational
          tools like Git, CLI, and core CS concepts. My journey from business
          education to full-stack development reflects my drive to innovate
          through code.
        </li>
        <li>
          Fueled by a passion for problem-solving, I specialize in creating
          intuitive software solutions, whether refining frontend interfaces or
          optimizing backend systems. I thrive in dynamic teams, aiming to
          contribute my skills in full-stack, backend, or frontend roles to
          deliver technology that drives progress and elevates user experiences.
        </li>
      </ul>
    </div>
  );
};

export default About;
