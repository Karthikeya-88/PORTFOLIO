import React from "react";
import { IoNavigate } from "react-icons/io5";
import { PiCodeThin } from "react-icons/pi";
import { LuCopyright } from "react-icons/lu";
import AskMeSection from "./components/Askme";
import Skills from "./components/Skills";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectFilter from "./components/Projects";
import useSectionObserver from "./components/ToggleVisibilty";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import HireMe from "./components/HireMe";

function App() {
  const sectionRefs = useSectionObserver();

  return (
    <>
      <div className="ultimate-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <nav className="nav-container navbar bg-body-tertiary fixed-top navbar-white">
          <div className="container-fluid">
            <h1
              className="my-name name-reveal"
              style={{ fontFamily: "Perpetua" }}
            >
              <span data-text="Karthikeya">Karthikeya </span>
              <PiCodeThin style={{ marginRight: "20px", width: "30px" }} />
            </h1>
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span>
                  <i
                    class="fas fa-bars"
                    style={{ color: "#f0f0f0", fontSize: "28px" }}
                  ></i>
                </span>
              </button>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Hey there,
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link active"
                      href="#aboutMe"
                      id="navbar-about"
                    >
                      Get to Know Me 🌟
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#mySkills"
                      id="navbar-skills"
                    >
                      What I’m Good At 🔥
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myResume"
                      id="navbar-resume"
                    >
                      Grab My Resume 📥
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#myExperience"
                      id="navbar-skills"
                    >
                      My Work Journey 📜
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myProjects"
                      id="navbar-projects"
                    >
                      Things I’ve Built 🛠️
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myCert"
                      id="navbar-hire-me"
                    >
                      My Learning Badges �
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#askMe"
                      id="navbar-hire-me"
                    >
                      Connect with ME 💬
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#hireMe"
                      id="navbar-hire-me"
                    >
                      Need My Skills? 💼
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="mt-5 pt-4" id="aboutMe">
          <About />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <Skills style={{ width: "98vw" }} />
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 text-black"
          id="myResume"
          style={{ width: "94vw" }}
        >
          <div className="text-center mb-4 position-relative">
            <h2 className="text-center text-info">Resume</h2>
            <div
              className="signature-underline"
              style={{ backgroundColor: "#1795b8" }}
            ></div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(246, 246, 200, 0.9)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            className="rounded border border-black p-2"
          >
            <h6
              className="m-4 resume-text text-center"
              style={{ fontWeight: "600" }}
            >
              Download My Resume:{" "}
              <a
                href="https://drive.google.com/file/d/1CdJGVegQ71k6Zx-EyZG3vRUaxVmlk3-x/view?usp=sharing"
                className="resume-el"
              >
                <IoNavigate
                  style={{
                    marginLeft: "8px",
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
                  }}
                />
              </a>
            </h6>
            <div className="text-center pb-2">
              <marquee
                behavior="scroll"
                direction="right"
                scrollamount="8"
                width="40%"
              >
                <h4 className="text-center text-warning open-to-relocation">
                  Open to Relocation
                </h4>
              </marquee>
            </div>
            <h4 className="mb-3 text-center">
              I'm flexible regarding job types
            </h4>
          </div>
        </div>
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
        <div className="mt-0 pt-0" id="askMe">
          <AskMeSection className="m-2" />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="want-to-hire-container mb-2 p-2 pb-1"
          id="hireMe"
          style={{
            backdropFilter: "blur(8px)",
            borderRadius: "20px",
            border: "2.8px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="text-center mb-4 position-relative">
            <h2 className="text-center text-info">Want to Hire Me</h2>
            <div
              className="signature-underline"
              style={{ backgroundColor: "#1795b8" }}
            ></div>
          </div>
          <HireMe />
        </div>
        <div
          className="text-center text-white m-0 p-0 d-flex justify-content-center align-items-center section-hidden"
          ref={(el) => (sectionRefs.current[5] = el)}
        >
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
