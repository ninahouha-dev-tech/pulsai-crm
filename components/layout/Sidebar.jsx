import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Ticket, 
  Megaphone, 
  Settings, 
  LogOut, 
  Bot 
} from "lucide-react";
import { cn } from "@/utils/cn";

const navItems = [
  { name: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
  { name: "Conversations", href: "/conversations", icon: MessageSquare },
  { name: "Tickets", href: "/tickets", icon: Ticket },
  { name: "Campagnes", href: "/campaigns", icon: Megaphone },
  { name: "Paramètres", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-surface border-r border-border h-screen sticky top-0">
      {/* Logo Area */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-6 flex items-center gap-3 mb-4"
      >
        <div className="bg-pulsai-blue/20 p-2 rounded-lg text-pulsai-blue">
            <Bot size={24} />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-white">
          PulsAI
        </span>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        className="flex-1 px-4 space-y-1 py-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.href}
              variants={{
                hidden: { opacity: 0, x: -30, scale: 0.9 },
                visible: { opacity: 1, x: 0, scale: 1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href={item.href} className="block relative group">
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-pulsai-blue/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <div className={cn(
                  "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm",
                  isActive 
                    ? "text-pulsai-blue" 
                    : "text-gray-400 hover:text-gray-100 hover:bg-surface-hover/50"
                )}>
                  <Icon size={20} className={isActive ? "text-pulsai-blue" : "text-gray-500 group-hover:text-gray-300"} />
                  {item.name}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* User / Logout */}
      <div className="p-4 border-t border-border">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
        >
          <LogOut size={20} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}