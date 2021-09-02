import React from "react";
import classes from "./Navigation.module.css";
import Button from "../../UI/Button/Button";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Button>Logout</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
