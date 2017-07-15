import * as React from "react";
import * as ReactDom from "react-dom";

export const ButtonComponent = (props, {}) => {
return (
     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        {props.imagePath && <img src={props.imagePath} width="20"
                 height="20" className="d-inline-block align-top" alt=""/>}
        {props.text}
     </button>);
    };