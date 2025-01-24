import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Nozzle Washers',
    description: 'Precision-engineered washers for optimal fluid control. Now available for online ordering!',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasOnlineOrdering: true
  },
  {
    id: 2,
    name: 'Profile Washers',
    description: 'Custom-designed washers for specific applications',
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasOnlineOrdering: false
  },
  {
    id: 3,
    name: 'Stamped Parts',
    description: 'High-quality stamped metal components',
    image: 'https://images.unsplash.com/photo-1551272744-4d1d3ab14129?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasOnlineOrdering: false
  }
];

export function ProductCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  {category.hasOnlineOrdering && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Online Orders
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <Link
                    to={`/products/${category.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                  {category.hasOnlineOrdering && (
                    <Link
                      to={`/products/${category.id}/order`}
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      <ShoppingCart className="mr-2" size={16} />
                      Order Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}