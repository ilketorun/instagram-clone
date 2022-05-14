import { useRef, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./AuthForm.module.css";
import Card from "../UI/Card";
import logo from "../Images/Logo/logo2.png";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
          "Content-Type": "applicaiton/json",
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

  return (
    <div>
      <section className={classes.auth}>
        <img className={classes.logo} src={logo} alt="Instagram Logo" />
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <input
              id="email"
              type="email"
              ref={emailInputRef}
              placeholder="Phone number, username or email"
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordInputRef}></input>
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Login" : "Sign Up"}</button>
            <button onClick={toogleHandler}>
              {isLogin
                ? "Create a new account"
                : "Login with an existing account"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
