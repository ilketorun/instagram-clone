import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import UploadPage from "./components/Pages/UploadPage";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={!authCtx.isLoggedIn && <LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/upload" element={authCtx.isLoggedIn && <UploadPage />} />
    </Routes>
  );
}

export default App;
