# 🚀 PulsAI CRM

Dashboard SaaS moderne développé avec **Next.js**, **Tailwind CSS v4** et **Framer Motion**.
Conçu pour être performant, accessible et scalable pour une gestion client intelligente.

## 🛠 Stack Technique

- **Framework** : Next.js 15 (Pages Router)
- **Styling** : Tailwind CSS v4 (Compilé avec @tailwindcss/postcss)
- **Animations** : Framer Motion (Optimisation des performances avec animate-once)
- **Icônes** : Lucide React (Utilisation systématique)
- **Charte Graphique** :
  - **Bleu Principal** : #3590E3
  - **Vert Secondaire** : #BAF09D
  - **Gris Neutre** : #1F2937
- **Polices** : Next/Font (Unbounded pour les titres, Ubuntu pour le corps de texte)

## 🤖 Capacités IA Précises

Le projet démontre l'intégration de fonctionnalités d'IA avancées :

- **IA Conversationnelle** : Agents autonomes pour les ventes et le support 24/7.
- **Scoring Prédictif** : Identification algorithmique des prospects à fort potentiel.
- **Support Génératif** : Compréhension du langage naturel pour la résolution automatique de tickets.

## 📂 Structure du Projet

```bash
pulsai-crm/
├── components/
│   ├── ui/           # Composants atomiques (Button, Card, Badge...)
│   └── layout/       # Navigation persistante (Sidebar, Header, MobileNav)
├── layouts/          # Wrappers globaux (DashboardLayout, MainLayout)
├── pages/            # Routes (Saisies en .jsx pour conformité stricte)
├── hooks/            # Hooks personnalisés (useLocalStorage, etc.)
├── data/             # Mock Data (Simulation API Backend)
├── utils/            # Helpers & Utilitaires (cn, formatting)
└── styles/           # CSS Global & Thème Tailwind v4
```

## 🚀 Installation & Démarrage

1. **Cloner le projet**

```bash
git clone https://github.com/votre-user/pulsai-crm.git
cd pulsai-crm
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## 📄 Pages Implémentées

- **Accueil / Landing Page** (`/`) : Hero section premium avec accès direct au Design System.
- **Login** (`/login`) : Interface de connexion sécurisée avec identifiants démo.
- **Dashboard** (`/dashboard`) : Vue analytique complète avec KPIs dynamiques.
- **Conversations** (`/conversations`) : Interface de messagerie temps réel.
- **Tickets** (`/tickets`) : Gestionnaire de support client structuré.
- **Campagnes** (`/campaigns`) : Outil d'automatisation des envois et suivis.
- **Paramètres** (`/settings`) : Gestion du profil et des préférences.

## ✨ Points Forts du Design

- **Next-Gen UI** : Utilisation intensive du Glassmorphism et des gradients animés.
- **Micro-interactions** : Animations fluides via Framer Motion pour chaque action utilisateur.
- **Design System First** : Architecture basée sur une bibliothèque de composants réutilisables.

## 📸 Captures d'écran

| Landing Page (Accueil)                         | Page de Connexion                        |
| ---------------------------------------------- | ---------------------------------------- |
| ![Hero](public/images/page%20d'accueil%20.png) | ![Login](public/images/login%20page.png) |

| Dashboard Analytics                              | Conversations / Chat                                            |
| ------------------------------------------------ | --------------------------------------------------------------- |
| ![Dashboard](public/images/page%20dashboard.png) | ![Conversations](public/images/page%20de%20conversation%20.png) |

| Tickets & Support                                   | Campagnes Marketing                                  |
| --------------------------------------------------- | ---------------------------------------------------- |
| ![Tickets](public/images/page%20de%20ticket%20.png) | ![Campagnes](public/images/page%20de%20campagne.png) |

| Paramètres                                               |
| -------------------------------------------------------- |
| ![Settings](public/images/page%20de%20paramètres%20.png) |

## 🚀 Déploiement

Le projet est optimisé pour être déployé sur **Vercel**.

**Lien de la démo :** (https://pulsai-crm-p8h1.vercel.app/)

---

© 2026 PulsAI CRM. Test d'intégration Frontend - Stage Développement.
