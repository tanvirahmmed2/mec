import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Error from "./layout/Error";
import About from "./pages/About";
import Departments from "./pages/Departments";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden h-auto">
      <Navbar />
      <div className="w-full min-h-screen p-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/department" element={<Departments />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
