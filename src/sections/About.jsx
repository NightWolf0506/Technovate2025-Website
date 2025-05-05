import { Element } from "react-scroll";

const About = () => {
  return (
    <section>
      <Element name="About">
        <div className="container">
          <div className="relative flex flex-col border-2 border-s rounded-7xl md:overflow-hidden max-md:border-none max-md:rounded-none max-md:gap-3">
            <div className="relative md:px-10 px-5 md:pb-10 pb-5 g7 border-2 border-s3 max-md:rounded-3xl max-md:flex-320">
              {/* Yellow Heading: About Technovate 2025 */}
              <p className="text-yellow-500 font-bold text-3xl md:text-4xl lg:text-4xl mb-2 mt-6 text-center">
                About Technovate 2025
              </p>

              {/* Description */}
              <p className="mb-11 body-1 max-md:mb-8 max-md:body-3 text-justify">
                Technovate is an annual event organized by Amity School of Engineering and Technology. It aims to select brilliant students for research projects, promote interdisciplinary research, and identify innovative ideas for patents and publications. The event also appreciates student innovators and motivates them to focus on research and innovation.
              </p>
              <p className="mb-11 body-1 max-md:mb-8 max-md:body-3 text-justify">
                All UG/PG/Integrated Engineering program students are invited. For the submission of project, kindly contact your Programme Leader. All participants will get participation certificates.
              </p>

              {/* Event Details */}
              <div className="mb-11">
                <p className="text-yellow-500 font-bold text-2xl md:text-3xl mb-4 text-center">
                  Event Details
                </p>
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-2">
                  <p className="body-1 flex items-center gap-2 sm:mb-0">
                    <img
                      src={`${import.meta.env.BASE_URL}/images/logos/addres.png`}
                      alt="Location"
                      className="h-5 w-auto"
                    />
                    <span>E2 Auditorium</span>
                  </p>
                  <p className="body-1 flex items-center gap-2">
                    <img
                      src={`${import.meta.env.BASE_URL}/images/logos/calendar.png`}
                      alt="Date"
                      className="h-5 w-auto"
                    />
                    <span>Wed 21st - Thu 22nd May 2025</span>
                  </p>
                  <p className="body-1 flex items-center gap-2">
                    <img
                      src={`${import.meta.env.BASE_URL}/images/logos/gharii.png`}
                      alt="Time"
                      className="h-5 w-auto"
                    />
                    <span>10 am - 5 pm</span>
                  </p>
                </div>
              </div>

              {/* Highlights Section */}
              <div className="mb-11">
                <p className="text-yellow-500 font-bold text-2xl md:text-3xl mb-4 text-center">
                  Highlights
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: 1,
                      icon: `${import.meta.env.BASE_URL}/images/detail-2.png`,
                      title: "Showcase Technical Skills",
                    },
                    {
                      id: 2,
                      icon: `${import.meta.env.BASE_URL}/images/detail-2.png`,
                      title: "Facilitate Peer Learning",
                    },
                    {
                      id: 3,
                      icon: `${import.meta.env.BASE_URL}/images/detail-2.png`,
                      title: "Get Industry Engagement",
                    },
                    {
                      id: 4,
                      icon: `${import.meta.env.BASE_URL}/images/detail-2.png`,
                      title: "Provide Networking Opportunities",
                    },
                    {
                      id: 5,
                      icon: `${import.meta.env.BASE_URL}/images/detail-2.png`,
                      title: "Explore Innovation, Patent & Industry ready products",
                    },
                    {
                      id: 6,
                      icon: `${import.meta.env.BASE_URL}/images/detail-2.png`,
                      title: "Encourage excellence and recognition",
                    },
                  ].map(({ id, icon, title }) => (
                    <div key={id} className="flex items-center gap-4">
                      <img src={icon} alt={title} className="size-10" />
                      <p className="body-1">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;