import people from '../assets/people.png'
const Employees = () => {
  return (
    <section className="flex justify-center items-center mt-[-70px]" >
      <img src={people} alt="employee" className='h-[300px] object-fit' />
    </section>
  )
}

export default Employees
