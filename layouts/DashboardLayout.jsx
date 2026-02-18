import { useState } from "react";
import Head from "next/head";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import { motion } from "framer-motion";

export default function DashboardLayout({ children, title = "Tableau de bord" }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{`${title} | PulsAI CRM`}</title>
      </Head>

      <div className="flex min-h-screen bg-background text-gray-100 font-sans">
        {/* Sidebar Fixe (Desktop) */}
        <Sidebar />

        {/* Mobile Navigation (Drawer) */}
        <MobileNav 
          isOpen={isMobileNavOpen} 
          onClose={() => setIsMobileNavOpen(false)} 
        />

        {/* Contenu Principal */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header 
            title={title} 
            onOpenMobileNav={() => setIsMobileNavOpen(true)}
          />
          
          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            <motion.div
              key={title} 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
              }}
              className="max-w-7xl mx-auto space-y-6"
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
}