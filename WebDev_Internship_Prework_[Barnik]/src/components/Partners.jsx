import webflow from '../assets/webflow.svg'
import sentry from '../assets/sentry.svg'

const Partners = () => {
  return (
    <section className=" flex flex-row justify-center items-center " >
      <div className="w-[75%] flex flex-col justify-center items-top leading-[60px] tracking-tighter md:flex-row md:justify-end">
        <h1 className="flex-1 font-normal text-[50px] text-center md:text-start md:px-8 px-0 md:py-0 py-5  text-[#212529] font-oswald lg:justify-center ">
          AGENCY PROUD <br className="md:block hidden" />IS QUALITY OF <br className="md:block   hidden" /> PARTNERS</h1>
        <div className="flex-2  flex justify-center md:justify-end items-center">
          <table className="border-1">
            <tr>
              <td className="tData"><img src={sentry} alt="sentry" /></td>
              <td className="tData"><img src={webflow} alt="webflow" /></td>
              <td className="tData"><img src={sentry} alt="sentry" /></td>
            </tr>
            <tr>
              <td className="tData"><img src={sentry} alt="sentry" /></td>
              <td className="tData"><img src={webflow} alt="webflow" /></td>
              <td className="tData"><img src={sentry} alt="sentry" /></td>
            </tr>
            <tr>
              <td className="tData"><img src={webflow} alt="webflow" /></td>
              <td className="tData"><img src={sentry} alt="sentry" /></td>
              <td className="tData"><img src={webflow} alt="webflow" /></td>
            </tr>
          </table>
        </div>

      </div>

    </section>
  )
}

export default Partners
