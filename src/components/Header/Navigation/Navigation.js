import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import Button from "../../UI/Button/Button";
import AuthContext from "../../../context/auth-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
