import * as React from "react";

export const Logo = (props, { }) => {
    return (
        <div style={props.style}>
            <img src={require("../images/logo.png")}
                style={{ width: "50px", height: "50px", float: "left", margin: "10px"  }}
            />
            <h2 style={{ float: "left", margin: "10px"  }}>Logo-text</h2>
        </div>
    );
};

// export default Logo;
