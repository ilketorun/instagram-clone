import { useRef, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./AuthForm.module.css";
import logo from "../Images/Logo/instaLogo.png";
import googlePlay from "../Images/LoginPage/GooglePlay.png";
import appStore from "../Images/LoginPage/AppStore.png";

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
              placeholder="Phone number, username, or email"
            ></input>
          </div>
          <div className={classes.control}>
            <input
              id="password"
              type="password"
              ref={passwordInputRef}
              placeholder="Password"
            ></input>
          </div>

          <div className={classes.actions}>
            <button>{isLogin ? "Log In" : "Sign Up"}</button>
            {isLogin && (
              <div className={classes.orSperator}>
                <div className={classes.line_1}></div>
                <p className={classes.orWord}>OR</p>
                <div className={classes.line_2}></div>
              </div>
            )}

            {isLogin && (
              <div className={classes.loginExample}>
                <p className={classes.loginDescriber}>
                  Log in with guest account
                </p>
                <p className={classes.loginCredentialEmail}>
                  Email: guest@guest.com
                </p>
                <p className={classes.loginCredentialPassword}>
                  Password: 123456
                </p>
              </div>
            )}
          </div>
        </form>
      </section>
      <section className={classes.signUp}>
        <p className={classes.signUpDescription}>
          {isLogin ? `Don't have an account?` : `Have an account?`}
        </p>
        <button className={classes.signUpButton} onClick={toogleHandler}>
          {isLogin ? "Sign up" : "Log In"}
        </button>
      </section>
      <section className={classes.download}>
        <p className={classes.getTheApp}>Get the App</p>
        <div className={classes.googlePlayAppStore}>
          <img
            width={160}
            className={classes.googlePlay}
            src={googlePlay}
            alt="Download from Google Play"
          />
          <img
            className={classes.appStore}
            width={160}
            src={appStore}
            alt="Download from App Store"
          />
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
