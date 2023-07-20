import React from "react";
import QouteUp from "../assets/qoute-up.svg";
import QouteDown from "../assets/qoute-down.svg";

const Experience = () => {
  let experience = [
    {
      id: 1,
      name: "Kamunity.io",
      role: "Front End Developer",
      logo: "./status1.png",
      content:
        "I am currently working as an intern at a U.S.-based Financial Management startup. I was hired after they liked my work on Fiverr.",
    },
    {
      id: 2,
      name: "CodeClause",
      role: "Front End Developer",
      logo: "./status2.png",
      content:
        "I have successfully completed the virtual internship provided by this company, where I was tasked with completing a few mini-projects.",
    },
  ];

  return (
    <section className="status">
      <header className="pt-4">Experience</header>
      <div className="card-container cards">
        {experience.map((data, index) => {
          return (
            <div key={index} className={`card card${data.id}`}>
              <div className="card-header flex justify-between">
                <div className="title font-bold">{data.name}</div>
                <div className="role">{data.role}</div>
              </div>

              <div className="flex items-center grow gap-3">
                <div className="logo">
                  <img src={data.logo} alt="" />
                </div>
                <div className="card-content">
                  <img src={QouteUp} alt="" />{" "}
                  <p>
                    {data.content}
                    <img src={QouteDown} alt="" />{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
