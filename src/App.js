import "./index.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image from "./components/Image";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = useState(false);
  const setMode = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? "dark" : ""}>
      <BrowserRouter>
        <Navbar modefunc={setMode} dark={dark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:user" element={<Image />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
