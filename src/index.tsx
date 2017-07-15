import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu";
import { Details } from "./components/Details";
import "bootstrap/scss/bootstrap.scss";
// todo: styling should be done per component
import "./components/style.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-sm-3 col-md-2 bg-faded sidebar">
            <Menu />
          </nav>
          <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
            <Details />
          </main>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
