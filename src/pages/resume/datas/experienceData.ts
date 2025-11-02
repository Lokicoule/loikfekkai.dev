import { Localized } from "../../../shared/i18n/localized";
import { StackProps } from "../../../shared/components/elements/Stack";

type ExperienceStackData = Omit<StackProps, "architectures"> & {
  architectures?: Localized<string[]>;
};

export type ExperienceItemData = {
  id: string;
  name: Localized<string>;
  tag: Localized<string>;
  description?: Localized<string>;
  internship?: {
    duration: Localized<string>;
  };
  company?: string;
  client?: {
    abbreviation?: string;
    name: Localized<string>;
  };
  duration: Localized<string>;
  place: string;
  roleAndResponsibilities: Localized<string>;
  technologiesUsed: ExperienceStackData;
  keyAchievements?: Localized<string[]>;
  personalExperience?: Localized<string[]>;
  link?: string;
  linkText?: string;
};

export const experienceData: ExperienceItemData[] = [
  {
    id: "experience-1",
    name: { en: "Freelance", fr: "Freelance" },
    tag: {
      en: "Web application development",
      fr: "Développement d'applications web",
    },
    duration: { en: "2020 - Present", fr: "2020 - Présent" },
    place: "Remote",
    description: {
      en: "As a freelance developer, I had the unique opportunity to dedicate a large part of my time to refining my coding style and deepening my skills in software architecture. This period of independence allowed me to focus on technical excellence, resulting in highly optimized and performant software solutions. My projects, visible on my GitHub profile, testify to this constant quest for improvement and innovation in my work.",
      fr: "En tant que développeur freelance, j'ai eu l'opportunité unique de consacrer une grande partie de mon temps à peaufiner mon style (de code) et à approfondir mes compétences en architecture logicielle. Cette période d'indépendance m'a permis de me concentrer sur l'excellence technique, résultant en des solutions logicielles hautement optimisées et performantes. Mes projets, visibles sur mon profil GitHub, témoignent de cette quête constante de perfectionnement et d'innovation dans mon travail.",
    },
    roleAndResponsibilities: {
      en: "Full-stack developer",
      fr: "Développeur full-stack",
    },
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["React", "Node.js", "Next.js", "NestJS"],
      tools: ["Git", "Docker", "SonarQube", "AWS", "Redis"],
      databases: ["MongoDB", "PostgreSQL"],
      architectures: {
        en: ["Microservices", "Micro-frontend", "MVC", "MVVM", "CQRS"],
        fr: ["Microservices", "Micro-frontend", "MVC", "MVVM", "CQRS"],
      },
    },
  },
  {
    id: "experience-2",
    company: "Atos",
    client: {
      abbreviation: "MTES",
      name: {
        en: "Ministry of Ecological Transition and Solidarity",
        fr: "Ministère de la Transition Écologique et Solidaire",
      },
    },
    name: { en: "TIPI / BisonFuté", fr: "TIPI / BisonFuté" },
    tag: {
      en: "National road information system",
      fr: "Système d'information routier national",
    },
    description: {
      en: "Software engineer for the National Road Information System (TIPI) project, as part of an Application Maintenance Outsourcing (AMO).\n\nTIPI aggregates real-time data from the national road network to make it accessible to users via consumer applications such as Bison Futé.",
      fr: "Ingénieur logiciel pour le projet de Système d'Information Routier National (TIPI), dans le cadre d'une Tierce Maintenance Applicative (TMA).\n\nTIPI agrège en temps réel les données du réseau routier national pour les rendre notamment accessibles aux utilisateurs via des applications grand public tel que Bison Futé.",
    },
    duration: { en: "2019 - 2020", fr: "2019 - 2020" },
    place: "Pessac, France (33)",
    roleAndResponsibilities: { en: "Software engineer", fr: "Ingénieur logiciel" },
    technologiesUsed: {
      languages: ["Java", "Javascript", "Typescript"],
      frameworks: ["Spring", "Spring AOP", "Hibernate", "ExtJS", "Angular"],
      libraries: ["RxJS"],
      tools: [
        "Jenkins",
        "Maven",
        "Git",
        "Jira",
        "Mantis",
        "Docker",
        "SonarQube",
        "Apache Karaf",
        "RabbitMQ",
      ],
      databases: ["PostgreSQL"],
      architectures: {
        en: ["Microservices", "MVC", "Layered Architecture"],
        fr: ["Microservices", "MVC", "Architecture en couches"],
      },
    },
    keyAchievements: {
      en: [
        "Development of new features, bug fixing, writing unit and integration tests.",
        "Upgrade of the Tipi event framework to meet ministerial standards.",
        "Collaboration with the team for effective GIT practices.",
        "Increased unit test coverage for better reliability.",
        "Migration from Java 8 to Java 10 and from Spring 4 to Spring 5.",
        "Implementation of a layered architecture with AOP for transaction and log management.",
      ],
      fr: [
        "Développement de nouvelles fonctionnalités, correction de bugs, rédaction de tests unitaires et d'intégration.",
        "Mise à niveau du framework d'événements Tipi pour répondre aux normes ministérielles.",
        "Collaboration avec l'équipe pour des pratiques GIT efficaces.",
        "Augmentation de la couverture des tests unitaires pour une meilleure fiabilité.",
        "Migration de Java 8 à Java 10 et de Spring 4 à Spring 5.",
        "Mise en place d'une architecture en couches avec AOP pour la gestion des transactions et des logs.",
      ],
    },
    personalExperience: {
      en: [
        "Adaptability in a complex project with many years of existence and associated applications.",
        "Containerization of the event service for faster and simpler local deployments and tests.",
        "Desire to transition to a more modern technology stack.",
      ],
      fr: [
        "Adaptabilité dans un projet complexe avec de nombreuses années d'existence et applications associées.",
        "Containerisation du service événementiel pour des déploiements et des tests en local plus rapides et plus simples.",
        "Volonté de transition vers une stack technologique plus moderne.",
      ],
    },
  },
  {
    id: "experience-3",
    company: "Atos",
    tag: {
      en: "Internet-based management of international waste transfers",
      fr: "Gestion par internet du suivi des transferts internationaux de déchets",
    },
    client: {
      abbreviation: "MTES",
      name: {
        en: "Ministry of Ecological Transition and Solidarity",
        fr: "Ministère de la Transition Écologique et Solidaire",
      },
    },
    name: { en: "GISTRID", fr: "GISTRID" },
    description: {
      en:
        "Application Manager / Software Engineer for the GISTRID project, as part of an Application Maintenance Outsourcing (AMO).\n" +
        "\nGISTRID dematerializes waste transfers through an online platform, simplifying transfer requests and ensuring consistent waste management between France and its cross-border countries.",
      fr:
        "Responsable applicatif / Ingénieur logiciel pour le projet GISTRID, dans le cadre d'une Tierce Maintenance Applicative (TMA).\n" +
        "\nGISTRID dématérialise les transferts de déchets grâce à une plateforme en ligne, simplifiant les demandes de transfert et assurant une gestion des déchets cohérente entre la France et ses pays transfrontaliers.",
    },
    duration: { en: "2017 - 2019", fr: "2017 - 2019" },
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: {
      en: "Application Manager / Software Engineer",
      fr: "Responsable applicatif / Ingénieur logiciel",
    },
    technologiesUsed: {
      languages: ["Java", "Javascript"],
      frameworks: ["Spring", "Hibernate", "Struts"],
      libraries: ["AspectJ", "JasperReports"],
      tools: ["Jenkins", "Maven", "Git", "Jira", "Redis"],
      architectures: {
        en: ["Layered Architecture", "monolithic"],
        fr: ["Architecture en couches", "monolithique"],
      },
    },
    keyAchievements: {
      en: [
        "Estimation, planning, and allocation of features to be developed.",
        "Development of new features, bug fixing, writing unit and integration tests.",
        "Complex technological migrations, including from Struts 2.3 to Struts 2.5 and from Spring 3 to Spring 4, with migration plans and thorough testing.",
        "Management of a team of 2 developers and an intern.",
        "Writing of technical documentation.",
      ],
      fr: [
        "Chiffrage, planification et attribution des fonctionnalités à développer.",
        "Développement de nouvelles fonctionnalités, correction de bugs, rédaction de tests unitaires et d'intégration.",
        "Migrations technologiques complexes, notamment de Struts 2.3 à Struts 2.5 et de Spring 3 à Spring 4, avec élaboration de plans de migration et tests approfondis.",
        "Gestion d'une équipe de 2 développeurs et d'un stagiaire.",
        "Rédaction de la documentation technique.",
      ],
    },
    personalExperience: {
      en: [
        "Development of a strong sense of rigor and demand.",
        "Acquisition of skills in managing technical migrations.",
        "Improvement of my expertise in solving technical problems.",
        "Team management does not correspond to my professional aspirations.",
      ],
      fr: [
        "Développement d'un fort sens de la rigueur et d'exigence.",
        "Acquisition de compétences en gestion de migrations techniques.",
        "Amélioration de mon expertise dans la résolution de problèmes techniques.",
        "La gestion d'équipe ne correspond pas à mes aspirations professionnelles.",
      ],
    },
  },
  {
    id: "experience-4",
    company: "Atos",
    tag: {
      en: "Digital transformation of maintenance management",
      fr: "Transformation digitale de gestion de la maintenance",
    },
    client: {
      name: { en: "Dassault Falcon Service", fr: "Dassault Falcon Service" },
    },
    internship: {
      duration: { en: "Internship 2015 - 2017", fr: "Alternance 2015 - 2017" },
    },
    name: { en: "FalconTab", fr: "FalconTab" },
    description: {
      en: "Full-stack developer for the Falcontab project as part of a fixed-price project.\n\nFalcontab is a dematerialization solution for maintenance management for Dassault Aviation's Falcon aircraft (civil branch). The objective was to reduce paper consumption, simplify maintenance tasks and technical documents management, while promoting the transition to all-digital.",
      fr: "Développeur full-stack en alternance pour le projet Falcontab dans le cadre d'un projet au forfait.\n\nFalcontab est une solution de dématérialisation de la gestion de la maintenance pour les avions Falcon de Dassault Aviation (branche civile). L'objectif était de réduire la consommation de papier, simplifier la gestion des tâches de maintenance et des documents techniques, tout en favorisant la transition vers le tout numérique.",
    },
    duration: { en: "2015 - 2017", fr: "2015 - 2017" },
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: {
      en: "Full-stack developer (internship)",
      fr: "Développeur full-stack (alternance)",
    },
    technologiesUsed: {
      languages: ["Java", "C#", "Typescript"],
      libraries: ["Aspose"],
      frameworks: ["Angular", "SharePoint"],
      tools: [
        "Apache ActiveMQ",
        "Talend ESB",
        "Jenkins",
        "Maven",
        "SVN",
        "Jira",
        "Docker",
        "SonarQube",
      ],
      databases: ["SQL Server", "SAP"],
      architectures: {
        en: ["SOA", "ESB", "MVVM"],
        fr: ["SOA", "ESB", "MVVM"],
      },
    },
    keyAchievements: {
      en: [
        "Development of the orchestrator (ESB) in collaboration with 2 other developers",
        "Development of SOAP services that serve as an interface between SAP, the orchestrator, and web and tablet applications",
        "Implementation of a JNDI bridge (Java) to interconnect a C++ application and a C# application",
      ],
      fr: [
        "Développement de l'orchestrateur (ESB) en collaboration avec 2 autres développeurs.",
        "Développement de services SOAP qui servent d'interface entre SAP, l'orchestrateur et les applications web et tablette.",
        "Mise en place d'un bridge JNDI (Java) pour interconnecter une application C++ et une application C#.",
      ],
    },
    personalExperience: {
      en: [
        "Integration into a team of 12 to 15 people.",
        "Learning Talend ESB and the challenges of interoperability.",
        "Use of design patterns and software architecture.",
      ],
      fr: [
        "Intégration dans une équipe de 12 à 15 personnes.",
        "Apprentissage de Talend ESB et des défis de l'interopérabilité.",
        "Utilisation des designs patterns et de l'architecture logicielle.",
      ],
    },
  },
  {
    id: "experience-5",
    company: "Atos",
    tag: {
      en: "Optimisation of international messaging processes",
      fr: "Optimisation des processus de messagerie internationale",
    },
    client: {
      name: { en: "La Poste", fr: "La Poste" },
    },
    internship: {
      duration: {
        en: "End-of-year internship, duration 3 months",
        fr: "Stage de fin d'année, durée 3 mois",
      },
    },
    name: { en: "La Poste (AMO)", fr: "La Poste (TMA)" },
    description: {
      en: "Internship focused on improving systemic processes for international messaging, notably through grammatical analysis, secure storage, and file transformation to increase data efficiency and security.",
      fr: "Stage axé sur l'amélioration des processus systémiques de messagerie internationale, notamment par l'analyse grammaticale, le stockage sécurisé et la transformation des fichiers pour accroître l'efficacité et la sécurité des données.",
    },
    duration: { en: "June 2014 - August 2014", fr: "Juin 2014 - Août 2014" },
    place: "Marseille, France",
    roleAndResponsibilities: {
      en: "System developer (intern)",
      fr: "Développeur système (stagiaire)",
    },
    technologiesUsed: {
      languages: ["C", "T-SQL"],
      shells: ["Bash", "Ksh"],
      operatingSystems: ["AIX 5.1"],
      databases: ["Sybase"],
      tools: ["SVN"],
    },
    personalExperience: {
      en: [
        "Application of knowledge acquired in system development.",
        "Enriching experience in a large enterprise environment, increasing my understanding of operational systems and data management.",
      ],
      fr: [
        "Mise en pratique des connaissances acquises en développement système.",
        "Expérience enrichissante dans un environnement de grande entreprise, augmentant ma compréhension des systèmes opérationnels et de la gestion des données.",
      ],
    },
  },
];
