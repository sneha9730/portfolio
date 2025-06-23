const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://numpy.org/images/logo.svg", alt: "Numpy" },
  { src: "https://pandas.pydata.org/static/img/pandas_mark.svg", alt: "Pandas" },
  { src: "https://matplotlib.org/_static/images/logo2.svg", alt: "Matplotlib" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", alt: "Scikit-Learn" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", alt: "TensorFlow" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", alt: "Keras" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", alt: "OpenCV"},
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript"},
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", alt: "R" },
];

const SkillSet = () => {
  return (
    <section className="bg-[#111111] text-white px-4 py-10 sm:px-10 md:px-20 pt-20">
      <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-[#33D2FF] to-[#DD5789] md:bg-[length:10%] sm:bg-[length:70%] bg-clip-text text-transparent">
        SKILLS
      </h2>

      <div className="w-full">
        <div className="flex flex-wrap gap-9 sm:gap-3 lg:gap-8 justify-start">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-20 h-20 flex justify-center items-center sm:w-24 sm:h-24"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-[80%] h-[80%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSet;

