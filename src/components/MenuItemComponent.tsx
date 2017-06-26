import * as React from "react";
import * as ReactDom from "react-dom";

export const MenuItemComponent = (props, { }) => {
    const items = props.values.map(function (value) {
        return (<li className="nav-item">
            <a className="nav-link" href="#">{value}</a>
        </li>)
    });
    return (<ul>{items}</ul>);
};