import SecondSectionCards from "../components/secondSectionCards"

const Second = () => {
  return (
    <>
      <main className="flex flex-col items-center mx-auto my-8 px-8 md:px-0">
        <h2 className=" text-4xl text-center md:text-3xl lg:text-7xl w-5/6 md:w-4/6 mx-auto">
          We're not just <span className="text-accent">building materials </span>- we're building a <span className="text-primary">legacy of change</span>
        </h2>

        {/*cards section*/}
        <SecondSectionCards />

      </main>
    </>
  )
}

export default Second
