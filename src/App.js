import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import Profile from "./components/Pages/Profile";
import Upload from "./components/Pages/Upload";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Layout>
  );
}

export default App;
