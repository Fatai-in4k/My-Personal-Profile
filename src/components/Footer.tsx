import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevDesigner
            </div>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              Hi, I'm Fatai, a UI/UX and Frontend specialist dedicated to transforming ideas into engaging, user-friendly digital experiences. Whether you're a startup, an established company, or anywhere in between, I craft intuitive designs and seamless interfaces that not only look stunning but also drive results. Let's work together to elevate your brand, enhance user satisfaction, and turn visitors into loyal customers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Available for freelance projects and collaborations
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {currentYear} DevDesigner. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center space-x-1 mt-2 md:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;