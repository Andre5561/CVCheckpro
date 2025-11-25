import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="container max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-12 text-sm text-slate-700">
        {/* === ЛОГО + КОНТАКТ === */}
        <div>
          <h2 className="text-lg font-extrabold text-slate-900 mb-2">
            CVCheck<span className="text-black">Pro</span>
          </h2>
          <p className="text-slate-600 mb-3">
            Intelligent resume analysis powered by AI.
          </p>
          <a
            href="mailto:contact@cvcheckpro.com"
            className="text-slate-800 hover:text-black transition-colors font-medium"
          >
            contact@cvcheckpro.com
          </a>
        </div>

        {/* === ССЫЛКИ === */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-900 mb-2">Pages</h3>

          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>

          <Link to="/about" className="hover:text-black transition-colors">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>

          <Link to="/signin" className="hover:text-black transition-colors">
            Sign In
          </Link>
        </div>

        {/* === ЛЕГАЛ === */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-900 mb-2">Legal</h3>
          <Link to="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link to="/refund" className="hover:text-black transition-colors">
            Refund Policy
          </Link>
          <Link to="/terms" className="hover:text-black transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>

      {/* === НИЖНЯЯ ПОЛОСА === */}
      <div className="mt-12 border-t border-black/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CVCheckPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
