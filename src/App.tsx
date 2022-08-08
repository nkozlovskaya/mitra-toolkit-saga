import "./App.css";
import { About } from "./pages/about";
import { CardPhoto } from "./pages/card";
import { Galery } from "./pages/galery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Galery />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<CardPhoto />} />
        <Route path="*" element={<Galery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// eslint-disable-next-line
