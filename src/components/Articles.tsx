const Articles = () => {
  return (
    <div id="articles" className="mt-[4.5rem] sm:mt-[5.5rem]">
     
      <h1 className="select-none text-center text-[#1289eb] font-medium md:font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4 mb-[2rem]">Articles</h1>
      <p className="text-[1rem] sm:text-[1.1rem] text-gray-600 text-center w-[85%] mx-auto mt-2">
  Articles are published on Dev.to and linkedin primarily.
</p>

      <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-9 space-y-17 md:space-y-0 w-[90%] max-w-[1400px] mx-auto mt-[1.5rem]">
        <div className="h-[200px] sm:h-[auto]">
         <a href="https://dev.to/gilbertbelieve/fixing-npm-err-could-not-determine-executable-to-run-in-tailwind-css-v4-1klb"><img src="/article1.png" className="w-full h-[125%]  rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>
        </a>   </div> 
          <div className="h-[200px] sm:h-[auto]">
            <a href="https://dev.to/gilbertbelieve/fixing-cannot-find-module-vue-in-vue-35-with-vite-and-typescript-4ihp"><img src="/vue.webp" className="w-[100%] h-[125%]  rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-100 active:shadow-2xl active:scale-105 active:transition-transform active:duration-100"/>
            </a></div>
              </div>
    </div>
  )
}

export default Articles
