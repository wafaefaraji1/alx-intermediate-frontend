import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'GI!Tch - Creative Female Coding Collective',
  description: 'We don\'t fix bugs, we make magic. Join our all-girls tech collective blending femininity, hacker vibes, and bold creativity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen`}>
        <div className="pattern-overlay"></div>
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}