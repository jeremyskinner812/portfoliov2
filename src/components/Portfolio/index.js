import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Pupperz',
      description: 'MERN Stack, TailwindCSS, GraphQL, Apollo, JWT, Bcrypt, Heroku',
      link: "https://github.com",
      repo: "https://github.com/The-Pupperz/The-Pupperz"
    },
    {
      name: 'Crowd-Source-Chronicles',
      description: 'MySQL, Sequelize, Express, Handlebars, TailwindCSS, Node, Heroku, Cloudinary',
      link: "https://calm-spire-29588.herokuapp.com/",
      repo: "https://github.com/crowdsourcechronicles/chroniclesblog"
    },
    {
      name: 'Your-Bar-And-Fridge',
      description: 'HTML/CSS, JavaScript, Foundation CSS, Edamam API, CocktailsDB API',
      link: "https://the-best-grouppe.github.io/Your-fridge-and-your-bar/",
      repo: "https://github.com/The-Best-Grouppe/Your-fridge-and-your-bar"
    },
    {
      name: 'Book-Search-Engine',
      description: 'Google Books API, MERN stack, GraphQL, Apollo, JWT, Bcrypt, Mongoose, Heroku',
      link: "https://pacific-beyond-31759.herokuapp.com/",
      repo: "https://github.com/jeremyskinner812/book-search-engine"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;