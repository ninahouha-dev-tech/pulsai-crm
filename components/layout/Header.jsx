import { Search, Bell, User } from "lucide-react";

export default function Header({ title }) {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-10 px-6 flex items-center justify-between">
      {/* Titre de la page courante (Mobile/Desktop) */}
      <h2 className="font-display text-lg font-semibold text-white">
        {title}
      </h2>

      {/* Actions Droite */}
      <div className="flex items-center gap-4">
        {/* Search Bar rapide */}
        <div className="hidden md:flex items-center bg-surface border border-border rounded-full px-4 py-1.5 focus-within:ring-2 focus-within:ring-pulsai-blue/50 transition-all">
          <Search size={16} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="bg-transparent border-none outline-none text-sm text-white w-48 placeholder:text-gray-600"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-pulsai-green rounded-full border border-background"></span>
        </button>

        {/* Avatar Placeholder */}
        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-pulsai-blue to-purple-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-surface cursor-pointer">
            JD
        </div>
      </div>
    </header>
  );
}