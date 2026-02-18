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
        <header className="p-4 border-b border-gray-800 bg-surface/50 backdrop-blur-md sticky top-0 z-50">
           <nav className="max-w-7xl mx-auto flex items-center justify-center gap-8">
              {/* 1. Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                 <motion.div 
                   whileTap={{ scale: 0.95 }}
                   className="w-8 h-8 rounded-lg bg-gradient-to-br from-pulsai-blue to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform"
                 >
                   <span className="text-white font-display font-bold text-sm">P</span>
                 </motion.div>
                 <span className="font-display font-bold text-xl text-white">PulsAI</span>
              </Link>

              {/* 2, 3, 4. Menu Items */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/#valeurs" className="group">
                  <motion.span 
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex px-5 py-2 rounded-full text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 font-medium text-[10px] uppercase tracking-widest border border-transparent group-hover:border-white/20 shadow-lg group-hover:shadow-pulsai-blue/10"
                  >
                    NOS valeurs
                  </motion.span>
                </Link>
                <Link href="/#pourquoi" className="group">
                  <motion.span 
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex px-5 py-2 rounded-full text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 font-medium text-[10px] uppercase tracking-widest border border-transparent group-hover:border-white/20 shadow-lg group-hover:shadow-pulsai-blue/10"
                  >
                    Pourquoi nous choisir
                  </motion.span>
                </Link>
                <Link href="/#tarifs" className="group">
                  <motion.span 
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex px-5 py-2 rounded-full text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 font-medium text-[10px] uppercase tracking-widest border border-transparent group-hover:border-white/20 shadow-lg group-hover:shadow-pulsai-blue/10"
                  >
                    Nos tarifs
                  </motion.span>
                </Link>
              </div>

              {/* 5. Accès Assistant (CTA) */}
              <Link href="/login">
                <Button variant="primary" size="md" className="shadow-pulsai-blue/30">
                  Accéder à l'assistant
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
        <footer className="py-4 text-center border-t border-white/5 bg-background/50">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © 2024 <span className="text-white font-medium">PulsAI CRM</span>
          </p>
        </footer>
      </div>
    </>
  );
}