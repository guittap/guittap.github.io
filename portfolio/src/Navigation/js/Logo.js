import React from "react";
import black from "../assets/black.png";

const Me = () => {
  return (
    <div className="MeDiv container mt-5">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm text-center">
          <img
            src={black}
            alt="logo"
            className="img-fluid border rounded-circle"
            height="auto"
            width="40%"
          ></img>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default Me;