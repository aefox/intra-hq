import * as React from "react";
import { SearchBox } from "./SearchBox";
import { Links } from "./Links";

// export interface HelloProps { compiler: string; framework: string; }

export const Header = (props, { }) => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="navbar-brand" href="#">LOGO</a>
          </li>
        </ul>
        <div className="collapse navbar-collapse pull-right">
          <SearchBox />
          <Links />
        </div>
      </nav>
    </div>
  );
};
