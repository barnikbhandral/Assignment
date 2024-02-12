import { DigitalCards } from "./constants"


const DigitalWork = () => {

  return (
    <section className="text-white flex flex-wrap justify-center">
      {DigitalCards.map(card => (
        <div key={card.id} className={`m-4 `}>
          <img src={card.image} alt="work" className="w-[350px] h-[500px] object-contain" />
          <h3 className="font-bold" >{card.heading}</h3>
          <span className="font-oswald text-[12px] font-medium text-[#ADADAF]" >{card.subHeading}</span>
        </div>
      )
      )}
    </section >
  )

}

export default DigitalWork
