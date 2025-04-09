import React, { useState } from "react";
import { IoNavigateSharp } from "react-icons/io5";
import "./index.css";

const projects = [
  {
    id: 1,
    title: "Author's Isolation (My MERN Stack Development)",
    category: "Full Stack",
    description: [
      "A clean MERN (MongoDB, Express.js, React, Node.js) application designed for creating, editing, saving, and managing documents, ideas, and quotes seamlessly.",
      "Users can create, save, edit, and delete documents, organize ideas, store inspiring quotes, and search content efficiently.",
      "MongoDB stores user data, documents, ideas, and quotes, with Mongoose for schema modeling and validation.",
      "Express.js and Node.js power RESTful APIs for CRUD operations, user authentication, and data retrieval.",
      "React provides a responsive, intuitive UI with reusable components for a smooth user experience.",
      "Context API manages global state for user authentication, document lists, and search functionality.",
      "Advanced search functionality allows users to quickly find documents, ideas, or quotes using keywords.",
      "Handling real-time updates, ensuring data security, and optimizing performance for large datasets are key challenges.",
      "Integrates MongoDB for data storage, Express.js for backend logic, React for frontend interactivity, and Node.js for server-side execution, creating a cohesive, scalable application.",
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
      "Structured a scalable Node.js backend application for a Twitter-inspired social media platform, featuring a comprehensive suite of RESTful APIs to support essential functionalities, including secure user authentication and registration using Passport.js and JSON Web Tokens, tweet creation, follower management, and relationship tracking.",
      "Designed and developed with scalability, security, and efficiency in mind, serving as a testament to expertise in backend development, API design, and software architecture.",
      "Executed security measures by integrating industry-standard security libraries, including bcrypt for password encryption and JSON Web Token (JWT) middleware.",
    ],
    github: "https://github.com/Karthikeya-88/Tweet",
  },
  {
    id: 3,
    title: "Todo Application",
    category: "NodeJS",
    description: [
      "Developed a scalable and efficient Todo List API utilizing Node.js and Express.js, providing a comprehensive suite of functionalities to manage todos seamlessly.",
      "Designed and implemented API endpoints for creating, reading, updating, and deleting todos, ensuring seamless data manipulation and retrieval.",
      "Implemented filtering and sorting capabilities by status, priority, category, and due date.",
      "Leveraged JSON data storage for scalable todo management, ensuring secure and efficient API performance.",
    ],
    github: "https://github.com/Karthikeya-88/Todo-Application.git",
  },
  {
    id: 4,
    title: "Contact Management Application (My Own Development)",
    category: "NodeJS",
    description: [
      "Independently developed a comprehensive Node.js-based Contact Management application from the ground up, meticulously designing and implementing a set of robust CRUD (Create, Read, Update, Delete) APIs to facilitate seamless and efficient data handling.",
      "Architected a scalable backend structure that ensured high performance and reliability, allowing users to effortlessly manage their contact information with enhanced security and data integrity.",
      "Leveraged asynchronous programming techniques and optimized database queries to provide a responsive user experience even under high data loads.",
    ],
    github: "https://github.com/Karthikeya-88/Cont-Mgt-App.git",
  },
  {
    id: 5,
    title: "Authentication",
    category: "NodeJS",
    description: [
      "Designed and developed a RESTful API using Node.js, Express.js, and JavaScript for user authentication, registration, and password management.",
      "Implemented robust validation, error handling, and security measures to ensure secure data storage and transmission.",
      "User registration with unique username, name, password, gender, and location. Login functionality with username and password authentication.",
      "Password change feature with old password verification and new password validation.",
    ],
    github: "https://github.com/Karthikeya-88/Node-Authentication.git",
  },
  {
    id: 6,
    title: "Covid19 Dashboard",
    category: "ReactJS",
    description: [
      "Conceptualized and developed a comprehensive COVID-19 tracking platform for India, providing in-depth state-level data analysis and actionable insights to support informed decision-making.",
      "Utilized React Router and Recharts to craft an interactive user interface with dynamic visualizations.",
      "Translated Figma designs into responsive React components for a superior user experience.",
      "Had a development duration of 16 days.",
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
      "Composed a video streaming web application, 'Nxt Watch,' mirroring YouTube's core functionality, utilizing innovative technologies to provide an immersive user experience.",
      "Executed authentication and authorization mechanisms leveraging JSON Web Tokens (JWT) for secure user sessions.",
      "Designed a responsive, four-route navigation system: Home, Trending, Gaming, and Saved Videos.",
      "Developed over 8 days, deployed using Netlify.",
      "Username: rahul & Password: rahul@2021",
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
      "Designed, developed, and launched a comprehensive job search platform, Jobby App, providing a unified and intuitive user experience for job seekers.",
      "Implemented a suite of user-facing pages, including Login, Home, Jobs, and Job Item Details.",
      "Deployed a comprehensive security solution to protect user data, utilizing JWT tokens for secure authentication.",
      "Spanned a 5-Day development period.",
      "Username: henry & Password: henry_the_developer",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727595871/Screenshot_1077_jlso4c.png",
    link: "https://karthijobbyapp.ccbp.tech/",
  },
  {
    id: 9,
    title: "Nxt Trendz (E Commerce Clone - Amazon, Flipkart)",
    category: "ReactJS",
    description: [
      "Created and established an e-commerce platform, leveraging inspiration from industry leaders Amazon and Flipkart.",
      "Developed and integrated robust page components for User Authentication (Login), Product Catalog (Products), and Product Information (Product Details).",
      "Instigated security measures to safeguard user data, utilizing JSON Web Tokens (JWT) for authentication and authorization.",
      "Had a development duration of 12 days.",
      "Username: henry & Password: henry_the_developer",
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
      "I built LinkUp, a social media app using React Native Expo and Supabase, an open-source backend platform.",
      "Inspired by a 6½-hour YouTube tutorial, I implemented secure authentication and dynamic features like profile editing, posting media, and interactive likes, comments, and shares.",
      "To boost engagement, I added a real-time notifications system that alerts users when their posts receive comments.",
      "This creates a more connected and responsive community, enhancing the overall user experience.",
      "Install the 'APPLICATION' via the Expo link above, sign up to verify your account, and log in to explore what I’ve created! ",
    ],
    github:
      "https://expo.dev/accounts/karthikeya_d88/projects/linkup-social-media-app/builds/145ad5fb-1485-430a-92d0-04136246d19d",
  },
  {
    id: 11,
    title: "Personal Cosmos (My Own Development)",
    category: "Full Stack",
    description: [
      "Conceptualized and developed 'Personal Cosmos', a full-stack book website. This presents a quartet of navigable routes: the welcoming home interface, the limited literary expanse of books, the sleek and efficient cart system, and the enlightening about section, which offers a glimpse into the project's inception and purpose.",
      "Authored a comprehensive JSON data set to support the project. Blended the efficiency of Node.js with the interactivity of React.js to build a robust full-stack application. Where backend logic meets frontend magic!",
      "Deployed backend in Vercel to acquire the API. The API enables seamless integration of data across the route. Used media queries for responsiveness in various devices, enhanced and achieved a search functionality to boost user experience. Achieved sorting for users' preference. Incorporated React Spinners Puff Loader component to enhance the user interface with a lively and engaging loading animation. Developed and blended a popup feature to display additional book data, providing users with more detailed information.",
      "Utilized React Context to manage the cart list, enabling efficient state management across components. Applied 'add to cart' and 'remove from cart' functionality using React Context, allowing users to seamlessly add items, easily remove items in their cart list. Deployed the website using Vercel. Prioritized clean code guidelines and aesthetic design principles to ensure a visually appealing and well-structured website. Spanned a 8-Day development period.",
    ],
    image:
      "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729677835/Screenshot_1081_tar03i.png",
    link: "https://karthikeya-personal-cosmos-ws7r.vercel.app/books",
    github: "https://github.com/Karthikeya-88/PC---Backend.git",
  },
];

const ProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Full Stack");

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  const headerColors = {
    "Full Stack": "cyan",
    ReactJS: "orange",
    NodeJS: "lime",
    "React Native": "blueviolet",
  };

  const listItemColors = {
    "Full Stack": "cyan",
    ReactJS: "orange",
    NodeJS: "lime",
    "React Native": "blueviolet",
  };

  return (
    <div>
      <div className="filter-options">
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
          <span>React Native</span>
        </button>
      </div>

      <div className="project-container">
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
                  : "Node JS Application:"}
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
