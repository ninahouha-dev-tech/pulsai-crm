import Link from "next/link";
import { ArrowLeft, Plus, MoveRight, Layers, Zap, Shield, ChevronDown } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Input, Select, Label } from "@/components/ui/Input";
import { Table, TableCell } from "@/components/ui/Table";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion } from "framer-motion";

export default function Home() {
  const users = [
    { name: "Alice Dupont", role: "Admin", status: "Actif" },
    { name: "Bob Martin", role: "User", status: "En attente" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout title="PulsAI - L'intelligence au service de votre CRM">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pulsai-blue/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pulsai-green/10 rounded-full blur-[100px] -z-10" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto px-4 z-10"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-tight"
          >
            Propulsez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulsai-blue to-pulsai-green">Relation Client</span> avec l'IA
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            PulsAI CRM déploie des agents conversationnels intelligents 24/7, automatise le scoring prédictif de vos prospects et résout vos tickets de support via l'IA générative.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
                <Button size="lg" className="h-14 px-8 text-lg shadow-2xl shadow-pulsai-blue/40 group">
                    Commencer gratuitement
                    <MoveRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
            <Button variant="ghost" size="lg" className="h-14 px-8 text-lg" onClick={() => document.getElementById('design-system').scrollIntoView({ behavior: 'smooth' })}>
                Explorer les composants
                <ChevronDown size={20} className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="valeurs" className="py-24 border-t border-white/5 bg-background/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface/30 border border-white/5 hover:border-pulsai-blue/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-pulsai-blue/10 flex items-center justify-center text-pulsai-blue mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">IA Conversationnelle</h3>
              <p className="text-gray-400">Agents intelligents capables de gérer vos ventes et votre support 24/7 en toute autonomie.</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface/30 border border-white/5 hover:border-pulsai-green/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-pulsai-green/10 flex items-center justify-center text-pulsai-green mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scoring Prédictif</h3>
              <p className="text-gray-400">Identifiez instantanément vos prospects les plus qualifiés grâce à nos algorithmes prédictifs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface/30 border border-white/5 hover:border-purple-400/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400 mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Support Génératif</h3>
              <p className="text-gray-400">Résolution automatique des tickets complexes grâce à la compréhension du langage naturel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pulsai-blue/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Avez-vous besoin de notre assistant PulsAI ?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Rejoignez les entreprises qui automatisent déjà leur croissance avec l'intelligence artificielle.
          </p>
          <Link href="/login">
            <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-pulsai-blue/20">
              Accéder à l'assistant
              <MoveRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="tarifs" className="py-24 bg-surface/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Tarification</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Des plans adaptés à votre croissance</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="p-8 rounded-2xl border border-white/5 bg-background/40 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-6">Pour les petites équipes et startups.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">29€</span>
                <span className="text-gray-500 ml-2">/mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> 1000 crédits IA / mois
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> 1 Agent conversationnel
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> Support par email
                </li>
              </ul>
              <Button variant="outline" className="w-full">Choisir Starter</Button>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-2xl border-2 border-pulsai-blue bg-pulsai-blue/5 flex flex-col relative scale-105 shadow-2xl shadow-pulsai-blue/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-pulsai-blue text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                Recommandé
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-gray-400 text-sm mb-6">Le meilleur pour la mise à l'échelle.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">79€</span>
                <span className="text-gray-500 ml-2">/mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> 5000 crédits IA / mois
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> 5 Agents conversationnels
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> Scoring prédictif avancé
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> Support prioritaire
                </li>
              </ul>
              <Button className="w-full">Choisir Pro</Button>
            </div>

            {/* Business Plan */}
            <div className="p-8 rounded-2xl border border-white/5 bg-background/40 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-6">Solutions sur mesure pour grands groupes.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Sur devis</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> Crédits illimités
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> Agents illimités
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> Intégration API personnalisée
                </li>
                <li className="flex items-center text-gray-300 text-sm gap-2">
                  <Zap size={16} className="text-pulsai-blue" /> Account Manager dédié
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contacter la vente</Button>
            </div>
          </div>
        </div>
      </section>

      
    </MainLayout>
  );
}