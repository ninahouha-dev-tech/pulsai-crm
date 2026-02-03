import React, { useState } from "react";
import { useRouter } from "next/router";
import { MoveRight, LayoutTemplate } from "lucide-react";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("admin@pulsai.com");
  const [password, setPassword] = useState("password123");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'un délai réseau (Frontend Only)
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-pulsai-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pulsai-green/5 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pulsai-blue to-blue-600 mb-6 shadow-lg shadow-blue-500/20">
             <span className="text-3xl font-display font-bold text-white">P</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">PulsAI CRM</h1>
          <p className="text-gray-400">Connectez-vous à votre espace de gestion intelligent.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-surface/50 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-xl space-y-6">
          <Input 
            label="Email professionnel" 
            type="email" 
            placeholder="nom@entreprise.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input 
            label="Mot de passe" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button 
            variant="primary" 
            className="w-full h-12 text-base shadow-lg shadow-blue-500/20" 
            isLoading={isLoading}
          >
            Se connecter
            {!isLoading && <MoveRight size={18} className="ml-2" />}
          </Button>

          <div className="text-center pt-2">
            <p className="text-xs text-gray-500 mb-4">
              (Identifiants de démo pré-remplis)
            </p>
          </div>
        </form>

        <div className="mt-8 text-center">
            <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white"
                onClick={() => router.push('/design-system')}
            >
                <LayoutTemplate size={16} className="mr-2" />
                Voir le Design System (UI Kit)
            </Button>
        </div>

      </motion.div>

      <div className="absolute bottom-6 text-center text-xs text-gray-600">
        © 2026 PulsAI CRM. Test d'intégration Frontend.
      </div>
    </div>
  );
}
