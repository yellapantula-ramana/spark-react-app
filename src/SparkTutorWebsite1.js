import React from 'react';
import { ArrowRight } from 'lucide-react';

const SparkTutorWebsite = () => {
  const courses = [
    {
      title: "IT",
      description: "CLASS 10 IT in the Form of PPT, QUIZS and Mindmaps based on Question patterns",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "#enroll/PHYSICS"
    },
    {
      title: "SCIENCE",
      description: "CLASS 10 Science in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "#enroll/CHEMISTRY"
    },
    {
      title: "MATHEMATICS",
      description: "CLASS 10 Mathematics in the Form of PPT, QUIZS and Mindmaps based on Question pattern.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "#enroll/MATHEMATICS"
    },
    {
      title: "IT",
      description: "CLASS 9 IT in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "#enroll/PHYSICS-CLASS-9"
    },
    {
      title: "SCIENCE",
      description: "CLASS 9 Science in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "https://images.unsplash.com/photo-1709295007624-13c917a16442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlbWlzdHJ5fGVufDB8fDB8fHww",
      enrollLink: "#enroll/CHEMISTRY-CLASS-9"
    },
    {
      title: "MATHEMATICS",
      description: "CLASS 9 Mathematics in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "#enroll/MATHEMATICS-CLASS-9"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">SPARK TUTOR</a>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="text-gray-600 hover:text-blue-600">HOME</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">ABOUT</a></li>
              <li><a href="#courses" className="text-gray-600 hover:text-blue-600">COURSES</a></li>
              <li><a href="#pages" className="text-gray-600 hover:text-blue-600">PAGES</a></li>
              <li><a href="#ai-tools" className="text-gray-600 hover:text-blue-600">AI TOOLS</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">CONTACT</a></li>
            </ul>
          </nav>
          <a href="#join" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Join Now <ArrowRight className="inline-block ml-1" size={16} />
          </a>
        </div>
      </header>

      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <a
                    href={course.enrollLink}
                    className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
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