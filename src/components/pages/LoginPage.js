import AuthForm from "../Auth/AuthForm";
import classes from "./LoginPage.module.css";
import wholePicture from "../Images/LoginPage/wholePicture.png";
import loftiProfile from "../Images/LoginPage/loftiProfile.png";
import lilMessages from "../Images/LoginPage/lilMessages-2.jpg";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.picturesItems}>
        <img src={wholePicture} alt="Discover Page" width={483} />
        <img
          src={loftiProfile}
          alt="Profile Page"
          className={classes.innerPictureLofti}
          width={316}
        />
        <img
          src={lilMessages}
          alt="Profile Page"
          className={classes.innerPictureLilMessage}
          width={316}
        />
      </div>
      <AuthForm />
      {/* <div className={classes.loginItem}>dgh</div> */}
    </div>
  );
};

export default LoginPage;
