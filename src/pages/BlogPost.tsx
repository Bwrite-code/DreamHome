import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Heart, MessageCircle } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Home Buying in 2025',
    content: `
      <p>Buying a home is one of the most significant financial decisions you'll make in your lifetime. In 2025, the real estate market continues to evolve with new technologies, changing buyer preferences, and shifting economic conditions. This comprehensive guide will walk you through everything you need to know to make an informed decision.</p>
<br>
    <h2><strong>Understanding the Current Market</strong></h2>
    <p>The 2025 real estate market is characterized by several key trends that buyers should be aware of. Interest rates have stabilized after years of volatility, and inventory levels are gradually improving in many markets. However, regional variations remain significant, making local market knowledge crucial for success.</p>

    <h2><strong>Step 1: Assess Your Financial Readiness</strong></h2>
    <p>Before you start house hunting, it's essential to evaluate your financial situation thoroughly. This includes:</p>
    <ul>
        <li>Reviewing your credit score and history</li>
        <li>Calculating your debt-to-income ratio</li>
        <li>Determining how much you can afford for a down payment</li>
        <li>Getting pre-approved for a mortgage</li>
    </ul>

    <h2><strong>Step 2: Define Your Needs vs. Wants</strong></h2>
    <p>Creating a clear list of must-haves versus nice-to-haves will help you stay focused during your search. Consider factors like location, size, age of the home, and specific features that are important to your lifestyle.</p>

    <h2><strong>Step 3: Work with the Right Professionals</strong></h2>
    <p>A skilled real estate agent can make the difference between a smooth transaction and a stressful experience. Look for agents who:</p>
    <ul>
        <li>Have extensive knowledge of your target area</li>
        <li>Communicate clearly and promptly</li>
        <li>Have a proven track record of successful transactions</li>
        <li>Use modern technology and marketing tools</li>
    </ul>

    <h2><strong>Step 4: The Home Search Process</strong></h2>
    <p>Modern home searching involves both online research and in-person visits. Start by browsing listings online to get a feel for the market, then schedule viewings for properties that meet your criteria. Don't forget to consider factors like commute times, school districts, and neighborhood amenities.</p>

    <h2><strong>Step 5: Making an Offer</strong></h2>
    <p>When you find the right property, your agent will help you craft a competitive offer. This includes determining the right price, negotiating terms, and including appropriate contingencies to protect your interests.</p>

    <h2><strong>Step 6: Home Inspection and Final Steps</strong></h2>
    <p>Once your offer is accepted, you'll need to arrange for a professional home inspection. This is your opportunity to identify any potential issues and negotiate repairs or price adjustments. The final steps include securing your mortgage, conducting a final walkthrough, and completing the closing process.</p>

    <h2><strong>Technology and Innovation in 2025</strong></h2>
    <p>The real estate industry continues to embrace technology, with virtual tours, AI-powered matching algorithms, and digital closing processes becoming standard. These innovations can streamline your home buying experience and provide better access to information.</p>
<br>
    <h2><strong>Conclusion</strong></h2>
    <p>Buying a home in 2025 requires careful planning, professional guidance, and a clear understanding of the current market conditions. By following these steps and working with experienced professionals, you'll be well-equipped to find and purchase your dream home.</p>
</div>
    `,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Buying Tips',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    tags: ['Home Buying', 'Real Estate Tips', 'Market Analysis', 'First-Time Buyers']
  },
  {
    id: '2',
    title: 'Top 10 Neighborhoods for Young Professionals',
    content: `<p>Discover the top 10 neighborhoods for young professionals in 2025. These vibrant communities offer a mix of cultural attractions, vibrant life, and opportunities for career development.</p>`,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Neighborhoods',
    author: 'Michael Chen',
    date: 'January 12, 2025',
    readTime: '6 min read',
    tags: ['Neighborhoods', 'Urban Living', 'Young Professionals']
  },
  {
    id: '3',
    title: 'Real Estate Investment Strategies That Work',
    content: `<p>Learn proven investment strategies from industry experts. Maximize your returns and build long-term wealth through smart property investments.</p>`,
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Investment',
    author: 'Emily Rodriguez',
    date: 'January 10, 2025',
    readTime: '10 min read',
    tags: ['Investment', 'Wealth', 'Strategy']
  },
  {
    id: '4',
    title: 'Home Staging: Transform Your Space for Quick Sales',
    content: `<p>Professional staging tips to make your home irresistible to buyers. Learn how to highlight your property's best features and maximize its appeal.</p>`,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Selling Tips',
    author: 'David Wilson',
    date: 'January 8, 2025',
    readTime: '7 min read',
    tags: ['Staging', 'Selling', 'Home Improvement']
  },
  {
    id: '5',
    title: 'Understanding Mortgage Rates and Market Trends',
    content: `<p>Get insights into current mortgage rates and market predictions. Make informed decisions about when to buy, sell, or refinance your home.</p>`,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Market Analysis',
    author: 'Lisa Thompson',
    date: 'January 5, 2025',
    readTime: '9 min read',
    tags: ['Mortgage', 'Market Trends', 'Finance']
  },
  {
    id: '6',
    title: 'Smart Home Technology for Modern Living',
    content: `<p>Explore the latest smart home innovations that are changing how we live. From security systems to energy efficiency, discover what's possible.</p>`,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    author: 'James Anderson',
    date: 'January 3, 2025',
    readTime: '5 min read',
    tags: ['Smart Home', 'Technology', 'Innovation']
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <Link to="/blog" className="text-[#FE7743] underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/blog"
            className="inline-flex items-center text-[#447D9B] hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Tag className="h-4 w-4 mr-1" />
              <span className="mr-6">{post.category}</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-6">{post.date}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-[#273F4F] mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-600">By {post.author}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-[#FE7743] transition-colors">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>24</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-[#FE7743] transition-colors">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>8</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-[#FE7743] transition-colors">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-[#273F4F] prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#FE7743] prose-a:hover:text-orange-600 prose-ul:text-gray-600 prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-[#FE7743] text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#273F4F] mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="block hover:transform hover:scale-105 transition-all duration-200"
              >
                <img 
                  src={relatedPost.image} 
                  alt={relatedPost.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="text-sm text-[#FE7743] mb-1">{relatedPost.category}</div>
                <h4 className="font-semibold text-[#273F4F] line-clamp-2">{relatedPost.title}</h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-[#FE7743] to-orange-600 rounded-xl p-8 text-center text-white mb-8">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Real Estate Insights</h3>
          <p className="mb-6">Get the latest market trends, buying tips, and exclusive property listings delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#FE7743] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;