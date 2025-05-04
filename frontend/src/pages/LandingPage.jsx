import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mamafua from '../assets/images/mamafua.jpg'
import carpenter from '../assets/images/carpenter.jpeg'
import electrician from '../assets/images/electrician.jpg'
import plumber from '../assets/images/plumber.jpg'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState({ jobs: 0, employers: 0, workers: 0 });

  // Animate statistics on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Animate stats countup when they come into view
    const animateStats = () => {
      const targetStats = { jobs: 5000, employers: 2500, workers: 10000 };
      const duration = 2000; // milliseconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setStats({
          jobs: Math.floor(targetStats.jobs * progress),
          employers: Math.floor(targetStats.employers * progress),
          workers: Math.floor(targetStats.workers * progress),
        });

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };

    // Initialize observer for stats section
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Freelance Designer",
      text: "Hustle Mania connected me with local businesses needing design work. I've built a sustainable freelance career thanks to their platform!",
      avatar: "/images/testimonial-1.jpg",
    },
    {
      name: "James K.",
      role: "Restaurant Owner",
      text: "Finding reliable staff was always a challenge until I discovered Hustle Mania. Now I can quickly fill positions with qualified local candidates.",
      avatar: "/images/testimonial-2.jpg",
    },
    {
      name: "Priya T.",
      role: "Part-time Worker",
      text: "As a student, I needed flexible work around my schedule. Hustle Mania made it easy to find part-time jobs in my neighborhood.",
      avatar: "/images/testimonial-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow py-2" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Hustle Mania" className="h-8 w-auto mr-2" />
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-black'}`}>
              Hustle Mania
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-indigo-500 transition`}>Features</a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-indigo-500 transition`}>Testimonials</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-indigo-500 transition`}>About</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-indigo-500 transition`}>Contact</a>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Sign Up
            </a>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a
                href="#"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-center hover:bg-indigo-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section with background image */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80"></div>
            <img 
              src="/images/hero-bg.jpg" 
              alt="Workers in different professions" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Find <span className="text-indigo-300">Local Jobs</span><br />
              Build Your <span className="text-indigo-300">Community</span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Connect with employers in your neighborhood and discover opportunities nearby. 
              Whether you're looking for full-time work or a side hustle, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
              >
                Find Jobs
              </a>
              <a
                href="#"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
              >
                Post a Job
              </a>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#stats-section" className="text-white">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats-section" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <p className="text-5xl font-bold text-indigo-600">{stats.jobs.toLocaleString()}+</p>
                <p className="text-xl text-gray-600 mt-2">Jobs Posted</p>
              </div>
              <div className="p-6">
                <p className="text-5xl font-bold text-indigo-600">{stats.employers.toLocaleString()}+</p>
                <p className="text-xl text-gray-600 mt-2">Employers</p>
              </div>
              <div className="p-6">
                <p className="text-5xl font-bold text-indigo-600">{stats.workers.toLocaleString()}+</p>
                <p className="text-xl text-gray-600 mt-2">Registered Workers</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              How Hustle Mania Works
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Create Your Profile</h4>
                <p className="text-gray-600">
                  Sign up and create your profile highlighting your skills, experience, and availability.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Discover Opportunities</h4>
                <p className="text-gray-600">
                  Browse jobs in your neighborhood or post opportunities if you're an employer.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Connect & Earn</h4>
                <p className="text-gray-600">
                  Apply for jobs, get hired, and build your local network while earning income.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Popular Categories
            </h3>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Find work across a wide range of industries and skill levels in your community
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Handyman", icon: "🔧", count: 342 },
                { name: "Cleaning", icon: "🧹", count: 286 },
                { name: "Delivery", icon: "🚚", count: 523 },
                { name: "Gardening", icon: "🌱", count: 157 },
                { name: "Cooking", icon: "👨‍🍳", count: 194 },
                { name: "Tutoring", icon: "📚", count: 235 },
                { name: "Childcare", icon: "👶", count: 129 },
                { name: "Tech Help", icon: "💻", count: 276 },
              ].map((category, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-gray-50 hover:bg-indigo-50 p-6 rounded-xl text-center transition transform hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="text-3xl mb-3 block">{category.icon}</span>
                  <h4 className="text-lg font-medium text-gray-800">{category.name}</h4>
                  <p className="text-indigo-600 mt-1">{category.count} jobs</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-indigo-900 py-16 text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">People at Work</h3>
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={4000}
              showStatus={false}
              showArrows={true}
              swipeable={true}
              className="rounded-xl overflow-hidden shadow-2xl"
              renderArrowPrev={(clickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    onClick={clickHandler}
                    className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-r-lg"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )
              }
              renderArrowNext={(clickHandler, hasNext) =>
                hasNext && (
                  <button
                    onClick={clickHandler}
                    className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-l-lg"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )
              }
            >
              <div className="relative">
                <img src={plumber} alt="Plumber at work" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-6 px-6 text-left">
                  <h4 className="text-2xl font-bold">Professional Plumbers</h4>
                  <p className="text-gray-300">Find reliable plumbing services in your neighborhood</p>
                </div>
              </div>
              <div className="relative">
                <img src={mamafua} alt="Mamafua washing clothes" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-6 px-6 text-left">
                  <h4 className="text-2xl font-bold">Home Cleaning Services</h4>
                  <p className="text-gray-300">Expert cleaning professionals for your home</p>
                </div>
              </div>
              <div className="relative">
                <img src={electrician} alt="Electrician repairing" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-6 px-6 text-left">
                  <h4 className="text-2xl font-bold">Skilled Electricians</h4>
                  <p className="text-gray-300">Electrical repair and installation services</p>
                </div>
              </div>
              <div className="relative">
                <img src={carpenter} alt="Carpenter building furniture" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-6 px-6 text-left">
                  <h4 className="text-2xl font-bold">Expert Carpenters</h4>
                  <p className="text-gray-300">Custom woodworking and furniture repair</p>
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-6xl mx-auto py-20 px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Why Choose Hustle Mania?
          </h3>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Our platform is designed to make local job searching and hiring simple, safe, and efficient.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Hyperlocal Matching</h4>
              <p className="text-gray-600">
                Only see jobs posted by employers in your immediate vicinity, reducing commute times and building community.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Verified Employers</h4>
              <p className="text-gray-600">
                Every employer on our platform is verified for legitimacy and safety, giving you peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Quick Applications</h4>
              <p className="text-gray-600">
                Apply to jobs with just a few clicks. No lengthy forms or complicated processes to slow you down.
              </p>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Flexible Scheduling</h4>
              <p className="text-gray-600">
                Find full-time, part-time, or one-time gigs that fit your schedule and lifestyle needs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Transparent Payments</h4>
              <p className="text-gray-600">
                Clear payment information upfront so you know exactly what to expect before applying.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">In-App Messaging</h4>
              <p className="text-gray-600">
                Communicate directly with employers through our secure messaging system.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-indigo-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              What Our Users Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <img 
                      src={testimonial.avatar || "/api/placeholder/64/64"} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full border-4 border-white shadow-md object-cover"
                    />
                  </div>
                  <div className="pt-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Download App Section */}
        {/* <section className="bg-indigo-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Get the Hustle Mania App</h3>
                <p className="text-xl text-indigo-200 mb-8 max-w-lg">
                  Take Hustle Mania with you everywhere. Find jobs, apply, and communicate with employers on the go.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition">
                    <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5639 12.4461C17.5469 9.54152 19.9999 8.22552 20.0909 8.17552C18.6639 6.12752 16.4999 5.89552 15.7269 5.88252C13.8819 5.69252 12.0999 6.96252 11.1589 6.96252C10.1979 6.96252 8.76095 5.90052 7.15995 5.93252C5.07595 5.96452 3.15995 7.19252 2.10695 9.08452C-0.0760486 12.9455 1.56695 18.6825 3.66095 21.5405C4.72595 22.9405 5.97095 24.5055 7.57995 24.4415C9.12995 24.3705 9.70895 23.4225 11.5829 23.4225C13.4529 23.4225 13.9929 24.4415 15.6149 24.4025C17.2939 24.3705 18.3549 22.9865 19.3859 21.5765C20.5999 19.9645 21.0909 18.3735 21.1139 18.2835C21.0829 18.2745 17.5829 16.9745 17.5639 12.4461Z"/>
                      <path d="M14.3989 3.70252C15.2789 2.62652 15.8789 1.14452 15.7009 -0.333481C14.4069 -0.256481 12.8439 0.535518 11.9239 1.58752C11.0969 2.52352 10.3789 4.06252 10.5789 5.48552C12.0359 5.61452 13.4889 4.76252 14.3989 3.70252Z"/>
                    </svg>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition">
                    <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18321 20.1396C2.98535 20.4789 2.66891 20.7468 2.28655 20.9035C1.90419 21.0602 1.47799 21.097 1.07076 21.0081C0.663532 20.9193 0.293208 20.7091 0.0169162 20.4084C-0.025351 20.3638 -0.0617286 20.312 -0.0902668 20.2553C-0.118805 20.1986 -0.139001 20.1378 -0.149998 20.0749V3.84991C-0.139001 3.78699 -0.118805 3.72618 -0.0902668 3.66951C-0.0617286 3.61283 -0.025351 3.56098 0.0169162 3.51641C0.293208 3.21569 0.663532 3.00552 1.07076 2.91664C1.47799 2.82776 1.90419 2.86459 2.28655 3.02127C2.66891 3.17795 2.98535 3.44585 3.18321 3.78521L12.3832 12.0151C12.48 12.1032 12.5262 12.2237 12.5262 12.3499C12.5262 12.4761 12.48 12.5966 12.3832 12.6846L3.18321 20.1396Z"/>
                      <path d="M16.8168 20.1396L7.61676 12.6846C7.52003 12.5966 7.47375 12.4761 7.47375 12.3499C7.47375 12.2237 7.52003 12.1032 7.61676 12.0151L16.8168 3.78521C17.0146 3.44585 17.3311 3.17795 17.7134 3.02127C18.0958 2.86459 18.522 2.82776 18.9292 2.91664C19.3365 3.00552 19.7068 3.21569 19.9831 3.51641C20.0254 3.56098 20.0617 3.61283 20.0903 3.66951C20.1188 3.72618 20.139 3.78699 20.15 3.84991V20.0749C20.139 20.1378 20.1188 20.1986 20.0903 20.2553C20.0617 20.312 20.0254 20.3638 19.9831 20.4084C19.7068 20.7091 19.3365 20.9193 18.9292 21.0081C18.522 21.097 18.0958 21.0602 17.7134 20.9035C17.3311 20.7468 17.0146 20.4789 16.8168 20.1396Z"/>
                    </svg>
                    <div>
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center relative">
                <div className="relative w-64">
                  <img src="/images/app-screen1.png" alt="Hustle Mania App" className="rounded-3xl shadow-2xl relative z-20" />
                  <img src="/images/app-screen2.png" alt="Hustle Mania App Features" className="absolute -right-10 -bottom-10 w-64 rounded-3xl shadow-2xl z-10" />
                  <div className="absolute -left-8 -top-8 w-32 h-32 bg-indigo-400 rounded-full opacity-30 blur-xl"></div>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-400 rounded-full opacity-30 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* About Section */}
        <section id="about" className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="relative">
                  <div className="bg-indigo-100 w-full h-96 rounded-xl"></div>
                  <img 
                    src="/images/team.jpg" 
                    alt="Hustle Mania Team" 
                    className="absolute inset-0 w-full h-96 object-cover rounded-xl shadow-xl" 
                  />
                  <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-lg">
                    <div className="font-bold text-4xl text-indigo-600 mb-2">5+</div>
                    <div className="text-gray-700">Years connecting communities</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Hustle Mania</h3>
                <p className="text-gray-700 text-lg mb-6">
                  We're on a mission to empower local communities by connecting job seekers with neighboring employers, creating economic opportunities that strengthen communities.
                </p>
                <p className="text-gray-700 text-lg mb-8">
                  Founded in 2020, Hustle Mania has helped over 10,000 people find work in their neighborhoods, while enabling businesses to find reliable local talent quickly and easily.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-xl text-indigo-600 mb-2">Our Mission</h4>
                    <p className="text-gray-600">To create economic opportunities in every neighborhood through hyperlocal job connections.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-indigo-600 mb-2">Our Vision</h4>
                    <p className="text-gray-600">A world where anyone can find meaningful work within walking distance of their home.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-indigo-50 py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {[
                {
                  question: "How much does it cost to use Hustle Mania?",
                  answer: "Hustle Mania is completely free for job seekers. Employers pay a small fee to post job listings, with flexible pricing options available for businesses of all sizes."
                },
                {
                  question: "How do I know the jobs are legitimate?",
                  answer: "All employers on our platform undergo a verification process. We review each job posting and continuously monitor our platform to ensure legitimacy and safety for our users."
                },
                {
                  question: "Can I use Hustle Mania if I'm looking for full-time work?",
                  answer: "Absolutely! While we're known for connecting people with flexible work arrangements, many employers on our platform also post full-time positions."
                },
                {
                  question: "How far is considered 'local' for job listings?",
                  answer: "You can customize your search radius based on your preferences. By default, we show jobs within 5 miles of your location, but you can expand this to find more opportunities."
                },
                {
                  question: "How do I get paid for jobs I find through Hustle Mania?",
                  answer: "Payment arrangements are made directly between you and the employer. We encourage clear communication about payment terms before starting any job."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
                      <span className="text-indigo-600 group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-10">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  Have questions or want to partner with us? We'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <a href="mailto:hello@hustlemania.com" className="text-indigo-600 hover:underline">hello@hustlemania.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567-890</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Community Street, Neighborhood City, State 12345</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 p-3 rounded-full transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 p-3 rounded-full transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 p-3 rounded-full transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 p-3 rounded-full transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h4>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition transform hover:-translate-y-1 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-indigo-800 py-16 px-4 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="text-indigo-200 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest job opportunities and tips for finding work in your neighborhood.
            </p>
            <form className="flex flex-col md:flex-row max-w-lg mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg shadow-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
   </div>
  )}