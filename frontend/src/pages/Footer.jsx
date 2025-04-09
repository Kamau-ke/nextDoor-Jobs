import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">NextDoor-Jobs</h3>
            <p className="mb-4 text-gray-400">
              Connecting local talent with neighborhood opportunities since 2023. Find your next career move just around the corner.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-green-400 transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/employers" className="text-gray-400 hover:text-green-400 transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-green-400 transition-colors">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-green-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-green-500 mr-3" />
                <a href="tel:0700837418" className="text-gray-400 hover:text-green-400 transition-colors">
                  0700837418
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-green-500 mr-3" />
                <a href="mailto:support@nextdoorjobs.com" className="text-gray-400 hover:text-green-400 transition-colors">
                  support@nextdoorjobs.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest job opportunities and career tips.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-2 md:mb-0">
            &copy; {currentYear} NextDoor-Jobs. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;