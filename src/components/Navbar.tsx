import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Building, BookOpen, Info, Phone, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Building },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-[#FE7743]" />
            <span className="text-2xl font-bold text-[#273F4F]">DreamHomes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-[#FE7743] bg-orange-50'
                      : 'text-[#273F4F] hover:text-[#FE7743] hover:bg-orange-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-lg font-medium">{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/cart"
              className="relative flex items-center space-x-1 px-3 py-2 rounded-lg text-[#273F4F] hover:text-[#FE7743] hover:bg-orange-50 transition-all duration-200"
            >
              <ShoppingCart className="h-4 w-4" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FE7743] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#273F4F] hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-[#FE7743] bg-orange-50'
                      : 'text-[#273F4F] hover:text-[#FE7743] hover:bg-orange-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-lg font-medium">{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-3 rounded-lg text-[#273F4F] hover:text-[#FE7743] hover:bg-orange-50 transition-all duration-200"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-lg font-medium">Cart ({items.length})</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;