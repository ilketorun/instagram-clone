import classes from "./GetTheApp.module.css";
import googlePlay from "../Images/LoginPage/GooglePlay.png";
import appStore from "../Images/LoginPage/AppStore.png";

const GetTheApp = () => {
  return (
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
  );
};

export default GetTheApp;
