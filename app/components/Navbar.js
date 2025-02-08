import Link from "next/link";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const menuItems = ["About", "Services",];
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setShowMenu(false); 
  };

  return (
    <nav
      className={`w-[100vw]  shadow-lg z-50 ${
        isScrolled ? " text-black" : "text-[#ffffffbf]"
      } transition-all duration-200 `}
    >
      <div className="container mx-auto flex items-center px-3 py-6">
        <Link href="/" className="font-extrabold text-3xl">
          Career<span className="text-purple-700">Chain</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <div
          className={`flex md:hidden p-2 ml-auto shadow-xl rounded-sm hover:scale-105 transition-all duration-300  ${
            isScrolled ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => setShowMenu((prev) => !prev)}
          role="button"
          aria-label="Toggle Menu">
            <LuMenu/>
        </div>

        {/* Menu Items */}
        <div
          className={`fixed md:relative ml-auto top-16 md:top-0 left-0 overflow-y-auto bottom-0 h-[90vh]  w-full md:w-auto md:h-auto   flex flex-col md:flex-row md:space-x-6  md:translate-y-0 transition-transform duration-300 justify-center  ${
            showMenu ? "translate-y-0" : "translate-y-full md:translate-y-0"
          } `}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className={`${
                isScrolled ? "hover:text-purple-600" : "hover:text-white"
              } font-semibold transition-all duration-300 p-3 md:p-1`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;