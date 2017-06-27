import * as React from "react";

export const Search = (props, { }) => {
  return (
        <form className="my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <img className="btn btn-outline-success my-2 my-sm-0" type="submit" src="src\images\search-logo-hi.png"
              height="42" width="60" />
          </form>
  );
};
