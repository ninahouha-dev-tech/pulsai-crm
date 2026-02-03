// layouts/MainLayout.jsx
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function MainLayout({ children, title = "PulsAI CRM" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI Powered CRM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header Placeholder */}
        <header className="p-4 border-b border-gray-800 flex justify-between items-center bg-surface/50 backdrop-blur-md sticky top-0 z-50">
           <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pulsai-blue to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-display font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-xl text-white">PulsAI</span>
           </Link>
           <nav className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <LogIn size={16} />
                  Connexion
                </Button>
              </Link>
           </nav>
        </header>

        {/* Content with Framer Motion entry animation */}
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow container mx-auto p-6"
        >
          {children}
        </motion.main>

        {/* Footer Placeholder */}
        <footer className="p-4 text-center text-gray-600 text-xs">
          © 2024 PulsAI CRM. All rights reserved.
        </footer>
      </div>
    </>
  );
}