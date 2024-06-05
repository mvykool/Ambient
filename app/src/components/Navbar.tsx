import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const logoRef = useRef(null);

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

  // Framer motion
  const isInView = useInView(ref, { once: true });
  const isInViewLogo = useInView(logoRef, { once: true });

  return (
    <header>
      <nav className="relative my-2 md:my-4 flex w-full justify-between items-center">
        <a
          ref={logoRef}
          style={{
            transform: isInViewLogo ? "none" : "translateX(-100px)",
            opacity: isInViewLogo ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
          className="font-bold flex text-lg items-center gap-1 " href="/"><i className='bx bxs-leaf'></i>Ambient</a>

        <div
          ref={menuRef}
          className={`fixed md:relative  top-0 transition-all h-full ${showMenu ? 'w-3/6 right-0 border border-l-gray-500 bg-white z-50' : '-right-96 z-50 md:right-0'
            }`}
        >
          {/* Desktop */}
          <ul className="flex flex-col md:flex-row gap-5 md:gap-10 mx-10 my-20 md:mx-0 md:my-0">
            <li
              ref={ref} style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}>
              <a className="px-4 py-2 rounded-lg bg-white hover:bg-primary" onClick={closeMenuOnMobile} href="#">
                About
              </a>
            </li>
            <li
              ref={ref} style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
              }}>
              <a className="px-4 py-2 rounded-lg bg-white hover:bg-primary" href="#">Services</a>
            </li>
            <li
              ref={ref} style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }}>
              <a className="px-4 py-2 rounded-lg bg-white hover:bg-primary" href="#">Technologies</a>
            </li>
            <li
              ref={ref} style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
              }}>
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

