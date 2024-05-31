import { Navbar } from "./components/Navbar"
import Hero from "./sections/Hero"
import 'boxicons/css/boxicons.min.css';

function App() {

  return (
    <>
      <div className="w-screen md:w-5/6 p-3 md:p-4 mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
