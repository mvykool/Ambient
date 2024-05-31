

export const Navbar = () => {
  return (
    <nav className="relative my-2 md:my-4 flex w-full justify-between items-center">
      <span>Ambiet</span>

      {/*Mobile*/}
      <button>
        <i className='bx bx-menu md:hidden text-2xl'></i>
      </button>

      {/* Desktop */}
      <ul className="hidden md:flex gap-14">
        <li>
          <a href="#">About</a>
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
    </nav>
  )
}

