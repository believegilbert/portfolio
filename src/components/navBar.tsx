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
          <div className="mt-[1.9rem] pb-[10px] mr-[1.5rem] select-none w-[70%] flex justify-center backdrop-blur-md  bg-[#339bf0]/60 rounded-2xl text-[white]">
        <div className="flex flex-col w-[100%] items-center space-y-2 mt-[1rem]">
            <button className=" rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/30 active:bg-[#339bf0]/80 w-[90%]">Home</button>
          <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/30 active:bg-[#339bf0]/80 w-[90%]"><a href="#about">About</a></button>
          <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/30 active:bg-[#339bf0]/80 w-[90%]">Skills</button>
          <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/30 active:bg-[#339bf0]/80 w-[90%]">Work</button>
          <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/30 active:bg-[#339bf0]/80 w-[90%]"><a href="#articles">Articles</a></button>
          <button className="rounded-[2rem] p-[6px] text-[13px] sm:text-[16px] bg-[#339bf0]/30 active:bg-[#339bf0]/80 w-[90%]">Contact</button>
     </div></div>
        </div>
      )}
      
        </div>
        </div>
    </div>
  );
};

export default NavBar;
