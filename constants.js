export const METADATA = {
  author: "Youness Aithaba",
  title: "Portfolio | Youness aithaba",
  description:
    "Youness Aithaba is a Full-Stack Developer from Morocco, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.younessaithaba.me/",
  twitterHandle: "@youness_aithaba",
  keywords: [
    "Youness Aithaba",
    "Full-Stack Developer",
    "Web Developer",
    "Spring Boot Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  // image:
  //   "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: younessaithaba63@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/youness-aithaba-a79b94145/",
  },
  {
    name: "github",
    url: "https://github.com/unesshaba",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/younessaithaba/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/youness_aithaba",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    // "cpp",
     "java",
    // "python",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    // "moralis",
    // "stripe",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "Angular",
    "spring-boot",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "CAT-project",
    image: "/projects/Cat.webp",
    blurImage: "/projects/blur/Cat2-blur.webp",
    description: "Project Assurance aux frontiéres clone using Spring-Boot + Angular 🛏️",
    gradient: ["#1b778c", "#136870"],
    // url: "https://shubh73-airbnb.vercel.app/",
    tech: ["Angular", "java", "tailwindcss", "spring-boot"],
  },
  {
    name: "Medium",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    // url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    // url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    // url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Kapset",
    title: "Stage Full-Stack Developer",
    location: "Casablanca, Maroc",
    range: "July - September",
    responsibilities: [
      "La conception d’une application desktop de gestion de location..",
      "Technologies utilisées : java ,javaFx,Mysql,css .",
    ],
    url: "https:/Kapset.com/",
    video: "/work/kapset.mp4",
  },
  {
    id: 2,
    company: "CAT Assurance et Réassurance ",
    title: "|Développeur full stack stagiaire",
    location: "Casablanca",
    range: "july - September 2023",
    responsibilities: [
      "Conception, développement et le déploiement d’une application de vente en ligne (produit d’assurance) ",
      "Analyse et spécification du besoin clients.",
      "Conception et développement des nouvelles fonctionnalités spécifiques au client.",
      "Maintenance évolutive du module de gestion administrative",
      "Correction des bugs",
      "Outils: SpringBoot,SpringSecurity, Spring DATA, MySQL, Hibernate, Angular 16.",
    ],
    url: "https://www.cat.co.ma/",
    video: "/work/CAT.mp4",
  },

];

export const GTAG = "G-5HCTL2TJ5W";
