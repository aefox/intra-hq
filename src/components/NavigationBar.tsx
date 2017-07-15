import * as React from "react";
import { Logo } from "../components/Logo";
import { Search } from "../components/Search";
import { ImageButton } from "../components/ImageButton";
import { LogoutButton } from "../components/LogoutButton";

export const NavigationBar = () => {
  return (
    <div className="jumbotron jumbotron-fluid" style={{ marginBottom: "0", paddingTop: "0", height: "7%" }}>
      <Logo style={{ marginLeft: "40px" }} />
      <div style={{ float: "right", display: "flex", marginRight: "40px", margin: "10px" }}>
        <Search />
        <LogoutButton text="Logout" />
        <ImageButton buttonType="fa fa-commenting" />
      </div>
    </div>

  );
};
