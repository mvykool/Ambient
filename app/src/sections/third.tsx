import CardParallax from "../components/cardParallax"
import { cards } from "../data"

const Third = () => {
  return (
    <>
      <main className="flex flex-col items-center mx-auto my-8 md:my-20 px-8 md:px-0">
        <h2 className=" text-4xl text-center md:text-3xl lg:text-7xl w-5/6 md:w-4/6 mx-auto">
          Our mission is to provide the <span className="text-accent"> best services </span>
        </h2>

        {/*cards section*/}
        <div className="w-full relative mt-[50vh]">
          {cards.map((card, i) => {
            return <CardParallax key={i} {...card} />
          })}
        </div>
      </main>
    </>
  )
}

export default Third
