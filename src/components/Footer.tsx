const Footer = () => {
  return (
    <div className="bg-[#0f1632] p-[2rem] text-[white] ">
      <div>
      <div className="flex mb-4 items-center justify-between w-[100%] max-w-[1200px] mx-auto">
        <div className="flex h-[100%]">
          <div>
            <p className="text-[1rem] sm:text-[1.3rem] md:text-[1.4rem] font-bold text-center">
              Gilbert
            </p>
           </div>
        </div>

        <div className="select-none flex items-center justify-center">
          <a href="https://github.com/believegilbert"> <img
            src="/github.svg"
            alt="github"
            className="w-[30px] sm:w-[35px] mr-4 filter invert"
          /></a>
         
          <a href="https://linkedin.com/in/gilbert-believe"><img
            src="linkedin.svg"
            alt="linkedin"
            className="w-[34px] sm:w-[39px] "
          /></a>
        </div>

      </div>
       <p className="text-center text-sm sm:text-[1rem] pt-[5px]">&copy;Gil's build, 2025</p>
          </div>
    </div>
  );
};

export default Footer;
