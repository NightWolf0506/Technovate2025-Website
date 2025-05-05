import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [isOpen, hasScrolled, isMobile]);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      isDynamic={true}
      activeClass={"nav-active"}
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-yellow-300 max-lg:my-4 max-lg:h5 "
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "lg:py-4 py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="lg:mx-18 md:mx-8 xl:mx-24 flex h-14 items-center max-lg:px-5">
        <div className="lg:hidden flex justify-between w-full items-center gap-2 ml-0">
          <LinkScroll
            to="hero"
            offset={-250}
            spy
            smooth
            isDynamic={true}
            className="lg:hidden cursor-pointer z-2"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={`${import.meta.env.BASE_URL}/images/logos/amitysinglelogo.png`}
              width={65}
              height={55}
              alt="logo"
            />
          </LinkScroll>
          <div className="lg:hidden cursor-pointer z-2 text-yellow-300 font-bold text-6xl text-center w-full whitespace-nowrap max-lg:text-5xl max-md:text-[1.6rem] animate-glow">
            Technovate 2025
          </div>
          <button
            className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center border-blue-600"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img
              src={`${import.meta.env.BASE_URL}/images/${isOpen ? "close" : "hamburger"}.svg`}
              alt="magic"
              className="size-3.5 object-contain"
            />
          </button>
        </div>

        <div
          className={clsx(
            "w-full lg:relative",
            "max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:shadow-lg",
            "max-lg:transition-opacity max-lg:duration-500",
            isOpen ? "max-lg:opacity-100 max-lg:visible" : "max-lg:opacity-0 max-lg:invisible"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <li className="nav-logo">
                    <LinkScroll
                      to="hero"
                      offset={-250}
                      spy
                      smooth
                      isDynamic={true}
                      className={clsx(
                        "max-lg:hidden transition-transform duration-500 cursor-pointer"
                      )}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}/images/logos/amitysinglelogo.png`}
                        width={65}
                        height={55}
                        alt="logo"
                      />
                    </LinkScroll>
                  </li>

                  <NavLink title="About" />
                  <div className="dot" />
                  <NavLink title="Guidelines" />
                  <div className="dot" />
                  <NavLink title="Committees" />
                  <div className="dot" />
                  <NavLink title="Past Winners" />
                  <div className="dot" />
                  <NavLink title="Gallery" />
                  <div className="dot" />
                  <NavLink title="Contact Us" />
                  <li className="nav-logo">
                    <LinkScroll
                      to="hero"
                      offset={-250}
                      spy
                      smooth
                      isDynamic={true}
                      className={clsx(
                        "max-lg:hidden transition-transform duration-500 cursor-pointer"
                      )}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}/lastlo.png`}
                        width={140}
                        height={125}
                        alt="logo"
                      />
                    </LinkScroll>
                  </li>
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src={`${import.meta.env.BASE_URL}/images/bg-outlines.svg`}
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src={`${import.meta.env.BASE_URL}/images/bg-outlines-fill.png`}
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;