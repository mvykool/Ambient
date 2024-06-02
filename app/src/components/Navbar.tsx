import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  // Lock scrolling when the menu is opened
  useEffect(() => {
    const body = document.body;
    if (showMenu) {
      body.classList.add("overflowHidden");
    } else {
      body.classList.remove("overflowHidden");
    }
  }, [showMenu]);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="relative my-2 md:my-4 flex w-full justify-between items-center">
        <a className="font-bold" href="/">Ambient</a>

        <div
          ref={menuRef}
          className={`fixed md:relative top-0 transition-all h-full ${showMenu ? 'w-3/6 right-0 border border-l-gray-500 bg-white z-50' : '-right-96 md:right-0'
            }`}
        >
          {/* Desktop */}
          <ul className="flex flex-col md:flex-row gap-5 md:gap-14 mx-10 my-20 md:mx-0 md:my-0">
            <li>
              <a className="px-4 py-2 rounded-lg bg-white hover:bg-primary" onClick={closeMenuOnMobile} href="#">
                About
              </a>
            </li>
            <li>
              <a className="px-4 py-2 rounded-lg bg-white hover:bg-primary" href="#">Services</a>
            </li>
            <li>
              <a className="px-4 py-2 rounded-lg bg-white hover:bg-primary" href="#">Technologies</a>
            </li>
            <li>
              <a className="px-4 py-2 rounded-lg bg-white hover:bg-primary" href="#">Clients</a>
            </li>
          </ul>

          <div className="absolute top-3 right-4 md:hidden">
            <button onClick={toggleMenu}>
              <i className="bx bx-x text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile */}
        <button className="flex md:hidden" onClick={toggleMenu}>
          <i className="bx bx-menu text-2xl"></i>
        </button>
      </nav>
    </header>
  );
};

