import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Dharmendra Kumar Mahato. Crafted with passion and attention to detail.
            </p>
            <p className="text-sm text-gray-500">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;