import "./portfolio.css";

import IMG1 from "../../assets/qwerty.png";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Grocery Delivery App",
      img: IMG1,
      description:
        "A Grocery Delivery App that conveniently brings fresh produce and household essentials to your doorstep.",
      technologies: "Html | CSS | Javascript | TypeSript | Angular",
      link: "https://grocery-management-project-frontend.vercel.app/",
      github: "https://github.com/mdfaiskhan/Grocery-Management-Project-Frontend",
    },
    {
      id: 2,
      title: "Portfolio Website",
      img: IMG4,
      description:
        "A visually engaging portfolio website showcasing skills, projects, and experiences.",
      technologies: "HTML | CSS | Javascript | SCSS | React ",
      link: "https://pv1-1-tau.vercel.app/",
      github: "https://github.com/mdfaiskhan/pv1.1",
    },
    {
      id: 3,
      title: "RubyCode Blog Project",
      img: IMG2,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "React | Redux",
      link: "https://github.com/mdfaiskhan",
      github: "https://github.com/mdfaiskhan",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://github.com/mdfaiskhan",
      github: "https://github.com/mdfaiskhan",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://github.com/mdfaiskhan",
      github: "https://github.com/mdfaiskhan",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://github.com/mdfaiskhan",
      github: "https://github.com/mdfaiskhan",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
