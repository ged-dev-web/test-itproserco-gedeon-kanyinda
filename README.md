# Gedeon Store — Dashboard produits
  
Application Front-End développée dans le cadre du test technique de recrutement Développeur Web Front-End chez IT PROSERCO.
L’objectif du projet est de reproduire une interface moderne d’administration e-commerce permettant de gérer un catalogue de produits, avec une interface responsive, interactive et maintenable, inspiré des maquettes.

## Démonstration

Application en ligne :
https://test-itproserco-gedeon-kanyinda.vercel.app

Dépôt GitHub :
https://github.com/ged-dev-web/test-itproserco-gedeon-kanyinda

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
## Présentation du projet

Cette application représente une partie d'un dashboard d'administration e-commerce destiné à la gestion des produits.
Elle comprend principalement :
- la gestion du catalogue de produits ;
- l'affichage des produits en liste ;
- l'affichage des produits en grille/cards ;
- la recherche de produits ;
- les filtres ;
- le tri ;
- la pagination ;
- l'ajout d'un nouveau produit ;
- la validation du formulaire ;
- la prévisualisation des images ;
- la gestion du stock et des informations produit ;
- une interface responsive adaptée aux différents écrans.
Le projet est exclusivement Front-End.

### Fonctionnalités

## Gestion des produits
- Affichage des produits sous forme de tableau.
- Affichage des produits sous forme de cartes.
- Bascule dynamique entre la vue Liste et la vue Grille.
- Recherche par produit ou catégorie.
- Filtrage par statut.
- Tri des produits.
- Pagination.
- Affichage des informations essentielles :
  - image ;
  - nom ;
  - SKU ;
  - catégorie ;
  - prix ;
  - stock ;
  - ventes ;
  - statut ;
  - actions.
Recherche, filtres et tri
La recherche permet de retrouver rapidement un produit dans le catalogue.
Les filtres permettent notamment d'afficher :
- Tous ;
- Actifs ;
- Brouillons ;
- Rupture.

Le tri permet notamment de classer les produits par :
- Plus récents ;
- Prix croissant ;
- Prix décroissant ;
- Stock croissant ;
- Stock décroissant.

Ces fonctionnalités sont conservées lors du passage entre la vue liste et la vue grille.

## Ajout d'un produit

Une interface dédiée permet de créer un nouveau produit avec plusieurs sections :
- Informations générales ;
- Description ;
- Catégorie ;
- Marque ;
- Médias ;
- Prix et tarification ;
- Organisation ;
- Inventaire ;
- Livraison ;
- Variantes.
Les champs obligatoires sont validés avant la publication.

## Gestion des images

L'interface permet :
- de sélectionner une image ;
- de prévisualiser l'image ;
- d'identifier l'image principale.

## Statistiques

Le dashboard présente plusieurs indicateurs permettant de donner une vision synthétique de l'activité :
- chiffre d'affaires ;
- commandes ;
- produits actifs ;
- produits nécessitant un réapprovisionnement.

## Responsive Design

L'application a été conçue pour fonctionner sur :

- Desktop ;
- Mobile ;
- Tablette.

L'interface s'adapte notamment au niveau :
- de la sidebar ;
- du header ;
- du tableau ;
- des cartes produits ;
- des statistiques ;
- du formulaire ;
- des actions.

## Technologies utilisées
Front-End
React.js
JavaScript / JSX
SCSS / CSS
Git
GitHub
Vercel

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

## Utilisation de l'IA

L'IA a été utilisée comme assistant de conception et de développement pour accélérer la mise en place de la structure React, des interactions et du style. Le code généré a été relu, adapté au périmètre du test et vérifié avec les contrôles de compilation du projet.

## Limites connues

- L'import CSV est représenté par un feedback d'interface, sans traitement de fichier métier.
- Les sections secondaires de la sidebar affichent un feedback de disponibilité plutôt qu'une page dédiée.
- Les images locales sont stockées sous forme de données navigateur et ne sont pas envoyées sur un serveur.

## 📄 Contexte

Projet réalisé dans le cadre du test technique — Développeur Web Front-End pour IT PROSERCO.
Le projet vise à démontrer la capacité à analyser une maquette, construire une interface React moderne, gérer les interactions côté client, concevoir des composants réutilisables, assurer le responsive design et déployer une application Front-End en production.
