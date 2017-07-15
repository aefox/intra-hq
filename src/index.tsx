import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "./components/Header";

import "bootstrap/scss/bootstrap.scss";

const App = () => {
  return (
    <div className="container-fluid">
        <Header compiler="TypeScript" framework="React" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
