import * as React from "react";

export const ItemButton = (props, { }) => {
    return (
        <div style={{marginRight: "0"}} >
            <button type="button" className="btn btn-info">
              {props.text}
            </button>
        </div>
    );
};
