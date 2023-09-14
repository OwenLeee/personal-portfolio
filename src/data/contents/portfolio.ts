import { PortfoliosType, Tag } from "../types/contentTypes";

export const tagsMap: { [key: string]: Tag } = {
  react: {
    name: "React",
    bgColor: "bg-sky-400/40",
  },
  html: {
    name: "HTML",
    bgColor: "bg-orange-600/40",
  },
  css: {
    name: "CSS",
    bgColor: "bg-blue-500/40",
  },
  nodejs: {
    name: "Node.js",
    bgColor: "bg-emerald-500/40",
  },
  express: {
    name: "Express",
    bgColor: "bg-emerald-700/40",
  },
  socketio: {
    name: "Socket.io",
    bgColor: "bg-red-900/40",
  },
  postgresql: {
    name: "PostgreSQL",
    bgColor: "bg-blue-900/40",
  },
  vanillaJS: {
    name: "VanillaJS",
    bgColor: "bg-yellow-300/40",
  },
  fullstack: {
    name: "Fullstack",
    bgColor: "bg-fuchsia-800/40",
  },
  aws: {
    name: "AWS",
    bgColor: "bg-amber-500/40",
  },
  scss: {
    name: "SCSS",
    bgColor: "bg-pink-500/40",
  },
  typescript: {
    name: "TypeScript",
    bgColor: "bg-blue-500/40",
  },
  tailwindCSS: {
    name: "TailwindCSS",
    bgColor: "bg-cyan-300/40",
  },
  githubActions: {
    name: "Github Action",
    bgColor: "bg-gray-800/40",
  },
  python: {
    name: "Python",
    bgColor: "bg-yellow-200/40",
  },
};

const {
  react,
  html,
  css,
  nodejs,
  express,
  socketio,
  postgresql,
  vanillaJS,
  fullstack,
  aws,
  scss,
  typescript,
  tailwindCSS,
  githubActions,
  python,
} = tagsMap;

export default [
  {
    title: "Rental Apartment App",
    link: "https://github.com/OwenLeee/rental-apartment-app",
    img: "bbr-p1.png",
    category: "Side Projects",
    tags: [
      fullstack,
      aws,
      typescript,
      nodejs,
      react,
      express,
      postgresql,
      scss,
    ],
  },
  {
    title: "Voice Dating App",
    link: "https://github.com/OwenLeee/voice-dating-app",
    img: "sp-p1.png",
    category: "Side Projects",
    tags: [
      fullstack,
      aws,
      typescript,
      socketio,
      nodejs,
      html,
      css,
      vanillaJS,
      express,
      postgresql,
    ],
  },
  {
    title: "Personal Website",
    link: "https://github.com/OwenLeee/personal-portfolio",
    img: "landing.png",
    category: "Side Projects",
    tags: [react, tailwindCSS, aws, githubActions],
  },
  {
    title: "Lyft Backend Engineering",
    link: "https://github.com/OwenLeee/forage-lyft-backend-engineering",
    img: "lyft.png",
    category: "Forage Virtual Work Experience",
    tags: [python],
    objectPosition: "object-left md:object-center",
  },
] as PortfoliosType;

//
