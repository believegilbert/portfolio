import { useState } from "react";
import Hamburger from 'hamburger-react'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    
      <div className="">
        <div className="fixed top-0 mx-auto w-[100%]">
        <div className="bg-[white] flex justify-center items-center p-4 pt-[2rem] mx-auto w-[95%]">
          <div className="flex justify-space-between w-[80%]">
          
        <div>
          <a>
          <h1 className="text-[12px] bg-[#339bf0] py-[3px] px-[15px] rounded-[1rem] sm:text-[14px] md:text-[16px] font-bold text-[white] select-none">
            Gils
          </h1>
        </a>
        
        </div>
        
 
        <div className="hidden md:flex select-none justify-center w-[100%] text-[#0f1632]">
          <p className="ml-12 font-bold text-[14px] sm:text-[16px]">Home</p>
          <p className="ml-12 font-bold text-[14px] sm:text-[16px]"><a href="#about">About</a></p>
          <p className="ml-12 font-bold text-[14px] sm:text-[16px]">Skills</p>
          <p className="ml-12 font-bold text-[14px] sm:text-[16px]">Work</p>
          <p className="ml-12 font-bold text-[14px] sm:text-[16px]"><a href="#articles">Articles</a></p>
          <p className="ml-12 font-bold text-[14px] sm:text-[16px]">Contact</p>
        </div>

        <div className="md:hidden flex justify-end w-[100%] sm">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#339bf0" size={24}/>
        </div>
 

      
      </div>

      {isOpen && (
        <div className="absolute md:hidden mt-[18rem] sm:mt-[17rem] sm:mr-[5rem] mr-[3rem] flex justify-end w-[100%]">
          <div className="mt-[-1.5rem] pb-[10px] pl-[10px] mr-[1.5rem] select-none backdrop-blur-md bg-[#339bf0]/60 rounded-2xl text-[white]">
          <p className="mr-15 mt-[0.8rem] text-[14px] sm:text-[16px]">Home</p>
          <p className="mr-15 mt-[1rem] text-[14px] sm:text-[16px]">About</p>
          <p className="mr-15 mt-[1rem] text-[14px] sm:text-[16px]">Skills</p>
          <p className="mr-15 mt-[1rem] text-[14px] sm:text-[16px]">Work</p>
          <p className="mr-15 mt-[1rem] text-[14px] sm:text-[16px]">Articles</p>
          <p className="mr-15 mt-[1rem] text-[14px] sm:text-[16px]">Contact</p>
     </div>
        </div>
      )}
      
        </div>
        </div>
    </div>
  );
};

export default NavBar;
