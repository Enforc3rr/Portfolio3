import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Homepage from "./components/Homepage";
import Education from "./components/Education";

function App() {
  return (
    <div className="container-fluid-md">
      <Homepage />
      <Education />
    </div>
  );
}

export default App;
