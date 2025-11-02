import { FaGithub, FaLink, FaNpm } from "react-icons/fa";
import { SocialLinkProps } from "../../../shared/components/elements/SocialLinks";
import { StackProps } from "../../../shared/components/elements/Stack";
import { WorkFilter } from "../../../shared/persistence/GlobalStore";
import { Localized } from "../../../shared/i18n/localized";
import { ProjectStatsConfig } from "../WorksViewModel";

const ICON_CLASS_NAME = "text-[#0072b1] bg-secondary text-xl";
const PATHFINDING_VIEWER_URL = "https://pathfinding-viewer.vercel.app/";

type KeyFeatureData = {
  id: string;
  key: Localized<string>;
  features: Localized<string[]>;
};

export type WorkItemData = {
  id: string;
  name: string;
  category: WorkFilter;
  tag: Localized<string>;
  description: Localized<string>;
  logo?: JSX.Element;
  link?: string;
  technologiesUsed: StackProps;
  keyFeatures?: KeyFeatureData[];
  socialLinks: SocialLinkProps[];
  statsConfig?: ProjectStatsConfig;
};

export const workData: WorkItemData[] = [
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
        iconClassName: ICON_CLASS_NAME,
        href: "https://lokicoule.github.io/nestjs-cognito/",
      },
      {
        icon: <FaNpm />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.npmjs.com/package/@nestjs-cognito/auth",
      },
      {
        icon: <FaGithub />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.github.com/lokicoule/nestjs-cognito",
      },
    ],
    tag: { en: "Open Source", fr: "Open Source" },
    description: {
      en: "Have you ever tried integrating AWS Cognito into a NestJS application? If so, you know how tedious it can be. Between JWT configuration, guards management, and GraphQL adaptation, you quickly end up with boilerplate code everywhere.\n\nThat's exactly the problem I encountered across multiple projects. Instead of copy-pasting this code from one project to another, I decided to create a set of reusable packages. NestJS-Cognito offers a multi-module architecture that covers all use cases: REST, GraphQL, and even testing.\n\nThe result? A Cognito integration that takes a few lines of configuration instead of hundreds of lines of custom code. Everything is typed, tested, and documented.",
      fr: "Avez-vous déjà essayé d'intégrer AWS Cognito dans une application NestJS ? Si oui, vous savez à quel point ça peut être fastidieux. Entre la configuration des JWT, la gestion des guards, et l'adaptation pour GraphQL, on se retrouve vite avec du code boilerplate partout.\n\nC'est exactement le problème que j'ai rencontré sur plusieurs projets. Au lieu de copier-coller ce code d'un projet à l'autre, j'ai décidé de créer un ensemble de packages réutilisables. NestJS-Cognito propose une architecture multi-module qui couvre tous les cas d'usage : REST, GraphQL, et même les tests.\n\nLe résultat ? Une intégration Cognito qui prend quelques lignes de configuration au lieu de centaines de lignes de code custom. Tout est typé, testé, et documenté.",
    },
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NestJS", "Apollo GraphQL"],
      tools: ["GitHub Actions", "Lerna", "AWS Cognito"],
      architectures: ["Multi-Module"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: {
          en: "Core Package (@nestjs-cognito/core):",
          fr: "Core Package (@nestjs-cognito/core)",
        },
        features: {
          en: [
            "Facilitates the integration of Amazon Cognito into NestJS applications.",
            "Offers configuration options for the identity provider and JWT verification.",
          ],
          fr: [
            "Facilite l'intégration d'Amazon Cognito dans les applications NestJS.",
            "Offre des options de configuration pour le fournisseur d'identité et la vérification JWT.",
          ],
        },
      },
      {
        id: "key-features-2",
        key: {
          en: "Authentication Package (@nestjs-cognito/auth):",
          fr: "Authentication Package (@nestjs-cognito/auth)",
        },
        features: {
          en: [
            "Uses the core package.",
            "This package allows users to authenticate and authorize in NestJS applications using AWS Cognito as the identity provider.",
          ],
          fr: [
            "Utilise le package core.",
            "Ce package permet d'authentifier et d'autoriser les utilisateurs dans les applications NestJS en utilisant AWS Cognito comme fournisseur d'identité.",
          ],
        },
      },
      {
        id: "key-features-3",
        key: {
          en: "GraphQL Package (@nestjs-cognito/graphql):",
          fr: "GraphQL Package (@nestjs-cognito/graphql)",
        },
        features: {
          en: [
            "Uses the auth package.",
            "Adapts authentication and authorization features to NestJS-based GraphQL applications.",
          ],
          fr: [
            "Utilise le package auth.",
            "Adapte les fonctionnalités d'authentification et d'autorisation aux applications NestJS basées sur GraphQL.",
          ],
        },
      },
      {
        id: "key-features-4",
        key: {
          en: "Testing Package (@nestjs-cognito/testing):",
          fr: "Testing Package (@nestjs-cognito/testing)",
        },
        features: {
          en: [
            "Uses the core package.",
            "Facilitates integration and end-to-end testing of NestJS applications using the auth and graphql packages.",
          ],
          fr: [
            "Utilise le package core.",
            "Facilite les tests d'intégrations et end-to-end des applications NestJS utilisant les packages auth et graphql.",
          ],
        },
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
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.npmjs.com/package/commitizard",
      },
      {
        icon: <FaGithub />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.github.com/lokicoule/commitizard",
      },
    ],
    tag: { en: "Open Source", fr: "Open Source" },
    description: {
      en: "You probably know Commitizen. It's the go-to tool for maintaining consistent commits with Conventional Commits. The issue? It comes with a lot of dependencies and features you don't always need.\n\nWhen I wanted to create a simple tool for my projects, I needed something lighter and more flexible. Especially a tool that natively supports TDD workflows (red-green-refactor) without complicated configuration.\n\nSo I built Commitizard: a minimalist CLI that starts quickly and supports both standard conventions and TDD workflows. All configurable through a simple JSON file. No magic, just what you need.",
      fr: "Vous connaissez probablement Commitizen. C'est l'outil de référence pour maintenir des commits cohérents avec Conventional Commits. Le problème ? Il embarque beaucoup de dépendances et de fonctionnalités dont on n'a pas toujours besoin.\n\nQuand j'ai voulu créer un outil simple pour mes projets, j'avais besoin de quelque chose de plus léger et flexible. Surtout un outil qui supporte aussi les workflows TDD (red-green-refactor) nativement, sans configuration compliquée.\n\nJ'ai donc créé Commitizard : une CLI minimaliste qui démarre rapidement et supporte aussi bien les conventions standard que les workflows TDD. Le tout configurable via un simple fichier JSON. Pas de magie, juste ce qu'il faut.",
    },
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: {
          en: "Commit message generation in assistant mode:",
          fr: "Stratégies de commit",
        },
        features: {
          en: [
            "Supports conventional and red-green-refactor (TDD) commit strategies.",
            "Fully configurable via .commitizard.json.",
            "Git hooks management.",
          ],
          fr: [
            "Supporte les stratégies de commit conventionnelles et red-green-refactor (TDD).",
            "Entièrement configurable via .commitizard.json.",
            "Gestion des hooks Git.",
          ],
        },
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
        iconClassName: ICON_CLASS_NAME,
        href: "https://github.com/lokicoule-stack/emitter",
      },
      {
        icon: <FaNpm />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.npmjs.com/package/@lokiverse/emitter",
      },
    ],
    tag: { en: "Open Source", fr: "Open Source" },
    description: {
      en: "Have you ever wondered why TypeScript event emitters never have real namespaces?\n\nExisting libs (mitt, EventEmitter3) handle type safety well with event maps. But namespaces? We always end up with flat strings: 'user:created', 'user:deleted'... And wildcards ('user:*') lose their type inference.\n\nThis project explores how to transform these strings into a true typed hierarchy. I experimented with Template Literal Types to extract namespaces, Mapped Types to create properties, and Proxies to make it all naturally accessible.\n\nThe result? An emitter where emitter.user.$on('created') is native and typed, where emitter.user.$on('*') knows all possible events in the namespace. The API follows the event structure.",
      fr: "Vous êtes-vous déjà demandé pourquoi les event emitters TypeScript n'ont jamais de vrais namespaces ?\n\nLes libs existantes (mitt, EventEmitter3) gèrent bien la type safety avec des event maps. Mais les namespaces ? On se retrouve toujours avec des strings plates : 'user:created', 'user:deleted'... Et les wildcards ('user:*') perdent leur inférence de types.\n\nCe projet explore comment transformer ces strings en vraie hiérarchie typée. J'y ai expérimenté les Template Literal Types pour extraire les namespaces, les Mapped Types pour créer les propriétés, et les Proxies pour rendre tout ça accessible naturellement.\n\nLe résultat ? Un emitter où emitter.user.$on('created') est natif et typé, où emitter.user.$on('*') connaît tous les événements possibles du namespace.",
    },
    technologiesUsed: {
      languages: ["TypeScript"],
      runtimes: ["NodeJS", "Browser"],
      tools: ["GitHub Actions", "Vitest", "Codecov"],
      architectures: ["Composition-based", "Proxy Pattern", "Event-Driven"],
    },
    keyFeatures: [
      {
        id: "emitter-features-1",
        key: { en: "Advanced Composition Patterns", fr: "Type Safety de bout en bout" },
        features: {
          en: [
            "Emergent architecture through strategic composition",
            "Proxy-based implementation for elegant API design",
          ],
          fr: [
            "Architecture émergente grâce à une composition stratégique",
            "Implémentation basée sur des proxies pour un design API élégant",
          ],
        },
      },
      {
        id: "emitter-features-2",
        key: { en: "True Type Safety", fr: "Namespaces véritables" },
        features: {
          en: [
            "TypeScript-first design - because 'any' is admitting defeat",
            "IDE-friendly with full type inference",
            "Compile-time event type checking",
            "Type-safe event payload validation",
          ],
          fr: [
            "Conception TypeScript-first - parce que 'any' c'est admettre la défaite",
            "Compatible avec les IDE avec inférence complète des types",
            "Vérification des types d'événements à la compilation",
            "Validation des charges utiles d'événements sécurisée par le type",
          ],
        },
      },
      {
        id: "emitter-features-3",
        key: { en: "Advanced Namespacing", fr: "Gestion d'événements sophistiquée" },
        features: {
          en: [
            "Real namespacing, not just string prefixes",
            "Namespace isolation through composition",
            "Fluent API for namespace management",
            "Clean separation of concerns through namespaces",
          ],
          fr: [
            "Vrai nommage, pas seulement des préfixes de chaîne",
            "Isolation des espaces de noms par composition",
            "API fluente pour la gestion des espaces de noms",
            "Séparation claire des préoccupations via les espaces de noms",
          ],
        },
      },
      {
        id: "emitter-features-4",
        key: { en: "Sophisticated Event Handling", fr: "Architecture par composition" },
        features: {
          en: [
            "Wildcard listeners without the RegEx complexity",
            "One-time event subscriptions",
            "Event pattern matching with '*' and hierarchical wildcards",
            "Chainable API for event management",
          ],
          fr: [
            "Écouteurs globaux sans la complexité des expressions régulières",
            "Abonnements d'événements one-time",
            "Correspondance de motifs d'événements avec '*' et des génériques hiérarchiques",
            "API chaînable pour la gestion des événements",
          ],
        },
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
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.npmjs.com/package/commandzen",
      },
      {
        icon: <FaGithub />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.github.com/lokicoule/commandzen",
      },
    ],
    tag: { en: "Open Source", fr: "Open Source" },
    description: {
      en: `Commander.js is awesome. It's THE reference for building CLIs in Node. But when I was developing Commitizard, I was looking for something more minimalist for my tool's specific needs.\n\nI needed to parse arguments, handle subcommands, display help... The basics of a CLI, without the advanced features I didn't need. Why bundle an entire framework when you're using 10% of its functionality?\n\nSo I built Commandzen: a minimalist CLI library that does exactly what's needed, nothing more. Simple API, lightweight, compatible with both CommonJS and ESM. Perfect for simple tools that don't need a full-featured framework.`,
      fr: `Commander.js est génial. C'est LA référence pour créer des CLIs en Node. Mais quand j'ai développé Commitizard, je cherchais quelque chose de plus minimaliste pour les besoins spécifiques de mon outil.\n\nJ'avais besoin de parser des arguments, gérer des sous-commandes, afficher de l'aide... Les bases d'une CLI, sans les fonctionnalités avancées dont je n'avais pas besoin. Pourquoi embarquer tout un framework quand on utilise 10% de ses fonctionnalités ?\n\nDu coup, j'ai codé Commandzen : une bibliothèque CLI minimaliste qui fait exactement ce qu'il faut, rien de plus. API simple, légère, compatible CommonJS et ESM. Parfait pour les outils simples qui n'ont pas besoin d'un framework complet.`,
    },
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: {
          en: "Simple and intuitive API for creating CLI applications",
          fr: "API minimaliste et intuitive",
        },
        features: {
          en: [
            "Supports commands, subcommands, and options",
            "Supports command aliases",
            "Automatic generation of help for commands and subcommands",
          ],
          fr: [
            "Supporte les commandes, les sous-commandes et les options",
            "Supporte les alias de commandes",
            "Génération automatique de l'aide pour les commandes et sous-commandes",
          ],
        },
      },
      {
        id: "key-features-2",
        key: {
          en: "Compatibility with JavaScript module systems",
          fr: "Compatibilité avec les systèmes de modules JavaScript",
        },
        features: {
          en: ["CommonJS", "ECMAScript Modules (ESM)"],
          fr: ["CommonJS", "ECMAScript Modules (ESM)"],
        },
      },
    ],
  },
  {
    id: "work-5",
    name: "Pathfinding Viewer",
    category: "frontend",
    statsConfig: {
      github: { owner: "lokicoule", repo: "pathfinding-viewer" },
    },
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: ICON_CLASS_NAME,
        href: PATHFINDING_VIEWER_URL,
      },
      {
        icon: <FaGithub />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://www.github.com/lokicoule/pathfinding-viewer",
      },
    ],
    tag: { en: "Personal", fr: "Personal" },
    description: {
      en: "I've always found it fascinating to see how pathfinding algorithms actually work. A*, Dijkstra, BFS... We learn them in school, code them for exercises, but we never really *see* them in action.\n\nI created this app for exactly that: visualizing how these algorithms explore a maze, cell by cell, until they find the optimal path. You can generate mazes with different algorithms (Recursive Division, Prim's...), then launch a pathfinding algorithm and watch in real-time as it explores the space.\n\nIt's a personal project for learning and experimenting, but it's still super satisfying to see A* find the shortest path in milliseconds, or visually compare the efficiency of Dijkstra vs BFS.",
      fr: "J'ai toujours trouvé fascinant de voir comment fonctionnent les algorithmes de pathfinding. A*, Dijkstra, BFS... On les apprend à l'école, on les code pour des exercices, mais on ne les *voit* jamais vraiment en action.\n\nCette appli, je l'ai créée pour ça : visualiser comment ces algorithmes explorent un labyrinthe, case par case, jusqu'à trouver le chemin optimal. Vous pouvez générer des labyrinthes avec différents algos (Recursive Division, Prim's...), puis lancer un pathfinding et observer en temps réel comment il explore l'espace.\n\nC'est un projet perso pour apprendre et expérimenter, mais ça reste super satisfaisant de voir A* trouver le chemin le plus court en quelques millisecondes, ou de comparer visuellement l'efficacité de Dijkstra vs BFS.",
    },
    technologiesUsed: {
      languages: ["Typescript"],
      libraries: ["React", "TailwindCSS"],
      tools: ["Vite"],
    },
    link: PATHFINDING_VIEWER_URL,
    keyFeatures: [
      {
        id: "key-features-1",
        key: {
          en: "Maze Generation Algorithms:",
          fr: "Algorithmes de génération de labyrinthes:",
        },
        features: {
          en: ["Recursive Division", "Recursive Backtracking", "Prim's Algorithm"],
          fr: ["Recursive Division", "Recursive Backtracking", "Prim's Algorithm"],
        },
      },
      {
        id: "key-features-2",
        key: {
          en: "Pathfinding Algorithms:",
          fr: "Algorithmes de recherche de chemin:",
        },
        features: {
          en: ["Dijkstra", "A*", "Breadth-first search", "Depth-first search"],
          fr: ["Dijkstra", "A*", "Breadth-first search", "Depth-first search"],
        },
      },
    ],
  },
  {
    id: "work-6",
    name: "Portfolio",
    category: "frontend",
    statsConfig: {
      github: { owner: "loikfekkai", repo: "loikfekkai.dev" },
    },
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://loikfekkai.dev",
      },
      {
        icon: <FaGithub />,
        iconClassName: ICON_CLASS_NAME,
        href: "https://github.com/Lokicoule/loikfekkai.dev",
      },
    ],
    tag: { en: "Playground", fr: "Playground" },
    description: {
      en: "Have you ever wondered what an MVP architecture could look like in a React application?\n\nI have. This portfolio is an architectural playground. I explore how to structure a SPA around true separation between Presenter, Controller, and View, and how far you can push it without falling into over-engineering.\n\nEvery abstraction has a purpose. The goal isn't to copy backend patterns, but to adapt proven design principles to frontend constraints. Repository and Adapter patterns have their place here too, but as support, never at the center.\n\nThe result? A codebase that owns its choices, pushes React's boundaries while staying clear and maintainable. Some patterns proved surprisingly effective, others simply taught me where complexity starts to hurt.\n\nIn short, this portfolio is as much an architectural experiment as it is a personal project — and I loved building it.",
      fr: "Vous êtes-vous déjà demandé à quoi pourrait ressembler une architecture MVP dans une application React ?\n\nMoi oui. Ce portfolio est un terrain d'expérimentation architectural. J'y explore comment structurer une SPA autour d'un vrai découplage entre Presenter, Controller et View, et jusqu'où on peut aller sans tomber dans le sur-engineering.\n\nChaque abstraction a un sens. L'objectif n'est pas de copier le backend, mais d'adapter des principes de conception éprouvés aux contraintes du frontend. Les patterns Repository et Adapter y trouvent aussi leur place, mais en soutien, jamais au centre.\n\nLe résultat ? Une codebase qui assume ses choix, pousse les limites de React tout en restant claire et maintenable. Certains patterns se sont révélés étonnamment efficaces, d'autres m'ont simplement appris où la complexité commence à nuire.\n\nBref, ce portfolio est autant une expérience d'architecture qu'un projet personnel que j'ai adoré construire.",
    },
    technologiesUsed: {
      languages: ["TypeScript"],
      libraries: ["React", "TailwindCSS", "Framer Motion"],
      tools: ["Vite", "i18next"],
      architectures: ["MVP", "Observer Pattern", "Repository", "DI"],
    },
    keyFeatures: [
      {
        id: "portfolio-features-1",
        key: { en: "MVP Pattern in Practice", fr: "Pattern MVP en pratique" },
        features: {
          en: [
            "Presenters listen to state changes and rebuild ViewModels",
            "Controllers handle user input and validate before updating state",
            "Views are dumb - they just render what Presenters give them",
            "Clean separation that actually makes sense (not just theory)",
          ],
          fr: [
            "Les Presenters écoutent les changements d'état et reconstruisent les ViewModels",
            "Les Controllers gèrent l'input utilisateur et valident avant de mettre à jour l'état",
            "Les Vues sont stupides - elles rendent juste ce que les Presenters leur donnent",
            "Séparation claire qui a du sens (pas juste de la théorie)",
          ],
        },
      },
      {
        id: "portfolio-features-2",
        key: {
          en: "Controllers vs Presenters - Why Both?",
          fr: "Controllers vs Presenters - Pourquoi les deux ?",
        },
        features: {
          en: [
            "Controllers: user clicks → validate → update Store → show notification",
            "Presenters: Store changes → transform data → rebuild ViewModel → notify View",
          ],
          fr: [
            "Controllers : clic utilisateur → validation → mise à jour du Store → notification",
            "Presenters : changement du Store → transformation des données → reconstruction du ViewModel → notification de la Vue",
          ],
        },
      },
    ],
  },
];
