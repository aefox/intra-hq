import * as React from "react";
import * as ReactDom from "react-dom";

export const MenuItemComponent = (props, { }) => {
    const items = props.values.map( (value, index) => {
        return (<li key={index} className="nav-item">
            <a className="nav-link" href="#">{value}</a>
        </li>);
    });
    return (<ul className="nav nav-pills flex-column">{items}</ul>);
};