'use client';

import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Github, Twitter, Send, MessageCircle, Calendar, Users } from 'lucide-react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "For general inquiries and collaboration",
      contact: "hello@glitch.dev",
      color: "pink"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Join Our Discord",
      description: "Real-time chat with our community",
      contact: "discord.gg/glitch",
      color: "purple"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Book a Meeting",
      description: "Schedule a call with our team",
      contact: "calendly.com/glitch",
      color: "blue"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Forum",
      description: "Ask questions and share ideas",
      contact: "forum.glitch.dev",
      color: "teal"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      handle: "@glitch_collective",
      url: "#",
      color: "pink",
      description: "Behind-the-scenes content and team updates"
    },
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      handle: "github.com/glitch-collective",
      url: "#",
      color: "gray",
      description: "Open source projects and contributions"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      handle: "@glitch_dev",
      url: "#",
      color: "blue",
      description: "Tech news, updates, and community highlights"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 glitch-text bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Have a question, want to collaborate, or just want to say hi? 
            We'd love to hear from you and explore how we can create magic together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-gray-800">Ways to Connect</h2>
            <p className="text-lg text-gray-600">Choose your preferred way to reach out to us.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-${method.color}-200 text-center group`}
              >
                <div className={`text-${method.color}-500 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <a 
                  href={`mailto:${method.contact}`}
                  className={`text-${method.color}-600 font-medium text-sm hover:underline`}
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-pink-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-orbitron font-bold mb-4 text-gray-800">Send us a Message</h2>
                <p className="text-gray-600">We typically respond within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
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
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-glitch bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Info & Social */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-3xl border border-pink-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Our Virtual HQ</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-pink-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Global Collective</p>
                      <p className="text-gray-600 text-sm">We're a distributed team working from around the world</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Virtual Meetings</p>
                      <p className="text-gray-600 text-sm">Schedule calls via our booking system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Response Time</p>
                      <p className="text-gray-600 text-sm">We respond to emails within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-pink-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Follow Our Journey</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-pink-50 transition-colors duration-300 group"
                    >
                      <div className={`text-${social.color}-500 group-hover:scale-110 transition-transform duration-300`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-800">{social.name}</span>
                          <span className="text-gray-500 text-sm">{social.handle}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-pink-200">
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Stay in the Loop
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get monthly updates about our projects, events, and opportunities. 
              No spam, just pure tech magic delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 500+ amazing girls who are already part of our community! ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}