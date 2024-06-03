import cardOne from "../assets/secondsectionone.jpg"
import cardTwo from "../assets/secondsectiontwo.jpg"

const SecondSectionCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full my-16 md:my-28">
      { /* Card 1 */}
      <div className="flex flex-col justify-center items-center text-white h-40 md:h-96 w-full md:w-2/6 relative">
        <img src={cardOne} className="absolute object-cover rounded-xl h-full w-full -z-10" alt="cardone" />
        <p className="text-lg text-center font-semibold">Follow us for more</p>
        <div className="flex gap-2 my-4">
          <i className="bx bxl-instagram-alt text-5xl"></i>
          <i className="bx bxl-facebook-square text-5xl"></i>
          <i className="bx bxl-twitter text-5xl"></i>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-200 rounded-xl w-full h-40 md:h-96 md:w-4/6">
        <h3>Join us in sculpting a green and sustainable world</h3>
        <button>Get Started</button>
      </div>
      {/* Card 3 */}
      <div className="flex justify-center items-center h-40 md:h-96 w-full md:w-2/6 relative">
        <img src={cardTwo} className="absolute object-cover rounded-xl h-full w-full -z-10" alt="cartwo" />
        <i className="bx bxs-leaf text-7xl text-white"></i>
      </div>
    </div>
  )
}

export default SecondSectionCards
