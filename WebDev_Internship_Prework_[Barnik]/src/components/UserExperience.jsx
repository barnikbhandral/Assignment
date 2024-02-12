import styles from "../style"

const UserExperience = () => {
  return (
    <section className={`bg-[#161619] ${styles.paddingY} text-white ${styles.flexCenter}`}>
      <div className={`flex md:flex-row flex-col w-[65%] md:text-start text-center md:pl-10 ${styles.paddingX}`} >
        <div className={` flex flex-col flex-1 `}>
          <h1 className='font-normal text-[50px] leading-[62px] font-oswald '>HOW WE MAKE
            <br className='' /> USER
            <br /> EXPERIENCE</h1>
          <div className={`w-full flex justify-center ${styles.paddingY} md:justify-start`}>
            <span className="md:ml-8 ml-0 pb-1 text-[15px] border-b-[2px] border-green-300 pointer">hello@tourog.com</span>
          </div>
        </div>
        <div className={`flex-1 font-poppins`} >
          <div >
            <p className="text-[#CFCCCD] pb-3 ">You can't use up creativity. The more you use, the more you have in your significant mind.</p>
            <h5 className="text-[#FFFAF0] font-medium text-[20px]">SALVADOR DALI</h5>
            <span className="text-[#949495] text-[10px] font-semibold font-sans">Digital Artist</span>
          </div>
          <div className="flex flex-row md:justify-start justify-center md:pb-0 pb-9">
            <h1 className='font-normal text-[90px] font-oswald'>25</h1>
            <div className=" pl-3 pt-6 font-semibold"><h3>YEARS OF <br />DIGITAL EXPERIENCE</h3></div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default UserExperience
