import { useEffect } from "react";
import { motion } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000); // Hide after 4 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 3, filter: "blur(25px)" }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 1.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center mt-[-8vh] sm:mt-[-8vh] md:mt-[-6vh]"
      >

        <motion.img
          // src="/images/logos/amitysinglelogo.png"
          src={`${import.meta.env.BASE_URL}/images/logos/amitysinglelogo.png`} alt="Logo"

          // alt="Logo"
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4"
        />

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-center px-4"
        >
          Amity University<br/> <span className="text-yellow-300">Presents</span>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
