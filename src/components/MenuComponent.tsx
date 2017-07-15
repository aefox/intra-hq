import * as React from "react";
import * as ReactDom from "react-dom";
import { MenuItemComponent } from "./MenuItemComponent";

export const MenuComponent = () => {
    const items = ["Item1", "Item2", "Item3"];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-3">
                    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                        <ul className="nav flex-column">
                            <li>
                                <a className="navbar-brand">Menu</a></li>
                            <li>
                                <MenuItemComponent values={items} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};