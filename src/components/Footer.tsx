import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Desai Engineering</h3>
            <p className="mb-4">Excellence in precision engineering since 1989. Delivering quality and innovation to industries worldwide.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-500">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-500">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-500">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-500">Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500">Services</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-500">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/nozzle-washers" className="hover:text-blue-500">Nozzle Washers</Link>
              </li>
              <li>
                <Link to="/products/profile-washers" className="hover:text-blue-500">Profile Washers</Link>
              </li>
              <li>
                <Link to="/products/stamped-parts" className="hover:text-blue-500">Stamped Parts</Link>
              </li>
              <li>
                <Link to="/products/custom-solutions" className="hover:text-blue-500">Custom Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 123-456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@desaiengineering.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>123 Industrial Area,<br />Vadodara, Gujarat,<br />India - 390010</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Desai Engineering Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}