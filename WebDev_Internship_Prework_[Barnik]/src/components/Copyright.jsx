import copyright from '../assets/copyright.svg'

const Copyright = () => {
  return (
    <footer className="flex justify-center items-center text-white text-[15px] font-poppins  ">
      <div className="w-[70%] flex flex-row justify-between items-center border-t-[2px] border-solid border-[#38383C] py-6">
        <p className="flex "><img src={copyright} alt="copyright" /> 2022 Tourog | All Rights Reserved</p>
        <p>Site created By Themezinho</p>
      </div>
    </footer>
  )
}

export default Copyright
