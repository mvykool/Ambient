import { Navbar } from "./components/Navbar"
import Hero from "./sections/Hero"
import 'boxicons/css/boxicons.min.css';
import Second from "./sections/Second";

function App() {

  return (
    <>
      <div className="w-screen md:w-5/6 p-3 md:p-4 mx-auto">
        <Navbar />
        <Hero />
        <Second />
      </div>
    </>
  )
}

export default App
