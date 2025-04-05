import React, { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const texts = [
    "a Full Stack Developer",
    "a MERN Stack Developer",
    "an Application Developer",
    "a React Native Developer",
    "a Backend Developer",
    "a Frontend Developer",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const timeout = isDeleting ? 100 : 200;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, timeout);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => setIsDeleting(true), 1000);
        return () => clearTimeout(timeoutId);
      }
    } else {
      if (displayText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1.4));
        }, timeout);
        return () => clearTimeout(timeoutId);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <div className="home-container">
      <div className="text-center mb-4 position-relative">
        <h2 className="text-center text-info">About Me</h2>
        <div
          className="signature-underline"
          style={{ backgroundColor: "#1795b8" }}
        ></div>
      </div>
      <div className="hero-section" style={{ width: "88vw" }}>
        <div className="hero-image mobile-image">
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1742632927/IMG_20230106_135825-2_lykx0h.jpg"
              alt="Karthikeya D"
            />
            <div className="image-animation"></div>
          </div>
        </div>
        <div className="hero-text">
          <h1 className="animated-text">
            I am <span className="text-slider">{displayText}</span>
          </h1>
          <p className="about-paragraph">
            I'm Karthikeya Doosa, With a B.Com in <b>Computer Applications</b>,
            I combine human-centric strategies with technical expertise. Trained
            in Nxtwave’s <strong>MERN stack</strong>, I build scalable,
            user-focused solutions, mastering tools like Git, CLI, and core CS
            concepts. Skilled in problem-solving, I craft intuitive software by
            refining frontend interfaces and optimizing backend systems. I aim
            to contribute my full-stack, backend, or frontend skills to deliver
            impactful technology and elevate user experiences in collaborative
            teams.
          </p>
        </div>
        <div className="hero-image desktop-image">
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1742632927/IMG_20230106_135825-2_lykx0h.jpg"
              alt="Karthikeya D"
            />
            <div className="image-animation"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
