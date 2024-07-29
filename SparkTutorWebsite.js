import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const SparkTutorWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    {
      title: "IT",
      description: "CLASS 10 IT in the Form of PPT, QUIZS and Mindmaps based on Question patterns",
      image:  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      enrollLink: "/enroll/MATHEMATICS"
    },
    {
      title: "IT",
      description: "CLASS 9 IT in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "/enroll/PHYSICS-CLASS-9"
    },
    {
      title: "SCIENCE",
      description: "CLASS 9 Science in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "/enroll/CHEMISTRY-CLASS-9"
    },
    {
      title: "MATHEMATICS",
      description: "CLASS 9 Mathematics in the Form of PPT, QUIZS and Mindmaps based on Question pattern",
      image:  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      enrollLink: "/enroll/MATHEMATICS-CLASS-9"
    },
  ];

  const handleNavClick = (e, section) => {
    e.preventDefault();
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Arial, sans-serif' }}>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl md:text-3xl font-bold text-blue-600" style={{ textDecoration: 'none' }}>SPARK TUTOR</a>
            <nav className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6 list-none p-0 m-0">
                {['HOME', 'ABOUT', 'COURSES', 'CONTACT'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)} 
                      className="text-gray-600 hover:text-blue-600 transition duration-300"
                      style={{ textDecoration: 'none' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#join" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300" style={{ textDecoration: 'none' }}>
                Join Now
              </a>
            </nav>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4 list-none p-0 m-0">
              {['HOME', 'ABOUT', 'COURSES', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)} 
                    className="text-gray-600 hover:text-blue-600"
                    style={{ textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#join" className="block mt-4 text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300" style={{ textDecoration: 'none' }}>
              Join Now
            </a>
          </nav>
        </div>
      )}

      <main className="flex-grow bg-gray-100">
        <section id="home" className="bg-blue-600 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to SPARK TUTOR</h1>
            <p className="text-xl md:text-2xl mb-8">Igniting minds with quality online education</p>
            <a href="#courses" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300" style={{ textDecoration: 'none' }}>
              Explore Courses
            </a>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              SPARK TUTOR is dedicated to providing high-quality online education for students in grades 9 and 10. 
              Our innovative approach combines interactive presentations, quizzes, and mind maps to make learning 
              engaging and effective.
            </p>
          </div>
        </section>

        <section id="courses" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" style={{ transition: 'transform 0.3s ease-in-out' }}>
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                    </div>
                    <a
                      href={course.enrollLink}
                      className="block w-full text-center bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300 mt-auto"
                      style={{ textDecoration: 'none' }}
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SPARK TUTOR. All rights reserved.</p>
          <p className="mt-2">Quality online education for all.</p>
          <div className="mt-4 flex justify-center space-x-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a key={social} href="#about" className="hover:text-blue-400 transition duration-300" style={{ textDecoration: 'none' }}>{social}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SparkTutorWebsite;
