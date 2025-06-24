import React from 'react';
import { ExternalLink, Github, Eye, TrendingUp, MapPin, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker - Smart Budgeting App",
      description: "A comprehensive expense management web application that allows users to track and categorize 10+ daily spending categories with automatic analysis and monthly budgeting goals.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "MySQL", "Chart.js", "JavaScript", "CSS"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: ["20% improvement in expense tracking habits", "Interactive data visualization", "Secure financial data storage"],
      period: "Jan 2025 - Present"
    },
    {
      title: "TravelEase - AI-Powered Travel Planner",
      description: "AI-powered travel platform leveraging targeted API integrations to deliver personalized itinerary suggestions, reducing average trip planning time by 6 hours.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AI APIs", "React.js", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
      icon: <MapPin className="w-6 h-6" />,
      metrics: ["60% faster trip booking", "35% user retention increase", "25% bounce rate reduction"],
      period: "Sep 2024 - Dec 2024"
    },
    {
      title: "Magical Flask Game",
      description: "Interactive puzzle game using Python where players sort colored liquids into separate flasks with engaging levels that gradually increase in difficulty.",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Game Development", "UI/UX Design", "Performance Optimization"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
      icon: <Gamepad2 className="w-6 h-6" />,
      metrics: ["40% increase in user engagement", "25% reduction in puzzle-solving time", "60 FPS gameplay experience"],
      period: "Aug 2024 - Sep 2024"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions showcasing full-stack development, AI integration, 
            and user-centered design with measurable impact on user experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 font-medium hover:bg-white transition-colors duration-200">
                      <Eye size={16} />
                      Preview
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 font-medium hover:bg-white transition-colors duration-200">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {project.icon}
                    {project.period}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Additional Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-2">{project.period}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Key Metrics for smaller cards */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-900 mb-2">Impact:</div>
                      <div className="space-y-1">
                        {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            <span className="text-xs text-gray-600">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
                        <ExternalLink size={14} />
                        Live
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700 font-medium">
                        <Github size={14} />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;