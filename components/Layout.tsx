
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES, COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { Menu, X, Phone, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> Serving Seattle & Greater Puget Sound</span>
            <span className="flex items-center gap-2"><Phone size={14} /> {PHONE_NUMBER}</span>
          </div>
          <div>
            <span className="font-medium text-secondary">Get a Free Quote Today!</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary uppercase tracking-tight">
              {COMPANY_NAME}
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6 font-medium text-sm lg:text-base">
              <Link to="/" className="hover:text-primary transition">Home</Link>
              <Link to="/about-us" className="hover:text-primary transition">About Us</Link>
              <div className="relative group">
                <button className="hover:text-primary transition flex items-center gap-1 py-2">
                  Services
                </button>
                <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border-t-2 border-primary rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  {SERVICES.map((service) => (
                    <Link 
                      key={service.id} 
                      to={`/${service.slug}`} 
                      className="block px-6 py-3 hover:bg-gray-50 text-gray-800 hover:text-primary border-b last:border-0 border-gray-100"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/surface-problems" className="hover:text-primary transition whitespace-nowrap">Common Problems</Link>
              <Link to="/locations" className="hover:text-primary transition">Locations</Link>
              <Link to="/our-process" className="hover:text-primary transition">Process</Link>
              <Link to="/faq" className="hover:text-primary transition">FAQ</Link>
              <a href="#contact" className="hover:text-primary transition">Contact Us</a>
              <a href="#contact" className="bg-secondary hover:bg-yellow-500 text-white px-5 py-2 rounded-md font-bold transition shadow-sm whitespace-nowrap">
                Get Quote
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="font-medium text-lg">Home</Link>
              <Link to="/about-us" className="font-medium text-lg">About Us</Link>
              <div className="pl-4 border-l-2 border-gray-200 space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase">Services</p>
                {SERVICES.map((service) => (
                  <Link key={service.id} to={`/${service.slug}`} className="block text-gray-700">
                    {service.title}
                  </Link>
                ))}
              </div>
              <Link to="/surface-problems" className="font-medium text-lg">Common Problems</Link>
              <Link to="/locations" className="font-medium text-lg">Locations</Link>
              <Link to="/our-process" className="font-medium text-lg">Process</Link>
              <Link to="/faq" className="font-medium text-lg">FAQ</Link>
              <a href="#contact" className="font-medium text-lg">Contact Us</a>
              <a href="#contact" className="bg-primary text-white text-center py-3 rounded font-bold">Call Now</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Seattle's premier refinishing experts. We restore bathtubs, tiles, and countertops to like-new condition for a fraction of replacement cost.
            </p>
            <Link to="/about-us" className="text-secondary hover:text-white text-sm font-semibold transition">Read Our Story &rarr;</Link>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map(service => (
                <li key={service.id}><Link to={`/${service.slug}`} className="hover:text-secondary transition">{service.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company & Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link to="/our-process" className="hover:text-secondary transition">Our Process</Link></li>
              <li><Link to="/surface-problems" className="hover:text-secondary transition">Common Problems</Link></li>
              <li><Link to="/locations" className="hover:text-secondary transition">Service Areas</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={16} className="text-secondary"/> {PHONE_NUMBER}</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-secondary"/> Seattle, WA</li>
              <li className="mt-4">
                <a href="#contact" className="inline-block border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-white transition">Get a Quote</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
