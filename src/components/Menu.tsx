import * as React from "react";

export const Menu = (props, { }) => {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light fixed-top bg-faded">
                <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button"
                data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Logo</a>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    {/*<ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>*/}
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </form>
                </div>
            </nav>
        </div>
    );
};