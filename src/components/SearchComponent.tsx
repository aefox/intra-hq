import * as React from "react";
import * as ReactDom from "react-dom";
import {ButtonComponent} from "./ButtonComponent";

export const SearchComponent = () => {
    return (
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <ButtonComponent imagePath="/src/resources/images/search.jpg" />
    </form>
    );
};