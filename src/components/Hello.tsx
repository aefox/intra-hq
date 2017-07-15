import * as React from "react";

// export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props, {}) => {
  return (
    <h1>Hello from threre {props.compiler} and {props.framework}!</h1>
  );
};
