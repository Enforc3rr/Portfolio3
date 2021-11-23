import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Typewriter from "typewriter-effect";
import "../App.css";

function Homepage() {
  return (
    <div
      className="container-fluid-xs"
      style={{
        backgroundImage: `url("https://unsplash.com/photos/DuHKoV44prg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM3Njk0NDAz&force=true&w=2400")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="container-md text-center"
        style={{ borderStyle: "groove", color: "white" }}
      >
        <div className="row-md mt-5 mb-3">
          <div className="col-md-12">
            <img
              className="img-fluid text-center "
              src="https://robohash.org/Enforc3rr"
              alt=""
            ></img>
          </div>
          <div className="col-md-12">
            <h2 className="display-2">
              <u>Prateek Kumar</u>
            </h2>
          </div>
          <div className="col-md-12">
            <h4 className="display-4  mt-5 mb-5">
              <Typewriter
                options={{
                  strings: ["Backend - Developer", "IT - Undergraduate"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <div className="col-md-12 d-flex justify-content-center align-items-center ">
            <button type="button" className="btn btn-grad mt-2 mb-3 ">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
