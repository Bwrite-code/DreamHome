
import { Link } from 'react-router-dom';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#273F4F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-[#FE7743]" />
              <span className="text-xl font-bold">DreamHomes</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in finding the perfect home. We make dreams come true with our exceptional property listings and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/169RbJMv7o/" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/idowu-ibitayo-bb0131181" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FE7743] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Property Sales</li>
              <li>Property Rentals</li>
              <li>Property Management</li>
              <li>Investment Consulting</li>
              <li>Market Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#FE7743]" />
                <span>123 Real Estate Ave, Dream City, DC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#FE7743]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#FE7743]" />
                <span>info@dreamhomes.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Technokwrite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;