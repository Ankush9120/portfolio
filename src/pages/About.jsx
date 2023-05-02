import React from "react";
import MyPic from "../assets/MyPic";

const About = () => {
  return (
    <section className="about">
      <div>
        <MyPic />
      </div>
      <div className="aboutText grid gap-4">
        <div>
          <div className="text-4xl font-bold">
            About <span>Me</span>
          </div>
          <div className="text-2xl font-semibold">Frontend Developer!</div>
        </div>
        <p>
          Hello , i am Ankush a Frontend Developer as well as a <b>Freelancer</b> . I
          am from India , Madhya Pradesh , Sidhi & currently doing my masters
          (MCA) which is almost going to be completed within a Year .
        </p>
        <p>
          I love developing designs and have great knowlege about latest
          technologies such <b>React JS</b> , <b>Redux Toolkit</b> , <b>Tailwind CSS</b> .
        </p>
        <p>
          I have done few paid works for clients and created many designs .
        </p>
        <div className="readMoreBtn">Read More</div>
      </div>
    </section>
  );
};

export default About;
