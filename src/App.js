import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import Profile from "./components/Pages/Profile";
import Upload from "./components/Pages/Upload";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={authCtx.isLoggedIn && <Profile />} />
        <Route path="/upload" element={authCtx.isLoggedIn && <Upload />} />
        <Route path="/login" element={!authCtx.isLoggedIn && <LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
