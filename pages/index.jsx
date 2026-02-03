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
      <section className="py-24 border-t border-white/5 bg-background/50">
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

      {/* --- DESIGN SYSTEM CATALOG --- */}
      <div id="design-system" className="space-y-20 max-w-6xl mx-auto pb-32 px-6">
        
        <div className="flex flex-col gap-6 border-b border-border pb-8">
            <div>
                <h2 className="text-4xl font-display font-bold text-white mb-4">
                    🎨 Kit de Design PulsAI
                </h2>
                <p className="text-gray-400 max-w-2xl text-lg">
                    Bibliothèque de composants UI réutilisables utilisés pour construire l'application.
                </p>
            </div>
        </div>

        {/* 1. FOUNDATIONS (COLORS & TYPO) */}
        <section className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-3">
                <span className="bg-pulsai-blue/10 text-pulsai-blue p-2 rounded-lg text-sm">01</span> 
                Fondations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Couleurs */}
                <Card>
                    <CardHeader title="Palette de Couleurs" description="Charte exigée par le test." />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                        <div className="space-y-2">
                             <div className="h-16 w-full bg-pulsai-blue rounded-xl shadow-lg shadow-pulsai-blue/20"></div>
                             <div className="text-xs text-center"><span className="text-white font-bold">Blue</span><br/><span className="text-gray-500">#3590E3</span></div>
                        </div>
                        <div className="space-y-2">
                             <div className="h-16 w-full bg-pulsai-green rounded-xl shadow-lg shadow-pulsai-green/10"></div>
                             <div className="text-xs text-center"><span className="text-white font-bold">Green</span><br/><span className="text-gray-500">#BAF09D</span></div>
                        </div>
                        <div className="space-y-2">
                             <div className="h-16 w-full bg-surface rounded-xl border border-border"></div>
                             <div className="text-xs text-center"><span className="text-white font-bold">Surface</span><br/><span className="text-gray-500">#1F2937</span></div>
                        </div>
                        <div className="space-y-2">
                             <div className="h-16 w-full bg-background rounded-xl border border-border"></div>
                             <div className="text-xs text-center"><span className="text-white font-bold">Background</span><br/><span className="text-gray-500">#0f1218</span></div>
                        </div>
                    </div>
                </Card>

                {/* Typographie */}
                <Card>
                    <CardHeader title="Typographie" description="Next/Font: Ubuntu & Unbounded." />
                    <div className="space-y-6 mt-4">
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Display (Titres) - Unbounded</p>
                            <p className="font-display text-3xl font-bold text-white">The quick brown fox</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Body (Texte) - Ubuntu</p>
                            <p className="font-sans text-base text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>

        {/* 2. ACTIONS (BUTTONS & BADGES) */}
        <section className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-3">
                <span className="bg-purple-500/10 text-purple-400 p-2 rounded-lg text-sm">02</span> 
                Actions & Feedback
            </h2>
            <Card>
                <div className="space-y-8">
                    <div>
                        <Label className="mb-4 block">Boutons (Variants)</Label>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button>Primary Action</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="ghost">Ghost Button</Button>
                            <Button variant="danger">Destructive</Button>
                        </div>
                    </div>
                    <div className="h-px bg-border w-full" />
                    <div>
                         <Label className="mb-4 block">États & Formes</Label>
                         <div className="flex flex-wrap gap-4 items-center">
                            <Button isLoading>Loading State</Button>
                            <Button disabled>Disabled</Button>
                            <Button size="sm">Small Size</Button>
                            <Button className="rounded-full gap-2"><Plus size={18}/> Pill Shape</Button>
                         </div>
                    </div>
                    <div className="h-px bg-border w-full" />
                    <div>
                        <Label className="mb-4 block">Badges</Label>
                        <div className="flex gap-3">
                            <Badge variant="blue">Premium</Badge>
                            <Badge variant="success">Confirmé</Badge>
                            <Badge variant="warning">En attente</Badge>
                            <Badge>Défault</Badge>
                        </div>
                    </div>
                </div>
            </Card>
        </section>

        {/* 3. FORMS & DATA */}
        <section className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-3">
                <span className="bg-emerald-500/10 text-emerald-400 p-2 rounded-lg text-sm">03</span> 
                Formulaires & Données
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Inputs */}
                <Card>
                    <CardHeader title="Champs de Saisie" />
                    <div className="space-y-5 mt-4">
                        <Input label="Email" placeholder="nom@exemple.com" />
                        <div className="grid grid-cols-2 gap-4">
                             <Select label="Rôle" options={[{label: 'Admin', value: 'admin'}, {label: 'User', value: 'user'}]} />
                             <Input label="Mot de passe" type="password" value="secret123" readOnly />
                        </div>
                        <Input label="Avec Erreur" error="Ce champ est requis" />
                    </div>
                </Card>

                {/* Data Display */}
                <Card className="flex flex-col">
                    <CardHeader title="Tableau & Loading" />
                    <div className="mt-4 flex-1">
                        <Table 
                             headers={["Nom", "Rôle", "Statut", "Action"]}
                             data={users}
                             renderRow={(user, i) => (
                               <tr key={i} className="hover:bg-surface-hover/30 transition-colors">
                                 <TableCell className="font-medium text-white">{user.name}</TableCell>
                                 <TableCell>{user.role}</TableCell>
                                 <TableCell>
                                   <Badge variant={user.status === "Actif" ? "success" : "warning"}>{user.status}</Badge>
                                 </TableCell>
                                 <TableCell>
                                   <Button variant="ghost" size="sm">Éditer</Button>
                                 </TableCell>
                               </tr>
                             )}
                        />
                        <div className="mt-6">
                             <Label className="mb-2 block">Skeleton Loader</Label>
                             <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>
                </Card>
            </div>
        </section>

      </div>
    </MainLayout>
  );
}