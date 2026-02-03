import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Users, 
  MessageSquare, 
  Ticket, 
  TrendingUp, 
  Plus,
  MoreHorizontal,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

// --- Données Mockées (Simulations) ---
const stats = [
  { 
    label: "Revenu Mensuel", 
    value: "45,231 €", 
    change: "+20.1%", 
    trend: "up", 
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  { 
    label: "Utilisateurs Actifs", 
    value: "2,350", 
    change: "+180", 
    trend: "up", 
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  { 
    label: "Conversations IA", 
    value: "1,203", 
    change: "+12%", 
    trend: "up", 
    icon: MessageSquare,
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  { 
    label: "Tickets Ouverts", 
    value: "12", 
    change: "-2", 
    trend: "down", // Down is good for tickets
    icon: Ticket,
    color: "text-orange-400",
    bg: "bg-orange-500/10"
  }
];

const recentActivity = [
  { user: "Alice Dupont", action: "Nouvelle commande", time: "Il y a 2 min", status: "success", amount: "120 €" },
  { user: "Marc S.", action: "Ticket support ouvert", time: "Il y a 15 min", status: "warning", amount: "-" },
  { user: "Sophie L.", action: "Question produit (IA)", time: "Il y a 32 min", status: "neutral", amount: "-" },
  { user: "Tech Corp", action: "Abonnement renouvelé", time: "Il y a 1h", status: "success", amount: "990 €" },
];

// --- Composants Locaux ---

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="p-5 flex items-start justify-between hover:border-gray-600 transition-colors cursor-default">
      <div>
        <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
        <h3 className="text-2xl font-bold text-white mt-1 font-display">{stat.value}</h3>
        <div className="flex items-center gap-1 mt-2 text-xs font-medium">
          <span className={stat.trend === "up" ? "text-emerald-400" : "text-red-400"}>
            {stat.change}
          </span>
          <span className="text-gray-500">vs mois dernier</span>
        </div>
      </div>
      <div className={`p-3 rounded-xl ${stat.bg}`}>
        <stat.icon size={20} className={stat.color} />
      </div>
    </Card>
  </motion.div>
);

const ActivityRow = ({ item }) => (
  <div className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-surface-hover/50 transition-colors">
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-surface-hover flex items-center justify-center text-sm font-bold text-gray-300">
        {item.user.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-medium text-white">{item.user}</p>
        <p className="text-xs text-gray-400">{item.action}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium text-white">{item.amount !== "-" ? item.amount : ""}</p>
      <p className="text-xs text-gray-500">{item.time}</p>
    </div>
  </div>
);

// --- Page Principale ---

export default function Dashboard() {
  return (
    <DashboardLayout title="Vue d'ensemble">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">
            Bonjour, Admin 👋
          </h1>
          <p className="text-gray-400 text-sm">
            Voici ce qui se passe sur votre CRM aujourd'hui.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Exporter</Button>
          <Button className="gap-2">
            <Plus size={18} />
            Nouvelle Campagne
          </Button>
        </div>
      </div>

      {/* 2. KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>

      {/* 3. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Analytics Chart (Mocked) */}
        <Card className="lg:col-span-2 flex flex-col h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Analytique des conversations</h3>
              <p className="text-sm text-gray-400">Volume de traitement IA vs Humain</p>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal size={16} />
            </Button>
          </div>
          
          {/* Mock Graphique CSS */}
          <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
              <div key={i} className="w-full flex flex-col gap-2 group">
                 <div className="w-full bg-surface-hover rounded-t-sm relative overflow-hidden group-hover:opacity-80 transition-all" style={{ height: `${h}%` }}>
                    <div className="absolute bottom-0 left-0 w-full bg-pulsai-blue/80" style={{ height: `${h * 0.6}%` }}></div>
                 </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
            <span>01 Jan</span>
            <span>15 Jan</span>
            <span>30 Jan</span>
          </div>
        </Card>

        {/* Right Column: AI Performance & Activity */}
        <div className="space-y-6">
            
            {/* AI Performance Card */}
            <Card className="bg-gradient-to-br from-surface to-blue-900/10 border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                        <Zap size={20} />
                    </div>
                    <h3 className="font-semibold text-white">Performance IA</h3>
                </div>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300">Taux de résolution auto</span>
                            <span className="text-white font-bold">84%</span>
                        </div>
                        <div className="h-2 w-full bg-surface-hover rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[84%] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300">Satisfaction client (CSAT)</span>
                            <span className="text-white font-bold">4.8/5</span>
                        </div>
                        <div className="h-2 w-full bg-surface-hover rounded-full overflow-hidden">
                            <div className="h-full bg-pulsai-green w-[96%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Recent Activity List */}
            <Card className="p-0 overflow-hidden flex flex-col">
                <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-white">Activités récentes</h3>
                </div>
                <div className="flex-1 overflow-auto max-h-[250px]">
                    {recentActivity.map((item, i) => (
                        <ActivityRow key={i} item={item} />
                    ))}
                </div>
                <div className="p-3 bg-surface-hover/10 text-center border-t border-border">
                    <button className="text-xs text-pulsai-blue hover:underline">Voir tout l'historique</button>
                </div>
            </Card>
        </div>

      </div>
    </DashboardLayout>
  );
}