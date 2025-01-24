import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Precision Engineering Excellence Since 1989
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Leading manufacturer of precision washers and stamped metal parts, 
              delivering quality and innovation to industries worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center"
              >
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}