import React from 'react';
import { Code, Database, BarChart3, Wrench, Users, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "blue",
      skills: ["C++", "JavaScript", "Python", "HTML5", "CSS"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      color: "teal",
      skills: ["React JS", "Bootstrap", "Tailwind CSS", "Responsive Design"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Backend",
      color: "orange",
      skills: ["MySQL", "API Integration", "Data Management"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis & Visualization",
      color: "purple",
      skills: ["Pandas", "NumPy", "Matplotlib", "PowerBI", "Tableau", "Chart.js"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Development Tools",
      color: "pink",
      skills: ["VS Code", "PyCharm", "Jupyter Notebook", "IntelliJ IDEA", "Streamlit"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "QA & Testing",
      color: "green",
      skills: ["Selenium", "Appium", "TestNG", "Postman", "JIRA", "Test Automation"]
    }
  ];

  const softSkills = [
    { skill: "Communication", level: 90 },
    { skill: "Team Collaboration", level: 85 },
    { skill: "People Management", level: 80 },
    { skill: "Problem Solving", level: 92 },
    { skill: "Project Management", level: 78 },
    { skill: "Leadership", level: 75 }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      teal: "text-teal-600 bg-teal-50 border-teal-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      pink: "text-pink-600 bg-pink-50 border-pink-200",
      green: "text-green-600 bg-green-50 border-green-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getProgressColor = (index: number) => {
    const colors = ['bg-blue-600', 'bg-teal-500', 'bg-orange-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500'];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, quality assurance, 
            data analysis, and modern development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`inline-flex p-3 rounded-lg mb-6 ${getColorClasses(category.color)}`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Soft Skills & Competencies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{item.skill}</span>
                  <span className="text-sm text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(index)}`} 
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Activities */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Development
          </h3>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  KotlinConf 2024 Global - Delhi NCR
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Participated in expert sessions and panel discussions on tech careers and 
                  product-based company roadmaps.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">AI in Android</span>
                  <span className="px-3 py-1 text-xs font-medium text-teal-600 bg-teal-100 rounded-full">Compose Multiplatform</span>
                  <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full">Web3</span>
                  <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">DevOps</span>
                  <span className="px-3 py-1 text-xs font-medium text-pink-600 bg-pink-100 rounded-full">IPR Strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;