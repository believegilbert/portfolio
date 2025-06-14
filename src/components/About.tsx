const About = () => {
  return (
    <div id="about" className="overflow-x-hidden mt-[2.5rem] md:mt-[3.5rem] about mx-auto w-80%">
      <div
  data-aos="fade-up"
  data-aos-delay="200"
  
>
      <h1 className="select-none text-[#1289eb] text-center font-medium sm:font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4">
        About
      </h1>
      <div className="flex justify-center mt-[2.5rem] items-center">
        <div className="sm:flex items-center mx-auto sm:justify-between w-[80%] ">

        {/* image section */}
        <div className="float-left mr-[7.5%] w-[47%] sm:flex-1 sm:flex sm:justify-center">
          <img src="/aboutImg.jpg"  className="select-none sm:w-[65%] sm:h-[vh] rounded-[10rem] shadow-[0_1px_7px_] sm:shadow-[0_7px_15px] hover:scale-110 transition duration-300  active:scale-105 transition-transform duration-300"/>
        </div>

        {/* text section */}
        <div className=" sm:flex-1 sm:flex sm:justify-center">
          <div>        
              <div
  data-aos="fade-up"
  data-aos-delay="700"
>
          <h2 className="text-[1rem] sm:text-[1.6rem] font-bold">I'm Believe Nchere-awaji Gilbert</h2>
          <p className="mt-[0.7rem] text-[14px] font-serif sm:text-[1.1rem] text-justify">
          
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
    </div>
    </div>
  );
};

export default About;
