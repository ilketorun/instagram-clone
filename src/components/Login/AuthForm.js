import { useRef, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./AuthForm.module.css";
import logo from "../Images/Logo/instaLogo.png";
import GetTheApp from "./GetTheApp";
import SignUp from "./SignUp";
import GuestCredentials from "./GuestCredentials";
import EmailInput from "./InputFields/EmailInput";
import PasswordInput from "./InputFields/PasswordInput";

const AuthForm = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [emailInputRef, setEmailInputRef] = useState();
  const [passwordInputRef, setPasswordInputRef] = useState();

  const [isLogin, setIsLogin] = useState(true);

  const toogleHandler = (event) => {
    event.preventDefault();

    setIsLogin((prevState) => !prevState);
  };

  const postAuth = useCallback(async (enteredEmail, enteredPassword, url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const authData = await response.json();

      return authData.idToken;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enretedEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDB9lY6s8DfSc77CrrtcYdJlBA1zoH2Lww";

    if (!isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDB9lY6s8DfSc77CrrtcYdJlBA1zoH2Lww";
    }

    const idToken = await postAuth(enretedEmail, enteredPassword, url);
    authCtx.login(idToken);

    if (idToken) {
      navigate("/", { replace: true });
    }
  };

  props.onLoginCarry(isLogin);

  const emailInputHandler = (emailInputRef) => {
    setEmailInputRef(emailInputRef);
  };

  const passwordInputHandler = (passwordInputRef) => {
    setPasswordInputRef(passwordInputRef);
  };

  return (
    <div>
      <section className={classes.auth}>
        <img className={classes.logo} src={logo} alt="Instagram Logo" />
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <EmailInput onEmailInputRef={emailInputHandler} />
          </div>
          <div className={classes.control}>
            <PasswordInput onPasswordInputRef={passwordInputHandler} />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Log In" : "Sign Up"}</button>
            {isLogin && <GuestCredentials />}
          </div>
        </form>
      </section>
      <SignUp isLogin={isLogin} onToogle={toogleHandler} />
      <GetTheApp />
    </div>
  );
};

export default AuthForm;
