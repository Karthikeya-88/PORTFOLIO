import React from "react";

const Experience = () => {
  return (
    <div
      className="rounded border border-light p-3"
      style={{
        backgroundColor: "#cad8e1",
        boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
        transform: "translateZ(0)",
      }}
    >
      <div className="text-center pl-4 pr-4 p-3 w-100">
        <h4 className="experience-header">
          <b>Teaching Assistant - Nxtwave</b>
        </h4>
      </div>
      <ul
        style={{
          listStyle: "disc",
        }}
        className="text-black"
      >
        <li
          className="experience-li"
          style={{
            paddingBottom: "10px",
            lineHeight: "1.6",
            font: "18px bold Garamond, Perpetua",
          }}
        >
          As a Teaching Assistant for CCBPian learners, I provided hands-on
          support in mastering the MERN stack, Programming with Python and
          Querying with SQL. My role involved breaking down complex concepts,
          debugging code, and equipping students with practical strategies to
          tackle technical challenges independently.
        </li>
        <li
          className="experience-li"
          style={{
            paddingBottom: "10px",
            lineHeight: "1.6",
            font: "18px bold Garamond, Perpetua",
          }}
        >
          I focused on nurturing critical thinking by guiding learners to
          diagnose issues and refine their coding approaches. Through
          collaborative troubleshooting and clear communication, I helped
          students build confidence in their ability to solve problems and
          deliver functional solutions.
        </li>
      </ul>
      <div className="text-justify">
        <h5 style={{ color: "#4445ea", fontFamily: "Lora" }}>
          <b>Skills Acquired:</b>
        </h5>
        <ol
          style={{
            font: "18px Garamond, Perpetua",
          }}
          className="text-dark"
        >
          {" "}
          <li style={{ paddingBottom: "10px" }}>Debugging & troubleshooting</li>
          <li style={{ paddingBottom: "10px" }}>
            Addressed full-stack queries with precision
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Problem-solving & analytical thinking
          </li>{" "}
          <li style={{ paddingBottom: "10px" }}>
            Professional and a refined touch of formal response
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
