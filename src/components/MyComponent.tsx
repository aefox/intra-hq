import * as React from "react";
import * as ReactDOM from "react-dom";
import {ButtonComponent} from "./ButtonComponent";
import {SearchComponent} from "./SearchComponent";

export const MyComponent = (props, {}) => {
  return (
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <a className="navbar-brand" href="#">
    <img src="/src/resources/images/logo.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
  </a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <SearchComponent/>
    <ButtonComponent text="Logout"/>
    <ButtonComponent imagePath="/src/resources/images/notifications.jpg" />
  </div>
</nav>
  );
};
