import { useState } from "react";


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header>
      <nav className="relative my-2 md:my-4 flex w-full justify-between items-center">
        <span>Ambiet</span>

        <div className={`fixed top-0 right-0 ${showMenu ? 'right-0' : '-right-28'}`}>
          {/* Desktop */}
          <ul className=" md:flex gap-14">
            <li>
              <a onClick={closeMenuOnMobile} href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
          </ul>
          <div className="">
            <button onClick={toggleMenu}>close</button>
          </div>
        </div>

        {/*Mobile*/}
        <button onClick={toggleMenu}>
          <i className='bx bx-menu md:hidden text-2xl'></i>
        </button>
      </nav>

    </header>
  )
};

