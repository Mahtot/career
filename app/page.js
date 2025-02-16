'use client';
import React, { useState, useEffect } from "react";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";

export default function Chat() {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    // Function to check if profile exists
    const checkProfile = () => {
      const profile = localStorage.getItem("userProfile");
      setHasProfile(!!profile); // Update the state based on profile existence
    };

    checkProfile(); // Check on mount

    // Listen for profile updates in localStorage
    window.addEventListener("storage", checkProfile);

    return () => {
      window.removeEventListener("storage", checkProfile);
    };
  }, []);

  return (
    <div className="page-top">
      {/* Show Chatbot only if user has a profile */}
      {hasProfile && <Chatbot />}

      {/* Background with Opacity */}
      <div className="relative flex min-h-screen w-full flex-col bg-img">
        {/* Opacity Layer */}
        <div className="absolute inset-0 bg-gray-800 opacity-70 z-0 pointer-events-none"></div>

        {/* Navbar and Masthead */}
        <div className="relative z-10">
          <Navbar />
          <Masthead />
        </div>
      </div>

      {/* Content Sections */}
      <About />
      <Services />
      <Footer />
    </div>
  );
}
