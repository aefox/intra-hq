import * as React from "react";

export const ImageButton = (props, { }) => {
    return (
        <div style={props.style} >
            <button type="button" className="btn btn-info">
              <i className={props.buttonType} aria-hidden="true"></i>
            </button>
        </div>
    );
};
