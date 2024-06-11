import type { AboutViewModelProps } from "../AboutViewModel";

export const aboutDataFr: AboutViewModelProps = {
  whoAmI: {
    title: "Qui suis-je ?",
    description:
      "Je suis un développeur full-stack passionné par la conception logicielle et soucieux de l'avenir de notre planète. Au cours des premières années de ma carrière, j'ai perfectionné mes compétences chez Atos en travaillant principalement sur une stack Java, Spring et Angular. J'ai eu le privilège de participer au développement de plusieurs projets pour le Ministère de l'Écologie, une expérience qui a renforcé mon désir d'utiliser la technologie pour un impact environnemental positif. Depuis trois ans, je me suis tourné vers des technologies plus modernes, explorant en profondeur TypeScript, NodeJS et React. Mon objectif ? Revenir à l'essentiel en simplifiant ce qui peut l'être.",
  },
  whatDoIOffer: {
    title: "Que puis-je vous offrir ?",
    description: [
      {
        title: "Une expertise en conception logicielle :",
        description:
          "J'adore écrire du code facile à lire, à maintenir, à tester et à faire évoluer.",
      },
      {
        title: "De la polyvalence :",
        description:
          "Je suis à l'aise aussi bien en front-end qu'en back-end et j'adore TypeScript.",
      },
      {
        title: "Une capacité à résoudre les problèmes :",
        description:
          "J'adore décomposer les problématiques complexes pour les rendre plus simples à appréhender et à résoudre.",
      },
    ],
  },
  whatKindOfProjects: {
    title: "Quels types de projets m'intéressent ?",
    description:
      "Je suis motivé par les projets qui me permettent de mettre mes compétences en conception logicielle et en développement au service de solutions innovantes et durables. Et si ces projets impliquent des technologies comme NestJS (ou AdonisJS) et React, c'est encore mieux !",
  },
  livingTheDream: {
    title: "Living the Dream (Remotely!)",
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
};
