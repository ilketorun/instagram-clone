import AuthForm from "../Auth/AuthForm";
import classes from "./LoginPage.module.css";
import wholePicture from "../Images/LoginPage/BetterOnes/WholePictureYatan.png";
import loftiNew from "../Images/LoginPage/BetterOnes/LoftiNew.png";
import lilNew from "../Images/LoginPage/BetterOnes/LilMessageNew.png";
import yatanNew from "../Images/LoginPage/BetterOnes/YatanNew.png";
import bonus from "../Images/LoginPage/BetterOnes/BonusNew.png";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.picturesItems}>
        <img
          src={wholePicture}
          alt="Discover Page"
          width={483}
          height={747.5}
        />
        <img
          src={bonus}
          alt="Profile Page"
          className={classes.innerPictureBonus}
          width={320}
        />
        <img
          src={lilNew}
          alt="Profile Page"
          className={classes.innerPictureLilMessage}
          width={320}
        />
        <img
          src={loftiNew}
          alt="Profile Page"
          className={classes.innerPictureLofti}
          width={320}
        />
        <img
          src={yatanNew}
          alt="Profile Page"
          className={classes.innerPictureYatan}
          width={320}
        />
      </div>
      <AuthForm />
      {/* <div className={classes.loginItem}>dgh</div> */}
    </div>
  );
};

export default LoginPage;
