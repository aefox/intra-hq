import * as React from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Logout } from "./Logout";
import { Notifications } from "./Notifications";

export const Header = (props, { }) => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <Logo />
          </div>
          <div className="col-md-7 form-inline">
            <Search />
            <div className="column">
              <Logout />
              <Notifications />
            </div>
          </div>
        </div>
      </div>
  );
};
