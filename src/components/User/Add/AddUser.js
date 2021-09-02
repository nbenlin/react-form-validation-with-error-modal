import React, { useState } from "react";
import useInput from "../../Hooks/use-input";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/Modal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";
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
    value: enteredCountry,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
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
      !nameIsValid ||
      !surnameIsValid ||
      !emailIsValid ||
      !countryIsValid ||
      !phoneIsValid
    ) {
      setError({
        title: "Invalid form!",
        message: "Please complete all required fields.",
      });
      return;
    }
    props.onAddUser(enteredName, enteredSurname, enteredEmail, enteredPhone);
    resetName();
    resetSurname();
    resetEmail();
    resetPassword();
    resetPhone();
  };

  const errorHandler = () => {
    setError(null);
  };
  /* end handler functions */

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmittingHandler}>
          <div
            className={`${classes.control} ${
              nameHasError === true ? classes.invalid : ""
            }`}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameHasError && (
              <p className={classes.error}>Please check your e-mail.</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              surnameHasError === true ? classes.invalid : ""
            }`}
          >
            <label htmlFor="surname">Last name</label>
            <input
              id="surname"
              type="text"
              onChange={surnameChangeHandler}
              onBlur={surnameBlurHandler}
              value={enteredSurname}
            />
            {surnameHasError && (
              <p className={classes.error}>Surname must be not empty.</p>
            )}
          </div>

          <div
            className={`${classes.control} ${
              emailHasError === true ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailHasError && (
              <p className={classes.error}>Email must be not empty.</p>
            )}
          </div>

          <div
            className={`${classes.control} ${
              countryHasError === true ? classes.invalid : ""
            }`}
          >
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              onChange={countryChangeHandler}
              onBlur={countryBlurHandler}
              value={enteredCountry}
            />
            {countryHasError && (
              <p className={classes.error}>Country must be not empty.</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              phoneHasError === true ? classes.invalid : ""
            }`}
          >
            <label htmlFor="phone">Telephone</label>
            <input
              id="phone"
              type="text"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
            />
            {phoneHasError && (
              <p className={classes.error}>Phone must be not empty.</p>
            )}
          </div>
          <div className={classes.actions}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
