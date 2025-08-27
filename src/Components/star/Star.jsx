import React from "react";
import "../../css/Star.css";

export default function Star(props) {
  let{color,bgc}=props
  return (
    <>
      <div className="d-flex align-items-center my-2 justify-content-center ">
        <div className={`line ${bgc}`}></div>
          <i className={`fa-solid fa-star mx-3 ${color}`}></i>
        <div className={`line ${bgc}`}></div>
      </div>
    </>
  );
}
