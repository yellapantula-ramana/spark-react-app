import React from 'react';
import { ArrowRight } from 'lucide-react';

const SparkTutorWebsite = () => {
  const courses = [
    {
      title: "IT",
      description: "CLASS 10 IT in the Form of PPT, QUIZS and Mindmaps based on Question patterns",
      image: "/api/placeholder/400/300",
      enrollLink: "/enroll/PHYSICS"
    },
    {
      title: "SCIENCE",
      description: "CLASS 10 Science in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "/api/placeholder/400/300",
      enrollLink: "/enroll/CHEMISTRY"
    },
    {
      title: "MATHEMATICS",
      description: "CLASS 10 Mathematics in the Form of PPT, QUIZS and Mindmaps based on Question pattern.",
      image: "/api/placeholder/400/300",
      enrollLink: "/enroll/MATHEMATICS"
    },
    {
      title: "IT",
      description: "CLASS 9 IT in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "/api/placeholder/400/300",
      enrollLink: "/enroll/PHYSICS-CLASS-9"
    },
    {
      title: "SCIENCE",
      description: "CLASS 9 Science in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "/api/placeholder/400/300",
      enrollLink: "/enroll/CHEMISTRY-CLASS-9"
    },
    {
      title: "MATHEMATICS",
      description: "CLASS 9 Mathematics in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "/api/placeholder/400/300",
      enrollLink: "/enroll/MATHEMATICS-CLASS-9"
    },
  ];

  const handleNavClick = (e, section) => {
    e.preventDefault();
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">SPARK TUTOR</a>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                <li><a href="/" onClick={(e) => handleNavClick(e, '#home')} className="text-gray-600 hover:text-blue-600">HOME</a></li>
                <li><a href="/about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-600 hover:text-blue-600">ABOUT</a></li>
                <li><a href="/courses" onClick={(e) => handleNavClick(e, '#courses')} className="text-gray-600 hover:text-blue-600">COURSES</a></li>
                <li><a href="/pages" onClick={(e) => handleNavClick(e, '#pages')} className="text-gray-600 hover:text-blue-600">PAGES</a></li>
                <li><a href="/ai-tools" onClick={(e) => handleNavClick(e, '#ai-tools')} className="text-gray-600 hover:text-blue-600">AI TOOLS</a></li>
                <li><a href="/contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-600 hover:text-blue-600">CONTACT</a></li>
              </ul>
            </nav>
            <a href="/join" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mt-4 md:mt-0">
              Join Now <ArrowRight className="inline-block ml-1" size={16} />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                  </div>
                  <a
                    href={course.enrollLink}
                    className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300 mt-auto"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SPARK TUTOR. All rights reserved.</p>
          <p className="mt-2">Quality online education for all.</p>
        </div>
      </footer>
    </div>
  );
};

export default SparkTutorWebsite;