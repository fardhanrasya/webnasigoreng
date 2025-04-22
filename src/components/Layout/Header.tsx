import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return path !== "/" && location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span
            className={`text-2xl font-bold ${
              isScrolled ? "text-orange-600" : "text-white"
            }`}
          >
            Nasi<span className="text-yellow-500">Goreng</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: "Beranda", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Tentang", path: "/about" },
            { name: "Kontak", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-orange-600"
                  : "text-white hover:text-yellow-400"
              } ${
                isActive(item.path)
                  ? isScrolled
                    ? "text-orange-600 font-bold"
                    : "text-yellow-400 font-bold"
                  : ""
              } font-medium transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
          {[
            { name: "Beranda", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Tentang", path: "/about" },
            { name: "Kontak", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-gray-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100 ${
                isActive(item.path) ? "text-orange-600 font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
