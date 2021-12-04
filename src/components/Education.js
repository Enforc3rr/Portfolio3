import React from "react";
import "../App.css";

function Education() {
  return (
    <div className="container-md">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3">
            <u>About Me</u>
          </h3>
        </div>
        <div
          className="row justify-content-center align-items-center"
          style={{ margin: "auto" }}
        >
          <div className="col-md-6">
            <img
              className="img-fluid text-center ml-5 mb-3 mt-3"
              style={{ width: "75%", height: "75%" }}
              src="https://machadopedro.com/static/media/frontEnd.b53ffe85.webp"
              alt="tech-stack"
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card">
              <h4 className="display-4 text-center">Back-end</h4>
              <ul
                style={{
                  listStyleImage: `URL(
                    'https://img.icons8.com/small/16/000000/react.png')`,
                  listStylePosition: "inside",
                  fontSize: "30px",
                }}
              >
                <li>Java</li>
                <li>NodeJs</li>
                <li>Redis</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="row mt-3 justify-content-center align-items-center"
          style={{ margin: "auto" }}
        >
          <div className="col-md-6 order-md-1">
            <div className="card">
              <h4 className="display-4  text-center">Front-end</h4>
              <ul
                style={{
                  listStyleImage: `URL(
                    'https://img.icons8.com/small/16/000000/react.png')`,
                  listStylePosition: "inside",
                  fontSize: "30px",
                }}
              >
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>ReactJs</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 order-md-12">
            <img
              className="img-fluid ml-5  mb-3 mt-3"
              style={{ width: "75%", height: "75%" }}
              src="https://machadopedro.com/static/media/frontEnd.b53ffe85.webp"
              alt="tech-stack"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
