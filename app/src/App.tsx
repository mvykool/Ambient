import { Navbar } from "./components/Navbar";
import Hero from "./sections/Hero";
import "boxicons/css/boxicons.min.css";
import Second from "./sections/Second";
import Third from "./sections/third";

function App() {
  return (
    <>
      <div className="w-screen md:w-11/12 p-3 md:p-4 mx-auto">
        <Navbar />
        <Hero />
        <Second />
        <Third />
      </div>
    </>
  );
}

export default App;
