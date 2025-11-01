import { FaGithub, FaLink, FaNpm } from "react-icons/fa";
import { WorkProps } from "../WorksViewModel";

export const workData: WorkProps[] = [
  {
    id: "work-1",
    name: "@NestJS-Cognito",
    category: "backend",
    statsConfig: {
      github: { owner: "lokicoule", repo: "nestjs-cognito" },
      npm: "@nestjs-cognito/auth",
    },
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://lokicoule.github.io/nestjs-cognito/",
      },
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
      "Avez-vous déjà essayé d'intégrer AWS Cognito dans une application NestJS ? Si oui, vous savez à quel point ça peut être fastidieux. Entre la configuration des JWT, la gestion des guards, et l'adaptation pour GraphQL, on se retrouve vite avec du code boilerplate partout.\n\nC'est exactement le problème que j'ai rencontré sur plusieurs projets. Au lieu de copier-coller ce code d'un projet à l'autre, j'ai décidé de créer un ensemble de packages réutilisables. NestJS-Cognito propose une architecture multi-module qui couvre tous les cas d'usage : REST, GraphQL, et même les tests.\n\nLe résultat ? Une intégration Cognito qui prend quelques lignes de configuration au lieu de centaines de lignes de code custom. Tout est typé, testé, et documenté.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NestJS", "Apollo GraphQL"],
      tools: ["GitHub Actions", "Lerna", "AWS Cognito"],
      architectures: ["Multi-Module"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Core Package (@nestjs-cognito/core)",
        features: [
          "Facilite l'intégration d'Amazon Cognito dans les applications NestJS.",
          "Offre des options de configuration pour le fournisseur d'identité et la vérification JWT.",
        ],
      },
      {
        id: "key-features-2",
        key: "Authentication Package (@nestjs-cognito/auth)",
        features: [
          "Utilise le package core.",
          "Ce package permet d'authentifier et d'autoriser les utilisateurs dans les applications NestJS en utilisant AWS Cognito comme fournisseur d'identité.",
        ],
      },
      {
        id: "key-features-3",
        key: "GraphQL Package (@nestjs-cognito/graphql)",
        features: [
          "Utilise le package auth.",
          "Adapte les fonctionnalités d'authentification et d'autorisation aux applications NestJS basées sur GraphQL.",
        ],
      },
      {
        id: "key-features-4",
        key: "Testing Package (@nestjs-cognito/testing)",
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
    statsConfig: {
      github: { owner: "lokicoule", repo: "commitizard" },
      npm: "commitizard",
    },
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
      "Vous connaissez probablement Commitizen. C'est l'outil de référence pour maintenir des commits cohérents avec Conventional Commits. Le problème ? Il embarque beaucoup de dépendances et de fonctionnalités dont on n'a pas toujours besoin.\n\nQuand j'ai voulu créer un outil simple pour mes projets, j'avais besoin de quelque chose de plus léger et flexible. Surtout un outil qui supporte aussi les workflows TDD (red-green-refactor) nativement, sans configuration compliquée.\n\nJ'ai donc créé Commitizard : une CLI minimaliste qui démarre rapidement et supporte aussi bien les conventions standard que les workflows TDD. Le tout configurable via un simple fichier JSON. Pas de magie, juste ce qu'il faut.",
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
    name: "@lokiverse/emitter",
    category: "tools",
    statsConfig: {
      github: { owner: "lokicoule-stack", repo: "emitter" },
      npm: "@lokiverse/emitter",
    },
    socialLinks: [
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://github.com/lokicoule-stack/emitter",
      },
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://www.npmjs.com/package/@lokiverse/emitter",
      },
    ],
    tag: "Open Source",
    description:
      "Les event emitters en JavaScript, on les utilise tous. Node's EventEmitter, EventEmitter3, mitt... Le problème ? Avec les approches classiques en `emit('eventName')`, TypeScript ne peut pas vraiment vous aider. Vous définissez vos types d'événements, mais rien ne vous empêche de typer `emit('usr:created')` au lieu de `emit('user:created')`.\n\nJe voulais expérimenter avec les Template Literal Types de TypeScript : créer une API où le compilateur connaît tous les événements possibles et leurs payloads. Une API statique plutôt que dynamique, où l'autocomplétion et les erreurs de compilation vous guident vraiment. Et tant qu'à refaire, autant repenser l'architecture avec la composition et les proxies.\n\nLe résultat ? Un émetteur qui exploite l'inférence de types TypeScript à fond. Vous définissez votre schéma d'événements une fois, et TypeScript fait le reste : autocomplétion parfaite, erreurs à la compilation, payloads typés. Plus de string magiques qui cassent en silence.",
    technologiesUsed: {
      languages: ["TypeScript"],
      runtimes: ["NodeJS", "Browser"],
      tools: ["GitHub Actions", "Vitest", "Codecov"],
      architectures: ["Composition-based", "Proxy Pattern", "Event-Driven"],
    },
    keyFeatures: [
      {
        id: "emitter-features-1",
        key: "Type Safety de bout en bout",
        features: [
          "Architecture émergente grâce à une composition stratégique",
          "Implémentation basée sur des proxies pour un design API élégant",
        ],
      },
      {
        id: "emitter-features-2",
        key: "Namespaces véritables",
        features: [
          "Conception TypeScript-first - parce que 'any' c'est admettre la défaite",
          "Compatible avec les IDE avec inférence complète des types",
          "Vérification des types d'événements à la compilation",
          "Validation des charges utiles d'événements sécurisée par le type",
        ],
      },
      {
        id: "emitter-features-3",
        key: "Gestion d'événements sophistiquée",
        features: [
          "Vrai nommage, pas seulement des préfixes de chaîne",
          "Isolation des espaces de noms par composition",
          "API fluente pour la gestion des espaces de noms",
          "Séparation claire des préoccupations via les espaces de noms",
        ],
      },
      {
        id: "emitter-features-4",
        key: "Architecture par composition",
        features: [
          "Écouteurs globaux sans la complexité des expressions régulières",
          "Abonnements d'événements one-time",
          "Correspondance de motifs d'événements avec '*' et des génériques hiérarchiques",
          "API chaînable pour la gestion des événements",
        ],
      },
    ],
  },
  {
    id: "work-4",
    name: "Commandzen",
    category: "tools",
    statsConfig: {
      github: { owner: "lokicoule", repo: "commandzen" },
      npm: "commandzen",
    },
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
    description: `Commander.js est génial. C'est LA référence pour créer des CLIs en Node. Mais quand j'ai développé Commitizard, je cherchais quelque chose de plus minimaliste pour les besoins spécifiques de mon outil.\n\nJ'avais besoin de parser des arguments, gérer des sous-commandes, afficher de l'aide... Les bases d'une CLI, sans les fonctionnalités avancées dont je n'avais pas besoin. Pourquoi embarquer tout un framework quand on utilise 10% de ses fonctionnalités ?\n\nDu coup, j'ai codé Commandzen : une bibliothèque CLI minimaliste qui fait exactement ce qu'il faut, rien de plus. API simple, légère, compatible CommonJS et ESM. Parfait pour les outils simples qui n'ont pas besoin d'un framework complet.`,
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "API minimaliste et intuitive",
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
  {
    id: "work-5",
    name: "Pathfinding Viewer",
    category: "frontend",
    link: "https://pathfinding-viewer.vercel.app/",
    statsConfig: {
      github: { owner: "lokicoule", repo: "pathfinding-viewer" },
    },
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
      "J'ai toujours trouvé fascinant de voir comment fonctionnent les algorithmes de pathfinding. A*, Dijkstra, BFS... On les apprend à l'école, on les code pour des exercices, mais on ne les *voit* jamais vraiment en action.\n\nCette appli, je l'ai créée pour ça : visualiser comment ces algorithmes explorent un labyrinthe, case par case, jusqu'à trouver le chemin optimal. Vous pouvez générer des labyrinthes avec différents algos (Recursive Division, Prim's...), puis lancer un pathfinding et observer en temps réel comment il explore l'espace.\n\nC'est un projet perso pour apprendre et expérimenter, mais ça reste super satisfaisant de voir A* trouver le chemin le plus court en quelques millisecondes, ou de comparer visuellement l'efficacité de Dijkstra vs BFS.",
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
    id: "work-6",
    name: "Architecture du Portfolio",
    category: "frontend",
    statsConfig: {
      github: { owner: "loikfekkai", repo: "loikfekkai.dev" },
    },
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://loikfekkai.dev",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary text-xl",
        href: "https://github.com/loikfekkai/loikfekkai.dev",
      },
    ],
    tag: "Playground",
    description:
      "Vous êtes-vous déjà demandé à quoi pourrait ressembler une architecture MVP dans une application React ?\n\nMoi oui. Ce portfolio est un terrain d'expérimentation architectural. J'y explore comment structurer une SPA autour d'un vrai découplage entre Presenter, Controller et View, et jusqu'où on peut aller sans tomber dans le sur-engineering.\n\nChaque abstraction a un sens. L'objectif n'est pas de copier le backend, mais d'adapter des principes de conception éprouvés aux contraintes du frontend. Les patterns Repository et Adapter y trouvent aussi leur place, mais en soutien, jamais au centre.\n\nLe résultat ? Une codebase qui assume ses choix, pousse les limites de React tout en restant claire et maintenable. Certains patterns se sont révélés étonnamment efficaces, d'autres m'ont simplement appris où la complexité commence à nuire.\n\nBref, ce portfolio est autant une expérience d'architecture qu'un projet personnel que j'ai adoré construire.",
    technologiesUsed: {
      languages: ["TypeScript"],
      libraries: ["React", "TailwindCSS", "Framer Motion"],
      tools: ["Vite", "i18next"],
      architectures: ["MVP", "Observer Pattern", "Repository", "DI"],
    },
    keyFeatures: [
      {
        id: "portfolio-features-1",
        key: "Pattern MVP en pratique",
        features: [
          "Les Presenters écoutent les changements d'état et reconstruisent les ViewModels",
          "Les Controllers gèrent l'input utilisateur et valident avant de mettre à jour l'état",
          "Les Vues sont stupides - elles rendent juste ce que les Presenters leur donnent",
          "Séparation claire qui a du sens (pas juste de la théorie)",
        ],
      },
      {
        id: "portfolio-features-2",
        key: "Controllers vs Presenters - Pourquoi les deux ?",
        features: [
          "Controllers : clic utilisateur → validation → mise à jour du Store → notification",
          "Presenters : changement du Store → transformation des données → reconstruction du ViewModel → notification de la Vue",
        ],
      },
    ],
  },
];
