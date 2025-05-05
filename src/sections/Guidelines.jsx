import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const GuideLines = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="Guidelines" className="relative">
        <div className="container relative z-2 py-11">
          <div>
            <h3 className="h3 max-md:h5 max-lg:w-full mb-7 text-p4 text-center">
              Guidelines for Preparing Technical Poster for <br />
              <span className="block text-center">Technovate</span>
            </h3>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block ">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img
                src={`${import.meta.env.BASE_URL}/images/GuideLinesLogo.png`}
                alt="logo"
                className="size-2/3 ml-1"
              />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <div key={item.id} className="relative group">
                  <FaqItem item={item} index={index} />
                  {/* Tooltip */}
                  <div className="absolute bottom-full right-0 transform translate-y-[-4px] bg-gray-800/30 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tap to expand
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <div key={item.id} className="relative group">
                  <FaqItem item={item} index={halfLength + index} />
                  {/* Tooltip */}
                  <div className="absolute bottom-full right-0 transform translate-y-[-4px] bg-gray-800/30 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tap to expand
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden " />
        </div>
      </Element>
    </section>
  );
};

export default GuideLines;