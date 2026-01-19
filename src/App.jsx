import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayNavbar from "./components/Navbar/BirthdayNavbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Message from "./pages/Message";
import Surprise from "./pages/Surprise";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <BirthdayNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/message" element={<Message />} />
        <Route path="/nav-surprise" element={<Surprise />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
