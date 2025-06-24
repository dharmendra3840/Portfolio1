import React from 'react';
import { TrendingUp, Users, Award, Globe, TestTube, Code, BarChart3, Smartphone } from 'lucide-react';

const Work = () => {
  const achievements = [
    {
      icon: <TestTube className="w-8 h-8 text-blue-600" />,
      title: "Test Automation Excellence",
      description: "Developed automated test scripts using Selenium and Appium, increasing test coverage by 35% across web and mobile applications at PayTm.",
      metrics: "35% coverage increase"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-500" />,
      title: "Development Efficiency",
      description: "Reduced manual testing effort by 40% through collaboration with senior QA engineers and early bug detection in development cycles.",
      metrics: "40% effort reduction"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "User Engagement Impact",
      description: "Enhanced user retention by 35% and reduced bounce rates by 25% through intuitive UI design in TravelEase project.",
      metrics: "35% retention boost"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: "Performance Optimization",
      description: "Achieved 60 FPS gameplay experience and 30% increase in user satisfaction through optimized game mechanics.",
      metrics: "60 FPS performance"
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Summary
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Currently working as a QA Engineer at PayTm, with expertise in full-stack development 
            and a track record of delivering impactful solutions through innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {achievement.metrics}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Journey
          </h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-full md:w-1/4">
                <div className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">
                  Apr 2025 - Present
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  QA Engineer - PayTm (One97 Communications)
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Developing and executing automated test scripts using Selenium and Appium. 
                  Collaborating with senior QA engineers to detect bugs early in development cycles 
                  and utilizing TestNG, Postman, and JIRA for streamlined test management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">Selenium</span>
                  <span className="px-3 py-1 text-xs font-medium text-teal-600 bg-teal-100 rounded-full">Appium</span>
                  <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full">TestNG</span>
                  <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">JIRA</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-full md:w-1/4">
                <div className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full inline-block">
                  Nov 2022 - Aug 2026
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  BTech Computer Science - Dronacharya Group of Institutions
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pursuing Bachelor of Technology in Computer Science and IT with a GPA of 7.31. 
                  Building strong foundation in programming, data structures, and software development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">GPA: 7.31</span>
                  <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">Computer Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Recent Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Analytics with Excel</h4>
                <p className="text-sm text-gray-600 mb-2">Microsoft</p>
                <p className="text-xs text-gray-500">Mar 2025</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Azure DevOps</h4>
                <p className="text-sm text-gray-600 mb-2">Guvi</p>
                <p className="text-xs text-gray-500">Nov 2024</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fundamentals of DevOps</h4>
                <p className="text-sm text-gray-600 mb-2">Guvi</p>
                <p className="text-xs text-gray-500">Oct 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;