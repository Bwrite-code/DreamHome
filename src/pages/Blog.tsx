import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: '1',
      title: 'The Ultimate Guide to Home Buying in 2025',
      excerpt: 'Navigate the modern real estate market with confidence. Learn about the latest trends, financing options, and essential tips for first-time buyers.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Buying Tips',
      author: 'Sarah Johnson',
      date: 'January 15, 2025',
      readTime: '8 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Top 10 Neighborhoods for Young Professionals',
      excerpt: 'Discover the best areas for career growth, nightlife, and community. Our comprehensive guide to urban living for the modern professional.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Neighborhoods',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      readTime: '6 min read',
      featured: true
    },
    {
      id: '3',
      title: 'Real Estate Investment Strategies That Work',
      excerpt: 'Learn proven investment strategies from industry experts. Maximize your returns and build long-term wealth through smart property investments.',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Investment',
      author: 'Emily Rodriguez',
      date: 'January 10, 2025',
      readTime: '10 min read',
      featured: false
    },
    {
      id: '4',
      title: 'Home Staging: Transform Your Space for Quick Sales',
      excerpt: 'Professional staging tips to make your home irresistible to buyers. Learn how to highlight your property\'s best features and maximize its appeal.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Selling Tips',
      author: 'David Wilson',
      date: 'January 8, 2025',
      readTime: '7 min read',
      featured: false
    },
    {
      id: '5',
      title: 'Understanding Mortgage Rates and Market Trends',
      excerpt: 'Get insights into current mortgage rates and market predictions. Make informed decisions about when to buy, sell, or refinance your home.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Market Analysis',
      author: 'Lisa Thompson',
      date: 'January 5, 2025',
      readTime: '9 min read',
      featured: false
    },
    {
      id: '6',
      title: 'Smart Home Technology for Modern Living',
      excerpt: 'Explore the latest smart home innovations that are changing how we live. From security systems to energy efficiency, discover what\'s possible.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
      author: 'James Anderson',
      date: 'January 3, 2025',
      readTime: '5 min read',
      featured: false
    }
  ];

  const categories = ['all', 'Buying Tips', 'Selling Tips', 'Investment', 'Market Analysis', 'Neighborhoods', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#273F4F] mb-4">Real Estate Insights & Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest real estate news, market trends, and expert advice to make better property decisions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE7743] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#FE7743] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#273F4F] mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#FE7743] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Tag className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.category}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#273F4F] mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-justify">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#FE7743] hover:text-orange-600 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#273F4F] mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Tag className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#273F4F] mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-justify">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#FE7743] hover:text-orange-600 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12 mb-8">
          <button className="bg-[#273F4F] hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;