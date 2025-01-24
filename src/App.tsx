import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { OnlineOrderingPromo } from './components/OnlineOrderingPromo';
import { ProductCategories } from './components/ProductCategories';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <OnlineOrderingPromo />
      <ProductCategories />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="pt-[72px] flex-grow"> {/* Adjust based on header height */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Other routes will be added later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;