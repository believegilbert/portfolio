const Work = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center  mt-[4.5rem] sm:mt-[3.5rem]">
      
      <h1 className="select-none text-center text-[#1289eb] font-medium sm:font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4 mb-[1rem] md:mb-[2rem]">Work</h1>
      <p className="text-sm sm:mt-5 text-gray-400 italic mb-2 text-[1rem] sm:text-[1.2rem] text-center w-[80%]">
  *Note: Backend project demos focus more on functionality than user interface. They may not be as visually interactive as frontend projects.
</p>

      <div className="w-[100%] items-center justify-center flex mt-[1rem]">
      <div className="space-y-4 md:grid md:grid-cols-2 grid-rows-3 md:gap-10 w-[85%] md:w-[90%] sm:w-[90%] max-w-[1600px] mx-auto" >
       <div><a href="https://aichat-rho-sepia.vercel.app/"><img src="/chatai.png" className="w-[100%] h-[100%] rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/></a>
     <span className="text-xs sm:text-[1.2rem] text-gray-500 italic font-medium">
 <span className="font-bold"> Text-based AI chat</span> — Vuejs, Express, Postgresql, Nodejs.
</span>
        </div>
        <div><a href="https://adminsendit.netlify.app/"><img src="/sendit.png"  className="w-[100%] h-[100%] rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 active:shadow-2xl active:scale-105 active:transition-transform active:duration-300"/>
  <span className="text-xs sm:text-[1.2rem] text-gray-500 italic font-medium">
  <span className="font-bold">Parcel Delivery</span> — React, Express, MongoDB, Nodejs.
</span>
      </a></div>   
      
        <div className="mb-[1.1rem] md:mb-0"><a href="https://gilsblogginapi.onrender.com"><img src="/gilsblogAPI.png" className="w-[100%] h-[100%] rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>
       </a><span className="text-xs sm:text-[1.2rem] text-gray-500 italic font-medium">
  <span className="font-bold">Mini Blog API (Backend)</span> — Nodejs, Express, MongoDB.
</span></div>  
       
      <div className="mb-[1.1rem] md:mb-0">
       <a href="https://scissor1.onrender.com"><img src="/scissors.png" className="w-[100%] h-[100%] rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>
      <span className="text-xs text-gray-500 italic font-medium sm:text-[1.2rem]">
   <span className="font-bold">Url Shortener API (Backend)</span> — Nodejs, Express, MongoDB.
</span>
      </a> </div>
      
      <div>
        <a href="https://student-mgt-system-gilbert-believe.vercel.app"><img src="/studentmgtS.png" className="w-[100%] h-[100%] rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>
      </a>
      <span className="text-xs sm:text-[1.2rem] text-gray-500 italic font-medium">
 <span className="font-bold">Student Management System</span> — Reactjs, Material UI, Nodejs, Express, MongoDB.
</span>
      </div>
       
      </div>
     </div>
    </div>
  )
}

export default Work
