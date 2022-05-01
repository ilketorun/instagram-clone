import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import ProfilePage from "./components/Pages/ProfilePage";
import UploadPage from "./components/Pages/UploadPage";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={authCtx.isLoggedIn && <ProfilePage />}
        />
        <Route path="/upload" element={authCtx.isLoggedIn && <UploadPage />} />
        <Route path="/login" element={!authCtx.isLoggedIn && <LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
