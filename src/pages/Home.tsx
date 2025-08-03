
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Bed, Bath, Square, Star, Users, Award, TrendingUp } from 'lucide-react';
import familyImg from '../family.jpg';

const Home = () => {
  const featuredProperties = [
    {
      id: '1',
      title: 'Modern Luxury Villa',
      price: 850000,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: 3200,
      featured: true
    },
    {
      id: '2',
      title: 'Downtown Penthouse',
      price: 1200000,
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Manhattan, NY',
      beds: 3,
      baths: 2,
      sqft: 2800,
      featured: true
    },
    {
      id: '3',
      title: 'Cozy Family Home',
      price: 450000,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Austin, TX',
      beds: 3,
      baths: 2,
      sqft: 2100,
      featured: true
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'DreamHomes made buying our first home an amazing experience. Their team was professional, knowledgeable, and truly cared about finding us the perfect place.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Investor',
      content: 'I\'ve worked with many real estate companies, but DreamHomes stands out. Their market insights and personalized service helped me make profitable investment decisions.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-time Buyer',
      content: 'The entire process was smooth and stress-free. The team explained everything clearly and helped me navigate the complex world of real estate with confidence.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '2,500+', label: 'Happy Clients' },
    { icon: Award, value: '500+', label: 'Properties Sold' },
    { icon: TrendingUp, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-[#273F4F] overflow-hidden">
        {/* Blended background image */}
        <img
          src={familyImg}
          alt="Family"
          className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-soft-light pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your
              <span className="text-[#FE7743]"> Dream Home</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Discover extraordinary properties that match your lifestyle and budget. 
              Your perfect home awaits with our curated selection of premium real estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/properties"
                className="bg-[#FE7743] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <span>Explore Properties</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-[#273F4F] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-screen bg-[#273F4F] overflow-hidden"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FE7743] text-white rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-[#273F4F] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#273F4F] mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties that offer exceptional value and lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#FE7743] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#273F4F] mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds} bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FE7743]">
                      ${property.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/properties/${property.id}`}
                      className="bg-[#447D9B] hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="bg-[#273F4F] hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-200"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#273F4F] mb-4">Why Choose DreamHomes?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of expertise with cutting-edge technology to provide you with an unparalleled real estate experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FE7743] text-white rounded-full mb-6">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#273F4F] mb-4">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced agents provide personalized guidance throughout your real estate journey, ensuring you make informed decisions.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#447D9B] text-white rounded-full mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#273F4F] mb-4">Premium Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                We curate only the finest properties that meet our high standards for quality, location, and value.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#273F4F] text-white rounded-full mb-6">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#273F4F] mb-4">Market Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead with our comprehensive market analysis and insights that help you make strategic investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#273F4F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with DreamHomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FE7743] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-[#273F4F]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FE7743] to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let our expert team help you discover the perfect property that matches your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-white text-[#FE7743] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#FE7743] px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;