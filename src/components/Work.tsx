const Work = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center mt-[2.5rem]">
      
      <h1 className="select-none text-center text-[#1289eb] font-medium sm:font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4 mb-[2rem]">Work</h1>
      <div className="w-[100%] items-center justify-center flex mt-[1rem]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80%] max-w-[1000px] mx-auto" >
      
        <a href="https://adminsendit.netlify.app/"><img src="/sendit.png"  className="w-[70%] rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 active:shadow-2xl active:scale-105 active:transition-transform active:duration-300"/>
      </a>
      
        <img src="/gilsblogAPI.png" className="w-[70%] rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>
      
      
        <img src="/scissors.png" className="w-[70%] rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>
      
      
        <img src="/studentmgtS.png" className="w-[70%] rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>

      </div>
     </div>
    </div>
  )
}

export default Work
