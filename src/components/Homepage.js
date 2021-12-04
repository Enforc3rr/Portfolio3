import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Typewriter from "typewriter-effect";
import "../App.css";

function Homepage() {
  return (
    <div
      className="container-fluid-md"
      style={{
        backgroundImage: `url("https://unsplash.com/photos/DuHKoV44prg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM3Njk0NDAz&force=true&w=2400")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div className="row text-center" style={{ margin: "auto" }}>
        <div className="col-md-12">
          <img
            className="img-fluid text-center "
            src="https://robohash.org/Enforc3rr"
            alt=""
          ></img>
        </div>
        <div className="col-md-12">
          <h2 className="display-2 mt-4 mb-4">
            <u>Prateek Kumar</u>
          </h2>
        </div>
        <div className="col-md-12">
          <h4 className="display-5 mt-5 mb-3">
            <Typewriter
              options={{
                strings: ["Backend-Developer", "IT-Undergradudate"],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button type="button" className="btn btn-grad mt-4 mb-4">
            My Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
