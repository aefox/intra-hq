import * as React from "react";
import * as ReactDOM from "react-dom";
import { MyComponent } from "./components/MyComponent";
import { MenuComponent } from "./components/MenuComponent";

import "bootstrap/scss/bootstrap.scss";

const App = () => {
  return (
    <div>
        <MyComponent/>
        <MenuComponent/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
