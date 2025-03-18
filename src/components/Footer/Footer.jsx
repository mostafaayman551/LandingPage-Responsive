import React from "react";
import LOGO from "../../assets/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-darkBg pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* footer top */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-6">
          {/* Logo */}
          <div>
            <a href="#" className="block mb-2">
              <img src={LOGO} alt="Logo" className="w-32 h-32" />
            </a>
            <p className="text-gray-600 dark:text-darkText w-72">
              <span className="text-2xl text-primary font-extrabold">K</span>
              <span className="text-lg text-primary font-extrabold">eraz</span>
              &nbsp;is a website theme for social media marketing business.
            </p>
          </div>
          {/* Links */}
          <div>
            <ul className="flex items-center gap-4">
              <li className="">
                <motion.a
                  href="#"
                  className="relative px-3 py-2 text-lg text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary"
                  whileHover="hover"
                >
                  Pricing
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-primaryLight dark:bg-secondary"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: "100%", transition: { duration: 0.3 } },
                    }}
                  ></motion.span>
                </motion.a>
              </li>
              <li className="">
                <motion.a
                  href="#"
                  className="relative px-3 py-2 text-lg text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary"
                  whileHover="hover"
                >
                  About
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-primaryLight dark:bg-secondary"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: "100%", transition: { duration: 0.3 } },
                    }}
                  ></motion.span>
                </motion.a>
              </li>
              <li className="">
                <motion.a
                  href="#"
                  className="relative px-3 py-2 text-lg text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary"
                  whileHover="hover"
                >
                  Blog
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-primaryLight dark:bg-secondary"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: "100%", transition: { duration: 0.3 } },
                    }}
                  ></motion.span>
                </motion.a>
              </li>
              <li className="">
                <motion.a
                  href="#"
                  className="relative px-3 py-2 text-lg text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary"
                  whileHover="hover"
                >
                  Contact
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-primaryLight dark:bg-secondary"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: "100%", transition: { duration: 0.3 } },
                    }}
                  ></motion.span>
                </motion.a>
              </li>
              <li className="">
                <motion.a
                  href="#"
                  className="relative px-3 py-2 text-lg text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary"
                  whileHover="hover"
                >
                  Login
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-primaryLight dark:bg-secondary"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: "100%", transition: { duration: 0.3 } },
                    }}
                  ></motion.span>
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="pt-6 pb-6 flex items-center justify-between">
          <p className="text-base font-normal text-gray-600 dark:text-darkText">
            © Copyright 2025 Keraz. All rights reserved
          </p>
          {/* Socials */}
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary transition-colors"
              >
                <BsTwitter size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary transition-colors"
              >
                <FaDribbble size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary transition-colors"
              >
                <BsLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
