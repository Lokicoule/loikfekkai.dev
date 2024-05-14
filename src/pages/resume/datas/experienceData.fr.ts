import { ExperienceProps } from "../ResumeViewModel";

export const experienceData: ExperienceProps[] = [
  {
    id: "experience-1",
    name: "Freelance",
    tag: "Développement d'applications web",
    duration: "2020 - Présent",
    place: "Remote",
    description:
      "En tant que développeur freelance, j'ai eu l'opportunité unique de consacrer une grande partie de mon temps à peaufiner mon style (de code) et à approfondir mes compétences en architecture logicielle. Cette période d'indépendance m'a permis de me concentrer sur l'excellence technique, résultant en des solutions logicielles hautement optimisées et performantes. Mes projets, visibles sur mon profil GitHub, témoignent de cette quête constante de perfectionnement et d'innovation dans mon travail.",
    roleAndResponsibilities: "Développeur fullstack",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["React", "Node.js", "Next.js", "NestJS"],
      tools: ["Git", "Docker", "SonarQube", "AWS"],
      databases: ["MongoDB", "PostgreSQL"],
      architectures: ["Microservices", "Micro-frontend", "MVC", "MVVM", "CQRS"],
    },
  },
  {
    id: "experience-2",
    company: "Atos",
    client: {
      abbreviation: "MTES",
      name: "Ministère de la Transition Écologique et Solidaire",
    },
    name: "TIPI / BisonFuté",
    tag: "Système d'information routier national",
    description:
      "Ingénieur logiciel pour le projet de Système d'Information Routier National (TIPI), dans le cadre d'une Tierce Maintenance Applicative (TMA).\n\nTIPI agrège en temps réel les données du réseau routier national pour les rendre notamment accessibles aux utilisateurs via des applications grand public tel que Bison Futé.",
    duration: "2019 - 2020",
    place: "Pessac, France (33)",
    roleAndResponsibilities: "Ingénieur logiciel",
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
      architectures: ["Microservices", "MVC", "Architecture en couches"],
    },
    keyAchievements: [
      "Développement de nouvelles fonctionnalités, correction de bugs, rédaction de tests unitaires et d'intégration.",
      "Mise à niveau du framework d'événements Tipi pour répondre aux normes ministérielles.",
      "Collaboration avec l'équipe pour des pratiques GIT efficaces.",
      "Augmentation de la couverture des tests unitaires pour une meilleure fiabilité.",
      "Migration de Java 8 à Java 10 et de Spring 4 à Spring 5.",
      "Mise en place d'une architecture en couches avec AOP pour la gestion des transactions et des logs.",
    ],
    personalExperience: [
      "Adaptabilité dans un projet complexe avec de nombreuses années d'existence et applications associées.",
      "Containerisation du service événementiel pour des déploiements et des tests en local plus rapides et plus simples.",
      "Volonté de transition vers une stack technologique plus moderne.",
    ],
  },
  {
    id: "experience-3",
    company: "Atos",
    tag: "Gestion par internet du suivi des transferts internationaux de déchets",
    client: {
      abbreviation: "MTES",
      name: "Ministère de la Transition Écologique et Solidaire",
    },
    name: "GISTRID",
    description:
      "Responsable applicatif / Ingénieur logiciel pour le projet GISTRID, dans le cadre d'une Tierce Maintenance Applicative (TMA).\n" +
      "\nGISTRID dématérialise les transferts de déchets grâce à une plateforme en ligne, simplifiant les demandes de transfert et assurant une gestion des déchets cohérente entre la France et ses pays transfrontaliers.",
    duration: "2017 - 2019",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Responsable applicatif / Ingénieur logiciel",
    technologiesUsed: {
      languages: ["Java", "Javascript"],
      frameworks: ["Spring", "Hibernate", "Struts"],
      libraries: ["AspectJ", "JasperReports"],
      tools: ["Jenkins", "Maven", "Git", "Jira"],
      architectures: ["Layered Architecture", "monolithique"],
    },
    keyAchievements: [
      "Chiffrage, planification et attribution des fonctionnalités à développer.",
      "Développement de nouvelles fonctionnalités, correction de bugs, rédaction de tests unitaires et d'intégration.",
      "Migrations technologiques complexes, notamment de Struts 2.3 à Struts 2.5 et de Spring 3 à Spring 4, avec élaboration de plans de migration et tests approfondis.",
      "Gestion d'une équipe de 2 développeurs et d'un stagiaire.",
      "Rédaction de la documentation technique.",
    ],
    personalExperience: [
      "Développement d'un fort sens de la rigueur et d'exigence.",
      "Acquisition de compétences en gestion de migrations techniques.",
      "Amélioration de mon expertise dans la résolution de problèmes techniques.",
      "La gestion d'équipe ne correspond pas à mes aspirations professionnelles.",
    ],
  },
  {
    id: "experience-4",
    company: "Atos",
    tag: "Transformation digitale de gestion de la maintenance",
    client: {
      name: "Dassault Falcon Service",
    },
    internship: {
      duration: "Alternance 2015 - 2017",
    },
    name: "FalconTab",
    description:
      "Développeur fullstack en alternance pour le projet Falcontab dans le cadre d'un projet au forfait.\n\nFalcontab est une solution de dématérialisation de la gestion de la maintenance pour les avions Falcon de Dassault Aviation (branche civile). L'objectif était de réduire la consommation de papier, simplifier la gestion des tâches de maintenance et des documents techniques, tout en favorisant la transition vers le tout numérique.",
    duration: "2015 - 2017",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Développeur fullstack (alternance)",
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
      architectures: ["SOA", "ESB", "MVVM"],
    },
    keyAchievements: [
      "Développement de l'orchestrateur (ESB) en collaboration avec 2 autres développeurs",
      "Développement de services SOAP qui servent d'interface entre SAP, l'orchestrateur et les applications web et tablette",
      "Mise en place d'un bridge JNDI (Java) pour interconnecter une application C++ et une application C#",
    ],
    personalExperience: [
      "Intégration dans une équipe de 12 à 15 personnes.",
      "Apprentissage de Talend ESB et des défis de l'interopérabilité.",
      "Utilisation des designs patterns et de l'architecture logicielle.",
    ],
  },
  {
    id: "experience-5",
    company: "Atos",
    tag: "Optimisation des processus de messagerie internationale",
    client: {
      name: "La Poste",
    },
    internship: {
      duration: "Stage de fin d'année, durée 3 mois",
    },
    name: "TMA La Poste",
    description:
      "Stage axé sur l'amélioration des processus systémiques de messagerie internationale, notamment par l'analyse grammaticale, le stockage sécurisé et la transformation des fichiers pour accroître l'efficacité et la sécurité des données.",
    duration: "Juin 2014 - Août 2014",
    place: "Marseille, France",
    roleAndResponsibilities: "Développeur système (stagiaire)",
    technologiesUsed: {
      languages: ["C", "T-SQL"],
      shells: ["Bash", "Ksh"],
      operatingSystems: ["AIX 5.1"],
      databases: ["Sybase"],
      tools: ["SVN"],
    },
    personalExperience: [
      "Mise en pratique des connaissances acquises en développement système.",
      "Expérience enrichissante dans un environnement de grande entreprise, augmentant ma compréhension des systèmes opérationnels et de la gestion des données.",
    ],
  },
];
