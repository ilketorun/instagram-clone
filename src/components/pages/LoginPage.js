// import classes from "./LoginPage.module.css";
import AuthForm from "../Auth/AuthForm";

import TradeMark from "../Footers/TradeMark";
import ImageSlide from "../ImageSlide/ImageSlide";

const LoginPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem auto",
        }}
      >
        <ImageSlide />
        <AuthForm />
      </div>
      <TradeMark />
    </div>
  );
};

export default LoginPage;
