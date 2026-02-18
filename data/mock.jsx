// data/mock.js

export const mockConversations = [
  { 
    id: 1, 
    user: "Sophie Martin", 
    avatar: "SM", 
    lastMessage: "Pouvez-vous m'aider avec ma facture ?", 
    time: "2 min", 
    status: "active", 
    platform: "whatsapp", 
    isAiHandled: true 
  },
  { 
    id: 2, 
    user: "Tech Solutions", 
    avatar: "TS", 
    lastMessage: "Merci, c'est résolu.", 
    time: "1h", 
    status: "closed", 
    platform: "web", 
    isAiHandled: false 
  },
  { 
    id: 3, 
    user: "Jean Dupont", 
    avatar: "JD", 
    lastMessage: "Je voudrais passer à l'offre supérieure.", 
    time: "3h", 
    status: "pending", 
    platform: "email", 
    isAiHandled: true 
  },
  { 
    id: 4, 
    user: "Alice Wonder", 
    avatar: "AW", 
    lastMessage: "L'intégration API ne fonctionne pas...", 
    time: "1j", 
    status: "active", 
    platform: "slack", 
    isAiHandled: false 
  },
];

export const mockTickets = [
  { id: "T-1024", subject: "Erreur de connexion 504", customer: "Acme Corp", priority: "high", status: "open", agent: "Paul", date: "02 Fév" },
  { id: "T-1023", subject: "Demande de remboursement", customer: "Sophie M.", priority: "medium", status: "pending", agent: "Sarah", date: "01 Fév" },
  { id: "T-1022", subject: "Demande de fonctionnalité : Mode sombre", customer: "DevTeam", priority: "low", status: "resolved", agent: "Robot IA", date: "30 Jan" },
  { id: "T-1021", subject: "Problème d'export PDF", customer: "Finance SA", priority: "high", status: "open", agent: "Paul", date: "29 Jan" },
  { id: "T-1020", subject: "Question sur les tarifs", customer: "Nouvel Utilisateur", priority: "low", status: "resolved", agent: "Sarah", date: "28 Jan" },
];

// ... (tes mocks existants conversations/tickets)

export const mockCampaigns = [
  { id: 1, name: "Newsletter Février", status: "active", sent: 12500, openRate: 45, clickRate: 12, date: "03 Fév" },
  { id: 2, name: "Promo Black Friday", status: "completed", sent: 45000, openRate: 32, clickRate: 8, date: "25 Nov" },
  { id: 3, name: "Onboarding Nouveaux", status: "scheduled", sent: 0, openRate: 0, clickRate: 0, date: "05 Fév" },
  { id: 4, name: "Relance Panier", status: "active", sent: 340, openRate: 68, clickRate: 24, date: "Auto" },
  { id: 5, name: "Webinar IA", status: "draft", sent: 0, openRate: 0, clickRate: 0, date: "-" },
];