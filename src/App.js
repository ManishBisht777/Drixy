import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
