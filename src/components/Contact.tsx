
const Contact = () => {
  return (
    <div className="mt-[2.5rem]">
     
      <h1 className="select-none text-center text-[#1289eb] font-medium md:font-bold text-[1.3rem] sm:text-[1.9rem] underline underline-offset-4 mb-[2rem]">Contacts</h1>
      <div className="flex flex-col w-[30%] mx-auto space-y-4 mb-5">
        <input placeholder="whats your name?" className="bg-gray-300 rounded-lg p-2 outline-none"/>
        <input placeholder="Email" className="bg-gray-300 rounded-lg p-2 outline-none"/>
        <textarea placeholder="Message" className="bg-gray-300 rounded-lg p-4 outline-none"/>
      </div>
    </div>
  )
}

export default Contact
