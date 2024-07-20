'use-client';

import Image from "next/image";
import { motion } from "framer-motion";

// Icons
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

// data
import { about } from "./data";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaStar } from "react-icons/fa";

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
          <div className="heading bg-red flex items-center justify-center gap-3  mb-10">
            <h2 className="nanum mb-0 relative">About <Image src="/Underline1.svg" className="absolute bottom-2 right-0" alt="Fire" width={105} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <div className="w-1/2 mb-10">
            <p className="leading-5 text-white opacity-70 text-justify">I'am a skilled front-end developer with experience<br /> in Javascript, and expertise  in frameworks like React, <br /> Next.js. I am a quick learner and collaborate closely with clients to create efficeint, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>

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

      {/* gap */}
      <section className="gap  bg-pink-300 w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section>

      {/* Work */}
      <section className="work-approach bg-yellow-700 w-full py-5">
        <div className="w-10/12 m-auto">
          <div className="top h-96 bg-purple-100">
            <div className="heading bg-red flex items-center justify-center gap-3 mb-10">
              <h2 className="nanum mb-0 relative">Work <Image src="/Underline1.svg" className="absolute bottom-2 right-0" alt="Fire" width={105} height={19} /></h2>
              <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
            </div>
          </div>

          <div className="bottom bg-green-800">
            <div className="heading bg-red flex items-center justify-center gap-3 mb-10 bg-red-200">
              <h2 className="nanum mb-0 relative">My Approach<Image src="/Underline1.svg" className="absolute -bottom-1 right-0" alt="Fire" width={155} height={19} /></h2>
              <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
            </div>

            <div className="relative flex flex-col bg-yellow-800">
              <Image src="/Frame.svg" alt="Frame" width={120} height={138} className="absolute top-16 left-16" />
              <div className="w-full border-b-2 relative overflow-hidden h-[410px]">
                <div className="w-80 h-80 rounded-full border border-dashed absolute -bottom-40 left-1/4"></div>
                <div className="w-[500px] h-[500px] rounded-full border border-dashed absolute -bottom-64 left-1/4"></div>
                <div className="w-[750px] h-[750px] rounded-full border border-dashed absolute -bottom-[355px] left-1/4"></div>
              </div>

              <div className="cards flex items-center justify-end gap-4 mt-5 bg-green-200 w-full text-white">
                <div className="w-72 h-80 bg-red-950 rounded-2xl p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="">Planning & Strategy</h2>
                    <p className="">We'll colaborate to map out your website's goal, target audience and key functionalities. We'll discuss things like site structure, navigation and content requirements.</p>
                  </div>
                </div>

                <div className="w-72 h-80 bg-red-950 rounded-2xl p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="">Development & Progress Update</h2>
                    <p className="">Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.</p>
                  </div>
                </div>
                <div className="w-72  h-80 bg-red-950 rounded-2xl p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="">Development & Launch</h2>
                    <p className="">This is where the magic happens! Based on the approved design, I'll translate everthing into functional code, bulding your website from the ground up.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gap */}
      <section className="gap  bg-pink-300 w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section>

      {/* projects */}
      <section className="Projects bg-orange-700 w-full py-5">
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3  mb-10">
            <h2 className="nanum mb-0 relative">Projects <Image src="/Underline1.svg" className="absolute -bottom-1 right-0" alt="Fire" width={135} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <div className="w-1/2 mb-10">
            <p className="leading-5 text-white opacity-70 text-justify">Following projects showcases my skills and experience<br />  through real world Examples of my work. Each project is<br />  described with links to code repos and live demos in it. It reflects my ability to solve problems, work with different technologies and manage project efficiently.experience in Javascript, and expertise in frameworks like React, Next.js. I am a quick learner and collaborate closely with clients to create efficeint, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>

            <div className="w-full h-96">
              projects
            </div>
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

      {/* testimonials */}
      <section className="testimonials bg-teal-700 w-full h-96 py-5">
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3  mb-10">
            <h2 className="nanum mb-0 relative">Testimonials <Image src="/Underline1.svg" className="absolute -bottom-2 right-1" alt="Fire" width={195} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          {/* <Swiper
            className="swiper-container pt-10 md:pt-40 mx-auto"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className='pb-10'>
              <div className="w-full md:w-3/6 m-auto">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                  <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                  <div className="flex justify-center items-center gap-8">
                    <div className="w-3/12">
                      <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                      <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                      <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#E3E6F0" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='pb-10'>
              <div className="w-full md:w-3/6 m-auto">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                  <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                  <div className="flex justify-center items-center gap-8">
                    <div className="w-3/12">
                      <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                      <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                      <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#E3E6F0" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='pb-10'>
              <div className="w-full md:w-3/6 m-auto">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                  <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                  <div className="flex justify-center items-center gap-8">
                    <div className="w-3/12">
                      <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                      <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                      <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#E3E6F0" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='pb-10'>
              <div className="w-full md:w-3/6 m-auto">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-24">
                  <p className="text-center text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                  <div className="flex justify-center items-center gap-8">
                    <div className="w-3/12">
                      <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                      <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1">Aliyan Baig</h3>
                      <div className="icons text-xl md:text-4xl flex justify-center items-center gap-2">
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#FFA928" }} />
                        <FaStar style={{ color: "#E3E6F0" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper> */}

        </div>
      </section>
      <section className="contact bg-red-700 w-full h-96 my-20 py-10"></section>
    </main>
  );
}
