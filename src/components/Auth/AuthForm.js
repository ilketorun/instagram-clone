import { useRef, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const toogleHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const loginHandler = () => {};

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

    navigate("/");
  };

  return (
    <section>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordInputRef}></input>
        </div>
        <button onClick={loginHandler}>{isLogin ? "Login" : "Sign Up"}</button>
        <button onClick={toogleHandler}>
          {isLogin ? "Create a new account" : "Login with an existing account"}
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
