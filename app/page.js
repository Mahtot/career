"use client";

import React, { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Services from "./components/Services";
import { ValueSection } from "./components/ValueSection";
import { CallToAction } from "./components/CallToAction";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

export default function Chat() {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    // Check if profile exists in localStorage
    const checkProfile = () => {
      const profile = localStorage.getItem("userProfile");
      setHasProfile(!!profile);
    };

    checkProfile(); // On mount

    // Watch for updates in localStorage
    window.addEventListener("storage", checkProfile);
    return () => window.removeEventListener("storage", checkProfile);
  }, []);

  return (
    <div className="page-top">
      {/* Chatbot shown only if user has profile */}
      {<Chatbot />}

      {/* Hero Section with background overlay */}
      <div className="relative flex min-h-screen w-full flex-col bg-img">
        <div className="absolute inset-0 bg-gray-800 opacity-70 z-0 pointer-events-none"></div>
        <div className="relative z-10">
          <Navbar />
          <Masthead />
        </div>
      </div>

      {/* Page Sections */}
      <ProblemSection />
      <SolutionSection />
      <About />
      <Footer />
    </div>
  );
}
