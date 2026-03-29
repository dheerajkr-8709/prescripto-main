import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-primary to-[#87A1FF] rounded-lg px-6 md:px-10 lg:px-20 relative overflow-hidden shadow-xl">
      {/* ------- Background Decoration ------- */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[-30px] left-[-30px] w-48 h-48 bg-black/5 rounded-full blur-[60px]"></div>

      {/* ------- Left Side ------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] relative z-10">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight drop-shadow-sm">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light mt-2">
          <img className="w-28 drop-shadow-md" src={assets.group_profiles} alt="" />
          <p className="opacity-90">
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-10 py-4 rounded-full text-primary text-sm font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ------- Right Side ------- */}
      <div className="md:w-1/2 relative z-10">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg drop-shadow-2xl"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  )
}

export default Header
