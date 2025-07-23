'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Code, Heart, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6">
              <span className="glitch-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                GI!Tch
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-600 mb-8 holographic">
              We don't fix bugs, we make magic.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              An all-girls tech collective blending femininity, hacker vibes, and bold creativity. 
              Turning imperfections into innovation, one line of code at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/about" 
                className="btn-glitch bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Discover Our Story <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/join" 
                className="border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 flex items-center gap-2"
              >
                Join the Collective <Heart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another coding team. We're a movement that celebrates the power of feminine energy in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-200 text-center">
              <div className="float mb-6">
                <Code className="h-12 w-12 text-pink-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Creative Coding</h3>
              <p className="text-gray-600">
                We approach programming as an art form, creating beautiful, functional solutions that push boundaries.
              </p>
            </div>

            <div className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200 text-center">
              <div className="float mb-6" style={{ animationDelay: '0.5s' }}>
                <Users className="h-12 w-12 text-purple-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Inclusive Community</h3>
              <p className="text-gray-600">
                A safe space where girls can explore, experiment, and excel in technology without judgment.
              </p>
            </div>

            <div className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 text-center">
              <div className="float mb-6" style={{ animationDelay: '1s' }}>
                <Sparkles className="h-12 w-12 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Innovation Focus</h3>
              <p className="text-gray-600">
                We turn glitches into features, bugs into breakthroughs, and challenges into opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm p-12 rounded-3xl border border-pink-200">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Make Magic?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join a community where your code is your canvas and your creativity knows no bounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects" 
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border-2 border-pink-200 hover:border-pink-400"
              >
                View Our Projects
              </Link>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}