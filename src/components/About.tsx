import React from 'react';
import { Coffee, Code, BookOpen, Plane, Users, Target } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: <Code className="w-5 h-5" />, label: "Coding & Development" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Continuous Learning" },
    { icon: <Users className="w-5 h-5" />, label: "Tech Communities" },
    { icon: <Target className="w-5 h-5" />, label: "Problem Solving" },
    { icon: <Coffee className="w-5 h-5" />, label: "Coffee & Code" },
    { icon: <Plane className="w-5 h-5" />, label: "Tech Conferences" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and ensuring quality through 
            meticulous testing. Here's my journey in technology and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-teal-500 p-1">
              <div className="bg-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">DKM</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              💻
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
              ⚡
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hi, I'm Dharmendra Kumar Mahato
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer and QA Engineer currently working at PayTm, 
                where I develop automated test scripts and collaborate with senior engineers to 
                ensure high-quality software delivery. My journey in technology started with a 
                curiosity about problem-solving, which evolved into a career dedicated to building 
                innovative solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Currently pursuing my BTech in Computer Science from Dronacharya Group of Institutions 
                with a GPA of 7.31, I've successfully delivered multiple impactful projects including 
                an AI-powered travel planner and a smart expense tracking application. I believe in 
                continuous learning and staying ahead of industry trends.
              </p>
            </div>

            {/* Education & Location */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Background</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">BTech Computer Science - Dronacharya Group of Institutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">CBSE (PCM) - 89% from Srimanta Shankar Academy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">QA Engineer at PayTm (One97 Communications)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Based in Greater Noida, India</span>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Values</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Quality-first approach in development and testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Continuous learning and skill enhancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Collaborative teamwork and knowledge sharing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">User-centered design and development</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Interests & Passions
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-gray-600">{interest.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-600 italic max-w-4xl mx-auto leading-relaxed">
            "Every bug fixed is a step towards perfection, and every line of code written 
            is an opportunity to create something meaningful that impacts users' lives."
          </blockquote>
          <div className="mt-6 text-lg text-gray-500">— My Development Philosophy</div>
        </div>
      </div>
    </section>
  );
};

export default About;