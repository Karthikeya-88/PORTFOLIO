import React, { useState } from "react";
import { IoNavigateSharp } from "react-icons/io5";
import "./index.css";

const projects = [
  {
    id: 1,
    title: "Author's Isolation (My MERN Stack Development)",
    category: "Full Stack",
    description: [
      "MERN stack app for document/idea/quote management with CRUD operations",
      "Features: User auth, advanced search, real-time updates",
      "Tech: MongoDB, Express, React, Node.js with Context API",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1742450653/Screenshot_1188_noe1re.png",
    link: "https://author-s-app-frontend.vercel.app/",
    github: "https://github.com/Karthikeya-88/Author-s-App-Frontend.git",
  },
  {
    id: 2,
    title: "Twitter Assignment",
    category: "NodeJS",
    description: [
      "Twitter-like backend with RESTful APIs",
      "Features: User auth with Passport.js/JWT, tweet creation, follower system",
      "Security: bcrypt encryption, JWT middleware",
    ],
    github: "https://github.com/Karthikeya-88/Tweet",
  },
  {
    id: 3,
    title: "Todo Application",
    category: "NodeJS",
    description: [
      "Todo API with Node.js/Express",
      "CRUD operations with filtering/sorting by status/priority/category",
      "JSON storage with secure API endpoints",
    ],
    github: "https://github.com/Karthikeya-88/Todo-Application.git",
  },
  {
    id: 4,
    title: "Contact Management Application",
    category: "NodeJS",
    description: [
      "Node.js contact management system",
      "Full CRUD API with optimized database queries",
      "Scalable backend architecture with data integrity",
    ],
    github: "https://github.com/Karthikeya-88/Cont-Mgt-App.git",
  },
  {
    id: 5,
    title: "Authentication",
    category: "NodeJS",
    description: [
      "Node.js auth API with Express",
      "Features: Registration, login, password change",
      "Secure data handling with validation",
    ],
    github: "https://github.com/Karthikeya-88/Node-Authentication.git",
  },
  {
    id: 6,
    title: "Covid19 Dashboard",
    category: "ReactJS",
    description: [
      "India COVID-19 tracking platform with state-level data",
      "Interactive UI with React Router and Recharts",
      "Responsive design from Figma (16-day development)",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727588556/Screenshot_1076_ljplim.png",
    link: "https://karthikcoviddb.ccbp.tech/",
  },
  {
    id: 7,
    title: "Nxt Watch (YouTube Clone)",
    category: "ReactJS",
    description: [
      "YouTube-like video streaming app",
      "JWT authentication, responsive 4-route navigation",
      "Deployed on Netlify (8-day development)",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727521802/Screenshot_1074_gtzcth.png",
    link: "https://nxt-watch-karthikeya.netlify.app/",
  },
  {
    id: 8,
    title: "Jobby App (Job Portal Clone)",
    category: "ReactJS",
    description: [
      "Job search platform with React",
      "Pages: Login, Home, Jobs, Details with JWT security",
      "5-day development period",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727595871/Screenshot_1077_jlso4c.png",
    link: "https://karthijobbyapp.ccbp.tech/",
  },
  {
    id: 9,
    title: "Nxt Trendz (E Commerce Clone)",
    category: "ReactJS",
    description: [
      "Amazon/Flipkart-inspired e-commerce platform",
      "Features: Auth, Product Catalog, Details with JWT",
      "12-day development period",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727522986/Screenshot_1075_wmdmic.png",
    link: "https://karthiknxtrends.ccbp.tech/",
  },
  {
    id: 10,
    title: "Linkup Social Media App",
    category: "React Native",
    description: [
      "Social media app with React Native/Expo",
      "Features: Posts, comments, real-time notifications",
      "Backend: Supabase with secure auth",
    ],
    github:
      "https://drive.google.com/file/d/1jSHqCvq6EcPmtzPy6gsXlSdzuuqUShMM/view?usp=sharing",
  },
  {
    id: 11,
    title: "Personal Cosmos (Book Website)",
    category: "Full Stack",
    description: [
      "Full-stack book e-commerce site",
      "Features: Home, Books, Cart, About with React Context",
      "Search, sorting, responsive design (8-day development)",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729677835/Screenshot_1081_tar03i.png",
    link: "https://karthikeya-personal-cosmos-ws7r.vercel.app/books",
    github: "https://github.com/Karthikeya-88/PC---Backend.git",
  },
];

const ProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const headerColors = {
    All: "gray",
    "Full Stack": "cyan",
    ReactJS: "orange",
    NodeJS: "lime",
    "React Native": "blueviolet",
  };

  const listItemColors = {
    All: "gray",
    "Full Stack": "cyan",
    ReactJS: "orange",
    NodeJS: "lime",
    "React Native": "blueviolet",
  };

  return (
    <div>
      <div className="filter-options">
        <button
          className="all-filter-btn"
          onClick={() => setSelectedCategory("All")}
        >
          <span>All</span>
        </button>
        <button
          className="full-stack-filter-btn"
          onClick={() => setSelectedCategory("Full Stack")}
        >
          <span>Full Stack</span>
        </button>
        <button
          className="node-filter-btn"
          onClick={() => setSelectedCategory("NodeJS")}
        >
          <span>Node.js</span>
        </button>
        <button
          className="react-filter-btn"
          onClick={() => setSelectedCategory("ReactJS")}
        >
          <span>React.js</span>
        </button>
        <button
          className="react-native-filter-btn"
          onClick={() => setSelectedCategory("React Native")}
        >
          <span>Mobile</span>
        </button>
      </div>

      <div
        className="project-container"
        style={{ width: "98vw", marginRight: "0px" }}
      >
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h4 className="ml-4 mt-2 project-title">
              <span
                style={{
                  fontFamily: "Bree Serif",
                  color: headerColors[project.category],
                }}
              >
                {project.category === "Full Stack"
                  ? "Full-Stack Project:"
                  : project.category === "ReactJS"
                  ? "React JS Application:"
                  : project.category === "React Native"
                  ? "React Native Project:"
                  : project.category === "NodeJS"
                  ? "Node JS Application:"
                  : "Project:"}
              </span>{" "}
              {project.title}{" "}
              {project.github && (
                <span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoNavigateSharp />
                  </a>
                </span>
              )}
            </h4>
            <ul
              className="projects-ul"
              style={{
                listStyle: `radial-gradient(#fff, ${
                  listItemColors[project.category]
                })`,
              }}
            >
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {project.link && project.image && (
              <div>
                <h5
                  style={{
                    textAlign: "center",
                    font: "20px Perpetua",
                    textShadow: "0px 1px lightblue",
                  }}
                >
                  Live
                </h5>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
