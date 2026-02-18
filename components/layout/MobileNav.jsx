import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Ticket, 
  Megaphone, 
  Settings, 
  LogOut, 
  Bot,
  X 
} from "lucide-react";
import { cn } from "@/utils/cn";
import Button from "@/components/ui/Button";

const navItems = [
  { name: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
  { name: "Conversations", href: "/conversations", icon: MessageSquare },
  { name: "Tickets", href: "/tickets", icon: Ticket },
  { name: "Campagnes", href: "/campaigns", icon: Megaphone },
  { name: "Paramètres", href: "/settings", icon: Settings },
];

export default function MobileNav({ isOpen, onClose }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-72 bg-surface border-r border-border z-50 md:hidden flex flex-col shadow-2xl"
          >
            {/* Header Drawer */}
            <div className="p-6 flex items-center justify-between border-b border-border mb-4">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="bg-pulsai-blue/20 p-2 rounded-lg text-pulsai-blue">
                   <Bot size={24} />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  PulsAI
                </span>
              </motion.div>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Items */}
            <motion.nav 
              className="flex-1 px-4 space-y-1 py-6 overflow-y-auto"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2
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
                      hidden: { opacity: 0, x: -40, scale: 0.8 },
                      visible: { opacity: 1, x: 0, scale: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={onClose}
                      className="block relative group"
                    >
                      <div className={cn(
                        "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm",
                        isActive 
                          ? "bg-pulsai-blue/10 text-pulsai-blue" 
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

            {/* Footer */}
            <div className="p-4 border-t border-border bg-surface-hover/20">
              <button 
                onClick={() => router.push('/')}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
              >
                <LogOut size={20} />
                Déconnexion
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
