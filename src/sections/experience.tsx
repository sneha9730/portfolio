import { useState } from "react";

const experiences = [
  {
    company: "CBIT Open Source Community",
    role: "Joint Secretary",
    duration: "Jan 2024 - Present",
    location: "CBIT - Hyderabad",
    link: "https://cbitosc.github.io/",
    tasks: "I actively contributed by organizing events like hackathons, bootcamps, and workshops that introduced students to a variety of technologies in a practical, hands-on way. These events not only helped participants build useful skills but also encouraged a culture of open source, where collaboration and sharing were at the core. Through these efforts, I helped create a space where students could learn, grow, and stay inspired by working together on real-world tech challenges.Organize a diverse range of events such as hackathons, bootcamps, and workshops, aimed at educating students about various technologies while actively fostering a culture of open source",
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experiences[activeIndex];

  return (
    <section className="bg-[#111111] text-white px-4 py-10 sm:px-10 md:px-20 pt-20">
      <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-[#9845E8] to-[#DD5789] md:bg-[length:15%] sm:bg-[length:70%] bg-clip-text text-transparent">EXPERIENCE</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex md:flex-col gap-2 border-l border-gray-600">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 text-left ${
                i === activeIndex
                  ? "bg-transparent border-l-4 border-white font-medium"
                  : "hover:bg-gray-700"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-medium">{activeExp.role}</h2>
            <span className="md:text-lg sm:text-sm text-gray-400">{activeExp.duration}</span>
          </div>
          <a
            href={activeExp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:text-lg sm:text-base text-[#33D2FF] hover:text-[#9845E8]"
          >
            {activeExp.location}
          </a>
          <ul className="mt-4 md:text-base sm:text-sm text-gray-300 list-disc list-inside space-y-2">
            {activeExp.tasks}
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
