import classes from "./PasswordInput.module.css";
import { useRef, useState } from "react";

const PasswordInput = (props) => {
  const passwordInputRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordTyped, setPasswordTyped] = useState(false);

  const passwordTypedHandler = (event) => {
    event.preventDefault();

    const typedText = event.target.value;

    if (typedText === "") {
      setPasswordTyped(false);
    } else {
      setPasswordTyped(true);
    }
  };

  const showHideButtonHandler = (event) => {
    event.preventDefault();

    setShowPassword((prevState) => !prevState);
  };

  props.onPasswordInputRef(passwordInputRef);

  return (
    <div>
      <input
        className={
          !isPasswordTyped ? classes.passwordInput : classes.passwordTypedInput
        }
        onChange={passwordTypedHandler}
        id="password"
        type={!showPassword ? `password` : "text"}
        ref={passwordInputRef}
        placeholder="Password"
      />
      {isPasswordTyped && (
        <button
          className={classes.showHideButton}
          onClick={showHideButtonHandler}
        >
          {!showPassword ? "Show" : "Hide"}
        </button>
      )}
    </div>
  );
};

export default PasswordInput;
