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
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.npmjs.com/package/@nestjs-cognito/auth",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/nestjs-cognito",
      },
    ],
    tag: "Open Source",
    description:
      "Enhance your NestJS applications with robust authentication and authorization functionalities through Amazon Cognito. This project simplifies the integration process, making it easier to leverage AWS’s managed authentication service.",
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
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.npmjs.com/package/commitizard",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/commitizard",
      },
    ],
    tag: "Open Source",
    description:
      "Optimize your commit message creation process with Commitizard, designed to support both conventional commit standards and red-green-refactor (TDD) methods.",
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
    name: "Pathfinding Viewer",
    category: "frontend",
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://pathfinding-viewer.vercel.app/",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/pathfinding-viewer",
      },
    ],
    tag: "Personal",
    description:
      "Discover and explore various pathfinding and maze generation algorithms with this interactive visualization tool.",
    technologiesUsed: {
      languages: ["Typescript"],
      libraries: ["React", "TailwindCSS"],
      tools: ["Vite"],
    },
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
    id: "work-4",
    name: "Commandzen",
    category: "tools",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.npmjs.com/package/commandzen",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/commandzen",
      },
    ],
    tag: "Open Source",
    description: `Create sleek, efficient command-line interface applications using Commandzen, a TypeScript-based library designed for simplicity and effectiveness.`,
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
];
