"use client"
import Image from 'next/image';
// Icons
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

// data
import { about, experiences, projects, testimonials } from "./data";

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
              <div className="flex flex-col items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#6966FF]"></div>
                <div className="w-1 sm:h-48 h-40 violet-gradient"></div>
              </div>
              <div className="">
                <h1 className="font-bold text-[80px]">HI, I am <span className="text-[#6966FF] relative">Munim <Image src="/Sparkle.svg" alt="Logo" width={82} height={80} className="absolute -right-12 -top-5" /></span></h1>
                <p className="text-4xl">I develop user interfaces and web<br />applications using <span className="relative">React-Js and Next-Js<Image src="/Vector.svg" alt="Logo" width={368} height={25} className="absolute right-0 -bottom-7" /></span></p>
              </div>
            </div>

          </div>
          {/* <div className="flex items-center w-full justify-center mt-1 pb-12">
            <Image src="/bg_main (1).png" alt="Logo" width={516} height={480} />
          </div> */}

          <div className="flex items-center w-8/12 m-auto justify-end -mt-14 pb-10">
            <Image src="/bg_main (1).png" alt="Logo" width={516} height={480} />
          </div>

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
      <section className="about bg-[#252536] w-full py-5 pt-24" id='about'>
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3  mb-10">
            <h2 className="nanum mb-0 relative">About <Image src="/Underline1.svg" className="absolute bottom-2 right-0" alt="Fire" width={105} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <div className="w-1/2 mb-10">
            <p className="leading-5 text-white opacity-70 text-justify">I'am a skilled front-end developer with experience<br /> in Javascript, and expertise  in frameworks like React, <br /> Next.js. I am a quick learner and collaborate closely with clients to create efficeint, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>

            <div className="links flex items-center justify-start text-2xl gap-2 mt-3 text-white">
              <a href="https://www.linkedin.com/in/muhammad-munim1" target='_blank'>
                <IoLogoLinkedin />
              </a>
              <a href="https://github.com/M-Munim" target='_blank'>
                <FaGithub />
              </a>
              <a href="mailto:muhammadmunimoff330@gmail.com">
                <HiOutlineMail />
              </a>
              <button className="btnBlue text-base">
                <a href="/CV_Me.pdf" target='_blank'>Download CV</a>
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            {about.map((aboutData) => (
              <div className="flex flex-col items-center justify-around text-white w-80 border rounded-lg h-80 cursor-pointer shadow-sm shadow-white hover:scale-95 transition-all" key={aboutData.id}>
                <Image src={aboutData.img} alt="AboutImd" width={255} height={126} />

                <h2 className="">{aboutData.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gap */}
      <section className="gap bg-[#252536] w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section>

      {/* Work */}
      <section className="work-approach bg-[#252536] w-full py-5 pt-20" id='work'>
        <div className="w-10/12 m-auto">
          <div className="top">
            <div className="heading bg-red flex items-center justify-center gap-3 mb-10">
              <h2 className="nanum mb-0 relative">Work <Image src="/Underline1.svg" className="absolute bottom-2 right-0" alt="Fire" width={105} height={19} /></h2>
              <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className="flex justify-center items-centerd py-5 text-white">
                <div className="flex items-stretch space-x-4">
                  {/* Left Column */}
                  <div className="flex flex-col space-y-20 pb-5">
                    {experiences
                      .filter(card => card.position === 'left')
                      .map(card => (
                        <div key={card.id} className={`bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all shadow-md w-[500px] border-b-2 p-6  ${card.marginTop}`}>
                          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                          <div className=" flex items-center justify-start gap-2">
                            <p className="opacity-70">{card.company_name}</p>
                            <Image src={card.logo} alt="company" width={60} height={60} />
                          </div>

                          {card.points.map((point) => (
                            <ul className='list-disc text-sm mt-2 leading-4 text-justify'>
                              <li className='leading-4'>{point}</li>
                            </ul>
                          ))}
                          <p className="mt-3 text-xs">{card.date}</p>
                        </div>
                      ))}
                  </div>

                  {/* Vertical Line */}
                  <div className="w-[2px] rounded-xl bg-gray-300"></div>

                  {/* Right Column */}
                  <div className="flex flex-col space-y-20">
                    {experiences
                      .filter(card => card.position === 'right')
                      .map(card => (
                        <div key={card.id} className={`bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all shadow-md w-[500px] border-b-2 p-6 ${card.marginTop}`}>
                          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                          <div className=" flex items-center justify-start gap-2">
                            <p className="">{card.company_name}</p>

                            <Image src={card.logo} alt="company" width={60} height={60} />
                          </div>

                          {card.points.map((point) => (
                            <ul className='list-disc text-sm mt-2 leading-4 text-justify'>
                              <li className='leading-4'>{point}</li>
                            </ul>
                          ))}
                          <p className="mt-3 text-xs">{card.date}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>



            </div>
          </div>

          <div className="bottom mt-20">
            <div className="heading bg-red flex items-center justify-center gap-3 mb-10">
              <h2 className="nanum mb-0 relative">My Approach<Image src="/Underline1.svg" className="absolute -bottom-1 right-0" alt="Fire" width={155} height={19} /></h2>
              <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
            </div>

            <div className="relative flex flex-col">
              <Image src="/Frame.svg" alt="Frame" width={120} height={138} className="absolute top-16 left-16" />
              <div className="w-full border-b-2 relative overflow-hidden h-[440px]">
                <div className="w-80 h-80 rounded-full border border-dashed absolute -bottom-40 left-[17%]"></div>
                <div className="w-[620px] h-[620px] rounded-full border border-dashed absolute -bottom-[325px] left-[17%]"></div>
                <div className="w-[850px] h-[850px] rounded-full border border-dashed absolute -bottom-[420px] left-[17%]"></div>
              </div>

              <div className="cards flex items-center justify-end gap-4 mt-2 w-full text-white">
                <div className="w-72 h-80 bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all border-b-2 p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="font-bold">Planning & Strategy</h2>
                    <p className="">We'll colaborate to map out your website's goal, target audience and key functionalities. We'll discuss things like site structure, navigation and content requirements.</p>
                  </div>
                </div>

                <div className="w-72 h-80 bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all border-b-2 p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="font-bold">Development & Progress Update</h2>
                    <p className="">Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.</p>
                  </div>
                </div>
                <div className="w-72 h-80 bg-[#2d2d41] hover:bg-[#2d2d41c3] transition-all border-b-2 p-3 flex items-center justify-center">
                  <div className="">
                    <h2 className="font-bold">Development & Launch</h2>
                    <p className="">This is where the magic happens! Based on the approved design, I'll translate everthing into functional code, bulding your website from the ground up.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gap */}
      <section className="gap bg-[#252536] w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section>

      {/* projects */}
      <section className="Projects bg-[#252536] w-full py-5 pt-24" id='projects'>
        <div className="w-10/12 m-auto">
          <div className="heading bg-red flex items-center justify-center gap-3  mb-10">
            <h2 className="nanum mb-0 relative">Projects <Image src="/Underline1.svg" className="absolute -bottom-1 right-0" alt="Fire" width={135} height={19} /></h2>
            <Image src="/Fire.svg" alt="Fire" width={60} height={60} />
          </div>

          <div className="w-1/2 mb-10">
            <p className="leading-5 text-white opacity-70 text-justify">Following projects showcases my skills and experience<br />  through real world Examples of my work. Each project is<br />  described with links to code repos and live demos in it. It reflects my ability to solve problems, work with different technologies and manage project efficiently.experience in Javascript, and expertise in frameworks like React, Next.js. I am a quick learner and collaborate closely with clients to create efficeint, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {
                (showAll ? projects : projects.slice(0, 3)).map((projData) => (
                  <div key={projData.id} className="card bg-pink-700 w-[32%]">
                    <div className="img">
                      <Image src={projData.img} alt="Projects" width={392} height={258} className='m-auto' />
                    </div>
                    <div className="dets px-6 py-1">
                      <h2 className="">Pharmapedia Web</h2>
                      <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, qui!</p>
                      <a href="">Visit</a>
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
      </section>

      {/* gap */}
      <section className="gap bg-[#252536] w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <Image src="/Vector2.svg" alt="Vector2" width={30} height={120} />
          <Image src="/pssst!.svg" alt="pssst" width={55} height={26} />
        </div>
      </section>

      {/*testimonials*/}
      <section className="testimonials bg-[#252536] w-full py-5 pt-24" id='testimonials'>
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
          // onSlideChange={() => console.log('slide change')}
          >
            {
              testimonials.map((data) => (
                <SwiperSlide className='pb-10' key={data.id}>
                  <div className="w-full md:w-4/6 m-auto" >
                    <div className="flex flex-col items-center justify-center gap-7 md:gap-16">
                      <p className="text-center text-sm md:text-xl text-t_grey">{data.msg}</p>
                      <div className="flex justify-center items-center gap-2 w-9/12">
                        <div className="w-3/12 flex justify-center items-center">
                          <Image src={data.img} width={92} height={92} alt="Testimonial" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0 md:gap2 w-9/12">
                          <h3 className="font-bold text-xl md:text-3xl leading-10 pl-1  capitalize">{data.name}</h3>
                          <h5>{data.title}</h5>
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
      </section>

      {/* gap */}
      <section className="gap bg-[#252536] w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section>

      {/* hireme */}
      <section className="hireme bg-[#252536] w-full py-10 pt-28" id='hire-me'>
        <div className="bg-[#6966FF] h-[355px] w-10/12 m-auto rounded-2xl relative flex flex-col items-center justify-center gap-10">
          <Image src="/Shining stars.svg" alt="ShiningStars" width={66} height={66} className='absolute -top-7 -right-6 z-10' />
          <Image src="/Big Circle.svg" alt="ShiningStars" width={789} height={304} className='absolute z-10' />
          <h2 className="text-center text-3xl font-semibold tracking-widest z-20">Have a project in mind? <br /> Let’s get to work.</h2>
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
      </section>

      {/* gap */}
      <section className="gap bg-[#252536] w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <Image src="/Vector2.svg" alt="Vector2" width={30} height={120} />
          <Image src="/pssst!.svg" alt="pssst" width={55} height={26} />
        </div>
      </section>

      {/* contact */}
      <section className="contact w-full py-5 pt-28" id='contact'>
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
      </section>

      {/* gap */}
      <section className="gap bg-[#252536] w-full">
        <div className="w-10/12 m-auto h-32 flex items-center justify-start gap-3">
          <div className="w-full border border-dashed"></div>
        </div>
      </section>
    </main >
  );
}