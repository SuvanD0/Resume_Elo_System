import React from 'react';
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Resume Compare</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
          </nav>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Login</a>
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Your Best Resume</h2>
          <p className="text-xl text-gray-600 mb-8">Upload multiple versions of your resume and let our AI-powered tool help you choose the best one.</p>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Resume Compare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;