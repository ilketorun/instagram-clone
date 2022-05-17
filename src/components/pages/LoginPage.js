import AuthForm from "../Login/AuthForm";
import TradeMark from "../Footers/TradeMark";
import ImageSlide from "../ImageSlide/ImageSlide";
import { useState } from "react";

const LoginPage = () => {
  const [isLoginCarriedState, setIsLoginCarriedState] = useState();

  const loginHandler = (loginInfo) => {
    setIsLoginCarriedState(loginInfo);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem auto",
        }}
      >
        {isLoginCarriedState && <ImageSlide />}
        <AuthForm onLoginCarry={loginHandler} />
      </div>
      <TradeMark />
    </div>
  );
};

export default LoginPage;
