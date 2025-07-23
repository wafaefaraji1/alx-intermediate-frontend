import Link from 'next/link';
import { Heart, Github, Instagram, Twitter, Mail, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/projects', label: 'Projects' },
      { href: '/join', label: 'Join Us' },
      { href: '/contact', label: 'Contact' },
    ],
    community: [
      { href: '#', label: 'Discord Server' },
      { href: '#', label: 'Community Forum' },
      { href: '#', label: 'Events' },
      { href: '#', label: 'Mentorship' },
      { href: '#', label: 'Resources' },
    ],
    support: [
      { href: '#', label: 'Documentation' },
      { href: '#', label: 'Help Center' },
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Code of Conduct' },
    ]
  };

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: '#',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-700'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:hello@glitch.dev',
      label: 'Email',
      color: 'hover:text-purple-500'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-6">
              <Zap className="h-8 w-8 text-pink-500 group-hover:text-purple-500 transition-colors" />
              <span className="font-orbitron text-2xl font-bold glitch-text bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                GI!Tch
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              An all-girls tech collective blending femininity, hacker vibes, and bold creativity. 
              We don't fix bugs, we make magic.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-gray-500 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-white/50`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-pink-200 p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest updates about our projects, events, and opportunities. 
              Join our community of amazing girls in tech!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 500+ amazing girls who are already part of our community! ✨
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>© {currentYear} GI!Tch Collective. Made with</span>
              <Heart className="h-4 w-4 text-pink-500" />
              <span>by amazing girls in tech.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}