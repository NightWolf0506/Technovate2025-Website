import { Element } from "react-scroll";
import { useState } from "react";

const Winners = () => {
  const [expanded, setExpanded] = useState({
    2025: false,
    2024: false,
    2023: false,
  });

  const toggleExpand = (year) => {
    setExpanded((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  const winners2023 = {
    departments: [
      "CE",
      "ECE",
      "AI",
      "EEE",
      "ME",
      "IT",
      "IT",
      "CSE",
      "CSE",
    ],
    projects: [
      "Seismic Analysis of Timber Structure in Zone III and V",
      "Ultrasonic based Oil Monitoring System",
      "Exploring the potential of conversational AI for supporting Children with Autism",
      "Design and Development of Automatic cleaning system for split AC",
      "Hydrogen powered Sports Car",
      "Malware detection using DEEP Learning",
      "Tampered image detection using convolutional neural networks",
      "StoryGenAI: A Generative Model for Genre-Keyword Based Story Generation",
      "IOT based Smart Pacifier for infant",
    ],
    names: [
      "Abdul Dhaniyal, Sobia Showkat, Rather Suhail Amin",
      "Sidharth Sahni, Rajat Singh Kohli",
      "Kamad Saxena, Ishan Kathuria",
      "Tushar Tomar, Aman Kumar",
      "Kaushal",
      "Mridul Vohra, Anushka Tiwari, Ayush Jayaswal",
      "Raghav Gupta, Aditya Nagyal, Nikhil",
      "Leah Khan, Vibhu Gupta, Srishti Bedi",
      "Amandeep, Arnav Tiwari, Bhuvan Luthra, Ayush",
    ],
  };

  const winners2024 = {
    departments: [
      "IT",
      "IT",
      "IT",
      "CE",
      "ECE",
      "ECE",
      "AI",
      "AI",
      "AI",
      "EEE",
      "EEE",
      "EEE",
      "ME",
      "ME",
      "ME",
      "CSE",
      "CSE",
    ],
    projects: [
      "Quantum-Driven Signal Processing for Classical Communication Enhancement",
      "Crime Scene Analysis using Object Detection",
      "Interactive Feedback Portal: Unveiling Emotions and Gestures for Enhanced Service Understanding",
      "To study and analyze the different aspects of strength in eco concrete with materials marble and recycled aggregate",
      "Elevating Security Through AI-Driven Embedded Hardware Mobile Robotics",
      "Deep learning methods for Schizophrenia detection using EEG Signals",
      "Multi-Sensory Stress Detection Systems",
      "Leveraging sentiment features of lyrics for emotive music recommendation",
      "Design and Implementation of an advanced temperature control system for a maglev transport",
      "Design of IOT enabled gesture controlled bionic arm",
      "Design & Development of wired rover for inspection and maintenance of pipelines",
      "Analysis of a Concentrated Solar Power-Photovoltaic (CSP-PV) Based Power Generation Plant",
      "Moist Air Condensation Enhancement Via Super-Hydrophobic Surfaces",
      "Design of Automobile Spoiler and its Aerodynamic Analysis on Automobile Traction",
      "Symptoms Driven Disease Risk assessment using AI Approach",
      "Predicting Cancer and Risk Assessment using Artificial intelligence",
      "Analysis and Detection of Parkinson's disease using machine learning",
    ],
    names: [
      "Ayush Kumar Sharan, Alwin Philip",
      "Dhairya Dhingra, Parth Sharma, Aditi Sahai",
      "Siddharth Tulli, Mahakpreet Kaur Virdi, Avasyu Mishra",
      "Shafaque, Chirag Nagpal",
      "Mehul Chawla, Rishab Garg",
      "Sunidhi Singh, Shrishti Singh",
      "Hitesh, Nikita",
      "Gauri Tyagi, Avni",
      "Vihaan Ravishankar, Md Ibrahim",
      "Akshat Pardeshi, Akshit Tyagi",
      "Aditya Chaubey, Shivansh Binani",
      "Atif Irshad and Divyanshu Taxali",
      "Apoorva Singh",
      "Dhruv Bansal and Nishant Bhosale",
      "Anisha Sharma, Smarth Gupta",
      "Param Verma, Pragya Pandey",
      "Dhwani Vashisth, Ipsha Gupta",
    ],
  };

  return (
    <section>
      <Element
        name="Past Winners"
        className="g7 relative pb-32 pt-12 max-lg:pb-24 max-md:py-8"
      >
        <div className="container">
          <h2 className="text-yellow-500 font-bold text-3xl md:text-3xl lg:text-5xl mt-0 mb-6 text-center ">
            Proud Winners
          </h2>

          {/* Technovate 2025
          <div className="mb-6">
            <button
              onClick={() => toggleExpand(2025)}
              className="w-full flex justify-between items-center bg-s1 p-4 rounded-lg shadow-md"
            >
              <span className="font-bold text-lg">Technovate 2025 - Winners</span>
              <span className="text-xl">{expanded[2025] ? "-" : "+"}</span>
            </button>
            {expanded[2025] && (
              <div className="mt-4 p-4 bg-s2 rounded-lg">
                <p className="text-center text-gray-600">
                  We hope you make it here! :)
                </p>
              </div>
            )}
          </div> */}

          {/* Technovate 2024 */}
          <div className="mb-6">
            <button
              onClick={() => toggleExpand(2024)}
              className="w-full flex justify-between items-center bg-s1 p-4 rounded-lg shadow-md"
            >
              <span className="font-bold text-lg">Technovate 2024 - Winners</span>
              <span className="text-xl">{expanded[2024] ? "-" : "+"}</span>
            </button>
            {expanded[2024] && (
              <div className="mt-4 p-4 bg-s2 rounded-lg overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="font-bold text-left p-2">Dept.</th>
                      <th className="font-bold text-left p-2">Winning Project Title</th>
                      <th className="font-bold text-left p-2">Winners Names</th>
                    </tr>
                  </thead>
                  <tbody>
                    {winners2024.departments.map((dept, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-2">{dept}</td>
                        <td className="p-2">{winners2024.projects[index]}</td>
                        <td className="p-2">{winners2024.names[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Technovate 2023 */}
          <div className="mb-6">
            <button
              onClick={() => toggleExpand(2023)}
              className="w-full flex justify-between items-center bg-s1 p-4 rounded-lg shadow-md"
            >
              <span className="font-bold text-lg">Technovate 2023 - Winners</span>
              <span className="text-xl">{expanded[2023] ? "-" : "+"}</span>
            </button>
            {expanded[2023] && (
              <div className="mt-4 p-4 bg-s2 rounded-lg overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="font-bold text-left p-2">Dept.</th>
                      <th className="font-bold text-left p-2">Winning Project Title</th>
                      <th className="font-bold text-left p-2">Winners Names</th>
                    </tr>
                  </thead>
                  <tbody>
                    {winners2023.departments.map((dept, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-2">{dept}</td>
                        <td className="p-2">{winners2023.projects[index]}</td>
                        <td className="p-2">{winners2023.names[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Winners;