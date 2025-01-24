import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+91 123-456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>info@desaiengineering.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Desai Engineering
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/products" className="block text-gray-600 hover:text-blue-600">Products</Link>
            <Link to="/services" className="block text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}