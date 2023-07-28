import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Trading Practice",
      desc: "An Ui for trading website where you can do trades put orders and all",
      image: "p1.png",
      github: "https://github.com/Ankush9120/trading-practice",
      site: "https://trading-practice.netlify.app/",
    },
    {
      id: 2,
      title: "StopWatch / Timer",
      desc: "An Ui for StopWatch and Timer",
      image: "p2.png",
      github: "https://github.com/Ankush9120/CodeClause_StopwatchTimer",
      site: "https://clause-stopwatch-and-timer.netlify.app/",
    },
    {
      id: 3,
      title: "Unit Converter",
      desc: "An Ui for trading website where you can do trades put orders and all",
      image: "p3.png",
      github: "https://github.com/Ankush9120/CodeClause_UnitConverter",
      site: "https://clause-unitconverter.netlify.app/",
    },
    {
      id: 4,
      title: "Landing Page",
      desc: "Landing Page for startup",
      image: "p4.png",
      github: "https://github.com/Ankush9120/landing-page",
      site: "https://kamunity-landing-page.netlify.app/",
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
