import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardHeader } from "@/components/ui/Card";
import { Input, Label } from "@/components/ui/Input"; // N'oublie pas d'importer Label si tu l'as séparé
import Button from "@/components/ui/Button";
import { User, Bell, Lock, Save, Globe, Moon } from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout title="Paramètres">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Gauche : Profil Card */}
        <div className="lg:col-span-1 space-y-6">
            <Card className="text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-pulsai-blue to-purple-600 p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-surface border-4 border-background flex items-center justify-center">
                        <User size={40} className="text-gray-400"/>
                    </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white">Administrateur</h3>
                <p className="text-gray-400 text-sm mb-6">admin@pulsai.com</p>
                <Button variant="secondary" className="w-full">Changer l'avatar</Button>
            </Card>

            {/* Menu Navigation Rapide (Visuel) */}
            <nav className="flex flex-col space-y-1">
                <button className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-xl text-white text-sm font-medium shadow-sm">
                    <User size={18} className="text-pulsai-blue"/>
                    Mon Profil
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-surface/50 rounded-xl text-sm font-medium transition-colors">
                    <Bell size={18}/>
                    Notifications
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-surface/50 rounded-xl text-sm font-medium transition-colors">
                    <Lock size={18}/>
                    Sécurité
                </button>
            </nav>
        </div>

        {/* Colonne Droite : Formulaires */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Section Informations Personnelles */}
            <Card>
                <CardHeader 
                    title="Informations personnelles" 
                    description="Mettez à jour vos informations de compte."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Input label="Prénom" defaultValue="Jean" />
                    <Input label="Nom" defaultValue="Dupont" />
                    <Input label="Email" defaultValue="admin@pulsai.com" className="md:col-span-2" />
                    <div className="md:col-span-2">
                         <Label>Bio</Label>
                         <textarea 
                            className="w-full mt-1 bg-background border border-border rounded-xl p-3 text-sm text-white focus:ring-2 focus:ring-pulsai-blue/50 outline-none min-h-[100px]"
                            placeholder="Décrivez votre rôle..."
                         ></textarea>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <Button className="gap-2">
                        <Save size={18}/> Enregistrer
                    </Button>
                </div>
            </Card>

            {/* Section Préférences */}
            <Card>
                <CardHeader 
                    title="Préférences Globales" 
                    description="Personnalisez votre expérience PulsAI."
                />
                <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Globe size={20}/></div>
                            <div>
                                <p className="text-sm font-medium text-white">Langue</p>
                                <p className="text-xs text-gray-400">Français (France)</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm">Modifier</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Moon size={20}/></div>
                            <div>
                                <p className="text-sm font-medium text-white">Apparence</p>
                                <p className="text-xs text-gray-400">Thème sombre (Défaut)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-xs text-pulsai-green">Actif</span>
                        </div>
                    </div>
                </div>
            </Card>

        </div>
      </div>
    </DashboardLayout>
  );
}