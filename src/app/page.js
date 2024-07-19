'use-client';

import Image from "next/image";
import { motion } from "framer-motion";

// Icons
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

// data
import { about } from "./data";

export default function Home() {
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
    <main>
      {/* hero */}
      <section className="home bg-orange-700 w-full pt-36 pb-5">
        <div className="w-10/12 m-auto">
          <div className="text-white relative py-5">

            <h1 className="font-bold text-[80px]">HI, I am <span className="text-[#6966FF] relative">Munim <Image src="/Sparkle.svg" alt="Logo" width={82} height={80} className="absolute -right-12 -top-5" /></span></h1>
            <p className="text-4xl">I develop user interfaces and web<br />applications using <span className="relative">React-Js and Next-Js<Image src="/Vector.svg" alt="Logo" width={368} height={25} className="absolute right-0 -bottom-7" /></span></p>

          </div>
          <div className="flex items-center w-full justify-center bg-blue-400 mt-1">
            <Image src="/bg_main (1).png" alt="Logo" width={516} height={480} />
          </div>
        </div>
      </section>

      {/* gap */}
      <section className="gap  bg-pink-300 w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <Image src="/Vector2.svg" alt="Vector2" width={30} height={120} />
          <Image src="/pssst!.svg" alt="pssst" width={55} height={26} />
        </div>
      </section>

      {/* about */}
      <section className="about bg-green-700 w-full py-5">
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3">
            <h2 className="nanum mb-0 relative">About <Image src="/Underline1.svg" className="absolute bottom-2 right-0" alt="Fire" width={105} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <div className="w-1/2 mb-10">
            <p className="leading-5 text-white opacity-70">I'am a skilled front-end developer with <br /> experience in Javascript, and expertise <br /> in frameworks like React, Next.js. I am a quick learner and collaborate closely with clients to create efficeint, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>

            <div className="links flex items-center justify-start text-2xl gap-2 mt-3 text-white">
              <a href="">
                <IoLogoLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <HiOutlineMail />
              </a>
              <button className="btnBlue text-lg">
                <a href="">Download CV</a>
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            {about.map((aboutData) => (
              <div className="flex flex-col items-center justify-around text-white w-80 border rounded-lg h-80 cursor-pointer shadow-sm shadow-white" key={aboutData.id}>
                <Image src={aboutData.img} alt="AboutImd" width={255} height={126} />

                <h2 className="">{aboutData.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>



















      <section className="work-approach bg-yellow-700 w-full h-96 my-20 py-10"></section>
      <section className="testimonials bg-orange-700 w-full h-96 my-20 py-10"></section>
      <section className="hire-me bg-teal-700 w-full h-96 my-20 py-10"></section>
      <section className="contact bg-red-700 w-full h-96 my-20 py-10"></section>
    </main>
  );
}
