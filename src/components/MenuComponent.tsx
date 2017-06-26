import * as React from "react";
import * as ReactDom from "react-dom";
import { MenuItemComponent } from "./MenuItemComponent";

export const MenuComponent = () => {
    const items = ["Menu"];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-3">
                    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                        <ul className="nav nav-pills flex-column">
                            <MenuItemComponent values={items} />
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};