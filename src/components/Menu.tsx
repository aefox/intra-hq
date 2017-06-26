import * as React from "react";

export const Menu = (props, { }) => {
  return (
    <div>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">Menu Item 1 <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Menu Item 2</a>
          </li>
        </ul>
    </div>
  );
};
