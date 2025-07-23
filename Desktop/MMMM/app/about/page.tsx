'use client';

import { useEffect, useState } from 'react';
import { Heart, Star, Users, Zap, Code2, Sparkles } from 'lucide-react';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Inclusivity First",
      description: "Creating a safe, supportive environment where every girl can thrive in tech.",
      color: "pink"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Creative Excellence",
      description: "Pushing the boundaries of what's possible through innovative thinking and bold design.",
      color: "purple"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Spirit",
      description: "Believing that the best solutions come from diverse minds working together.",
      color: "blue"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Disruptive Innovation",
      description: "Turning glitches into features and challenges into breakthrough moments.",
      color: "teal"
    }
  ];

  const stats = [
    { number: "50+", label: "Active Members", color: "pink" },
    { number: "200+", label: "Projects Completed", color: "purple" },
    { number: "15+", label: "Tech Events Hosted", color: "blue" },
    { number: "5+", label: "Years Strong", color: "teal" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 glitch-text bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            About GI!Tch
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Born from the belief that diversity drives innovation, GI!Tch is more than a coding collective—
            we're a movement celebrating the unique perspectives that girls bring to technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in">
              <h2 className="text-3xl font-orbitron font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It started with a simple observation: the tech world was missing something beautiful. 
                In 2019, a group of passionate female developers came together with a radical idea—
                what if we could create technology that was not only functional but also embodied 
                the creativity, empathy, and intuitive design thinking that comes naturally to us?
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The name "GI!Tch" represents our philosophy perfectly. In programming, a glitch is 
                typically seen as an error, something to be fixed. But we see glitches differently—
                as unexpected moments of beauty, as opportunities for innovation, as the spark that 
                leads to breakthrough discoveries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're a thriving community of creators, innovators, and dreamers who prove 
                every day that the future of technology is bright, beautiful, and undeniably feminine.
              </p>
            </div>
            <div className="relative">
              <div className="float bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-3xl border border-pink-200">
                <Code2 className="h-24 w-24 text-pink-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  To empower girls in technology by creating an inclusive space where creativity meets code, 
                  and where every bug becomes a beautiful feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from the code we write to the community we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-${value.color}-200 text-center group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-${value.color}-500 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-gray-800">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that tell our story of growth and innovation.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-4xl md:text-5xl font-orbitron font-bold text-${stat.color}-500 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Join Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Every great story needs new chapters, and we're always looking for passionate girls 
            who want to make their mark in technology. Whether you're a seasoned developer or 
            just starting your coding journey, there's a place for you in our collective.
          </p>
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 p-8 rounded-3xl border border-pink-200">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ready to be part of something magical?</h3>
            <p className="text-gray-600 mb-6">
              Join us and help shape the future of technology with creativity, passion, and a little bit of glitch magic.
            </p>
            <a 
              href="/join" 
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Become a GI!Tch Member
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}