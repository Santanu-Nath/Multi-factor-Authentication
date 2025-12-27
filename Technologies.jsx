import React from "react";
import "../styles/Technologies.css";
import { Link } from "react-router-dom";



const techData = [
  {
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    description:
      "React is a powerful JavaScript library for building dynamic and responsive user interfaces.",
    path: "/react", 
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    description:
      "Node.js is a JavaScript runtime that lets you build scalable server-side applications.",
    path: "/node"
  },
  {
    name: "Express.js",
    image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    description:
      "Express.js is a lightweight web application framework for Node.js, used to build robust APIs.",
    path: "/express"
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
    path: "/mongo"
  },
];

const Technologies = () => {
  return (
    <>
      <div className="technologies-section">
        <h1>Technologies We'll Use</h1>
        <div className="tech-cards-container">
          {techData.map((tech, index) => {
            return (
              <div key={index} className="tech-card">
                <div className="tech-image">
                  <img src={tech.image} alt={tech.name} />
                </div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
                <Link to={tech.path} className="learn-more-link">Learn More</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Technologies;
