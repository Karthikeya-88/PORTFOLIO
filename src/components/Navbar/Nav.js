import { PiCodeThin } from "react-icons/pi";

const Nav = () => {
  return (
    <nav className="nav-container navbar bg-body-tertiary fixed-top navbar-white">
      <div className="container-fluid">
        <h1 className="my-name name-reveal" style={{ fontFamily: "Perpetua" }}>
          <span data-text="Karthikeya">Karthikeya </span>
          <PiCodeThin style={{ marginRight: "20px", width: "30px" }} />
        </h1>
        <div className="d-none d-md-flex align-items-center">
          <ul className="navbar-nav flex-row nav-n">
            <li className="nav-item mx-2">
              <a
                className="local-anchor-el nav-link"
                href="#aboutMe"
                id="navbar-about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="local-anchor-el nav-link"
                href="#mySkills"
                id="navbar-skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="local-anchor-el nav-link"
                href="#myExperience"
                id="navbar-experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="local-anchor-el nav-link"
                href="#myProjects"
                id="navbar-projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="local-anchor-el nav-link"
                href="#myCert"
                id="navbar-certifications"
              >
                Certifications
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="local-anchor-el nav-link"
                href="#hireMe"
                id="navbar-hire-me"
              >
                Hire ME
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex d-md-none align-items-center">
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
                className="fas fa-bars"
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
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="local-anchor-el nav-link"
                  href="#mySkills"
                  id="navbar-skills"
                >
                  My Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="local-anchor-el nav-link"
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
                  Certifications
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="local-anchor-el nav-link"
                  href="#hireMe"
                  id="navbar-hire-me"
                >
                  Hire ME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
