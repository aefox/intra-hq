import * as React from "react";

// export interface HelloProps { compiler: string; framework: string; }

export const Links = (props, { }) => {
  return (
    <div>
        <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Logout</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#">Notifications (1)</a>
            </li>
          </ul>
    </div>
  );
};
