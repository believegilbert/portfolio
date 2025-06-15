const Home = () => {
  return (
    <div
      className="overflow-x-hidden mt-[6.8rem] sm:mt-[10rem] flex flex-col mx-auto w-[100%]"
      id="home"
    >
      
      <div className="flex justify-center">
        <div className="block sm:flex items-center justify-between mx-auto w-[70%]">
          <div>

            {/* Text Section */}
            <div className="flex justify-center sm:flex-1 mb-[10px]">
              <div className="">
                
                <div className="flex flex-col font-bold select-none text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] mb-[1.5rem]">
                  <span>Hi,</span>
                  <span>
                    I'm <span className="text-[#1289eb]">Gilbert</span>
                  </span>
                  <span>a</span>
                  <span  className="typewriter overflow-hidden border-r-4 border-white whitespace-nowrap w-0 animate-typing">Software Engineer</span>
                </div>

                
                  <span className="select-none text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] bg-[#1b91f1] active:bg-[#48acff] py-[6px] px-[17px] text-white rounded-[0.5rem]">
                    Contact
                  </span>
                

                <div className="select-none flex justify-between mt-[30px] w-[20%]">
                  <a href="https://github.com/believegilbert">
                    <img
                      src="/github.svg"
                      alt="github"
                      className="w-[30px] sm:w-[35px] mr-4"
                    />
                  </a>
                  <a>
                    {" "}
                    <img
                      src="linkedin.svg"
                      alt="linkedin"
                      className="w-[48px] sm:w-[49px] "
                    />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className=" flex flex-1 justify-end">
            
                        <div
  data-aos="fade-up"
  data-aos-delay="500"
>
              <img
                src="/myportfolioheroimage.png"
                className="select-none sm:w-full max-w-full h-auto"
                alt="Hero"
              />
             
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
  data-aos="fade-left"
  data-aos-delay="900"
>
        <div
          className="w-[80%] max-w-3xl mx-auto my-12 px-6 py-6 sm:py-8 bg-white rounded-2xl shadow-xl border-l-4"
          style={{ borderColor: "#1b91f1" }}
        >
          <h2 className="text-sm sm:text-[1.3rem] md:text-[1.5rem]  font-medium italic leading-relaxed text-gray-800 dark:text-gray-200">
            –{" "}
            <span style={{ color: "#1289eb" }}>
              "Bringing your ideas to reality, one code at a time."
            </span>
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
