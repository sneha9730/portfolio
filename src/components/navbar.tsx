import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#111111] bg-opacity-30 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide font-sans pl-4 md:pl-12"><a href="#">Sneha</a></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-lg font-normal font-sans">
          <li><a href="#skills" className="hover:text-gray-300 transition-colors duration-200">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300 transition-colors duration-200">Projects</a></li>
          <li><a href="#experience" className="hover:text-gray-300 transition-colors duration-200">Experience</a></li>
          <li><a href="#education" className="hover:text-gray-300 transition-colors duration-200">Education</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors duration-200">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1zoqgcEi76jYNGpXVjNw4_Eh-NcDPINeL/view?usp=sharing" target="_blank" rel="noopener noreferrer"className="hover:text-gray-300 transition-colors duration-200 pr-4 lg:pr-12">Resume</a></li>
        </ul>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col space-y-4 text-lg font-normal font-sans mt-4 px-4">
          <li><a href="#skills" className="hover:text-gray-300 transition-colors duration-200 py-2">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300 transition-colors duration-200 py-2">Projects</a></li>
          <li><a href="#experience" className="hover:text-gray-300 transition-colors duration-200 py-2">Experience</a></li>
          <li><a href="#education" className="hover:text-gray-300 transition-colors duration-200 py-2">Education</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors duration-200 py-2">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1zoqgcEi76jYNGpXVjNw4_Eh-NcDPINeL/view?usp=sharing" target="_blank"  rel="noopener noreferrer"className="hover:text-gray-300 transition-colors duration-200 py-2">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
