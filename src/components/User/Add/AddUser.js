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
        title: "Invalid input",
        message: "Please enter a valid credentials (non-empty values).",
      });
      return;
    }
    if (nameHasError)
      setError({
        title: "Invalid name",
        message: "Please enter a valid name.",
      });

    if (surnameHasError)
      setError({
        title: "Invalid surname",
        message: "Please enter a valid surname.",
      });

    if (emailHasError)
      setError({
        title: "Invalid email",
        message: "Please enter a valid email.",
      });

    if (passwordHasError)
      setError({
        title: "Invalid password",
        message: "Please enter a valid passowrd.",
      });

    if (phoneHasError)
      setError({
        title: "Invalid phone number",
        message: "Please enter a valid phone number.",
      });
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={formSubmittingHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <input
              id="surname"
              type="text"
              onChange={surnameChangeHandler}
              onBlur={surnameBlurHandler}
              value={enteredSurname}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
          </div>
          <div>
            <label htmlFor="phone">Telephone</label>
            <input
              id="phone"
              type="text"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
