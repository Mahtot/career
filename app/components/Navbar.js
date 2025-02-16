"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const menuItems = ["About", "Services"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Load wallet from local storage
    const savedWallet = localStorage.getItem("connected_wallet");
    if (savedWallet) {
      setWalletAddress(savedWallet);
    }
  }, []);

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const wallet = accounts[0];
        setWalletAddress(wallet);
        localStorage.setItem("connected_wallet", wallet);

        // Check if the user has a profile
        const userProfile = localStorage.getItem(`profile_${wallet}`);

        if (!userProfile) {
          // No profile found → Redirect to create profile page
          router.push("/profile");
        } 
        // Otherwise, stay on the page and show chatbot (handled in UI)
        
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    localStorage.removeItem("connected_wallet");
    console.log("Wallet disconnected");
  };

  return (
    <nav className={`w-[100vw] shadow-lg z-50 ${isScrolled ? "text-black" : "text-[#ffffffbf]"} transition-all duration-200`}>
      <div className="container mx-auto flex items-center px-3 py-6">
        <Link href="/" className="font-extrabold text-3xl">
          Career<span className="text-purple-700">Chain</span>
        </Link>

        {/* Mobile Menu Button */}
        <div
          className={`flex md:hidden p-2 ml-auto shadow-xl rounded-sm hover:scale-105 transition-all duration-300 ${isScrolled ? "bg-black text-white" : "bg-white text-black"}`}
          onClick={() => setShowMenu((prev) => !prev)}
          role="button"
          aria-label="Toggle Menu"
        >
          <LuMenu />
        </div>

        {/* Menu Items */}
        <div
          className={`fixed md:relative ml-auto top-16 md:top-0 left-0 overflow-y-auto bottom-0 h-[90vh] w-full md:w-auto md:h-auto flex flex-col md:flex-row md:space-x-6 md:translate-y-0 transition-transform duration-300 justify-center ${showMenu ? "translate-y-0" : "translate-y-full md:translate-y-0"}`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className={`${isScrolled ? "hover:text-purple-600" : "hover:text-white"} font-semibold transition-all duration-300 p-3 md:p-1`}
            >
              {item}
            </Link>
          ))}

          {/* Connect Wallet Button */}
          <button
            onClick={walletAddress ? disconnectWallet : connectWallet}
            className="relative px-6 py-2 text-white font-semibold rounded-lg overflow-hidden border-2 border-transparent"
          >
            <span className="relative z-10">
              {walletAddress ? `Connected (${walletAddress.slice(0, 7)}...)` : "Connect Wallet"}
            </span>

            {/* Moving & Glowing Border Effect */}
            <div className="absolute inset-0 border-2 border-purple-700 rounded-lg animate-border glow"></div>

            <style jsx>{`
              @keyframes borderMove {
                0% { clip-path: inset(0 0 97% 0); }
                25% { clip-path: inset(0 97% 0 0); }
                50% { clip-path: inset(97% 0 0 0); }
                75% { clip-path: inset(0 0 0 97%); }
                100% { clip-path: inset(0 0 97% 0); }
              }
              .animate-border {
                animation: borderMove 3s linear infinite;
              }
              .glow {
                box-shadow: 0 0 15px rgba(0, 102, 255, 0.8),
                            0 0 30px rgba(0, 102, 255, 0.6),
                            0 0 45px rgba(0, 102, 255, 0.4);
              }
              button {
                position: relative;
                right: 5px; 
              }
            `}</style>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
