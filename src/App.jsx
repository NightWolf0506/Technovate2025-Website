import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Committees from "./sections/Committees.jsx";
import Gallery from "./sections/Gallery.jsx";
import Winners from "./sections/Winners.jsx";
import Footer from "./sections/Footer.jsx";
import GuideLines from "./sections/Guidelines.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import FormComp from "./components/FormComp.jsx"; // Adjust path if needed
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Control background scroll when modal is open
  useEffect(() => {
    const handleResize = () => {
      if (showRegisterModal) {
        document.body.style.overflow = "hidden"; // Disable scrolling on resize if modal is open
      } else {
        document.body.style.overflow = "unset"; // Restore scrolling
      }
    };

    // Initial resize check
    handleResize();

    // Add resize event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the resize event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showRegisterModal]); 

  useEffect(() => {
    // Show splash screen for 4 seconds, then load main content
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-hidden">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          {/* Add extra top padding to ensure the Hero section does not overlap the header */}
          <div className="pt-20 md:pt-28">
            <Hero onRegisterClick={() => setShowRegisterModal(true)} />
          </div>
          <About />
          <GuideLines />
          <Committees />
          <Winners />
          <Gallery />
          <Footer />
        </>
      )}

      {/* Render the modal using a React Portal */}
      {showRegisterModal &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 overflow-hidden"
            onClick={(e) => {
              // Close modal if clicking outside the modal content
              if (e.target === e.currentTarget) {
                setShowRegisterModal(false);
              }
            }}
          >
            <div className="my-0 container min-h-screen flex flex-col items-center justify-center"> {/* Add vertical margin to the modal container */}
            <ToastContainer limit={1}  style={{ zIndex: 9999 }} /> 
              <FormComp onClose={() => setShowRegisterModal(false)} />
            </div>
          </div>,
          document.getElementById("modal-root")
        )}
    </main>
  );
};

export default App;
