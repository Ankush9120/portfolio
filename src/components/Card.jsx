import React from "react";
import View from "../assets/View";
import GitHub from "../assets/GitHub";

const Card = () => {
  return (
    <div className="card">
      <GitHub />
      <div className="imgBox">
        <img
          src="https://img.freepik.com/free-vector/dashboard-statistical-charts-template_52683-23324.jpg?w=2000"
          alt=""
        />
      </div>
      {/* <div className="view">
        <div className="absolute text-lg font-semibold bg-white rounded-full p-3.5 shadow cursor-pointer bottom-10 hover:scale-110">
          <View />
        </div>
      </div> */}
      <div className="title">Project Title</div>
      <p>Lorem ipsum dolor sit amet elit.</p>
    </div>
  );
};

export default Card;
