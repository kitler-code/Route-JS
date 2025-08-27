import React from "react";
import "../../css/Card.css";

export default function Card(props) {
  let { img } = props;
  return (
    <>
      <div className="card-h col-md-6 col-lg-4">
        <div
          className="inner position-relative rounded overflow-hidden "
          data-bs-toggle="modal"
          data-bs-target={`#${img.id}`}
        >
          <img src={img.img} alt={img.id} className="w-100" />
          <div className="layer position-absolute top-0 start-0 end-0 bottom-0 text-white align-content-center">
            <i className="fa fa-plus fa-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
