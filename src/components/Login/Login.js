import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import useInput from "../Hooks/use-input";

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
    props.onLogin();
    resetUserEmail();
    resetUserPassword();
  };

  return (
    <React.Fragment>
      <Card className={classes.login}>
        <form onSubmit={loginFormSubmittingHandler}>
          <div
            className={`${classes.control} ${
              userEmailHasError === true ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              onChange={userEmailChangeHandler}
              onBlur={userEmailBlurHandler}
              value={enteredUserEmail}
            />
            {userEmailHasError && (
              <p className={classes.error}>Please check your e-mail.</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              userPasswordHasError === true ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={userPasswordChangeHandler}
              onBlur={userPasswordBlurHandler}
              value={enteredUserPassword}
            />
            {userPasswordHasError && (
              <p className={classes.error}>Please check your password.</p>
            )}
          </div>
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
