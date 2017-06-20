import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

import "bootstrap/scss/bootstrap.scss";

const App = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
        <h1 className="display-3">Fluid jumbotron from bootstrap!</h1>
        <Hello compiler="TypeScript" framework="React" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
