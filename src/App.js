import React from "react";
import { LuCopyright } from "react-icons/lu";
import Skills from "./components/Skills";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectFilter from "./components/Projects";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Nav from "./components/Navbar/Nav";
import HireMeSection from "./components/HireMe";

function App() {
  return (
    <>
      <div className="ultimate-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <Nav />
        <div className="mt-5 pt-4" id="aboutMe">
          <About />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <Skills style={{ width: "98vw" }} />

        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 text-black"
          id="myExperience"
          style={{ width: "96vw" }}
        >
          <div className="text-center mb-4 position-relative">
            <h2 className="text-center text-info">Experience</h2>
            <div
              className="signature-underline"
              style={{ backgroundColor: "#1795b8" }}
            ></div>
          </div>
          <Experience />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div className="mb-0 p-2" id="myProjects">
          <div className="text-center mb-4 position-relative">
            <h2 className="text-center text-info">Projects</h2>
            <div
              className="signature-underline"
              style={{ backgroundColor: "#1795b8" }}
            ></div>
          </div>
          <ProjectFilter />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2"
          id="myCert"
          style={{ width: "96vw", flexWrap: "wrap" }}
        >
          <div className="text-center mb-4 position-relative">
            <h2 className="text-center text-info">Certifications</h2>
            <div
              className="signature-underline"
              style={{ backgroundColor: "#1795b8" }}
            ></div>
          </div>
          <div
            className="p-4 rounded border border-dark text-dark"
            style={{
              backgroundColor: "#e1f1fa",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <Certifications />
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div className="want-to-hire-container mb-2 p-2 pb-1" id="hireMe">
          <div className="text-center mb-4 position-relative">
            <h2 className="text-center text-info">Let's Connect - Hire Me</h2>
            <div
              className="signature-underline"
              style={{ backgroundColor: "#1795b8" }}
            ></div>
          </div>
          <HireMeSection />
        </div>
        <div className="text-center text-white m-0 p-0 d-flex justify-content-center align-items-center">
          <p style={{ fontFamily: "Perpetua" }}>
            Copyright{" "}
            <span>
              <LuCopyright style={{ marginBottom: "4px" }} />{" "}
            </span>{" "}
            2025 Karthikeya. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
