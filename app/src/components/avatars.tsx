import personOne from '../assets/peopl1.webp'
import personTwo from '../assets/peopl2.webp'
import personThree from '../assets/peopl3.webp'

const Avatars = () => {
  return (
    <div className='flex -space-x-2 '>
      <img
        loading="lazy"
        className="inline-block h-10 w-10 md:h-14 md:w-14 ring-2 ring-white object-cover rounded-full hover:scale-110 transition transform duration-100 hover:shadow-md"
        srcSet={`${personOne}?w=100 100w, ${personOne}?w=200 200w, ${personOne}?w=400 400w, ${personOne}?w=800 800w`}
        sizes="(max-width: 800px) 100vw, 50vw"
        decoding="async"
        src={personOne} alt="person 1" />
      <img loading="lazy"
        className="inline-block h-10 w-10 md:h-14 md:w-14 ring-2 ring-white object-cover rounded-full hover:scale-110 transition transform duration-100 hover:shadow-md"
        srcSet={`${personTwo}?w=100 100w, ${personTwo}?w=200 200w, ${personTwo}?w=400 400w, ${personTwo}?w=800 800w`}
        sizes="(max-width: 800px) 100vw, 50vw"
        decoding="async"
        src={personTwo} alt=" person 2" />
      <img loading="lazy"
        className="inline-block h-10 w-10 md:h-14 md:w-14 ring-2 ring-white object-cover rounded-full hover:scale-110 transition transform duration-100 hover:shadow-md"
        srcSet={`${personThree}?w=100 100w, ${personThree}?w=200 200w, ${personThree}?w=400 400w, ${personThree}?w=800 800w`}
        sizes="(max-width: 800px) 100vw, 50vw"
        decoding="async"
        src={personThree} alt="person 3 " />
    </div>
  )
}

export default Avatars
