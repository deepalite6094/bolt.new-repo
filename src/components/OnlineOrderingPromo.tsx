import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Truck, Clock, Shield } from 'lucide-react';

export function OnlineOrderingPromo() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            NEW FEATURE
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Order Nozzle Washers Online
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience seamless ordering with our new e-commerce platform. 
            Get instant quotes, real-time inventory, and fast delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">24/7 Ordering</h3>
            <p className="text-blue-100">Place orders anytime, anywhere with our secure online platform</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
            <p className="text-blue-100">Quick processing and shipping directly to your facility</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-blue-100">Every order backed by our quality assurance promise</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/products/1/order"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
          >
            <ShoppingCart className="mr-2" size={20} />
            Start Ordering Now
          </Link>
        </div>
      </div>
    </section>
  );
}