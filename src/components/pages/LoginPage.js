import AuthForm from "../Auth/AuthForm";
import classes from "./LoginPage.module.css";
import wholePicture from "../Images/LoginPage/wholePicture.png";
import bonusKafa from "../Images/LoginPage/bonusKafa.png";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.picturesItems}>
        <img src={wholePicture} alt="Discover Page" width={381} />
        <img
          src={bonusKafa}
          alt="Profile Page"
          className={classes.innerPicture}
          width={249}
        />
      </div>
      {/* <AuthForm /> */}
      <div className={classes.loginItem}>dgh</div>
    </div>
  );
};

export default LoginPage;
