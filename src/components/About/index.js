import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-me-container mb-2 p-2 rounded mt-5 pt-4" id="aboutMe">
      <h2 className="text-center text-info">About Me</h2>
      <ul className="about-me-ul m-1">
        <li>
          I am Karthikeya from Karimnagar, Telangana. I hold an MBA in Human
          Resource Management (2024) and a Bachelor of Commerce in{" "}
          <b style={{ fontFamily: "Perpetua" }}>Computer Applications</b>{" "}
          (2022), blending business knowledge with a growing passion for
          technology.
        </li>
        <li>
          Immersing myself in Nxtwave’s cutting-edge curriculum has been pivotal
          in shaping me into a proficient full-stack developer, mastering MERN
          technologies like Node.js, React.js, and MongoDB while honing my
          ability to build scalable, user-centric solutions.
          <br />
          On top of that, I mastered essential Developer foundations, including
          core{" "}
          <b style={{ fontFamily: "Perpetua" }}>
            Computer science concepts, seamless Collaboration with Git, and
            efficient Command line navigation.
          </b>
        </li>
        <li>
          My journey into technology stems from a deep-seated enthusiasm for
          problem-solving and innovation. Equipped with expertise in programming
          and frontend development,{" "}
          <b style={{ fontFamily: "Perpetua" }}>
            I have seamlessly transitioned my focus toward creating impactful
            software solutions.
          </b>{" "}
        </li>
        <li>
          <b style={{ fontFamily: "Perpetua" }}>
            As a dedicated MERN stack developer,{" "}
          </b>{" "}
          I am eager to contribute my skills in full-stack, backend, or frontend
          development. I aim to collaborate with dynamic teams, drive
          technological progress, and craft innovative solutions that redefine
          user experiences.
        </li>
      </ul>
    </div>
  );
};

export default About;
