import classes from "./GuestCredentials.module.css";

const GuestCredentials = () => {
  return (
    <div>
      <div className={classes.orSperator}>
        <div className={classes.line_1}></div>
        <p className={classes.orWord}>OR</p>
        <div className={classes.line_2}></div>
      </div>
      <div className={classes.loginExample}>
        <p className={classes.loginDescriber}>Log in with guest account</p>
        <p className={classes.loginCredentialEmail}>Email: guest@guest.com</p>
        <p className={classes.loginCredentialPassword}>Password: 123456</p>
      </div>
    </div>
  );
};

export default GuestCredentials;
