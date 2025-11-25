import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Универсальный скролл к секции
  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }

    setMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-black/10 bg-white fixed top-0 left-0 z-50">
      <div className="container max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* === ЛОГО === */}
        <Link to="/" className="text-lg font-extrabold text-slate-900">
          CVCheck<span className="text-black">Pro</span>
        </Link>

        {/* === НАВИГАЦИЯ (ДЕСКТОП) === */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button
            onClick={() => handleScrollTo('hero')}
            className="hover:text-black transition-colors"
          >
            Home
          </button>

          <button
            onClick={() => handleScrollTo('steps')}
            className="hover:text-black transition-colors"
          >
            How it works
          </button>

          <button
            onClick={() => handleScrollTo('features')}
            className="hover:text-black transition-colors"
          >
            Features
          </button>

          <button
            onClick={() => handleScrollTo('faq')}
            className="hover:text-black transition-colors"
          >
            FAQ
          </button>

          <Link to="/about" className="hover:text-black transition-colors">
            About Us
          </Link>

          {/* Contact перед Sign In */}
          <Link to="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>

          <Link
            to="/signin"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-neutral-800 transition"
          >
            Sign In
          </Link>
        </nav>

        {/* === БУРГЕР ДЛЯ МОБИЛОК === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* === МОБИЛЬНОЕ МЕНЮ === */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/10 shadow-sm">
          <div className="flex flex-col p-4 text-slate-800 text-sm font-medium">
            <button
              onClick={() => handleScrollTo('hero')}
              className="py-2 text-left hover:text-black"
            >
              Home
            </button>

            <button
              onClick={() => handleScrollTo('steps')}
              className="py-2 text-left hover:text-black"
            >
              How it works
            </button>

            <button
              onClick={() => handleScrollTo('features')}
              className="py-2 text-left hover:text-black"
            >
              Features
            </button>

            <button
              onClick={() => handleScrollTo('faq')}
              className="py-2 text-left hover:text-black"
            >
              FAQ
            </button>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-black"
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-black"
            >
              Contact
            </Link>

            {/* Sign In */}
            <Link
              to="/signin"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-black text-white text-center py-2 rounded-lg hover:bg-neutral-800 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
