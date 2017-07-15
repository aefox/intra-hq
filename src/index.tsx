import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import Header from "./components/Header";
import Search from "./components/Search";
import Menu from "./components/Menu";

import "./styles/styles.scss";
import "bootstrap/scss/bootstrap.scss";

const App = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
        <h1 className="display-3">Fluid jumbotron from bootstrap!</h1>
        <Hello compiler="TypeScript" framework="React" />

        <div>
          <Header/>
          <Search/>
        </div>
        <div>
          <Menu menuItems={ITEMS}/>
        </div>
    </div>
  );
};

const ITEMS = [ {name: "item1", action: "itemAction1"}, {name: "item2", action: "itemAction2"}];

ReactDOM.render(<App />, document.getElementById("app"));
