import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<p>Content</p>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
