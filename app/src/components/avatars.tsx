import personOne from '../assets/peopl1.jpg'
import personTwo from '../assets/peopl2.jpg'
import personThree from '../assets/peopl3.jpg'

const Avatars = () => {
  return (
    <div className='flex -space-x-2 '>
      <img className="inline-block h-10 w-10 md:h-14 md:w-14 ring-2 ring-white object-cover rounded-full" src={personOne} alt="person 1" />
      <img className="inline-block h-10 w-10 md:h-14 md:w-14 ring-2 ring-white object-cover rounded-full" src={personTwo} alt="person 2" />
      <img className="inline-block h-10 w-10 md:h-14 md:w-14 ring-2 ring-white object-cover rounded-full" src={personThree} alt="person 3 " />
    </div>
  )
}

export default Avatars
