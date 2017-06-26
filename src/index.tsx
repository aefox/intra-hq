import * as React from "react";
import * as ReactDOM from "react-dom";
import { NavigationBar } from "./components/NavigationBar";
import { LeftMenu } from "./components/LeftMenu";
import "bootstrap/scss/bootstrap.scss";

const App = () => {
  return (
    <div style={{height: "100%"}}>
      <NavigationBar/>
      <LeftMenu/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
