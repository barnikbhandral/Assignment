
import styles from '../style'
import cards from './constants'

const ServiceCard = () => {
  return (
    <section className='flex flex-col sm:flex-row justify-center items-center gap-10 py-[50px]'>
      {cards.map((card) => (
        <div key={card.id} className="w-[220px] h-[300px] flex flex-col justify-center items-center pointer text-[#B3B3B4] text-[16px] hover:bg-[#161619] tracking-tighter">
          <img src={card.svg} alt="svg" />
          <h1 className='text-white font-bold py-3'>{card.title}</h1>
          <span>{card.Desc1}</span>
          <span>{card.Desc2}</span>
          <span>{card.Desc3}</span>
          <span>{card.Desc4}</span>

        </div>
      ))}
    </section>
  )
}

const Services = () => {
  return (
    <div className={` flex-col ${styles.flexCenter} ${styles.paddingY}`} >
      <div className={`w-[70%] flex-row justify-center items-center`}>
        <h1 className='text-white font-normal text-center text-[60px] leading-14 font-oswald'> THE THINGS <br /> WE ARE ABLE TO DO </h1>
      </div>
      <ServiceCard />
    </div>
  )
}

export default Services
