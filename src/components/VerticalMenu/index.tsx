import * as React from "react";
import "./styles.scss";
export const VerticalMenu = (props, { }) => {
    return (
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Item 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Item 2</a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Item 2</a>
                </li>
            </ul>
        </nav>
    );
};