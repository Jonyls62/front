import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Lis from "./components/Lis";
import Eli from "./components/Eli";
import Dante from "./components/Dante";
import Jony from "./components/Jony";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/Lis" element={<Lis />} />
          <Route path="/Eli" element={<Eli />} />
          <Route path="/Dante" element={<Dante />} />
          <Route path="/Jony" element={<Jony />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}