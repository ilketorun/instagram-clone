import classes from "./SignUp.module.css";

const SignUp = (props) => {
  return (
    <section className={classes.signUp}>
      <p className={classes.signUpDescription}>
        {props.isLogin ? `Don't have an account?` : `Have an account?`}
      </p>
      <button className={classes.signUpButton} onClick={props.onToogle}>
        {props.isLogin ? "Sign up" : "Log In"}
      </button>
    </section>
  );
};

export default SignUp;
