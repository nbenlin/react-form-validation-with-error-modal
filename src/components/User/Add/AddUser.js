import React from "react";
import useInput from "../../hooks/use-input";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
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
    inputBlurHandler: nameInputHandler,
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
  return (
    <Card className={classes.input}>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={enteredName} />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text" value={enteredSurname} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" value={enteredEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={enteredPassword} />
        </div>
        <div>
          <label htmlFor="phone">Telephone</label>
          <input id="phone" type="text" value={enteredPhone} />
        </div>
        <Button>Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
