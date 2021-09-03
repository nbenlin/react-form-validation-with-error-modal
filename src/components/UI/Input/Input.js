import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.hasError === true ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type="text"
        id="email"
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
        value={props.value}
      />
      {props.hasError && <p className={classes.error}>{props.errorMessage}</p>}
    </div>
  );
});

export default Input;
