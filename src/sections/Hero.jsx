import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";

const Hero = ({ onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-05-21");
      const currentDate = new Date();
      const difference = eventDate - currentDate;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center lg:my-16 mb-4 px-6 sm:px-12 md:px-24 lg:px-32 md:pt-16 lg:pt-0 sm:pt-4">
      <Element name="hero" className="w-full flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        {/* Left Side: Text Content (70%) */}
        <div className="w-full lg:w-[70%] text-center lg:text-left ">
          <div className="text-2xl sm:text-3xl md:text-3xl font-bold">
            AMITY SCHOOL OF ENGINEERING & TECHNOLOGY
          </div>
          <div className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
            Amity University Uttar Pradesh
          </div>
          <div className="text-base sm:text-lg md:text-xl mt-2 mb-6">Presents</div>
          <div className="relative text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-cyan-500 my-4 animate-brightPulse">
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-radialLight"></div>
              <span className="relative z-10 shineText">Technovate 2025</span>
            </div>
            <div className="lg:hidden relative flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}/lastlo.png`}
                alt="Technovate 2025"
                className="w-84 h-84 lg:hidden rounded-full object-cover shadow-lg transition-all duration-500"
              />
              <div className="absolute w-full h-full bg-cyan-500 opacity-15 blur-3xl rounded-full"></div>
            </div>
          </div>
          <div className="text-base sm:text-lg md:text-2xl mt-2 mb-4 text-yellow-300">
            Poster and Project Presentation
          </div>
          <div className="text-lg sm:text-xl font-bold mb-4">Event starts in</div>
          <div className="countdown-timer flex space-x-2 sm:space-x-4 text-center justify-center lg:justify-start">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-p2 p-3 sm:p-4 rounded-lg shadow-lg w-16 sm:w-20">
                <div className="text-2xl sm:text-3xl font-bold">{value}</div>
                <div className="text-xs sm:text-sm capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Event Image with Glow Effect (30%) */}
        <div className="w-full lg:w-[30%] flex flex-col items-center mt-1 lg:mt-0 lg:items-start  ">
          <div className="relative ">
            <img
              src={`${import.meta.env.BASE_URL}/images/offerr.png`}
              alt="Technovate 2025"
              className="w-30 h-60   lg:w-70 lg:h-80 shadow-glow relative z-10"
            />
          </div>
          <button
            onClick={onRegisterClick}
            className="mt-6 bg-p2 hover:text-yellow-300 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-20 text-lg transition duration-200 shadow-glow hover:shadow-glow-hover lg:ml-12 "
          >
            Register Now
          </button>
        </div>
      </Element>
    </section>
  );
};

export default Hero;