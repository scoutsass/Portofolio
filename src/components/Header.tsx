import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
          <span>Portofolio<span className="text-accent-500">.</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer font-medium"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-dark-900 dark:text-white"
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-800 shadow-md py-4 px-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 px-4 text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;