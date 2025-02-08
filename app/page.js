"use client";

import React from "react";

import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portifolio";

export default function Chat() {
  return (
    <div className="page-top">
      {/* Chatbot */}
      <Chatbot />

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
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}
