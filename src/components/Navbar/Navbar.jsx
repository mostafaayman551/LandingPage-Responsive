import React, { useEffect, useState } from "react";
import LOGO from "../../assets/logo.svg";
import {
  FaMoon,
  FaSearch,
  FaShoppingCart,
  FaSun,
  FaTimes,
} from "react-icons/fa";

const NavMenu = [
  { id: 1, title: "Home" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Pages" },
  { id: 4, title: "Services" },
  { id: 5, title: "Elements" },
  { id: 6, title: "Shop" },
  { id: 7, title: "Blog" },
];
const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      {/* Search Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white dark:bg-darkBg shadow-md transition-all duration-300 ${
          search
            ? "h-[80px] opacity-100 p-4"
            : "h-0 opacity-0 overflow-hidden p-0"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <input
            type="text"
            placeholder="Seach..."
            className="w-full p-3 text-lg border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none text-gray-600 dark:text-darkText"
          />
          <button
            className="text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary transition"
            onClick={() => setSearch(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
      </div>
      {/* Navbar */}
      <nav
        className={`bg-white dark:bg-darkBg transition-all duration-300 fixed top-0 left-0 w-full z-50 ${
          isScrolled ? "shadow-lg py-2" : "shadow-md py-4"
        } ${search ? "top-[80px]" : "top-0"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <a href="#">
              <img
                src={LOGO}
                alt="logo"
                loading="lazy"
                className={`transition-all duration-300 ${
                  isScrolled ? "w-16 h-16" : "w-20 h-20"
                }`}
              />
            </a>
          </div>
          <div className="flex items-center gap-6 lg:gap-10">
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 dark:text-darkText font-medium">
              {NavMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 text-gray-600 dark:text-darkText">
              <button className="hover:text-primaryLight dark:hover:text-secondary transition">
                <FaShoppingCart size={20} />
              </button>
              <button
                className="hover:text-primaryLight dark:hover:text-secondary transition"
                onClick={() => setSearch((prev) => !prev)}
              >
                <FaSearch size={20} />
              </button>
              <button
                className="hover:text-primaryLight dark:hover:text-secondary transition"
                onClick={toggleDarkMode}
              >
                <FaMoon size={20} className="hidden dark:block" />
                <FaSun size={20} className="dark:hidden" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
