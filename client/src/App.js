import React from "react";
import Navbar from "./common/Header/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Booking from './pages/booking';
import Contact from './pages/contact';
import About from './pages/about';
import Gallery from './pages/gallery';
import Footer from "./common/Footber/footer";
import RoomPage from "./pages/RoomPage";
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/booking/:roomid/:arrival/:departure" element={<Booking />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/about" element={< About />} />
        <Route path="/gallery" element={< Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
