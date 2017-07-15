import * as React from "react";

export const LogoutButton = (props, { }) => {
    return (
        <div style={{marginRight: "10px"}} >
            <button type="button" className="btn btn-info">
              {props.text}
            </button>
        </div>
    );
};
