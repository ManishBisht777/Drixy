import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import "./styles/main.css";
import Login from "./pages/auth/login";
import Combine from "./pages/combine/combine";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/combine" element={<Combine />} />
      </Routes>
    </>
  );
}

export default App;
