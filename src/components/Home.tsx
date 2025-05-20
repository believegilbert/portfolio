const Home = () => {
  return (
    <div className="mt-[3.8rem] sm:mt-[10rem]">
      <div className="flex justify-center">
  <div className="block sm:flex items-center justify-between w-[80%] max-w-[1200px]">
    
    {/* Text Section */}
    <div className="flex justify-center sm:flex-1 mb-[10px]">
      <div>
      <div className="flex flex-col font-bold select-none text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] mb-[1.5rem]">
        <span>Hi,</span>
        <span>I'm <span className="text-[#1289eb]">Gilbert</span></span>
        <span>a</span>
        <span>Software Engineer</span>
      </div>
      <span className="select-none text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] bg-[#1b91f1] py-[6px] px-[17px] text-white rounded-[0.5rem]">
        Contact
      </span>
      <div className="select-none flex justify-between mt-[30px] w-[10%]">
        <img src="/github.svg" alt="github" className="w-[30px] sm:w-[35px] mr-4"/>
      <img src="linkedin.svg" alt="linkedin" className="w-[34px] sm:w-[39px] "/>
      </div>
      </div>
      
    </div>

    {/* Image Section */}
    <div className="flex-1 flex justify-center">
      <img src="/myportfolioheroimage.png" className="select-none w-[255px] sm:w-full max-w-full h-auto" alt="Hero" />
    </div>

  </div>
</div>

    </div>
  );
};

export default Home;
