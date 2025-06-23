import { useState } from "react";

const educationData = [
  {
    title: "College",
    institution: "Chaitanya Bharathi Institute of Technology",
    country: "Hyderabad - India",
    degree: "Bachelor's degree in Artificial Intelligence and Data Science",
    cgpa: "CGPA: 9.16 / 10",
    duration: "2022 - Present",
  },
  {
    title: "Intermediate",
    institution: "Narayana Junior College",
    country: "Hyderabad - India",
    degree: "Higher Secondary Education",
    cgpa: "Percentage: 97.2%",
    duration: "2020 - 2022",
  },
  {
    title: "School",
    institution: "Takshasila Public School",
    country: "Hyderabad - India",
    degree: "Secondary Education",
    cgpa: "Percentage: 87%",
    duration: "2010 - 2020",
  },
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = educationData[activeIndex];

  return (
    <section className="bg-[#111111] text-white px-4 py-10 sm:px-10 md:px-20 pt-20">
      <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-[#33D2FF] to-[#9845E8] md:bg-[length:13%] sm:bg-[length:70%] bg-clip-text text-transparent">
        EDUCATION
      </h2>
      <div className="flex gap-4 mb-8 overflow-x-auto scrollbar-hide">
        {educationData.map((edu, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 rounded-md text-sm whitespace-nowrap border transition-all duration-200 ${
              idx === activeIndex
                ? "bg-white text-black font-medium"
                : "text-gray-300 hover:text-white border-gray-600"
            }`}
          >
            {edu.title}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-6 space-y-2 sm:space-y-0">
        <div className="w-full">
          <div className="block sm:hidden space-y-1">
            <p className="text-lg text-white font-semibold">
              {active.degree} | {active.duration}
            </p>
            <p className="text-[#DD5789] text-base">
              {active.institution} | {active.country}
            </p>
            <p className="text-base text-white">{active.cgpa}</p>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-2xl font-semibold">{active.degree}</h3>
            <p className="text-[#DD5789] text-base">
              {active.institution} | {active.country}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-end text-base text-gray-400 whitespace-nowrap">
          <span>{active.duration}</span>
          <span className="text-white">{active.cgpa}</span>
        </div>
      </div>
    </section>
  );
}
