import React, { useState, useEffect, useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import useInput from "../Hooks/use-input";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const isEmailCorrect = (value) => value.includes("@");
const isPasswordCorrect = (value) => value.trim().length > 6;

const Login = (props) => {
  const {
    value: enteredUserEmail,
    isValid: userEmailIsValid,
    hasError: userEmailHasError,
    valueChangeHandler: userEmailChangeHandler,
    inputBlurHandler: userEmailBlurHandler,
    reset: resetUserEmail,
  } = useInput(isEmailCorrect);
  const {
    value: enteredUserPassword,
    isValid: userPasswordIsValid,
    hasError: userPasswordHasError,
    valueChangeHandler: userPasswordChangeHandler,
    inputBlurHandler: userPasswordBlurHandler,
    reset: resetUserPassword,
  } = useInput(isPasswordCorrect);
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(userEmailIsValid && userPasswordIsValid);
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [userEmailIsValid, userPasswordIsValid]);

  const loginFormSubmittingHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    authCtx.onLogin();
    resetUserEmail();
    resetUserPassword();
  };

  return (
    <React.Fragment>
      <Card className={classes.login}>
        <form onSubmit={loginFormSubmittingHandler}>
          <Input
            id="email"
            label="email"
            type="text"
            hasError={userEmailHasError}
            value={enteredUserEmail}
            errorMessage="Please check your e-mail."
            changeHandler={userEmailChangeHandler}
            blurHandler={userEmailBlurHandler}
          />
          <Input
            id="password"
            label="Password"
            type="text"
            hasError={userPasswordHasError}
            value={enteredUserPassword}
            errorMessage="Please check your password."
            changeHandler={userPasswordChangeHandler}
            blurHandler={userPasswordBlurHandler}
          />
          <div className={classes.actions}>
            <Button type="submit" disabled={!formIsValid}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Login;
