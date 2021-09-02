import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Create User list</h1>
      <Navigation isLoggedIn={props.isAuth} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
