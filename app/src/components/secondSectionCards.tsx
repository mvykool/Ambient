import cardOne from "../assets/secondsectionone.jpg"
import cardTwo from "../assets/secondsectiontwo.jpg"

const SecondSectionCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-16 md:my-28">
      { /* Card 1 */}
      <div className="flex h-40 w-full md:w-40 relative">
        <img src={cardOne} className="absolute object-cover rounded-xl h-full w-full -z-10" alt="cardone" />
        <p>Follow us for more</p>
        <div>
          <i className="bx bxl-instagram-alt"></i>
          <i className="bx bxl-facebook-square"></i>
          <i className="bx bxl-twitter"></i>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-200 w-full h-40 md:w-40">
        <h3>Join us in sculpting a green and sustainable world</h3>
        <button>Get Started</button>
      </div>
      {/* Card 3 */}
      <div className="flex h-40 w-full md:w-40 relative">
        <img src={cardTwo} className="absolute object-cover rounded-xl h-full w-full -z-10" alt="cartwo" />
        <i className="bx bxs-leaf"></i>
      </div>
    </div>
  )
}

export default SecondSectionCards
