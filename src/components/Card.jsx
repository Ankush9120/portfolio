import React from "react";
import View from "../assets/View";
import GitHub from "../assets/handleslogo/GitHub";

const Card = ({ data }) => {
  return (
    <div className="card">
      <a href={data.github} target="_blank">
        <GitHub />
      </a>
      <div className="imgBox">
        <a href={data.site} target="_blank">
          <img src={data.image} alt="" />
        </a>
      </div>
      {/* <div className="view">
        <div className="absolute text-lg font-semibold bg-white rounded-full p-3.5 shadow cursor-pointer bottom-10 hover:scale-110">
          <View />
        </div>
      </div> */}
      <div className="title">{data.title}</div>
      <p>{data.desc}</p>
    </div>
  );
};

export default Card;
