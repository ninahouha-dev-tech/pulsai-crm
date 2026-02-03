// Fichier : pages/conversations.js
import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Search, Bot, Phone, MoreVertical, Send } from "lucide-react";
import { mockConversations } from "@/data/mock"; // Assurez-vous que l'import match le nom de votre fichier mock
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export default function Conversations() {
  const [selectedId, setSelectedId] = useState(1);
  // Protection si mockConversations est vide ou undefined
  const conversations = mockConversations || [];
  const selectedConv = conversations.find((c) => c.id === selectedId) || conversations[0];

  return (
    <DashboardLayout title="Conversations">
      <div className="flex h-[calc(100vh-140px)] gap-6 overflow-hidden">
        
        {/* Colonne Liste (Gauche) */}
        <Card className="w-full md:w-1/3 flex flex-col p-0 overflow-hidden">
          <div className="p-4 border-b border-border">
             <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-500 h-4 w-4" />
                <input 
                  className="w-full bg-surface-hover border-none rounded-lg pl-9 py-2 text-sm text-white focus:ring-1 focus:ring-pulsai-blue placeholder:text-gray-500 focus:outline-none" 
                  placeholder="Rechercher..." 
                />
             </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div 
                key={conv.id}
                onClick={() => setSelectedId(conv.id)}
                className={cn(
                  "p-4 border-b border-border cursor-pointer transition-colors hover:bg-surface-hover/50 flex gap-3",
                  selectedId === conv.id ? "bg-pulsai-blue/10 border-l-4 border-l-pulsai-blue" : "border-l-4 border-l-transparent"
                )}
              >
                <div className="h-10 w-10 rounded-full bg-surface-hover flex items-center justify-center text-xs font-bold text-gray-300 shrink-0">
                  {conv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className={cn("font-medium text-sm truncate", selectedId === conv.id ? "text-white" : "text-gray-300")}>
                      {conv.user}
                    </span>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{conv.lastMessage}</p>
                  <div className="mt-2 flex gap-2">
                    {conv.isAiHandled && <Badge variant="blue" className="text-[10px] px-1.5 py-0">AI Pilot</Badge>}
                    <span className="text-[10px] bg-surface border border-border px-1.5 rounded text-gray-500 uppercase">{conv.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Zone de Chat (Droite) */}
        <Card className="hidden md:flex flex-1 flex-col p-0 overflow-hidden relative">
            {selectedConv ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-border flex justify-between items-center bg-surface">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            {selectedConv.avatar}
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">{selectedConv.user}</h3>
                            <p className="text-xs text-green-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                En ligne
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                        <button className="p-2 hover:bg-surface-hover rounded-lg"><Phone size={18}/></button>
                        <button className="p-2 hover:bg-surface-hover rounded-lg"><MoreVertical size={18}/></button>
                    </div>
                </div>

                {/* Chat Messages Area (Simulation) */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-background/50">
                    <div className="flex justify-center">
                        <span className="text-xs text-gray-500 bg-surface px-3 py-1 rounded-full">Aujourd'hui, 10:23</span>
                    </div>
                    
                    {/* Message Client */}
                    <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-surface-hover flex items-center justify-center text-xs text-gray-300 mt-1">{selectedConv.avatar}</div>
                        <div className="bg-surface border border-border p-3 rounded-2xl rounded-tl-none max-w-md">
                            <p className="text-sm text-gray-200">{selectedConv.lastMessage}</p>
                        </div>
                    </div>

                    {/* Réponse AI */}
                    {selectedConv.isAiHandled && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3 flex-row-reverse"
                        >
                            <div className="h-8 w-8 rounded-full bg-pulsai-blue/20 text-pulsai-blue flex items-center justify-center mt-1"><Bot size={16}/></div>
                            <div className="bg-pulsai-blue/10 border border-pulsai-blue/20 p-3 rounded-2xl rounded-tr-none max-w-md">
                                <p className="text-sm text-blue-100">
                                    Bonjour ! Je comprends votre demande. Je vérifie votre compte immédiatement. 
                                    <span className="block mt-2 text-xs opacity-70">Généré par PulsAI • 98% de confiance</span>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border bg-surface">
                    <div className="flex gap-2">
                        <input 
                            className="flex-1 bg-surface-hover border-transparent rounded-xl px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-pulsai-blue focus:outline-none"
                            placeholder="Écrivez votre réponse..."
                        />
                        <button className="p-3 bg-pulsai-blue hover:bg-pulsai-blue/90 text-white rounded-xl transition-colors">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p>Sélectionnez une conversation</p>
              </div>
            )}
        </Card>
      </div>
    </DashboardLayout>
  );
}