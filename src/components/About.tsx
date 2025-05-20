const About = () => {
  return (
    <div id="about" className="mt-[3.5rem] about">
      <h1 className="select-none text-[#1289eb] text-center font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4">
        About
      </h1>
      <div className="flex justify-center mt-[2.5rem] items-center">
        <div className="sm:flex items-center mx-auto sm:justify-between w-[80%] max-w-[1200px]">

        {/* image section */}
        <div className="float-left mr-[7.5%] w-[47%] sm:flex-1 sm:flex sm:justify-center">
          <img src="/aboutImg.jpg"  className="select-none sm:w-[75%] sm:h-[vh]"/>
        </div>

        {/* text section */}
        <div className=" sm:flex-1 sm:flex sm:justify-center">
          <div>
          <h2 className="text-[1.2rem] sm:text-[1.6rem] font-bold">I'm Believe Gilbert</h2>
          <p className="mt-[0.7rem] text-[15px] sm:text-[1.1rem] text-justify">
          
           Software Engineer passionate about building thoughtful, full-stack
            web applications using React.js, Node.js, Express, and MongoDB. I
            enjoy creating user-centered solutions, writing clean, maintainable
            code, and staying curious with emerging technologies. Open to
            opportunities as a Full-Stack, Frontend, Backend, or Software
            Engineer—always ready to learn and contribute.
          </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
