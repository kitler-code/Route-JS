import React from "react";
import "../../css/Home.css";
import avatar from "../../assets/avataaars.svg";
import Star from "../star/Star";

export default function home() {
  return (
    <>
      <div className="home d-flex align-items-center justify-content-center">
        <div className="inner text-center text-white d-flex align-items-center flex-column">
          <img src={avatar} alt="" className="avatar"/>
          <h1 className="fw-bold fs-1 text-uppercase">start Framework</h1>
          <Star color={"text-white"} bgc={"bg-white"}/>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
