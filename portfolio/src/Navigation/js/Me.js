import React from "react";
import me from "../assets/me.png";

const Me = () => {
  return (
    <div className="MeDiv container mt-5">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm text-center">
          <img
            src={me}
            alt="Wargen Guittap"
            className="img-fluid border rounded-circle"
            height="auto"
            width="67%"
          ></img>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default Me;
