import * as React from "react";
import * as ReactDom from "react-dom";

export const LogoComponent = () => {
    return (
        <a className="navbar-brand" href="#">
            <img src="/src/resources/images/logo.jpg" width="40" height="40"
            className="d-inline-block align-top" alt="" />
        </a>
    );
};