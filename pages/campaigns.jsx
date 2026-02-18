import DashboardLayout from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui/Card";
import { Table, TableCell } from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { mockCampaigns } from "@/data/mock";
import { Megaphone, Mail, MousePointer, Plus, Calendar } from "lucide-react";

export default function Campaigns() {
  
  // Helper pour les statuts
  const getStatusBadge = (status) => {
    switch(status) {
      case 'active': return <Badge variant="success" className="animate-pulse">Active</Badge>;
      case 'completed': return <Badge className="bg-gray-700 text-gray-400 border-gray-600">Terminée</Badge>;
      case 'scheduled': return <Badge variant="blue">Programmée</Badge>;
      default: return <Badge variant="default">Brouillon</Badge>;
    }
  };

  return (
    <DashboardLayout title="Campagnes Marketing">
      
      {/* 1. Top Bar Actions */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-8">
        <div>
           <h2 className="text-white font-display text-lg">Vos Campagnes</h2>
           <p className="text-gray-400 text-sm">Gérez vos envois d'emails et notifications.</p>
        </div>
        <Button className="gap-2 shadow-lg shadow-pulsai-blue/20">
            <Plus size={18}/>
            Créer une campagne
        </Button>
      </div>

      {/* 2. KPIs Rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
         <Card className="p-4 flex items-center gap-4 bg-gradient-to-br from-surface to-blue-900/10">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400"><Mail size={24}/></div>
            <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Emails envoyés</p>
                <p className="text-2xl font-bold text-white font-display">57,840</p>
            </div>
         </Card>
         <Card className="p-4 flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg text-green-400"><MousePointer size={24}/></div>
            <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Taux de Clic Moyen</p>
                <p className="text-2xl font-bold text-white font-display">14.2%</p>
            </div>
         </Card>
         <Card className="p-4 flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400"><Megaphone size={24}/></div>
            <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Campagnes Actives</p>
                <p className="text-2xl font-bold text-white font-display">2</p>
            </div>
         </Card>
      </div>

      {/* 3. Table des Campagnes */}
      <Card className="p-0 overflow-hidden">
        <Table 
            headers={["Campagne", "Statut", "Performance (Ouverture)", "Envoyés", "Date"]}
            data={mockCampaigns}
            renderRow={(camp, i) => (
                <tr key={i} className="hover:bg-surface-hover/30 transition-colors border-b border-border last:border-0">
                    <TableCell className="font-medium text-white">
                        {camp.name}
                    </TableCell>
                    <TableCell>
                        {getStatusBadge(camp.status)}
                    </TableCell>
                    <TableCell>
                        <div className="w-full max-w-[140px]">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Taux d'ouverture</span>
                                <span className="text-white font-bold">{camp.openRate}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-surface-hover rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-pulsai-blue rounded-full" 
                                    style={{ width: `${camp.openRate}%` }}
                                ></div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell className="text-gray-400 font-mono">
                        {camp.sent.toLocaleString()}
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <Calendar size={14}/>
                            {camp.date}
                        </div>
                    </TableCell>
                </tr>
            )}
        />
      </Card>

    </DashboardLayout>
  );
}