import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedIn from '../assets/linkedin.svg'
import google from '../assets/google.svg'
import youtube from '../assets/youtube.svg'

const Contact = () => {
  return (
    <section className={`flex flex-col justify-center items-center py-10`}>
      <div className=" w-[70%] flex flex-row justify-center  text-white">
        <h1 className="text-[30px] text-left tracking-tighter font-oswald ">LET'S HAVE A TALK ABOUT YOUR PROJECT.</h1>
        <div className="flex-1">
          <ul className="flex flex-row gap-3 list-none justify-end">
            <li className="pointer"><img src={facebook} alt="fb" /></li>
            <li className="pointer"><img src={twitter} alt="twitter" /></li>
            <li className="pointer"><img src={linkedIn} alt="linkedin" /></li>
            <li className="pointer"><img src={google} alt="google" /></li>
            <li className="pointer"><img src={youtube} alt="youtube" /></li>
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
