import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import Scrollspy from "react-scrollspy";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="fixed top-0 mx-auto w-[100%] bg-white z-50">
        <div className="flex justify-center items-center p-4 pt-[2rem] mx-auto w-[95%]">
          <div className="flex justify-space-between w-[80%]">
            <div>
              <a href="#home">
                <h1 className="text-[12px] bg-[#339bf0] py-[3px] px-[15px] rounded-[1rem] sm:text-[14px] md:text-[16px] font-bold text-[white] select-none">
                  Gils
                </h1>
              </a>
            </div>

            <div className="hidden md:flex md:ml-[2rem] select-none justify-center w-[100%] text-[#0f1632]">
              <Scrollspy
                items={["home", "about", "skills", "work", "articles", "contact"]}
                currentClassName="text-[#1b91f1] font-bold underline"
                offset={-100}
                className="flex space-x-6 text-gray-400"
              >
                <Link
                  smooth={true}
                  duration={1000} // <-- increase from 500 to 1000ms
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-500"
                  to="home"
                  className="ml-12 font-bold text-[14px] sm:text-[16px]"
                >
                  Home
                </Link>
                <Link
                  smooth={true}
                  duration={1000} // <-- increase from 500 to 1000ms
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-500"
                  to="about"
                  className="ml-12 font-bold text-[14px] sm:text-[16px]"
                >
                  About
                </Link>
                <Link
                  smooth={true}
                  duration={1000} // <-- increase from 500 to 1000ms
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-500"
                  to="skills"
                  className="ml-12 font-bold text-[14px] sm:text-[16px]"
                >
                  Skills
                </Link>
                <Link
                  smooth={true}
                  duration={1000} // <-- increase from 500 to 1000ms
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-500"
                  to="work"
                  className="ml-12 font-bold text-[14px] sm:text-[16px]"
                >
                  Work
                </Link>
                <Link
                  smooth={true}
                  duration={1000} // <-- increase from 500 to 1000ms
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-500"
                  to="articles"
                  className="ml-12 font-bold text-[14px] sm:text-[16px]"
                >
                  Articles
                </Link>
                <Link
                  smooth={true}
                  duration={1000} // <-- increase from 500 to 1000ms
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-500"
                  to="contact"
                  className="ml-12 font-bold text-[14px] sm:text-[16px]"
                >
                  Contact
                </Link>
              </Scrollspy>
            </div>

            <div className="md:hidden flex justify-end w-[100%] sm">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                color="#339bf0"
                size={24}
              />
            </div>
          </div>

          {isOpen && (
            <div className="absolute md:hidden mt-[18rem] sm:mt-[17rem] sm:mr-[5rem] mr-[3rem] flex justify-end w-[100%]">
              <div className="mt-[1.9rem] pb-[10px] mr-[1.5rem] select-none w-[70%] flex justify-center backdrop-blur-sm  bg-black/20 rounded-2xl text-[white]">
               
                  <Scrollspy
                    items={["home", "about", "projects", "contact"]}
                    currentClassName="text-[#1b91f1] font-bold underline"
                    offset={-100}
                    className="flex space-x-6 text-gray-400"
                  > <div className="flex flex-col w-[100%] items-center space-y-2 mt-[1rem]">
                    <Link
                      smooth={true}
                      duration={1000} // <-- increase from 500 to 1000ms
                      offset={-80}
                      spy={true}
                      activeClass="text-blue-500"
                      to="home"
                    >
                      <button className=" rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/90 active:bg-[#339bf0]/40 w-[90%]">
                        Home
                      </button>
                    </Link>
                    <Link
                      smooth={true}
                      duration={1000} // <-- increase from 500 to 1000ms
                      offset={-80}
                      spy={true}
                      activeClass="text-blue-500"
                      to="about"
                    >
                      <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/90 active:bg-[#339bf0]/40 w-[90%]">
                        About
                      </button>
                    </Link>
                    <Link
                      smooth={true}
                      duration={1000} // <-- increase from 500 to 1000ms
                      offset={-80}
                      spy={true}
                      activeClass="text-blue-500"
                      to="skills"
                    >
                      <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/90 active:bg-[#339bf0]/40 w-[90%]">
                        Skills
                      </button>
                    </Link>
                    <Link
                      smooth={true}
                      duration={1000} // <-- increase from 500 to 1000ms
                      offset={-80}
                      spy={true}
                      activeClass="text-blue-500"
                      to="work"
                    >
                      <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/90 active:bg-[#339bf0]/40 w-[90%]">
                        Work
                      </button>
                    </Link>
                    <Link
                      smooth={true}
                      duration={1000} // <-- increase from 500 to 1000ms
                      offset={-80}
                      spy={true}
                      activeClass="text-blue-500"
                      to="articles"
                    >
                      <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/90 active:bg-[#339bf0]/40 w-[90%]">
                        Articles
                      </button>
                    </Link>
                    <Link
                      smooth={true}
                      duration={1000} // <-- increase from 500 to 1000ms
                      offset={-80}
                      spy={true}
                      activeClass="text-blue-500"
                      to="contact"
                    >
                      <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/90 active:bg-[#339bf0]/40 w-[90%]">
                        Contact
                      </button>
                    </Link> 
                    </div>
                  </Scrollspy>
               
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
