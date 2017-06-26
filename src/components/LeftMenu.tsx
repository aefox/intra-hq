import * as React from "react";
import "../css/leftMenu.css";

export const LeftMenu = () => {
  return (
    <div style={{ backgroundColor: "gray", width: "10%", height: "93%" }}>
      <h5 style={{ maxWidth: "100px" }}>Menu title </h5>
      <ul style={{listStyle: "none"}}>
        <li> <a className="menuItem"> Item1 </a></li>
        <li> <a> Item1 </a></li>

      </ul>
    </div>

  );
};
