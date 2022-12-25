import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import "./styles/main.css";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Combine from "./pages/combine/combine";
import ImageUpload from "./pages/imageUpload/imageUpload";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/combine" element={<Combine />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/imageupload" element={<ImageUpload/>}/>
      </Routes>
    </>
  );
}

export default App;
