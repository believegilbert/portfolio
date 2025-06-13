

const Contact = () => {
  return (
    <div className="mt-[8rem] mb-[3rem] md:mt-[12rem]" id="contact">
     
      <h1 className="select-none text-center text-[#1289eb] font-medium md:font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4">Contacts</h1>
      
    <div className="mb-[1rem] w-[90%] text-gray-700 px-6 py-12 rounded-3xl max-w-2xl mx-auto text-center space-y-6 shadow-xl">
  <h2 className="text-[1.2rem] sm:text-[1.4rem] md:text-[2rem] lg:text-[2.4rem]   font-bold">Let’s Connect (For Real)</h2>

  <p className="text-gray-700 text-sm max-w-md mx-auto">
    Whether you’ve got something to build, a tech rant to share, or a random idea at 2AM — I’m all ears. I enjoy working with good people and great coffee ☕.
  </p>

  <button
    onClick={() => window.location.href = 'mailto:believegilbert20@gmail.com'}
    className="mt-4 bg-[#1b91f1] hover:bg-[#1682d6] text-white font-medium py-3 px-6 rounded-full transition-all duration-200 shadow-lg"
  >
    ✉️ Shoot Me an Email
  </button>

  <p className="text-xs text-gray-600 mt-4">
    No pressure. Worst case? We both gain a new contact.
  </p>

  <p className="text-xs text-gray-600 mt-4">
    P.S. I check my inbox more than I check my fridge 😄
  </p>
</div>
    </div>
  )
}

export default Contact
