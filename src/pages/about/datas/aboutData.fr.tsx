import type { AboutViewModelProps } from "../AboutViewModel";

export const aboutDataFr: AboutViewModelProps = {
  whoAmI: {
    title: "Qui suis-je ?",
    description:
      "Développeur full-stack passionné par l'innovation technologique et la transformation digitale, j'ai construit mon parcours autour de la création de solutions logicielles intelligentes et performantes. " +
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
  livingTheDream: {
    title: "Équilibre professionnel",
    description: (
      <>
        Quand je ne suis pas devant mon écran, vous me trouverez sur les vagues
        de Mimizan, petite ville côtière près de Bordeaux. Le surf et le code
        sont pour moi une combinaison parfaite, qui m’offre un équilibre de vie
        essentiel.
        <br />
        En tant que développeur à distance, j’harmonise ces deux passions pour
        favoriser mon épanouissement personnel tout en apportant une énergie
        renouvelée et un engagement total à vos projets, où que je sois.
      </>
    ),
  },
  outro: (
    <>
      Mon objectif est simple : apporter une valeur ajoutée à chaque projet,
      avec rigueur, innovation et une vision à long terme.
    </>
  ),
};
