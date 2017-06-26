import * as React from "react";
import * as ReactDOM from "react-dom";

import "bootstrap/scss/bootstrap.scss";

import { Hello } from "./components/Hello";
import { Menu } from "./components/Menu";
import { VerticalMenu } from "./components/VerticalMenu";
import "./styles.scss";
const App = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="row">
          <VerticalMenu />
          <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
            <h1>Dashboard</h1>
          </main>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
