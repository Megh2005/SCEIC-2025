import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { motion, useInView } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Themes from "./components/Themes";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Announcements from "./components/Announcements";

const fadeInUp = {
  hidden: { opacity: 0, y: 90 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const AnimatedSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Themes />
      </AnimatedSection>
      <AnimatedSection>
        <Announcements />
      </AnimatedSection>
      <AnimatedSection>
        <Contacts />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
      <Toaster />
    </Router>
  );
};

export default App;
