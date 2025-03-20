import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        "HTML5",
        "CSS3 (Flexbox & Grid)",
        "React & React Native",
        "Bootstrap",
      ],
      icon: "fas fa-code",
      color: "#61DAFB",
    },
    {
      category: "Backend",
      skills: ["Python", "Node", "Java", "JavaScript", "Express.js"],
      icon: "fas fa-server",
      color: "#68A063",
    },
    {
      category: "Database",
      skills: ["SQL", "MongoDB", "Supabase"],
      icon: "fas fa-database",
      color: "#4DB33D",
    },
    {
      category: "Tools & Technologies",
      skills: [
        "GitHub",
        "Code Review",
        "Git",
        "MySQL",
        "Postman",
        "Responsive Web Design",
      ],
      icon: "fas fa-tools",
      color: "#7952B3",
    },
    {
      category: "Familiar With",
      skills: [
        "Figma",
        "Code Sandbox",
        "Docker",
        "Vercel & Netlify",
        "Next.js",
        "TailwindCSS",
      ],
      icon: "fas fa-lightbulb",
      color: "#FFD700",
    },
  ];

  return (
    <div className="my-skills-container mb-2 p-4" id="mySkills">
      <h2 className="text-center text-info mb-4">My Skills</h2>
      <div className="row">
        {skillsData.map((category, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div
              className="skill-category-card p-4 shadow-sm rounded"
              style={{ borderBottom: `4px solid ${category.color}` }}
            >
              <div className="d-flex align-items-center mb-3">
                <i
                  className={`${category.icon} fa-2x me-3`}
                  style={{ color: category.color }}
                ></i>
                <h4 className="m-0">{category.category}</h4>
              </div>
              <ul className="list-unstyled">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="mb-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Proficient in ${skill}`}
                  >
                    <i
                      className={`fab fa-${skill.toLowerCase()} me-2`}
                      style={{ color: category.color }}
                    ></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
