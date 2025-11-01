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
      "Have you ever tried integrating AWS Cognito into a NestJS application? If so, you know how tedious it can be. Between JWT configuration, guards management, and GraphQL adaptation, you quickly end up with boilerplate code everywhere.\n\nThat's exactly the problem I encountered across multiple projects. Instead of copy-pasting this code from one project to another, I decided to create a set of reusable packages. NestJS-Cognito offers a multi-module architecture that covers all use cases: REST, GraphQL, and even testing.\n\nThe result? A Cognito integration that takes a few lines of configuration instead of hundreds of lines of custom code. Everything is typed, tested, and documented.",
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
          "Facilitates the integration of Amazon Cognito into NestJS applications.",
          "Offers configuration options for the identity provider and JWT verification.",
        ],
      },
      {
        id: "key-features-2",
        key: "Authentication Package (@nestjs-cognito/auth):",
        features: [
          "Uses the core package.",
          "This package allows users to authenticate and authorize in NestJS applications using AWS Cognito as the identity provider.",
        ],
      },
      {
        id: "key-features-3",
        key: "GraphQL Package (@nestjs-cognito/graphql):",
        features: [
          "Uses the auth package.",
          "Adapts authentication and authorization features to NestJS-based GraphQL applications.",
        ],
      },
      {
        id: "key-features-4",
        key: "Testing Package (@nestjs-cognito/testing):",
        features: [
          "Uses the core package.",
          "Facilitates integration and end-to-end testing of NestJS applications using the auth and graphql packages.",
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
      "You probably know Commitizen. It's the go-to tool for maintaining consistent commits with Conventional Commits. The issue? It comes with a lot of dependencies and features you don't always need.\n\nWhen I wanted to create a simple tool for my projects, I needed something lighter and more flexible. Especially a tool that natively supports TDD workflows (red-green-refactor) without complicated configuration.\n\nSo I built Commitizard: a minimalist CLI that starts quickly and supports both standard conventions and TDD workflows. All configurable through a simple JSON file. No magic, just what you need.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Commit message generation in assistant mode:",
        features: [
          "Supports conventional and red-green-refactor (TDD) commit strategies.",
          "Fully configurable via .commitizard.json.",
          "Git hooks management.",
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
      "Event emitters in JavaScript - we all use them. Node's EventEmitter, EventEmitter3, mitt... The problem? With classic approaches using `emit('eventName')`, TypeScript can't really help you. You define your event types, but nothing prevents you from typing `emit('usr:created')` instead of `emit('user:created')`.\n\nI wanted to experiment with TypeScript's Template Literal Types: create an API where the compiler knows all possible events and their payloads. A static API rather than dynamic, where autocomplete and compile-time errors actually guide you. And while rebuilding from scratch, why not rethink the architecture with composition and proxies?\n\nThe result? An emitter that fully leverages TypeScript's type inference. You define your event schema once, and TypeScript does the rest: perfect autocomplete, compile-time errors, typed payloads. No more magic strings that silently break.",
    technologiesUsed: {
      languages: ["TypeScript"],
      runtimes: ["NodeJS", "Browser"],
      tools: ["GitHub Actions", "Vitest", "Codecov"],
      architectures: ["Composition-based", "Proxy Pattern", "Event-Driven"],
    },
    keyFeatures: [
      {
        id: "emitter-features-1",
        key: "Advanced Composition Patterns",
        features: [
          "Emergent architecture through strategic composition",
          "Proxy-based implementation for elegant API design",
        ],
      },
      {
        id: "emitter-features-2",
        key: "True Type Safety",
        features: [
          "TypeScript-first design - because 'any' is admitting defeat",
          "IDE-friendly with full type inference",
          "Compile-time event type checking",
          "Type-safe event payload validation",
        ],
      },
      {
        id: "emitter-features-3",
        key: "Advanced Namespacing",
        features: [
          "Real namespacing, not just string prefixes",
          "Namespace isolation through composition",
          "Fluent API for namespace management",
          "Clean separation of concerns through namespaces",
        ],
      },
      {
        id: "emitter-features-4",
        key: "Sophisticated Event Handling",
        features: [
          "Wildcard listeners without the RegEx complexity",
          "One-time event subscriptions",
          "Event pattern matching with '*' and hierarchical wildcards",
          "Chainable API for event management",
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
    description: `Commander.js is awesome. It's THE reference for building CLIs in Node. But when I was developing Commitizard, I was looking for something more minimalist for my tool's specific needs.\n\nI needed to parse arguments, handle subcommands, display help... The basics of a CLI, without the advanced features I didn't need. Why bundle an entire framework when you're using 10% of its functionality?\n\nSo I built Commandzen: a minimalist CLI library that does exactly what's needed, nothing more. Simple API, lightweight, compatible with both CommonJS and ESM. Perfect for simple tools that don't need a full-featured framework.`,
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Simple and intuitive API for creating CLI applications",
        features: [
          "Supports commands, subcommands, and options",
          "Supports command aliases",
          "Automatic generation of help for commands and subcommands",
        ],
      },
      {
        id: "key-features-2",
        key: "Compatibility with JavaScript module systems",
        features: ["CommonJS", "ECMAScript Modules (ESM)"],
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
      "I've always found it fascinating to see how pathfinding algorithms actually work. A*, Dijkstra, BFS... We learn them in school, code them for exercises, but we never really *see* them in action.\n\nI created this app for exactly that: visualizing how these algorithms explore a maze, cell by cell, until they find the optimal path. You can generate mazes with different algorithms (Recursive Division, Prim's...), then launch a pathfinding algorithm and watch in real-time as it explores the space.\n\nIt's a personal project for learning and experimenting, but it's still super satisfying to see A* find the shortest path in milliseconds, or visually compare the efficiency of Dijkstra vs BFS.",
    technologiesUsed: {
      languages: ["Typescript"],
      libraries: ["React", "TailwindCSS"],
      tools: ["Vite"],
    },
    link: "https://pathfinding-viewer.vercel.app/",
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Maze Generation Algorithms:",
        features: [
          "Recursive Division",
          "Recursive Backtracking",
          "Prim's Algorithm",
        ],
      },
      {
        id: "key-features-2",
        key: "Pathfinding Algorithms:",
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
    name: "Portfolio Architecture",
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
      "Have you ever wondered what an MVP architecture could look like in a React application?\n\nI have. This portfolio is an architectural playground. I explore how to structure a SPA around true separation between Presenter, Controller, and View, and how far you can push it without falling into over-engineering.\n\nEvery abstraction has a purpose. The goal isn't to copy backend patterns, but to adapt proven design principles to frontend constraints. Repository and Adapter patterns have their place here too, but as support, never at the center.\n\nThe result? A codebase that owns its choices, pushes React's boundaries while staying clear and maintainable. Some patterns proved surprisingly effective, others simply taught me where complexity starts to hurt.\n\nIn short, this portfolio is as much an architectural experiment as it is a personal project — and I loved building it.",
    technologiesUsed: {
      languages: ["TypeScript"],
      libraries: ["React", "TailwindCSS", "Framer Motion"],
      tools: ["Vite", "i18next"],
      architectures: ["MVP", "Observer Pattern", "Repository", "DI"],
    },
    keyFeatures: [
      {
        id: "portfolio-features-1",
        key: "MVP Pattern in Practice",
        features: [
          "Presenters listen to state changes and rebuild ViewModels",
          "Controllers handle user input and validate before updating state",
          "Views are dumb - they just render what Presenters give them",
          "Clean separation that actually makes sense (not just theory)",
        ],
      },
      {
        id: "portfolio-features-2",
        key: "Controllers vs Presenters - Why Both?",
        features: [
          "Controllers: user clicks → validate → update Store → show notification",
          "Presenters: Store changes → transform data → rebuild ViewModel → notify View",
        ],
      },
    ],
  },
];
