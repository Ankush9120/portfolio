import React from "react";
import MyPic from "../assets/MyPic";
import Linkdin from "../assets/Linkdin";
import GitHub from "../assets/GitHub";
import Insta from "../assets/Insta";
import Upwork from "../assets/Upwork";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="overview flex flex-col gap-2">
        <div className="itsMe text-2xl font-bold">Hello, It's Me</div>
        <div className="name text-4xl font-bold">Ankush Gupta</div>
        <div className="iAm text-2xl font-bold">
          And I'm a <span className="mySkyText">Frontend Developer !</span>
        </div>

        <p>
          I am currently doing my masters (MCA) and have great knowledge about{" "}
          <b>React JS</b> and <b>Tailwind CSS</b> .
        </p>

        <ul className="handles">
          <li>
            <Linkdin />
          </li>
          <li>
            <GitHub />
          </li>
          <li>
            <Insta />
          </li>
          <li>
            <Upwork />
          </li>
        </ul>
        <button className="myButton cvButton">Download CV</button>
      </div>
      <MyPic />
    </section>
  );
};

export default Home;
