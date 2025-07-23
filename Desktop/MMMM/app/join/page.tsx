'use client';

import { useEffect, useState } from 'react';
import { Heart, Code, Users, Star, Send, Sparkles } from 'lucide-react';

export default function Join() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    interests: [],
    portfolio: '',
    motivation: '',
    collaboration: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const experiences = [
    'Complete Beginner',
    'Some Experience (1-2 years)',
    'Intermediate (2-5 years)',
    'Advanced (5+ years)',
    'Professional Developer'
  ];

  const interests = [
    'Frontend Development',
    'Backend Development',
    'Mobile Development',
    'AI/Machine Learning',
    'UI/UX Design',
    'DevOps',
    'Data Science',
    'Cybersecurity',
    'Game Development',
    'Open Source'
  ];

  const collaborationTypes = [
    'Full-time Member',
    'Part-time Contributor',
    'Project-based Collaboration',
    'Mentorship Program',
    'Event Participation',
    'Community Support'
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 glitch-text bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Join GI!Tch
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ready to be part of a community where your unique perspective shapes the future of technology? 
            We're looking for passionate girls who want to make magic with code.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-gray-800">Why Join Us?</h2>
            <p className="text-lg text-gray-600">Discover the benefits of being part of our creative collective.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200 text-center">
              <Code className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Skill Development</h3>
              <p className="text-gray-600 text-sm">Learn from experienced developers and work on real projects.</p>
            </div>

            <div className="card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-200 text-center">
              <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Supportive Community</h3>
              <p className="text-gray-600 text-sm">Connect with like-minded girls who share your passion for tech.</p>
            </div>

            <div className="card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-200 text-center">
              <Star className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Portfolio Building</h3>
              <p className="text-gray-600 text-sm">Work on impressive projects that showcase your abilities.</p>
            </div>

            <div className="card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-teal-200 text-center">
              <Heart className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Mentorship</h3>
              <p className="text-gray-600 text-sm">Get guidance from industry professionals and senior members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-pink-200 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-white text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-orbitron font-bold mb-2">Application Form</h2>
              <p className="text-pink-100">Tell us about yourself and let's create magic together!</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">
                  Basic Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Programming Experience *
                  </label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your experience level</option>
                    {experiences.map((exp) => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">
                  Interests & Skills
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What areas of technology interest you? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interests.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="rounded border-pink-300 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio/GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="https://github.com/yourusername or your portfolio URL"
                  />
                </div>
              </div>

              {/* Collaboration Type */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">
                  Collaboration Preference
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How would you like to collaborate with us? *
                  </label>
                  <select
                    required
                    value={formData.collaboration}
                    onChange={(e) => setFormData(prev => ({ ...prev, collaboration: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select collaboration type</option>
                    {collaborationTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Motivation */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">
                  Tell Us More
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join GI!Tch? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.motivation}
                    onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Share your motivation, goals, and what you hope to contribute to our community..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full btn-glitch bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="h-5 w-5" />
                  Submit Application
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  We'll review your application and get back to you within 1-2 weeks. ✨
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Got questions? We've got answers!</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200">
              <h3 className="font-semibold text-gray-800 mb-2">Do I need to be an expert programmer to join?</h3>
              <p className="text-gray-600 text-sm">Not at all! We welcome girls at all skill levels, from complete beginners to experienced developers. What matters most is your passion and willingness to learn.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200">
              <h3 className="font-semibold text-gray-800 mb-2">Is there an age requirement?</h3>
              <p className="text-gray-600 text-sm">We primarily focus on high school and college-age girls, but we're open to passionate learners of all ages who align with our community values.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200">
              <h3 className="font-semibold text-gray-800 mb-2">What kind of time commitment is expected?</h3>
              <p className="text-gray-600 text-sm">It depends on your collaboration type! We offer flexible options from casual community participation to more involved project work. You choose what works for your schedule.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200">
              <h3 className="font-semibold text-gray-800 mb-2">Are there any costs involved?</h3>
              <p className="text-gray-600 text-sm">Absolutely not! GI!Tch is completely free to join. We believe in making technology accessible to everyone, regardless of financial background.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}