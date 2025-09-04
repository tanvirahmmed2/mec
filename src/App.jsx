import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Error from "./layout/Error";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Department from "./pages/Department";
import Administration from "./pages/Administration";
import Contact from "./pages/Contact";
import Faculty from "./pages/Faculty";
import Notices from "./pages/Notices";
import FacultyProfile from "./pages/FacultyProfile";
import Staff from "./pages/Staff";
import Officer from "./pages/Officer";
import Curriculam from "./pages/Curriculam";
import Gallery from "./pages/Gallery";
import Hostel from "./pages/Hostel";
import Library from "./pages/Library";
import Clubs from "./pages/Clubs";
import Club from "./pages/Club";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden h-auto text-justify">
      <Navbar />
      <div className="w-full min-h-screen mt-20 sm:mt-32 p-2 py-6 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/department" element={<Departments />} />
          <Route path="/:title" element={<Department /> } />
          <Route path="/faculty" element={<Faculty/> } />
          <Route path="/faculty/:name" element={<FacultyProfile/> } />
          <Route path="/administration" element={<Administration /> } />
          <Route path="/contacts" element={<Contact /> } />
          <Route path="/notices" element={<Notices /> } />
          <Route path="/staff" element={<Staff /> } />
          <Route path="/officers" element={<Officer /> } />
          <Route path="/curriculam" element={<Curriculam/> } />
          <Route path="/gallery" element={<Gallery/> } />
          <Route path="/hostel" element={<Hostel/> } />
          <Route path="/library" element={<Library/> } />
          <Route path="/clubs" element={<Clubs/> } />
          <Route path="/clubs/:title" element={<Club/> } />
          

          <Route path="/*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
