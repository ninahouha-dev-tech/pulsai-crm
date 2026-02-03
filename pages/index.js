import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Input, Select, Label } from "@/components/ui/Input";
import { Table, TableCell } from "@/components/ui/Table";
import { Skeleton } from "@/components/ui/Skeleton";
import { Plus } from "lucide-react";

export default function UIKit() {
  const users = [
    { name: "Alice Dupont", role: "Admin", status: "Actif" },
    { name: "Bob Martin", role: "User", status: "En attente" },
  ];

  return (
    <MainLayout title="PulsAI - Design System">
      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Design System</h1>
          <p className="text-gray-400">Composants de base basés sur la charte PulsAI.</p>
        </div>

        {/* Buttons & Badges */}
        <Card>
          <CardHeader title="Boutons & Badges" />
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="primary" isLoading>Loading</Button>
            <Button variant="primary" size="sm" className="rounded-full"><Plus size={16}/> Add New</Button>
          </div>
          <div className="flex gap-3">
            <Badge variant="blue">Premium</Badge>
            <Badge variant="success">Confirmé</Badge>
            <Badge variant="warning">En attente</Badge>
            <Badge>Défaut</Badge>
          </div>
        </Card>

        {/* Forms */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader title="Inputs" description="Champs de saisie interactifs." />
            <div className="space-y-4">
              <Input label="Email professionnel" placeholder="ex: jean@pulsai.com" />
              <Input label="Mot de passe" type="password" error="Mot de passe trop court" />
            </div>
          </Card>
          <Card>
            <CardHeader title="Selects" />
            <div className="space-y-4">
               <Select 
                 label="Rôle" 
                 options={[{label: 'Admin', value: 'admin'}, {label: 'Utilisateur', value: 'user'}]} 
               />
               <div className="mt-6">
                 <Label>Skeleton Loading</Label>
                 <Skeleton className="h-10 w-full mt-2 rounded-xl" />
               </div>
            </div>
          </Card>
        </div>

        {/* Tables */}
        <Card className="p-0 overflow-hidden">
           <div className="p-6 pb-2">
             <CardHeader title="Tableau de données" description="Exemple de structure tabulaire." />
           </div>
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
        </Card>

      </div>
    </MainLayout>



  );
}