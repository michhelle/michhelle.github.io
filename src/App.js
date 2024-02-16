import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes
import Header from "./components/header";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <div class="flex justify-center items-center pt-20 ">
        <div class="grid w-full max-w-[60rem] px-4 grid-cols-6">
          <Header />
          <div class="col-span-5">
            <Routes>
              <Route exact path="/" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
      <div class="pb-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
