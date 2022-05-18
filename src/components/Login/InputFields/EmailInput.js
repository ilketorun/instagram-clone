import classes from "./EmailInput.module.css";
import { useState, useRef } from "react";

const EmailInput = (props) => {
  const [isEmailTyped, setEmailTyped] = useState(false);
  const emailInputRef = useRef();

  const emailTypedHandler = (event) => {
    event.preventDefault();

    const typedText = event.target.value;

    if (typedText === "") {
      setEmailTyped(false);
    } else {
      setEmailTyped(true);
    }
  };

  props.onEmailInputRef(emailInputRef);

  return (
    <input
      className={!isEmailTyped ? classes.emailInput : classes.emailTypedInput}
      onChange={emailTypedHandler}
      id="email"
      type="email"
      ref={emailInputRef}
      placeholder="Phone number, username, or email"
    ></input>
  );
};

export default EmailInput;
