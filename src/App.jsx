import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Themes from "./components/Themes";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Announcements from "./components/Announcements";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <About />
      <Themes />
      <Announcements />
      <Contacts />
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
