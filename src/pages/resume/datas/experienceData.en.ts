import { ExperienceProps } from "../ResumeViewModel";

export const experienceData: ExperienceProps[] = [
  {
    id: "experience-1",
    name: "Freelance",
    tag: "Web application development",
    description:
      "During this period, I mainly focused on improving my web development skills, as well as discovering and understanding blockchain and its future implications. In parallel, I occasionally participated in missions.",
    duration: "2020 - Present",
    place: "Remote",
    roleAndResponsibilities: "Fullstack developer",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["React", "Next.js", "Node.js", "NestJS"],
      tools: ["Git", "Docker", "SonarQube"],
      databases: ["MongoDB", "PostgreSQL"],
      architectures: ["Microservices", "Micro-frontend", "MVC", "MVVM", "CQRS"],
    },
    keyAchievements: [
      "Self-learning of new relevant web development technologies, frameworks, and languages.",
      "Attentive monitoring of web development trends and evolutions to stay up-to-date with the latest technological advances.",
      "Working on personal concepts and projects to put acquired knowledge into practice, even if not all projects have been successful.",
    ],
    personalExperience: [
      "Solid understanding of the latest web technologies",
      "Ability to learn autonomously and adapt quickly to new trends",
    ],
  },
  {
    id: "experience-2",
    company: "Atos",
    client: {
      abbreviation: "MTES",
      name: "Ministry of Ecological Transition and Solidarity",
    },
    name: "TIPI / BisonFuté",
    tag: "National road information system",
    description:
      "Software engineer for the National Road Information System (TIPI) project, as part of an Application Maintenance Outsourcing (AMO).\n\nTIPI aggregates real-time data from the national road network to make it accessible to users via consumer applications such as Bison Futé.",
    duration: "2019 - 2020",
    place: "Pessac, France (33)",
    roleAndResponsibilities: "Software engineer",
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
      architectures: ["Microservices", "MVC", "Layered Architecture"],
    },
    keyAchievements: [
      "Development of new features, bug fixing, writing unit and integration tests.",
      "Upgrade of the Tipi event framework to meet ministerial standards.",
      "Collaboration with the team for effective GIT practices.",
      "Increased unit test coverage for better reliability.",
      "Migration from Java 8 to Java 10 and from Spring 4 to Spring 5.",
      "Implementation of a layered architecture with AOP for transaction and log management.",
    ],
    personalExperience: [
      "Adaptability in a complex project with many years of existence and associated applications.",
      "Containerization of the event service for faster and simpler local deployments and tests.",
      "Desire to transition to a more modern technology stack.",
    ],
  },
  {
    id: "experience-3",
    company: "Atos",
    tag: "Internet-based management of international waste transfers",
    client: {
      abbreviation: "MTES",
      name: "Ministry of Ecological Transition and Solidarity",
    },
    name: "GISTRID",
    description:
      "Application Manager / Software Engineer for the GISTRID project, as part of an Application Maintenance Outsourcing (AMO).\n" +
      "\nGISTRID dematerializes waste transfers through an online platform, simplifying transfer requests and ensuring consistent waste management between France and its cross-border countries.",
    duration: "2017 - 2019",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Application Manager / Software Engineer",
    technologiesUsed: {
      languages: ["Java", "Javascript"],
      frameworks: ["Spring", "Hibernate", "Struts"],
      libraries: ["AspectJ", "JasperReports"],
      tools: ["Jenkins", "Maven", "Git", "Jira"],
      architectures: ["Layered Architecture", "monolithic"],
    },
    keyAchievements: [
      "Estimation, planning, and allocation of features to be developed.",
      "Development of new features, bug fixing, writing unit and integration tests.",
      "Complex technological migrations, including from Struts 2.3 to Struts 2.5 and from Spring 3 to Spring 4, with migration plans and thorough testing.",
      "Management of a team of 2 developers and an intern.",
      "Writing of technical documentation.",
    ],
    personalExperience: [
      "Development of a strong sense of rigor and demand.",
      "Acquisition of skills in managing technical migrations.",
      "Improvement of my expertise in solving technical problems.",
      "Team management does not correspond to my professional aspirations.",
    ],
  },
  {
    id: "experience-4",
    company: "Atos",
    tag: "Digital transformation of maintenance management",
    client: {
      name: "Dassault Falcon Service",
    },
    internship: {
      duration: "Internship 2015 - 2017",
    },
    name: "FalconTab",
    description:
      "Fullstack developer for the Falcontab project as part of a fixed-price project.\n\nFalcontab is a dematerialization solution for maintenance management for Dassault Aviation's Falcon aircraft (civil branch). The objective was to reduce paper consumption, simplify maintenance tasks and technical documents management, while promoting the transition to all-digital.",
    duration: "2015 - 2017",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Fullstack developer (internship)",
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
      "Development of the orchestrator (ESB) in collaboration with 2 other developers",
      "Development of SOAP services that serve as an interface between SAP, the orchestrator, and web and tablet applications",
      "Implementation of a JNDI bridge (Java) to interconnect a C++ application and a C# application",
    ],
    personalExperience: [
      "Integration into a team of 12 to 15 people.",
      "Learning Talend ESB and the challenges of interoperability.",
      "Use of design patterns and software architecture.",
    ],
  },
  {
    id: "experience-5",
    company: "Atos",
    tag: "Optimisation of international messaging processes",
    client: {
      name: "La Poste",
    },
    internship: {
      duration: "End-of-year internship, duration 3 months",
    },
    name: "AMO La Poste",
    description:
      "Internship focused on improving systemic processes for international messaging, notably through grammatical analysis, secure storage, and file transformation to increase data efficiency and security.",
    duration: "June 2014 - August 2014",
    place: "Marseille, France",
    roleAndResponsibilities: "System developer (intern)",
    technologiesUsed: {
      languages: ["C", "T-SQL"],
      shells: ["Bash", "Ksh"],
      operatingSystems: ["AIX 5.1"],
      databases: ["Sybase"],
      tools: ["SVN"],
    },
    personalExperience: [
      "Application of knowledge acquired in system development.",
      "Enriching experience in a large enterprise environment, increasing my understanding of operational systems and data management.",
    ],
  },
];
