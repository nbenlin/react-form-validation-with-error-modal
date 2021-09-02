import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <Card className={classes.login}>
      <form>
        <div className={`${classes.control}`}>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={classes.actions}>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
