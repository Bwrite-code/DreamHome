import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, Calendar, Car, Wifi, Minimize as Swimming, Dumbbell, Shield, Heart, Share2, ShoppingCart, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const PropertyDetail = () => {
  const { id } = useParams();
  const { addToCart, items } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const property = {
    id: id,
    title: 'Modern Luxury Villa',
    price: 850000,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: 'Beverly Hills, CA',
    beds: 4,
    baths: 3,
    sqft: 3200,
    yearBuilt: 2020,
    parking: 2,
    description: 'This stunning modern villa offers the perfect blend of luxury and comfort. Located in the prestigious Beverly Hills neighborhood, this property features an open-concept design with floor-to-ceiling windows, premium finishes throughout, and a private backyard oasis. The gourmet kitchen boasts high-end appliances and custom cabinetry, while the master suite includes a spa-like bathroom and walk-in closet. Perfect for entertaining with its spacious living areas and outdoor deck.',
    features: [
      'Gourmet Kitchen with Premium Appliances',
      'Hardwood Floors Throughout',
      'Master Suite with Walk-in Closet',
      'Private Backyard with Deck',
      'Two-Car Garage',
      'Central Air Conditioning',
      'Security System',
      'Energy Efficient Windows'
    ],
    amenities: [
      { icon: Wifi, name: 'High-Speed Internet' },
      { icon: Swimming, name: 'Swimming Pool' },
      { icon: Dumbbell, name: 'Fitness Center' },
      { icon: Shield, name: '24/7 Security' },
      { icon: Car, name: 'Parking Garage' }
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah@dreamhomes.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: property.id!,
      title: property.title,
      price: property.price,
      image: property.images[0],
      location: property.location
    };
    
    addToCart(cartItem);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const isInCart = items.some(item => item.id === property.id);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/properties"
            className="inline-flex items-center text-[#447D9B] hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Properties
          </Link>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>Property added to cart!</span>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <img 
                  src={property.images[selectedImage]} 
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-[#FE7743]" />
                  </button>
                  <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600 hover:text-[#FE7743]" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-[#FE7743]' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-[#273F4F] mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="text-3xl font-bold text-[#FE7743] mb-6">
                  ${property.price.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="h-8 w-8 text-[#447D9B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#273F4F]">{property.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="h-8 w-8 text-[#447D9B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#273F4F]">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Square className="h-8 w-8 text-[#447D9B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#273F4F]">{property.sqft}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-[#447D9B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#273F4F]">{property.yearBuilt}</div>
                  <div className="text-sm text-gray-600">Built</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="h-8 w-8 text-[#447D9B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#273F4F]">{property.parking}</div>
                  <div className="text-sm text-gray-600">Parking</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#273F4F] mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#273F4F] mb-4">Features</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#273F4F] mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <Icon className="h-5 w-5 text-[#447D9B]" />
                        <span className="text-gray-600">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Agent and Purchase */}
          <div className="lg:col-span-1">
            {/* Purchase Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#FE7743] mb-2">
                  ${property.price.toLocaleString()}
                </div>
                <div className="text-gray-600">Purchase Price</div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isInCart}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isInCart 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-[#FE7743] hover:bg-orange-600 text-white transform hover:scale-105'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{isInCart ? 'Already in Cart' : 'Add to Cart'}</span>
              </button>

              <div className="mt-4 text-center">
                <Link 
                  to="/cart"
                  className="text-[#447D9B] hover:text-blue-600 transition-colors"
                >
                  View Cart
                </Link>
              </div>
            </div>

            {/* Agent Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#273F4F] mb-4">Contact Agent</h3>
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={property.agent.image} 
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#273F4F]">{property.agent.name}</div>
                  <div className="text-sm text-gray-600">Licensed Real Estate Agent</div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href={`tel:${property.agent.phone}`}
                  className="block w-full bg-[#447D9B] hover:bg-blue-600 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call {property.agent.phone}
                </a>
                <a 
                  href={`mailto:${property.agent.email}`}
                  className="block w-full border-2 border-[#447D9B] text-[#447D9B] hover:bg-[#447D9B] hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Email Agent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;