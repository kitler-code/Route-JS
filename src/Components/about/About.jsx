import React from "react";
import "../../css/About.css";
import Star from "../star/Star";

export default function about() {
  return (
    <>
      <div className="about d-flex align-items-center justify-content-center">
        <div className="inner text-white d-flex align-items-center flex-column">
          <h1 className="fw-bold fs-1 text-uppercase">about component</h1>
          <Star color={"text-white"} bgc={"bg-white"} />
          <div className="container">
            <div className="row">
              <div className="col-md 6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md 6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
