import * as React from "react";
import { ImageButton } from "../components/ImageButton";

export const Search = (props, { }) => {
  return (
    <div style={{ display: "flex", paddingRight: "10px" }}>
      <input className="form-control" style={{ float: "left", width: "150px", marginLeft: "10px" }}
        type="text" placeholder="Search"></input>
      <ImageButton style={{ float: "left", marginLeft: "10px" }}
                   buttonType="fa fa-search"/>
    </div>
  );

};

// export default Search;
