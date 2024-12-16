import type { AboutViewModelProps } from "../AboutViewModel";

export const aboutDataFr: AboutViewModelProps = {
  whoAmI: {
    title: "Qui suis-je ?",
    description:
      "Développeur full-stack passionné par l'innovation technologique et la transformation digitale. J'ai construit mon parcours autour de la création de solutions logicielles intelligentes et performantes. " +
      "Mon parcours m'a conduit de grands groupes comme Atos à l'entrepreneuriat, en passant par des projets de transformation digitale innovants. J'ai développé une expertise solide dans les écosystèmes Node.js, TypeScript et React, toujours animé par la volonté de simplifier et d'optimiser les systèmes informatiques.",
  },
  whatDoIOffer: {
    title: "Mes compétences",
    description: [
      {
        title: "Une expertise en conception logicielle :",
        description:
          "Je prends soin de développer un code clair, maintenable, testable et évolutif. Chaque ligne de code est pensée pour sa lisibilité et sa performance.",
      },
      {
        title: "De la polyvalence :",
        description:
          "Également à l'aise en front-end et back-end, je trouve mon équilibre avec TypeScript comme langage de prédilection.",
      },
      {
        title: "Une capacité à résoudre les problèmes :",
        description:
          "J'excelle dans la transformation digitale, la conception de microservices et l'optimisation des processus. Mon approche repose sur une analyse approfondie et des solutions pragmatiques qui génèrent une réelle valeur ajoutée.",
      },
    ],
  },
  whatKindOfProjects: {
    title: "Projets et motivations",
    description:
      "Je suis attiré comme un développeur vers un bon café par les projets innovants et durables. Mon objectif : mettre mes compétences au service de solutions qui ont du sens.",
  },
  livingTheDream: {
    title: "Équilibre professionnel",
    description: (
      <>
        Basé à Mimizan, près de Bordeaux, je travaille à distance avec une
        approche flexible et dynamique. Le surf, ma passion parallèle, me permet
        de maintenir un équilibre qui se reflète dans ma créativité et mon
        engagement professionnel.
        <br />
        Mon objectif est simple : apporter une valeur ajoutée à chaque projet,
        avec rigueur, innovation et une vision à long terme.
      </>
    ),
  },
};
