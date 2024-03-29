import React from "react";
import Html from "../assets/skillslogo/Html";
import Css from "../assets/skillslogo/Css";
import JavaScript from "../assets/skillslogo/JavaScript";
import ReactIcon from "../assets/skillslogo/ReactIcon";
import ReduxIcon from "../assets/skillslogo/ReduxIcon";
import TailwindLogo from "../assets/skillslogo/TailwindLogo";
import Bootstrap from "../assets/skillslogo/Bootstrap";
import Star from "../assets/Star";

const Skills = () => {
  
  return (
    <section className="skills">
      <header className="pt-4">
        My <span>Skills</span>
      </header>

      <div className="skillsCover">
        <div className="skillCover">
          <div className="skill">
            <div className="dot"></div>
            <svg progress className="circle">
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <Html />
            <span>HTML</span>
          </div>
          <div className="stars stars-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="skillCover">
          <div className="skill">
            <div className="dot"></div>
            <svg progress className="circle">
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <Css />
            <span>CSS</span>
          </div>
          <div className="stars stars-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="skillCover">
          <div className="skill">
            <div className="dot"></div>
            <svg progress className="circle">
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <JavaScript />
            <span>JS</span>
          </div>
          <div className="stars stars-4">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="skillCover">
          <div className="skill">
            <div className="dot"></div>
            <svg progress className="circle">
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <ReactIcon />
            <span>React</span>
          </div>
          <div className="stars stars-4">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="skillCover">
          <div className="skill">
            <div className="dot"></div>
            <svg progress className="circle">
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <ReduxIcon />
            <span>Redux</span>
          </div>
          <div className="stars stars-3">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className="skillCover">
          <div className="skill">
            <div className="dot"></div>
            <svg progress className="circle">
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <TailwindLogo />
            <span>Tailwind</span>
          </div>
          <div className="stars stars-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className="skillCover">
          <div className="skill">
            <div className="dot"></div>
            <svg progress className="circle">
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <Bootstrap />
            <span>Bootstrap</span>
          </div>
          <div className="stars stars-4">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
