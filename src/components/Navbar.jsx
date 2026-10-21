import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Film } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'OUR WORK', path: '/work' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#ffffff]/95 backdrop-blur-md shadow-md py-1.5' 
        : 'bg-[#ffffff] py-2 border-b border-gray-100'
    }`}>
      <div className="w-full px-[4%] flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/WhatsApp_Image_2026-10-21_at_10.38.34_AM-removebg-preview.png" 
            alt="Bhindi Productions" 
            className="h-10 xs:h-12 sm:h-13 md:h-14 lg:h-15 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative py-1 text-xs tracking-[0.16em] lg:tracking-[0.18em] font-bold uppercase transition-colors
                ${isActive 
                  ? 'text-[#23351d] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#23351d]' 
                  : 'text-gray-600 hover:text-[#23351d]'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-5 lg:px-6 py-2.5 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white text-xs font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c5db82]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-800 hover:text-black hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  px-3.5 py-2.5 text-xs tracking-wider font-bold uppercase rounded-xl transition-colors
                  ${isActive ? 'bg-[#edf4e6] text-[#24361e] font-extrabold' : 'text-gray-600 hover:text-black hover:bg-gray-50'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white text-xs font-bold uppercase tracking-wider shadow-sm active:scale-98"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#c5db82]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
