import { Element } from "react-scroll";

const Committees = () => {
  return (
    <section className="bg-s1/50 py-12 relative">
      <Element name="Committees" className="container mx-auto px-6 md:px-12">
        {/* Committees Container */}
        <div className="relative flex flex-col lg:flex-row lg:justify-center lg:gap-8 gap-2">
          {/* Left Side: Chair and Core Committee Combined */}
          <div className="w-full lg:w-5/12 bg-s2/60 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-s1/40">
            {/* Chair Section */}
            <h3 className="text-yellow-400 text-3xl font-bold mb-6 text-center">
              Chair
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 text-center">
              <div className="p-5 bg-s1/60 rounded-xl border border-white/10 flex items-center gap-4 md:hover:scale-105">
                {/* Chair Image */}
                <img
                  src={`${import.meta.env.BASE_URL}/images/logos/circularhoi.jpg`} // Updated path
                  alt="Prof. (Dr.) Manoj Kumar Pandey"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col items-start">
                  <p className="text-lg font-semibold text-white">Prof. (Dr.) Manoj Kumar Pandey</p>
                  <p className=" text-gray-300 text-xs">Director - Amity School of Engineering and Technology</p>
                </div>
              </div>
            </div>

            {/* Core Committee Section */}
            <h3 className="text-yellow-400 text-3xl font-bold mt-8 mb-6 text-center">
              Core Committee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 text-center">
              {[
                {
                  name: "Prof. (Dr.) Madhuri Kumari",
                  title: "Dy. Director - Placement and Industry Relations, ASET",
                  image: `${import.meta.env.BASE_URL}/images/logos/crccircular.jpg`, // Updated path
                },
                {
                  name: "Prof. (Dr.) Nitasha Hasteer",
                  title: "Professor & Head - Department of IT, ASET",
                  image: `${import.meta.env.BASE_URL}/images/logos/circularhod.png`, // Updated path
                },
              ].map((member, index) => (
                <div key={index} className="p-5 bg-s1/60 rounded-xl border border-white/10 flex items-center md:hover:scale-105 gap-4">
                  {/* Member Image */}
                  <img
                    src={member.image} // Dynamic image path
                    alt={member.name} // Dynamic alt text
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold text-white">{member.name}</p>
                    <p className="text-xs text-gray-300">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-s2 mx-4"></div>

          {/* Right Side: Organizing Committee */}
          <div className="w-full lg:w-5/12 bg-s2/60 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-s1/40">
            <h3 className="text-yellow-400 text-3xl font-bold mb-6 text-center">
              Organizing Committee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-center ">
              {[
                "Dr Sindhu Hak Gupta",
                "Dr Vasudha Vashist",
                "Dr Anjali Jain",
                "Dr Meeta Sharma",
                "Dr Kamlesh Pandey",
                "Dr Richa Sharma",
                "Dr Prakhar Duggal",
                "Dr Jitendra S Jadon",
              ].map((name, index) => (
                <div key={index} className="p-5 bg-s1/60 rounded-xl border border-white/10 md:hover:scale-105">
                  <p className="text-lg font-semibold text-white">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Committees;