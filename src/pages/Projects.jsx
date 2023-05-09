import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Trading Practice",
      desc: "An Ui for trading website where you can do trades put orders and all",
      image: "p1.png",
      github: "link",
      site: "link",
    },
    {
      id: 2,
      title: "StopWatch / Timer",
      desc: "An Ui for StopWatch and Timer",
      image: "p2.png",
      github: "link",
      site: "link",
    },
    {
      id: 3,
      title: "Unit Converter",
      desc: "An Ui for trading website where you can do trades put orders and all",
      image: "p3.png",
      github: "link",
      site: "link",
    },
    {
      id: 4,
      title: "Landing Page",
      desc: "An Ui for an startup website",
      image: "p4.png",
      github: "link",
      site: "link",
    },
  ];

  return (
    <section className="projects">
      <header className="pt-4">
        Latest <span>Projects</span>
      </header>
      <div className="cards">
        {projects.map((data,i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
