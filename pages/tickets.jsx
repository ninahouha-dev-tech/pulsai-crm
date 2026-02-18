import DashboardLayout from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui/Card";
import { Table, TableCell } from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { mockTickets } from "@/data/mock";
import { Filter, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function Tickets() {
  
  // Fonction utilitaire pour le rendu des badges
  const getPriorityBadge = (prio) => {
    switch(prio) {
        case 'high': return <Badge variant="warning" className="bg-red-500/10 text-red-400 border-red-500/20">Haute</Badge>;
        case 'medium': return <Badge variant="warning">Moyenne</Badge>;
        case 'low': return <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Basse</Badge>;
        default: return <Badge>{prio}</Badge>;
    }
  };

  const getStatusBadge = (status) => {
      switch(status) {
          case 'open': return <div className="flex items-center gap-1.5 text-blue-400"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"/>Ouvert</div>;
          case 'resolved': return <div className="flex items-center gap-1.5 text-gray-500"><CheckCircle2 size={14}/>Résolu</div>;
          default: return <span className="text-gray-400 capitalize">{status}</span>;
      }
  };

  return (
    <DashboardLayout title="Tickets Support">
      
      {/* 1. Header KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="flex items-center gap-4 p-4 border-l-4 border-l-red-500">
            <div className="p-3 bg-red-500/10 rounded-full text-red-500"><AlertCircle size={24}/></div>
            <div>
                <p className="text-sm text-gray-400">Priorité Haute</p>
                <p className="text-2xl font-bold text-white font-display">3</p>
            </div>
        </Card>
        <Card className="flex items-center gap-4 p-4 border-l-4 border-l-blue-500">
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500"><Clock size={24}/></div>
            <div>
                <p className="text-sm text-gray-400">Temps moyen</p>
                <p className="text-2xl font-bold text-white font-display">2h 14m</p>
            </div>
        </Card>
        <Card className="flex items-center gap-4 p-4 border-l-4 border-l-green-500">
            <div className="p-3 bg-green-500/10 rounded-full text-green-500"><CheckCircle2 size={24}/></div>
            <div>
                <p className="text-sm text-gray-400">Résolus (semaine)</p>
                <p className="text-2xl font-bold text-white font-display">24</p>
            </div>
        </Card>
      </div>

      {/* 2. Filters & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-6">
          <div className="flex flex-1 gap-3 w-full md:w-auto">
             <div className="w-full md:w-64">
                <Input placeholder="Rechercher un ticket..." icon={Filter} />
             </div>
             <div className="w-32 hidden md:block">
                <Select options={[{label: 'Tous', value: 'all'}, {label: 'Ouverts', value: 'open'}]} />
             </div>
          </div>
          <Button>+ Nouveau Ticket</Button>
      </div>

      {/* 3. Data Table */}
      <Table 
        headers={["ID", "Sujet", "Client", "Priorité", "Statut", "Agent", "Date"]}
        data={mockTickets}
        renderRow={(ticket, i) => (
            <tr key={i} className="hover:bg-surface-hover/30 transition-colors border-b border-border last:border-0 group cursor-pointer">
                <TableCell className="font-mono text-xs text-gray-400">#{ticket.id}</TableCell>
                <TableCell className="font-medium text-white group-hover:text-pulsai-blue transition-colors">
                    {ticket.subject}
                </TableCell>
                <TableCell>{ticket.customer}</TableCell>
                <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                <TableCell className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface border border-gray-600 flex items-center justify-center text-[10px]">
                        {ticket.agent.charAt(0)}
                    </div>
                    <span className="text-sm">{ticket.agent}</span>
                </TableCell>
                <TableCell className="text-gray-500 text-xs">{ticket.date}</TableCell>
            </tr>
        )}
      />

    </DashboardLayout>
  );
}