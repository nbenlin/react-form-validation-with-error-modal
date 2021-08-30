import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/Modal/ErrorModal";
import classes from "./AddUser.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const AddUser = (props) => {
  /* Custom hook */
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: enteredSurname,
    isValid: surnameIsValid,
    hasError: surnameHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurname,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);
  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);
  /* end */
  const [error, setError] = useState();

  /* Handler functions */
  const formSubmittingHandler = (event) => {
    event.preventDefault();

    if (
      !nameIsValid &&
      !surnameIsValid &&
      !emailIsValid &&
      !passwordIsValid &&
      !phoneIsValid
    ) {
      setError({
        title: "Invalid form!",
        message: "Please complete all required fields.",
      });
      return;
    }
  };

  const errorHandler = () => {
    setError(null);
  };
  /* end handler functions */

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmittingHandler}>
          <div className={nameHasError && classes.invalid}>
            <div className={classes.inputItem}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />
            </div>
            {nameHasError && (
              <p className={classes.error}>Name must be not empty.</p>
            )}
          </div>

          <div className={surnameHasError && classes.invalid}>
            <div className={classes.inputItem}>
              <label htmlFor="surname">Surname</label>
              <input
                id="surname"
                type="text"
                onChange={surnameChangeHandler}
                onBlur={surnameBlurHandler}
                value={enteredSurname}
              />
            </div>
            {surnameHasError && (
              <p className={classes.error}>Surname must be not empty.</p>
            )}
          </div>

          <div className={emailHasError && classes.invalid}>
            <div className={classes.inputItem}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="text"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
            </div>
            {emailHasError && (
              <p className={classes.error}>Email must be not empty.</p>
            )}
          </div>

          <div className={passwordHasError && classes.invalid}>
            <div className={classes.inputItem}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
            </div>
            {passwordHasError && (
              <p className={classes.error}>Password must be not empty.</p>
            )}
          </div>
          <div className={phoneHasError && classes.invalid}>
            <div className={classes.inputItem}>
              <label htmlFor="phone">Telephone</label>
              <input
                id="phone"
                type="text"
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                value={enteredPhone}
              />
            </div>
            {phoneHasError && (
              <p className={classes.error}>Phone must be not empty.</p>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
