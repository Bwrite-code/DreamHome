import React from 'react';
import { Users, Award, TrendingUp, Heart, Star, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years in real estate, Sarah founded DreamHomes to revolutionize the property buying experience.',
      specialties: ['Luxury Properties', 'Market Analysis', 'Investment Strategy']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Sales',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michael brings expertise in residential sales and has helped over 500 families find their dream homes.',
      specialties: ['Residential Sales', 'First-Time Buyers', 'Negotiations']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily leads our marketing efforts and ensures our properties reach the right audience through innovative strategies.',
      specialties: ['Digital Marketing', 'Brand Strategy', 'Property Staging']
    },
    {
      name: 'David Wilson',
      role: 'Investment Advisor',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David specializes in real estate investments and has helped clients build substantial property portfolios.',
      specialties: ['Investment Properties', 'Portfolio Management', 'Market Trends']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centered Service',
      description: 'We put our clients first, understanding their unique needs and providing personalized solutions for their real estate journey.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Built on a foundation of honesty and transparency, we maintain the highest ethical standards in all our transactions.'
    },
    {
      icon: Star,
      title: 'Excellence in Everything',
      description: 'We strive for perfection in every detail, from property selection to closing, ensuring exceptional experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation & Growth',
      description: 'We embrace new technologies and market insights to stay ahead of trends and provide cutting-edge solutions.'
    }
  ];

  const achievements = [
    { number: '2,500+', label: 'Happy Clients' },
    { number: '500+', label: 'Properties Sold' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#273F4F] mb-6">
            About DreamHomes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been helping people find their perfect homes and build lasting relationships. 
            Our commitment to excellence and personalized service sets us apart in the real estate industry.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#273F4F] to-[#447D9B] rounded-xl p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To transform the real estate experience by combining cutting-edge technology with personalized service, 
            making the dream of homeownership accessible and enjoyable for everyone. We believe that finding the 
            perfect home should be an exciting journey, not a stressful ordeal.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#273F4F] text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FE7743] text-white rounded-full mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#273F4F] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-[#273F4F] text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#FE7743] mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#273F4F] text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#273F4F] mb-2">{member.name}</h3>
                  <p className="text-[#FE7743] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#273F4F] text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p>
                DreamHomes was founded in 2010 with a simple yet powerful vision: to make the real estate experience 
                more transparent, efficient, and client-focused. Our founder, Sarah Johnson, recognized that the 
                traditional real estate model was outdated and often left clients feeling confused and underserved.
              </p>
              <p>
                Starting with just a small team of passionate real estate professionals, we began revolutionizing 
                the industry by embracing technology, prioritizing client education, and maintaining unwavering 
                commitment to ethical practices. Our approach was different – we believed in empowering clients 
                with knowledge and providing them with the tools they needed to make informed decisions.
              </p>
              <p>
                Today, DreamHomes has grown into a leading real estate company, but our core values remain unchanged. 
                We continue to innovate, adapt to market changes, and most importantly, put our clients' dreams at 
                the center of everything we do. Every success story of a family finding their perfect home reminds 
                us why we started this journey.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FE7743] to-orange-600 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team help you navigate the real estate market and turn your property dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#FE7743] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FE7743] px-8 py-3 rounded-lg font-semibold transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;