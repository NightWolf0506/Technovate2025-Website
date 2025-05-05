import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Gallery() {
  const slides = [
    `${import.meta.env.BASE_URL}/images/abc1.jpg`,
    `${import.meta.env.BASE_URL}/images/abc2.jpg`,
    `${import.meta.env.BASE_URL}/images/abc3.jpg`,
    `${import.meta.env.BASE_URL}/images/abc4.jpg`,
    `${import.meta.env.BASE_URL}/images/abc5.jpg`,
  ];

  const [current, setCurrent] = useState(0);

  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="Gallery" className="relative z-2 py-6 md:py-12 lg:py-12 bg-s1/50 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-4 text-yellow-400">
          GALLERY
        </h2>
        <p className="text-lg md:text-xl mb-4">Highlights of 2024</p>

        {/* ✅ Responsive Image Container */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden rounded-xl shadow-lg bg-black flex items-center justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((s, index) => (
              <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
                <img
                  src={s}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -translate-y-1/2">
            <button
              onClick={previousSlide}
              className="text-4xl text-yellow-400 bg-black/50 p-2 rounded-full lg:hover:bg-yellow-400 lg:hover:text-blue-950"
            >
              <BsFillArrowLeftCircleFill />
            </button>
            <button
              onClick={nextSlide}
              className="text-4xl text-yellow-400 bg-black/50 p-2 rounded-full lg:hover:bg-yellow-400 lg:hover:text-blue-950"
            >
              <BsFillArrowRightCircleFill />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 w-full flex justify-center gap-3">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 cursor-pointer rounded-full transition-all ${
                  i === current ? "bg-yellow-400 scale-125" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <button
          onClick={() => window.location.href = "https://amityedu96491-my.sharepoint.com/personal/vkumar5_amity_edu/_layouts/15/onedrive.aspx?ct=1738922423432&or=OWA%2DNT%2DMail&ga=1&id=%2Fpersonal%2Fvkumar5%5Famity%5Fedu%2FDocuments%2F30%2D05%2D2024%20Technovate%20Annual%20Engineering%20Project%20%26%20Poster%20Presentation%2FDSC%5F9736%2EJPG&parent=%2Fpersonal%2Fvkumar5%5Famity%5Fedu%2FDocuments%2F30%2D05%2D2024%20Technovate%20Annual%20Engineering%20Project%20%26%20Poster%20Presentation"}
          className="mt-8 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
        >
          View More Images
        </button>
      </div>
    </section>
  );
}
