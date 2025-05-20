const Skills = () => {
  return (
    <div className="mt-[3.5rem] sm:mt-[5rem]">
      <h1 className="select-none text-center text-[#1289eb] font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4 mb-[2rem]">Skills</h1>
    
    <div className="mt-[3.5rem] flex w-[80%] max-w-[1200px] justify-between items-center mx-auto">
    <div className="flex flex-1 justify-center items-center ml-[1rem]">
      <div className=""><div className="mb-[1.2rem] sm:mb-[2.2rem] lg:w-[150%]">
    <div className="flex justify-between mb-1 w-[100%]">
      <span className="font-medium">Frontend</span>
      <span className="text-sm">90%</span>
    </div><div className="w-[100%] min-w-[130px] sm:min-w-[300px]">
    <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full">
      <div className="h-2 sm:h-4 bg-[#1289eb] rounded-full w-[80%]"></div>
    </div></div>
    </div><div className="mb-[1rem] sm:mb-[1.5rem] lg:w-[150%]">
    <div className="flex justify-between mb-1 w-[100%]">
      <span className="font-medium">Backend</span>
      <span className="text-sm">90%</span>
    </div><div className="w-[100%]">
    <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full">
      <div className="h-2 sm:h-4 bg-[#1289eb] rounded-full w-[80%]"></div>
    </div></div>
    </div><div className="mb-[1rem] sm:mb-[1.5rem] lg:w-[150%]">
    <div className="flex justify-between mb-1 w-[100%]">
      <span className="font-medium">Database</span>
      <span className="text-sm">90%</span>
    </div><div className="w-[100%]">
    <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full">
      <div className="h-2 sm:h-4 bg-[#1289eb] rounded-full w-[80%]"></div>
    </div></div>
    </div> 
    </div>
    </div>

    <div className="w-[100%] flex justify-end">
      <img src="./skills.jpg" className="w-[80%] sm:w-[50%] md:w-[60%] lg:w-[50%] rounded-[1rem]"/>
    </div>
    </div>

    <div className="flex w-[80%] max-w-[800px] mx-auto justify-between mt-[2.5rem]">
    <div>
      <h2 className="text-[18px] sm:text-[21px] md:text-[24px] font-bold underline underline-offset-3">Frontend </h2>
      <ul>
        <li>Html5</li>
        <li>Css3</li>
        <li className="mb-[1.3rem]">Javascript</li>
        <li className="font-bold underline underline-offset-3 mb-[0.4rem]">Frameworks</li>
        <li>ReactJs</li>
        <li>VueJs</li>
      </ul>
    </div>
    <div>
      <h2 className="text-[18px] sm:text-[21px] md:text-[24px] font-bold underline underline-offset-3">Backend </h2>
      <ul>
        <li className="mb-[1.3rem]">Nodejs</li>
        <li className="font-bold underline underline-offset-3 mb-[0.4rem]">Frameworks</li>
        <li>Expressjs</li>
      </ul>
    </div>
    <div>
      <h2 className="text-[18px] sm:text-[21px] md:text-[24px] font-bold underline underline-offset-3">Database </h2>
      <ul>
        <li>MongoDB</li>
      </ul>
    </div>
    </div>
    </div>

    
  )
}

export default Skills
