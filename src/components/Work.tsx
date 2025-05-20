const Work = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center mt-[2.5rem]">
      
      <h1 className="select-none text-center text-[#1289eb] font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4 mb-[2rem]">Work</h1>
      <div className="w-[100%] items-center justify-center flex mt-[1rem]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80%] max-w-[1000px] mx-auto" >
      
        <a href="https://adminsendit.netlify.app/"><img src="/sendit.png"  className="w-[70%] rounded-[0.6rem] sm:w-[]"/>
      </a>
      
        <img src="/gilsblogAPI.png" className="w-[70%] rounded-[0.6rem] sm:w-[]"/>
      
      
        <img src="/scissors.png" className="w-[70%] rounded-[0.6rem] sm:w-[]"/>
      
      
        <img src="/studentmgtS.png" className="w-[70%] rounded-[0.6rem] sm:w-[]"/>

      </div>
     </div>
    </div>
  )
}

export default Work
