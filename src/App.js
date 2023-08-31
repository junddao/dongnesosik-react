import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";
import { Services } from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
