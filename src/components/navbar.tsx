import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide font-sans pl-4 md:pl-12">Sneha</div>

        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-lg font-normal font-sans">
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">
            Projects
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">
            Experience
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">
            Skills
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">
            Resume
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200 pr-4 lg:pr-12">
            Contact
          </li>
        </ul>
        <button 
          className="md:hidden pr-4 focus:outline-none bg-transparent"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col space-y-4 text-lg font-normal font-sans mt-4 px-4">
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200 py-2">
            Projects
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200 py-2">
            Experience
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200 py-2">
            Skills
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200 py-2">
            Resume
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200 py-2">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;