const Skills = () => {
  return (
    <div className="mt-[3.5rem] sm:mt-[5rem]">
      <h1 className="select-none text-center text-[#1289eb] font-medium sm:font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4 mb-[2rem]">
        Skills
      </h1>

      <div className="mt-[3.5rem] flex w-[90%] sm:w-[80%] max-w-[1200px] justify-between items-center mx-auto">
        <div className="flex flex-1 justify-center items-center ml-[1rem]">
          <div className="">
            <div className="mb-[1.2rem] sm:mb-[2.2rem]  w-[115%] lg:w-[150%]">
              <div className="flex justify-between mb-1 w-[100%]">
                <span className="text-sm sm:text-[1rem] font-medium">Frontend</span>
                <span className="text-sm">90%</span>
              </div>
              <div className="w-[100%] min-w-[130px] sm:min-w-[300px]">
                <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full">
                  <div className="h-2 sm:h-4 bg-[#1289eb] rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
            <div className="mb-[1rem] sm:mb-[1.5rem] w-[115%] lg:w-[150%]">
              <div className="flex justify-between mb-1 w-[100%]">
                <span className="text-sm sm:text-[1rem] font-medium">Backend</span>
                <span className="text-sm">90%</span>
              </div>
              <div className="w-[100%]">
                <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full">
                  <div className="h-2 sm:h-4 bg-[#1289eb] rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
            <div className="mb-[1rem] sm:mb-[1.5rem] w-[115%] lg:w-[150%]">
              <div className="flex justify-between mb-1 w-[100%]">
                <span className="text-sm sm:text-[1rem] font-medium">Database</span>
                <span className="text-sm">90%</span>
              </div>
              <div className="w-[100%]">
                <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full">
                  <div className="h-2 sm:h-4 bg-[#1289eb] rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
            <div className="mb-[1.2rem] sm:mb-[2.2rem] w-[115%] lg:w-[150%]">
              <div className="flex justify-between mb-1 w-[100%]">
                <span className="text-sm sm:text-[1rem] font-medium">Soft Skills</span>
                <span className="text-sm">90%</span>
              </div>
              <div className="w-[100%] min-w-[130px] sm:min-w-[300px]">
                <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full">
                  <div className="h-2 sm:h-4 bg-[#1289eb] rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="w-[100%] flex justify-end">
          <img
            src="./skills.jpg"
            className="w-[80%] sm:w-[50%] md:w-[60%] lg:w-[50%] rounded-[10rem] shadow-2xl hover:scale-105 transition-transform duration-300  active:scale-105 active:transition-transform active:duration-300"
          />
        </div>
      </div>

      <div className="block space-y-3 w-[85%] mx-auto md:w-[70%] lg:w-[80%] lg:flex md:space-x-4 mt-[2rem]">
        <div className="flex flex-1 bg-gray-900 text-gray-300 h-[490px] md:h-[550px] rounded-[3rem] justify-center items-center px-8 py-6">
   
  <div className="text-center space-y-6">
    <h1 className="text-[1.1rem] sm:text-2xl font-semibold text-gray-300">Frontend Development</h1>

    <p className="text-gray-400 max-w-md mx-auto text-sm">
      I specialize in building clean, responsive, and user-friendly web interfaces using modern frontend technologies.
    </p>

    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-6 text-sm">
      {[
        { name: "HTML", src: "https://unpkg.com/simple-icons@v11/icons/html5.svg" },
        { name: "CSS", src: "https://unpkg.com/simple-icons@v11/icons/css3.svg" },
        { name: "JavaScript", src: "https://unpkg.com/simple-icons@v11/icons/javascript.svg" },
        { name: "React", src: "https://unpkg.com/simple-icons@v11/icons/react.svg" },
        { name: "Tailwind", src: "https://unpkg.com/simple-icons@v11/icons/tailwindcss.svg" },
        { name: "Vue", src: "https://unpkg.com/simple-icons@v11/icons/vuedotjs.svg" },
        { name: "Git", src: "https://unpkg.com/simple-icons@v11/icons/git.svg" },
      ].map((tech) => (
        <div key={tech.name} className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <img src={tech.src} alt={tech.name} className="w-10 h-10 mb-2 filter invert" />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>

    <div className="flex flex-1 bg-gray-900 text-gray-300 h-[490px] md:h-[550px] rounded-[3rem] justify-center items-center px-8 py-6">
  <div className="text-center space-y-6">
    <h1 className="text-[1.1rem] sm:text-2xl font-semibold text-gray-300">Backend Development</h1>

    <p className="text-gray-400 max-w-md mx-auto text-sm">
      I build fast, scalable, and secure backend services using modern technologies and best practices.
    </p>

    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-6 text-sm">
      {[
        { name: "Node.js", src: "https://unpkg.com/simple-icons@v11/icons/nodedotjs.svg" },
        { name: "Express", src: "https://unpkg.com/simple-icons@v11/icons/express.svg" },
        { name: "MongoDB", src: "https://unpkg.com/simple-icons@v11/icons/mongodb.svg" },
        { name: "PostgreSQL", src: "https://unpkg.com/simple-icons@v11/icons/postgresql.svg" },
        { name: "Firebase", src: "https://unpkg.com/simple-icons@v11/icons/firebase.svg" },
      ].map((tech) => (
        <div key={tech.name} className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <img src={tech.src} alt={tech.name} className="w-10 h-10 mb-2 filter invert" />
          <span>{tech.name}</span>
        </div>
      ))}

      {/* Placeholder for Drizzle */}
      <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
        <div className="w-10 h-10 mb-2 bg-white text-black flex items-center justify-center rounded font-semibold text-xs">
          D
        </div>
        <span>Drizzle</span>
      </div>
    </div>
  </div>
</div>




       <div className="flex flex-1 bg-gray-900 text-gray-300 h-[490px] md:h-[550px] rounded-[3rem] justify-center items-center px-8 py-6">
  <div className="text-center space-y-6">
    <h1 className="text-[1.1rem] sm:text-2xl font-semibold text-grsy-300">Soft Skills</h1>

    <p className="text-gray-400 max-w-md mx-auto text-sm">
      Beyond code, I bring strong communication, adaptability, and a collaborative spirit to every project.
    </p>

    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-6 text-sm">
      {[
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Time Management",
        "Adaptability",
        "Creativity",
        "Attention to Detail",
        "Critical Thinking",
      ].map((skill) => (
        <div key={skill} className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <div className="w-10 h-10 mb-2 bg-white text-black flex items-center justify-center rounded font-bold text-xs">
            {skill[0]}
          </div>
          <span className="text-center"><p className="">{skill}</p></span>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Skills;
