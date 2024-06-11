import type { AboutViewModelProps } from "../AboutViewModel";

export const aboutDataEn: AboutViewModelProps = {
  whoAmI: {
    title: "Who am I?",
    description:
      "I am a full-stack developer passionate about software design and concerned about the future of our planet. In the early years of my career, I honed my skills at Atos, primarily working with a Java, Spring, and Angular stack. I had the privilege of contributing to several projects for the Ministry of Ecology, an experience that reinforced my desire to use technology for a positive environmental impact. For the past three years, I have turned to more modern technologies, exploring TypeScript, NodeJS, and React in depth. My goal? To get back to basics by simplifying what can be simplified.",
  },
  whatDoIOffer: {
    title: "What do I offer?",
    description: [
      {
        title: "Software Design Expertise:",
        description: "I love crafting well-structured, maintainable code.",
      },
      {
        title: "Full-Stack Fluency:",
        description:
          "Comfortable on both the front-end and back-end with a love for TypeScript.",
      },
      {
        title: "Problem-Solving Prowess:",
        description:
          "Unraveling complex challenges and simplifying them is my jam.",
      },
    ],
  },
  whatKindOfProjects: {
    title: "What kind of projects am I interested in?",
    description:
      "I'm energized by projects that allow me to leverage my software design skills and full-stack capabilities to build innovative solutions. Bonus points if they involve modern technologies like NestJS (or AdonisJS) and React!",
  },
  livingTheDream: {
    title: "Living the Dream (Remotely!)",
    description: (
      <>
        When I'm not in front of a computer, you'll find me on the waves in
        Mimizan, a small coastal town near Bordeaux. Surfing and coding are the
        perfect balance for me, providing essential life balance.
        <br />
        As a remote developer, I harmonize these two passions to foster personal
        growth while bringing renewed energy and total commitment to your
        projects, no matter where I am.
      </>
    ),
  },
};
