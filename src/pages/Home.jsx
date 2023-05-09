import React from "react";
import MyPic from "/mypic.png";
import Linkdin from "../assets/handleslogo/Linkdin";
import GitHub from "../assets/handleslogo/GitHub";
import Insta from "../assets/handleslogo/Insta";
import Upwork from "../assets/handleslogo/Upwork";

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
          I am currently doing my masters (MCA) and have quite good knowledge about{" "}
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
      <div className="picCover">
        <img src={MyPic} alt="" />
      </div>
    </section>
  );
};

export default Home;
