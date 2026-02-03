// layouts/MainLayout.jsx
import Head from 'next/head';
import { motion } from 'framer-motion';

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
           <span className="font-display font-bold text-xl text-blue-400">PulsAI</span>
           <nav className="text-sm text-gray-400">Menu Placeholder</nav>
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