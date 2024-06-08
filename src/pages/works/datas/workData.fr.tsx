import { WorkProps } from "../WorksViewModel";
import { FaGithub, FaNpm, FaLink } from "react-icons/fa";

export const workData: WorkProps[] = [
  {
    id: "work-1",
    name: "@NestJS-Cognito",
    category: "backend",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.npmjs.com/package/@nestjs-cognito/auth",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.github.com/lokicoule/nestjs-cognito",
      },
    ],
    tag: "Open Source",
    description:
      "NestJS-Cognito est un ensemble de packages qui vise à simplifier l'intégration d'Amazon Cognito dans les applications NestJS. Ces packages offrent des fonctionnalités d'authentification et d'autorisation robustes en utilisant AWS Cognito comme fournisseur d'identité.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NestJS", "Apollo GraphQL"],
      tools: ["GitHub Actions", "Lerna", "AWS Cognito"],
      architectures: ["Multi-Module"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Core Package (@nestjs-cognito/core):",
        features: [
          "Facilite l'intégration d'Amazon Cognito dans les applications NestJS.",
          "Offre des options de configuration pour le fournisseur d'identité et la vérification JWT.",
        ],
      },
      {
        id: "key-features-2",
        key: "Authentication Package (@nestjs-cognito/auth):",
        features: [
          "Utilise le package core.",
          "Ce package permet d'authentifier et d'autoriser les utilisateurs dans les applications NestJS en utilisant AWS Cognito comme fournisseur d'identité.",
        ],
      },
      {
        id: "key-features-3",
        key: "GraphQL Package (@nestjs-cognito/graphql):",
        features: [
          "Utilise le package auth.",
          "Adapte les fonctionnalités d'authentification et d'autorisation aux applications NestJS basées sur GraphQL.",
        ],
      },
      {
        id: "key-features-4",
        key: "Testing Package (@nestjs-cognito/testing):",
        features: [
          "Utilise le package core.",
          "Facilite les tests d'intégrations et end-to-end des applications NestJS utilisant les packages auth et graphql.",
        ],
      },
    ],
  },
  {
    id: "work-2",
    name: "Commitizard",
    category: "tools",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.npmjs.com/package/commitizard",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.github.com/lokicoule/commitizard",
      },
    ],
    tag: "Open Source",
    description:
      "Commitizard est un outil en ligne de commande (CLI) qui simplifie le processus de création de messages de commit en utilisant des conventions de commit.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Stratégies de commit",
        features: [
          "Supporte les stratégies de commit conventionnelles et red-green-refactor (TDD).",
          "Entièrement configurable via .commitizard.json.",
          "Gestion des hooks Git.",
        ],
      },
    ],
  },
  {
    id: "work-3",
    name: "Pathfinding Viewer",
    category: "frontend",
    link: "https://pathfinding-viewer.vercel.app/",
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://pathfinding-viewer.vercel.app/",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.github.com/lokicoule/pathfinding-viewer",
      },
    ],
    tag: "Personal",
    description:
      "Pathfinding Viewer est une application web qui permet de visualiser les algorithmes de génération de labyrinthes et de recherche de chemins. Cette application a été créée pour explorer les algorithmes de recherche de chemin et de génération de labyrinthes.",
    technologiesUsed: {
      languages: ["Typescript"],
      libraries: ["React", "TailwindCSS"],
      tools: ["Vite"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Algorithmes de génération de labyrinthes:",
        features: [
          "Recursive Division",
          "Recursive Backtracking",
          "Prim's Algorithm",
        ],
      },
      {
        id: "key-features-2",
        key: "Algorithmes de recherche de chemin:",
        features: [
          "Dijkstra",
          "A*",
          "Breadth-first search",
          "Depth-first search",
        ],
      },
    ],
  },
  {
    id: "work-4",
    name: "Commandzen",
    category: "tools",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.npmjs.com/package/commandzen",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.github.com/lokicoule/commandzen",
      },
    ],
    tag: "Open Source",
    description: `Commandzen est une bibliothèque qui vise à simplifier la création d'applications d'interface en ligne de commande (CLI) en utilisant TypeScript et NodeJS.
Lors du développement de Commitizard, j'ai préalablement utilisé la bibliothèque Commander mais la taille du bundle généré était trop importante pour mon cas d'usage. J'ai donc créé ma propre bibliothèque pour répondre à une problématique simple.`,
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "API simple et intuitive pour la création d'applications CLI",
        features: [
          "Supporte les commandes, les sous-commandes et les options",
          "Supporte les alias de commandes",
          "Génération automatique de l'aide pour les commandes et sous-commandes",
        ],
      },
      {
        id: "key-features-2",
        key: "Compatibilité avec les systèmes de modules JavaScript",
        features: ["CommonJS", "ECMAScript Modules (ESM)"],
      },
    ],
  },
];
