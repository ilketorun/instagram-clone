import AuthForm from "../Auth/AuthForm";
import classes from "./LoginPage.module.css";
import wholePicture from "../Images/LoginPage/WholePictureYatan.png";
import loftiNew from "../Images/LoginPage/LoftiNew.png";
import lilNew from "../Images/LoginPage/LilMessageNew.png";
import yatanNew from "../Images/LoginPage/YatanNew.png";
import bonus from "../Images/LoginPage/BonusNew.png";
import TradeMark from "../Footers/TradeMark";

const LoginPage = () => {
  return (
    <div>
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
      </div>
      <TradeMark />
    </div>
  );
};

export default LoginPage;
