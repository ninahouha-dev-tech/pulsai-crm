import Link from "next/link";
import { ArrowLeft, Plus, MoveRight, Layers, Zap, Shield, ChevronDown, MessageSquare } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Input, Select, Label } from "@/components/ui/Input";
import { Table, TableCell } from "@/components/ui/Table";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

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
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pulsai-blue/10 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pulsai-green/5 rounded-full blur-[100px] -z-10" 
        />
        
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
      <motion.section 
        id="valeurs" 
        className="py-24 border-t border-white/5 bg-background/50"
        initial={{ opacity: 0, y: 120, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -15, scale: 1.02, border: "1px solid rgba(59, 130, 246, 0.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-8 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/50 shadow-2xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-pulsai-blue/10 flex items-center justify-center text-pulsai-blue mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">IA Conversationnelle</h3>
              <p className="text-gray-400">Agents intelligents capables de gérer vos ventes et votre support 24/7 en toute autonomie.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -15, scale: 1.02, border: "1px solid rgba(34, 197, 94, 0.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-8 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/50 shadow-2xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-pulsai-green/10 flex items-center justify-center text-pulsai-green mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scoring Prédictif</h3>
              <p className="text-gray-400">Identifiez instantanément vos prospects les plus qualifiés grâce à nos algorithmes prédictifs.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -15, scale: 1.02, border: "1px solid rgba(168, 85, 247, 0.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-8 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/50 shadow-2xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400 mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Support Génératif</h3>
              <p className="text-gray-400">Résolution automatique des tickets complexes grâce à la compréhension du langage naturel.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- WHY CHOOSE US --- */}
      <motion.section 
        id="pourquoi"
        className="py-24 bg-background relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nous combinons la puissance de l'IA avec une simplicité d'utilisation déconcertante pour transformer votre service client.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              { title: "Innovation", desc: "Modèles d'IA mis à jour mensuellement.", icon: Zap, color: "text-pulsai-blue" },
              { title: "Sécurité", desc: "Données chiffrées et conformes RGPD.", icon: Shield, color: "text-pulsai-green" },
              { title: "Vitesse", desc: "Temps de réponse inférieur à 2 secondes.", icon: Zap, color: "text-orange-400" },
              { title: "Support", desc: "Experts dédiés pour votre intégration.", icon: MessageSquare, color: "text-purple-400" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                className="p-6 rounded-2xl bg-surface/20 border border-white/5 hover:bg-surface/30 transition-all text-center group"
              >
                <div className={cn("w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4 bg-white/5 group-hover:bg-white/10 transition-colors", item.color)}>
                  <item.icon size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- CTA SECTION --- */}
      <motion.section 
        id="cta" 
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", damping: 15 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pulsai-blue/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-8"
          >
            Avez-vous besoin de notre assistant PulsAI ?
          </motion.h2>
          <motion.p 
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Rejoignez les entreprises qui automatisent déjà leur croissance avec l'intelligence artificielle.
          </motion.p>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <Link href="/login">
              <Button size="lg" className="h-16 px-12 text-xl shadow-2xl shadow-pulsai-blue/40 hover:scale-105 transition-transform">
                Accéder à l'assistant
                <MoveRight size={24} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* --- PRICING SECTION --- */}
      <section id="tarifs" className="py-24 bg-surface/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Tarification</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Des plans adaptés à votre croissance</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Starter Plan */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 80, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }} 
              whileHover={{ y: -20, transition: { type: "spring", stiffness: 300 } }}
              className="p-8 rounded-2xl border border-white/5 bg-background/40 flex flex-col shadow-xl"
            >
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
            </motion.div>

            {/* Pro Plan */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1.05 } }} 
              whileHover={{ scale: 1.1, y: -25, transition: { type: "spring", stiffness: 300 } }}
              className="p-8 rounded-2xl border-2 border-pulsai-blue bg-pulsai-blue/5 flex flex-col relative shadow-[0_20px_50px_rgba(59,130,246,0.2)]"
            >
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
            </motion.div>

            {/* Business Plan */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 80, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }} 
              whileHover={{ y: -20, transition: { type: "spring", stiffness: 300 } }}
              className="p-8 rounded-2xl border border-white/5 bg-background/40 flex flex-col shadow-xl"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      
    </MainLayout>
  );
}