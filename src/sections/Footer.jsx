import { socials } from "../constants/index.jsx";
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitch, FaTwitter } from "react-icons/fa"; // Import Instagram icon

const Footer = () => {
  // Social media links
  const socialMediaLinks = [
    {
      name: "Facebook",
      // icon: `${import.meta.env.BASE_URL}/images/logos/Facebooklogo.png`,
      icon: <FaFacebook className="w-8 h-8 text-white" />,
      link: "https://www.facebook.com/amityuni/",
    },
    {
      name: "Twitter",
      icon: `${import.meta.env.BASE_URL}/images/logos/twitterxlogo.png`,
      link: "https://x.com/AmityUni/",
    },
    {
      name: "LinkedIn",
      // icon: `${import.meta.env.BASE_URL}/images/logos/linkedinlogo.png`,
      icon: <FaLinkedinIn className="w-8 h-8 text-white" />,
      link: "https://www.linkedin.com/school/amity-university/posts/?feedView=all",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-8 h-8 text-white" />, // Use React Icon for Instagram
      link: "https://www.instagram.com/p/C7ln-n3xSBw/?img_index=1",
    },
  ];

  return (
    <footer id="Contact Us" className="bg-black-100 text-white py-10">
      <div className="container">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section: Social Media Icons */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            {/* Social Media Icons */}
            <div className="flex gap-6 mb-4">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon hover:opacity-80 transition-opacity"
                >
                  {typeof social.icon === "string" ? (
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-7 h-7 object-contain"
                    />
                  ) : (
                    social.icon // Render React Icon for Instagram
                  )}
                </a>
              ))}
            </div>

            {/* Text below social media icons */}
            <p className="text-p5 opacity-80 text-center md:text-left">
              Connect with our social links to stay updated!
            </p>
          </div>

          {/* Vertical Line (Hidden on Mobile) */}
          <div className="hidden md:block w-px bg-gray-700 mx-4"></div>

          {/* Right Section: Address, Phone, Email */}
          <div className="flex-1 flex flex-col items-start">
            {/* Address */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}/images/logos/addres.png`}
                alt="Address"
                className="w-auto h-6"
              />
              <p className="text-p5 opacity-80">
                Amity University, Sector 125 Noida, Uttar Pradesh, 201313
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}/images/logos/phonelogo.png`}
                alt="Phone"
                className="w-auto h-6"
              />
              <p className="text-p5 opacity-80">0120-2445252 / 4713600</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}/images/logos/emaillogo.png`}
                alt="Email"
                className="w-auto h-6"
              />
              <p className="text-p5 opacity-80">aset@amity.edu</p>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-p5 opacity-80">
            Copyright © Amity University Noida 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;