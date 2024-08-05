"use client"
import Image from 'next/image';
// Icons
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

// data
import { about, balls, experiences, projects, testimonials } from "./data";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';

import { motion } from "framer-motion";

import { useState } from 'react';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  return (
    <main className=''>
      {/* hero */}
      <section className="home bg-[#252536] w-full pt-24 pb-5" id='home'>
        <div className="w-10/12 m-auto relative">
          <div className="text-white relative py-5">
            <div className="flex items-start justify-start gap-3">
              <motion.div initial={{ skewX: 30, opacity: 0 }}
                animate={{ skewX: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring"
                }} className="flex flex-col items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#6966FF]"></div>
                <div className="w-1 sm:h-48 h-40 violet-gradient"></div>
              </motion.div>
              <div className="">
                <motion.h1 initial={{ x: "-2rem", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: .6,
                    type: "spring"
                  }}
                  className="font-bold text-6xl md:text-[80px]">HI, I am <span className="text-[#6966FF] relative text-7xl md:text-[95px]">Munim <Image src="/Sparkle.svg" alt="Logo" width={100} height={100} className="absolute w-16 md:w-[80px] h-16 md:h-[82px] -right-12 -top-5" /></span></motion.h1>

                <motion.p initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5
                  }}
                  className="sm:text-2xl md:text-3xl lg:text-4xl"
                >I develop user interfaces and web<br />applications using <span className="relative">React-Js and Next-Js.<Image src="/Vector.svg" alt="Logo" width={368} height={25} className="absolute right-0 -bottom-7" /></span></motion.p>
              </div>
            </div>

          </div>

          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5
            }} className="flex items-center w-8/12 m-auto justify-end md:-mt-10 pb-14">
            <Image src="/bg_main (1).png" alt="Logo" width={516} height={480} />
          </motion.div>

          <div className='absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center'>
            <a href='#about'>
              <div className='w-[30px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className='w-2 h-2 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* gap */}
      <section className="gap bg-[#252536] w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <Image src="/Vector2.svg" alt="Vector2" width={30} height={120} />
          <Image src="/pssst!.svg" alt="pssst" width={55} height={26} />
        </div>
      </section>

      {/* about */}
      <section className="about bg-[#252536] w-full pt-24" id='about'>
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3 mb-5 md:mb-10">
            <h2 className="nanum mb-0 relative">About <Image src="/Underline1.svg" className="absolute bottom-2 right-0" alt="Fire" width={105} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <div className="w-full lg:w-7/12 mb-10">
            <p className="leading-5 text-white opacity-70 text-justify text-sm md:text-base">I'am a skilled front-end developer with experience in Javascript, and expertise in frameworks like React, Next.js. I am a quick learner and collaborate closely with clients to create efficeint, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>

            <div className="links flex items-center justify-start text-2xl gap-2 mt-3 text-white">
              <a href="https://www.linkedin.com/in/muhammad-munim1" target='_blank' className='hover:scale-110 transition-all'>
                <IoLogoLinkedin />
              </a>
              <a href="https://github.com/M-Munim" target='_blank' className='hover:scale-110 transition-all'>
                <FaGithub />
              </a>
              <a href="mailto:muhammadmunimoff330@gmail.com" className='hover:scale-110 transition-all'>
                <HiOutlineMail />
              </a>
              <a href="/CV_Me.pdf" target='_blank'>
                <button className="btnBlue text-base">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5 flex-wrap">
            {about.map((aboutData) => (
              <div className="flex flex-col items-center justify-around text-white w-80 md:w-72 lg:w-80 border h-80 md:h-72 lg:h-80 cursor-pointer shadow-sm shadow-white hover:scale-95 transition-all" key={aboutData.id}>
                <Image src={aboutData.img} alt="AboutImg" width={245} height={126} />
                <h2 className="">{aboutData.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* gap */}
      <section className="gap bg-[#252536] w-full" >
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section >

      {/* Work */}
      <section className="work-approach bg-[#252536] w-full py-5 pt-20" id='work' >
        <div className="w-11/12 lg:w-10/12 m-auto">
          <div className="top mb-10">
            <div className="heading bg-red flex items-center justify-center gap-3 mb-10">
              <h2 className="nanum mb-0 relative">Work <Image src="/Underline1.svg" className="absolute bottom-2 right-0" alt="Fire" width={105} height={19} /></h2>
              <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
            </div>

            {/* <div className="w-full flex items-center justify-center">
              <div className="flex justify-center items-centerd py-5 text-white">
                <div className="flex items-stretch space-x-4">
                  <div className="flex flex-col space-y-20 pb-5 bg-green-400">
                    {experiences
                      .filter(card => card.position === 'left')
                      .map(card => (
                        <div key={card.id} className={`bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all shadow-md w-[500px] border-b-2 p-6 ${card.marginTop}`}>
                          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                          <div className="flex items-center justify-start gap-2">
                            <p className="opacity-70">{card.company_name}</p>
                            <Image src={card.logo} alt="company" width={60} height={60} />
                          </div>
                          <ul className='list-disc text-sm mt-2 leading-4 text-justify'>
                            {card.points.map((point, index) => (
                              <li key={index} className='leading-4 mb-2'>{point}</li>
                            ))}
                          </ul>
                          <p className="mt-3 text-xs">{card.date}</p>
                        </div>
                      ))}
                  </div>

                  <div className="w-[2px] rounded-xl bg-gray-300"></div>
        
                  <div className="flex flex-col space-y-20 bg-orange-400">
                    {experiences
                      .filter(card => card.position === 'right')
                      .map(card => (
                        <div key={card.id} className={`bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all shadow-md w-[500px] border-b-2 p-6 ${card.marginTop}`}>
                          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                          <div className=" flex items-center justify-start gap-2">
                            <p className="">{card.company_name}</p>

                            <Image src={card.logo} alt="company" width={60} height={60} />
                          </div>

                          <ul className='list-disc text-sm mt-2 leading-4 text-justify'>
                            {card.points.map((point, index) => (
                              <li key={index} className='leading-4 mb-2'>{point}</li>
                            ))}
                          </ul>
                          <p className="mt-3 text-xs">{card.date}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="w-11/12 md:w-10/12 m-auto py-5 flex items-center justify-center gap-x-4 md:gap-x-6 flex-wrap gap-y-3">
            {balls.map((images) => (
              <div className="h-12 md:h-24 w-12 md:w-24 rounded-full flex items-center justify-center" key={images.id}>
                <Image src={images.img} alt="AboutImg" width={100} height={126} className='w-full' />
              </div>
            ))}
          </div>

          <div className="bottom mt-20">
            <div className="heading bg-red flex items-center justify-center gap-3 mb-10">
              <h2 className="nanum mb-0 relative">My Approach<Image src="/Underline1.svg" className="absolute -bottom-1 right-0" alt="Fire" width={155} height={19} /></h2>
              <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
            </div>

            <div className="flex flex-col">

              <div className="cards flex items-center justify-center gap-x-4 w-full text-white flex-wrap mt-2">
                <div className="w-[340px] h-72 bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all border-b-2 p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="font-bold text-xl mb-5">Planning & Strategy</h2>
                    <p className="text-sm text-justify">We'll colaborate to map out your website's goal, target audience and key functionalities. We'll discuss things like site structure, navigation and content requirements.</p>
                  </div>
                </div>

                <Image src="/Frame.svg" alt="Frame" width={90} height={118} className="mt-5 block me-auto sm:hidden" />
                <div className="w-[340px] h-72 bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all border-b-2 p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="font-bold text-xl mb-5">Development & Updates</h2>
                    <p className="text-sm text-justify">Once we agree on the plan, I cue my lofi playlist and dive into problem solving & coding. From initial sketches to polished code, I keep you updated every step of the way.</p>
                  </div>
                </div>
                <Image
                  src="/Frame.svg"
                  alt="Frame"
                  width={90}
                  height={118}
                  className="transform scale-x-[-1] block ms-auto mt-5 sm:hidden"
                />
                <div className="w-[340px] h-72 bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all border-b-2 p-3 flex items-center justify-center mt-3">
                  <div className="">
                    <h2 className="font-bold text-xl mb-5">Development & Launch</h2>
                    <p className="text-sm text-justify">This is where the magic happens! Based on the approved design, I'll translate everthing into functional code, bulding your website from the ground up.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* gap */}
      <section className="gap bg-[#252536] w-full" >
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section >

      {/* projects */}
      <section className="Projects bg-[#252536] w-full py-5 pt-24" id='projects' >
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3  mb-10">
            <h2 className="nanum mb-0 relative">Projects <Image src="/Underline1.svg" className="absolute -bottom-1 right-0" alt="Fire" width={135} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <div className="w-full lg:w-7/12 mb-10">
            <p className="leading-5 text-white opacity-70 text-justify">Following projects showcases my skills and experience through real world Examples of my work. Each project is described with links to code repos and live demos in it. It reflects my ability to solve problems, work with different technologies and manage project efficiently.experience in Javascript, and expertise in frameworks like React, Next.js. I am a quick learner and collaborate closely with clients to create efficeint, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {
                (showAll ? projects : projects.slice(0, 6)).map((projData) => (
                  <div key={projData.id} className="card text-white w-[340px] md:w-[310px] lg:w-[270px] h-auto bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all mb-3">
                    <div className="img">
                      <a href={projData.link} target='_blank'>
                        <Image src={projData.img} alt="Projects" width={392} height={258} className='m-auto' loading='lazy' />
                      </a>
                    </div>
                    <div className="dets px-3 py-1 mt-4">
                      <h2 className="text-xl md:text-lg lg:text-base xl:text-xl font-semibold leading-5 mb-4">{projData.title}</h2>
                      <p className="text-xs md:text-xs xl:text-sm text-justify leading-4 mb-1">{projData.msg}</p>
                      <a href={projData.link} className='text-xs' target='_blank'>Visit Here</a>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="flex items-center justify-center my-6">
              <button className='btnBlue' onClick={toggleShow}>
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>
      </section >

      {/* gap */}
      <section className="gap bg-[#252536] w-full" >
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <Image src="/Vector2.svg" alt="Vector2" width={30} height={120} />
          <Image src="/pssst!.svg" alt="pssst" width={55} height={26} />
        </div>
      </section >

      {/*testimonials*/}
      {/* <section className="testimonials bg-[#252536] w-full py-5 pt-24" id='testimonials' >
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3  mb-20">
            <h2 className="nanum mb-0 relative">Testimonials <Image src="/Underline1.svg" className="absolute -bottom-2 right-1" alt="Fire" width={195} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <Swiper
            className="swiper-container pt-10 md:pt-40 mx-auto"
            modules={[Navigation, Pagination, A11y, Keyboard]}
            spaceBetween={50}
            slidesPerView={1}
            keyboard={true}
            navigation
          >
            {
              testimonials.map((data) => (
                <SwiperSlide className='pb-10' key={data.id}>
                  <div className="w-full md:w-4/6 m-auto">
                    <div className="flex flex-col items-center justify-center gap-7 md:gap-16 text-white">
                      <p className="text-center text-sm md:text-base text-t_grey">{data.msg}</p>
                      <div className="flex justify-center items-center gap-2 w-9/12">
                        <div className="w-3/12 flex justify-center items-center">
                          <Image src={data.img} width={92} height={92} alt="Testimonial" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                          <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1 capitalize">{data.name}</h3>
                          <h5 className='ml-1 text-xs mt-1'>{data.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>

          <div className="flex items-center justify-center mt-20 gap-5">
            <Image src='/encoderbytes.png' width={92} height={92} alt="companies" className='' />
            <Image src='/CoDev.png' width={92} height={92} alt="companies" className='' />
            <Image src='/navttc.png' width={92} height={92} alt="companies" className='' />
            <Image src='/teachRica.svg' width={92} height={92} alt="companies" className='' />
            <Image src='/smit.png' width={92} height={92} alt="companies" className='' />
            <Image src='/eblearninglab.png' width={92} height={92} alt="companies" className='' />
          </div>
        </div>
      </section > */}

      {/* gap */}
      <section className="gap bg-[#252536] w-full" >
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section >

      {/* hireme */}
      {/* <section className="hireme bg-[#252536] w-full py-10 pt-28" id='hire-me' >
        <div className="bg-[#6966FF] h-[355px] w-10/12 m-auto rounded-2xl relative flex flex-col items-center justify-center gap-10">
          <Image src="/Shining stars.svg" alt="ShiningStars" width={66} height={66} className='absolute -top-7 -right-6 z-10' />
          <Image src="/Big Circle.svg" alt="ShiningStars" width={789} height={304} className='absolute z-10' />
          <h2 className="text-center text-[28px] font-semibold tracking-widest z-20 leading-7 text-white">Have a project in mind? <br />Hire me on my freelance platforms.</h2>
          <div className="mt-10 flex items-center justify-center gap-2 z-20">
            <button className='btnGreen'>
              <a href="https://www.fiverr.com/munim_freelance" target='_blank'>Fiverr</a>
            </button>

            <button className='btnGreen'>
              <a href="">UpWork</a>
            </button>

            <button className='btnGreen'>
              <a href="">Toptal</a>
            </button>

            <button className='btnGreen'>
              <a href="">PeoplePerHour</a>
            </button>
          </div>
        </div>
      </section > */}

      {/* gap */}
      <section className="gap bg-[#252536] w-full" >
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <Image src="/Vector2.svg" alt="Vector2" width={30} height={120} />
          <Image src="/pssst!.svg" alt="pssst" width={55} height={26} />
        </div>
      </section >

      {/* contact */}
      {/* <section className="contact bg-[#252536] w-full py-5 pt-20" id='contact' >
        <div className="heading bg-red flex items-center justify-center gap-3 mb-14">
          <h2 className="nanum mb-0 relative">Contact Me<Image src="/Underline1.svg" className="absolute -bottom-1 right-0" alt="Fire" width={135} height={19} /></h2>
          <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
        </div>

        <div className="w-10/12 m-auto flex flex-col md:flex-row items-center justify-center gap-20">
          <div className=" w-full md:w-2/3 relative z-30">
            <form action="">
              <div className="flex justify-between items-center gap-2 md:gap-8 mb-4">
                <div className="flex flex-col items-start justify-center gap-1 w-6/12">
                  <label htmlFor="firstName" className='text-white'>First Name</label>
                  <input type="text" name="firstName" id="firstName" placeholder='First Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 w-6/12">
                  <label htmlFor="lastName" className='text-sm font-medium leading-6 text-white'>Last Name</label>
                  <input type="text" name="lastName" id="lastName" placeholder='Last Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className='text-sm font-medium leading-6 text-white'>Email</label>
                <input type="email" name="email" id="email" placeholder='Example@company.com' required className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' />
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="message" className='text-sm font-medium leading-6 text-white'>Message</label>
                <textarea name="message" id="message" className='h-40 w-full rounded-lg p-3 outline-none border-slate-400 border resize-none'></textarea>
              </div>

              <button className="btnBlue">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section > */}

      {/* gap */}
      {/* <section className="gap bg-[#252536] w-full" >
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section > */}
    </main >
  );
}