import React from "react";
import { IoNavigate } from "react-icons/io5";
import { MdEmail, MdOutlineCall } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { LiaCopyrightSolid } from "react-icons/lia";
import AskMeSection from "./components/Askme";
import Skills from "./components/Skills";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectFilter from "./components/Projects";
import useSectionObserver from "./components/ToggleVisibilty";
import About from "./components/About";

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
              <LiaLaptopCodeSolid style={{ marginRight: "20px" }} />
              <span data-text="Karthikeya">Karthikeya </span>
              <span data-text="Doosa">Doosa </span>
            </h1>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-primary me-3"
                onClick={() => {
                  document
                    .querySelector("#hireMe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hire Me
              </button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
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
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#mySkills"
                      id="navbar-skills"
                    >
                      My Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myResume"
                      id="navbar-resume"
                    >
                      Check My Resume
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#myExperience"
                      id="navbar-skills"
                    >
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myProjects"
                      id="navbar-projects"
                    >
                      My Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myCert"
                      id="navbar-hire-me"
                    >
                      My Certifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#hireMe"
                      id="navbar-hire-me"
                    >
                      Want to Hire me
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
        <Skills
          className="section-hidden"
          ref={(el) => (sectionRefs.current[4] = el)}
        />
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-black rounded border border-black"
          id="myResume"
          style={{
            backgroundColor: "rgba(246, 246, 200, 0.9)",
            width: "94vw",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h2 className="text-center text-info">My Resume</h2>
          <h6
            className="m-4 resume-text text-center"
            style={{ fontWeight: "600" }}
          >
            Download My Resume:{" "}
            <a
              href="https://drive.google.com/file/d/1iLjL1v946ZiBAqocyWq0DhOcco4hiwVQ/view?usp=sharing"
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
          <h4 className="mb-3 text-center">I'm flexible regarding job types</h4>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-black rounded border border-light"
          style={{
            backgroundColor: "#e1f1fa",
            width: "96vw",
            boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
            transform: "translateZ(0)",
          }}
          id="myExperience"
        >
          <h2 className="text-center text-info">Experience</h2>
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
                font: "20px Garamond, Perpetua",
              }}
            >
              As a Teaching Assistant for CCBPian learners, I provided hands-on
              support in mastering the MERN stack, Programming with Python and
              Querying with SQL. My role involved breaking down complex
              concepts, debugging code, and equipping students with practical
              strategies to tackle technical challenges independently.
            </li>
            <li
              className="experience-li"
              style={{
                paddingBottom: "10px",
                lineHeight: "1.6",
                font: "20px Garamond, Perpetua",
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
            <h4 style={{ color: "#4445ea", fontFamily: "Lora" }}>
              <b>Skills Acquired:</b>
            </h4>
            <ol
              style={{
                font: "20px Garamond, Perpetua",
              }}
              className="text-dark"
            >
              {" "}
              <li style={{ paddingBottom: "10px" }}>
                Debugging & troubleshooting
              </li>
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
        <hr style={{ width: "80%", border: "2px solid seashell" }} />

        <div className="mb-0 p-4" id="myProjects">
          <h2 className="text-center text-info">My Projects</h2>
          <ProjectFilter />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-dark rounded border border-dark section-hidden"
          id="myCert"
          style={{
            width: "94vw",
            backgroundColor: "#e1f1fa",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <h2 className="text-center text-info">My Certifications</h2>
          <div className="cert-container">
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840048/Screenshot_1099_m8bbkf.png"
              alt="IRC"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840467/Screenshot_1100_tb3izq.png"
              alt="React"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840499/Screenshot_1103_pktdia.png"
              alt="Node"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840532/Screenshot_1104_ocewaj.png"
              alt="Javascript"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1736395354/Screenshot_1113_zdqxtx.png"
              alt="Dynamic web application"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1736395265/Screenshot_1112_bv7wda.png"
              alt="Developer foundations"
              className="cert-images"
            />

            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840562/Screenshot_1101_w9wwmb.png"
              alt="Programming with Python"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840597/Screenshot_1102_mwwqvt.png"
              alt="Sql database"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1739202289/Screenshot_1159_g9nela.png"
              alt="Responsive web application"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1739168961/Screenshot_1156_m4mwqc.png"
              alt="Static web application"
              className="cert-images"
            />
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div>
          <AskMeSection
            className="m-2 section-hidden"
            ref={(el) => (sectionRefs.current[5] = el)}
          />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="want-to-hire-container mb-2 p-2 pb-1"
          id="hireMe"
          style={{
            backdropFilter: "blur(8px)",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "20px",
            border: "2.8px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h2 className="text-center text-info">Want to Hire Me</h2>
          <div className="button-icons-container mt-4">
            <button type="button" className="button-icons">
              <a className="anchor-el" href="tel:9182318580">
                <MdOutlineCall />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a className="anchor-el" href="mailto:dkarthikeya888@gmail.com">
                <MdEmail />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a
                className="anchor-el"
                href="http://www.linkedin.com/in/karthikeya-doosa-210a42244"
              >
                <BiLogoLinkedinSquare />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a className="anchor-el" href="https://github.com/Karthikeya-88">
                <VscGithub />
              </a>
            </button>
          </div>
        </div>
        <div
          className="text-center text-white m-0 p-0 d-flex justify-content-center align-items-center section-hidden"
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <p style={{ fontFamily: "Perpetua" }}>
            Copyright{" "}
            <span>
              <LiaCopyrightSolid />{" "}
            </span>{" "}
            2025 Karthikeya. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
