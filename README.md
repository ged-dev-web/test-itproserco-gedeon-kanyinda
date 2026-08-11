# Ariane Store — Dashboard produits

Dashboard e-commerce front-end réalisé en React (JSX), inspiré des maquettes du test technique IT Proserco.

## Structure des fichiers

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx          → Menu latéral (navigation, profil, carte Pro)
│   │   └── Header.jsx           → Barre supérieure (recherche, notifications)
│   ├── products/
│   │   ├── ProductTable.jsx     → Tableau des produits (vue liste)
│   │   ├── ProductGrid.jsx      → Grille de cartes produit (vue grille)
│   │   ├── ProductCard.jsx      → Carte produit individuelle (réutilisable)
│   │   ├── ProductToolbar.jsx   → Barre de filtres, recherche et tri
│   │   └── StatCard.jsx         → Carte de statistique (chiffre d'affaires, etc.)
│   └── forms/
│       └── ProductForm.jsx      → Formulaire d'ajout/modification de produit
├── pages/
│   ├── Products.jsx             → Page catalogue (stats + liste/grille + pagination)
│   └── AddProduct.jsx           → Page d'ajout/modification de produit
├── data/
│   └── products.js              → Données initiales, types, utilitaires (formatPrice)
├── App.jsx                      → Composant racine (état global, navigation)
├── main.jsx                     → Point d'entrée React
└── index.css                    → Tous les styles du dashboard
```

## Fonctionnalités

- Vue liste et vue grille interchangeables
- Recherche instantanée par nom, catégorie et SKU
- Filtres par statut et catégorie
- Tri par date, prix et stock
- Pagination réelle sur les résultats filtrés
- Ajout d'un produit avec validation des champs obligatoires
- Enregistrement en brouillon ou publication dans le catalogue
- Modification et suppression des produits existants
- Prévisualisation d'image locale avant enregistrement
- Persistance des produits dans le navigateur via LocalStorage
- Sidebar responsive avec menu mobile
- États vides, notifications, badges de statut et feedbacks utilisateur

## Démarrage

```bash
npm install
npm run dev
```

Les données de démonstration sont chargées au premier lancement. Les changements sont ensuite conservés dans le navigateur.

## Vérifications

```bash
npm run build
npm run lint
```

## Architecture

L'application est organisée par responsabilités :

- **`data/`** : données initiales et fonctions utilitaires partagées
- **`components/layout/`** : éléments structurels répétés sur chaque page (sidebar, en-tête)
- **`components/products/`** : composants d'affichage du catalogue (tableau, grille, carte, filtres, stats)
- **`components/forms/`** : formulaires de saisie
- **`pages/`** : vues principales, une par écran (catalogue, ajout/modification)
- **`App.jsx`** : orchestre l'état global (produits, formulaire, notifications) et bascule entre les pages

## Choix techniques

- React 18 en JSX (sans TypeScript)
- Lucide React pour les icônes
- CSS responsive sans dépendance UI supplémentaire
- LocalStorage pour simuler un catalogue persistant sans backend
- Images produit issues de Pexels et remplaçables via l'ajout d'une image locale
- Alias `@/` pour les imports (pointe vers `src/`)

## Utilisation de l'IA

L'IA a été utilisée comme assistant de conception et de développement pour accélérer la mise en place de la structure React, des interactions et du style. Le code généré a été relu, adapté au périmètre du test et vérifié avec les contrôles de compilation du projet.

## Limites connues

- L'import CSV est représenté par un feedback d'interface, sans traitement de fichier métier.
- Les sections secondaires de la sidebar affichent un feedback de disponibilité plutôt qu'une page dédiée.
- Les images locales sont stockées sous forme de données navigateur et ne sont pas envoyées sur un serveur.
