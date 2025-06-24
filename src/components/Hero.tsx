import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Dharmendra
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              {' '}Kumar Mahato
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
            Full Stack Developer & QA Engineer
          </p>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto">
            Crafting innovative web applications and ensuring quality through automated testing. 
            Currently working at PayTm, building scalable solutions with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/dharmendra-kumar-mahato"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/dharmendra3840"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500 mb-2">35%</div>
              <div className="text-gray-600">Test Coverage Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">60%</div>
              <div className="text-gray-600">Faster Trip Planning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">7.31</div>
              <div className="text-gray-600">GPA</div>
            </div>
          </div>

          <button
            onClick={scrollToWork}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;