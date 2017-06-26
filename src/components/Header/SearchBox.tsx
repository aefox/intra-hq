import * as React from "react";

// export interface HelloProps { compiler: string; framework: string; }

export const SearchBox = (props, { }) => {
  return (
    <div>
      <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
};
