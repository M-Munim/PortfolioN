'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const svgVariants = {
    open: {
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <nav className="bg-[#252536] w-full fixed z-50">
      <div className="flex items-center justify-between h-20 px-4">
        <div className="logo w-1/6 flex items-center justify-center ">
          <Link href='/' >
            {/* <Image src="Logo.svg" alt="Logo" width={116} height={48} priority /> */}
            <h2 className="text-[#6966FF] tracking-widest sm:text-xl md:text-2xl lg:text-3xl"><code className="font-extrabold">MUNIM<small className="font-light text-lg tracking-normal text-[8px] sm:text-xs md:text-sm">.dev</small></code></h2>

          </Link>
        </div>
        <div className="hidden md:flex items-center justify-end gap-5 w-5/6">
          <div className="links text-white flex items-center gap-4 md:gap-5 capitalize text-[15px] lg:text-lg">
            {['#home', '#about', '#work', '#projects', '#testimonials', '#hire-me'].map((href, index) => (
              <motion.div key={index} variants={linkVariants} whileHover="hover">
                <a href={href}>
                  {href.substring(1) || 'Home'}
                </a>
              </motion.div>
            ))}
          </div>
          <div className="btn">
            <Link href="#contact">
              <button className="btnBlue">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            animate={isOpen ? "open" : "closed"}
            variants={svgVariants}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden flex flex-col items-center bg-[#2d2d41] hover:bg-[#2d2d41c3] text-white py-4 capitalize"
          >
            {['/', '#about', '#work', '#hire me', '#projects', '#testimonials'].map((href, index) => (
              <Link key={index} href={href} onClick={() => setIsOpen(false)}>
                {href.substring(1) || 'Home'}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
