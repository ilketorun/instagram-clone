import AuthForm from "../Auth/AuthForm";
import Layout from "../Layout/Layout";
import classes from "./LoginPage.module.css";
import bonusKafa from "../Images/LoginPage/bonusKafa.png";
import stableLeftPart from "../Images/LoginPage/stableLeftPart.png";
import lilMessagesJPG from "../Images/LoginPage/lilMessages.jpg";
import newLilMessage from "../Images/LoginPage/NewLilMessage.jpg";
import newLeftPart from "../Images/LoginPage/newLeftPart.png";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.picturesItem}>
        <img src={newLeftPart} alt="Discover Page" width={112} />

        <img src={newLilMessage} alt="Profile Page" width={269} />
      </div>
      {/* <AuthForm /> */}
      <div className={classes.loginItem}>dgh</div>
    </div>
  );
};

export default LoginPage;
