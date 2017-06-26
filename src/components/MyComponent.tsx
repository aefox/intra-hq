import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from "./ButtonComponent";
import { SearchComponent } from "./SearchComponent";
import { LogoComponent } from "./LogoComponent";

export const MyComponent = (props, { }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="col-md-5">
              <LogoComponent />
            </div>

            <div className="col-md-7">
              <div className="collapse navbar-collapse">
                <SearchComponent />
                <ButtonComponent text="Logout" />
                <ButtonComponent imagePath="/src/resources/images/notifications.jpg" />
              </div>
            </div>
          </nav>
        </div>

      </div>
    </div>
  );
};
