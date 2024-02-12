

const Contact = () => {
  return (
    <section className={`flex flex-col justify-center items-center py-10`}>
      <div className=" w-[70%] flex flex-row justify-center  text-white">
        <h1 className="text-[30px] text-left tracking-tighter font-oswald ">LET'S HAVE A TALK ABOUT YOUR PROJECT.</h1>
        <div className="flex-1">
          <ul className="flex flex-row gap-3 list-none justify-end">
            <li className="pointer"><img src="/src/assets/facebook.svg" alt="fb" /></li>
            <li className="pointer"><img src="/src/assets/twitter.svg" alt="twitter" /></li>
            <li className="pointer"><img src="/src/assets/linkedin.svg" alt="linkedin" /></li>
            <li className="pointer"><img src="/src/assets/google.svg" alt="google" /></li>
            <li className="pointer"><img src="/src/assets/youtube.svg" alt="youtube" /></li>
          </ul>
        </div>
      </div>
      <div className="w-[70%]">
        <h1 className="py-5  text-[30px] md:text-[50px]  text-[#BDBDBF] font-poppins">Need more information or want to get in touch</h1>
      </div>
      <div className="w-[70%]">
        <span className="border-b-[2px] border-solid border-[#5CA189]  text-white">Get in touch</span>
      </div>
    </section>
  )
}

export default Contact
