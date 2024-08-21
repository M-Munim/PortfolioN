'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

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

  const socialLinkVariants = {
    hover: {
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <footer className='bg-blue-600 text-white'>
      <div className="flex flex-col items-center px-8 py-4">
        <div className="w-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center justify-center md:w-1/3">
            <Image src="/Logo2.svg" alt="Logo" width={146} height={48} priority />
            {/* <h2 className="text-white text-4xl tracking-widest"><code className="font-extrabold">MUNIM<small className="font-light text-lg tracking-normal">.dev</small></code></h2> */}
          </div>

          <div className="flex md:flex-col flex-row items-center justify-center gap-x-3 md:w-1/3 space-y-1 capitalize flex-wrap">
            {['/', '#about', '#work', '#hire-me', '#projects', '#testimonials'].map((href, index) => (
              <motion.div key={index} variants={linkVariants} whileHover="hover">
                <Link href={href}>{href.substring(1) || 'Home'}</Link>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center md:w-1/3 space-y-3">
            <address className='not-italic text-center'>Address:<br />Block F, Multi Garden B-17, Islamabad, PK</address>

            <div className="flex items-center justify-center text-2xl gap-2">
              {[
                { href: "https://www.linkedin.com/in/m-munim1/", icon: <IoLogoLinkedin /> },
                { href: "https://github.com/M-Munim", icon: <FaGithub /> },
                { href: "https://instagram.com/munim_.1?igshid=NGExMmI2YTkyZg==", icon: <FaInstagram /> },
                { href: "https://twitter.com/Muhamma09747531?t=ifDBNBwXuIEsikE8pQR3YQ&s=09", icon: <FaSquareXTwitter /> },
                { href: "mailto:muhammadmunimoff330@gmail.com", icon: <HiOutlineMail /> },
                { href: "https://wa.me/923302021926", icon: <FaSquareWhatsapp /> },
              ]
                .map((social, index) => (
                  <motion.a key={index} href={social.href} variants={socialLinkVariants} whileHover="hover" target="_blank" >
                    {social.icon}
                  </motion.a>
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-full mt-4 flex items-center justify-center">
          <p>&copy; {currentYear} - Munim</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
