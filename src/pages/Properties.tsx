import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Bed, Bath, Square, Heart, Grid, List } from 'lucide-react';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const properties = [
    {
      id: '1',
      title: 'Modern Luxury Villa',
      price: 850000,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: 3200,
      type: 'house',
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
      type: 'condo',
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
      type: 'house',
      featured: false
    },
    {
      id: '4',
      title: 'Waterfront Apartment',
      price: 675000,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Miami Beach, FL',
      beds: 2,
      baths: 2,
      sqft: 1800,
      type: 'condo',
      featured: false
    },
    {
      id: '5',
      title: 'Mountain Retreat',
      price: 380000,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Aspen, CO',
      beds: 2,
      baths: 1,
      sqft: 1500,
      type: 'house',
      featured: false
    },
    {
      id: '6',
      title: 'Urban Loft',
      price: 520000,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Chicago, IL',
      beds: 1,
      baths: 1,
      sqft: 1200,
      type: 'loft',
      featured: false
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under-500k' && property.price < 500000) ||
                        (priceRange === '500k-800k' && property.price >= 500000 && property.price < 800000) ||
                        (priceRange === 'over-800k' && property.price >= 800000);
    
    const matchesType = propertyType === 'all' || property.type === propertyType;
    
    return matchesSearch && matchesPrice && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#273F4F] mb-4">Find Your Dream Property</h1>
          <p className="text-xl text-gray-600">
            Discover amazing properties that match your lifestyle and budget
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE7743] focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE7743] focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="under-500k">Under $500K</option>
              <option value="500k-800k">$500K - $800K</option>
              <option value="over-800k">Over $800K</option>
            </select>

            {/* Property Type */}
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE7743] focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="loft">Loft</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-[#FE7743] text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-[#FE7743] text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Found {filteredProperties.length} properties
          </p>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE7743] focus:border-transparent">
            <option>Sort by Price: Low to High</option>
            <option>Sort by Price: High to Low</option>
            <option>Sort by Newest</option>
          </select>
        </div>

        {/* Properties Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredProperties.map((property) => (
            <div key={property.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${viewMode === 'grid' ? 'transform hover:-translate-y-2' : ''}`}>
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className={`w-full object-cover ${viewMode === 'grid' ? 'h-64' : 'h-48'}`}
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-[#FE7743]" />
                  </button>
                </div>
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-[#FE7743] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
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
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} baths</span>
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

        {/* Load More */}
        <div className="text-center mt-12 mb-8">
          <button className="bg-[#273F4F] hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Load More Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;