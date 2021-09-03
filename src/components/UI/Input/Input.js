import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.hasError === true ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id="email"
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
        value={props.value}
      />
      {props.hasError && <p className={classes.error}>{props.errorMessage}</p>}
    </div>
  );
};

export default Input;
