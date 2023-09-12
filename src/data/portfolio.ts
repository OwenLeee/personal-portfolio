import { PortfolioType, Tag } from "./types";

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
} = tagsMap;

export default {
  title: "Portfolio",
  projects: [
    {
      src: "/static/bbr-p1.png",
      alt: "BeeBeeRentals - A platform for renting apartments",
      title: "BeeBeeRentals",
      description:
        "BeeBeeRentals is a user-friendly rental platform that simplifies the process for landlords and tenants. It features interactive apartment listings, detailed pages, and 2D/3D floor plans. Utilizing technologies like ReactJS, NodeJS, and PostgreSQL, BeeBeeRentals delivers a seamless rental experience.",
      link: "https://github.com/OwenLeee/rental-apartment-app",
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
      src: "/static/sp-p1.png",
      alt: "SPRight - A dating app",
      title: "SPRight",
      description:
        "SPRight is a groundbreaking web application that reimagines online dating by prioritizing voice connections. With features like mutual matching, instant chatrooms, and a unique rating system, SPRight creates genuine and meaningful connections. Built using HTML, CSS, JavaScript, NodeJS, and PostgreSQL, SPRight delivers a seamless and interactive dating experience.",
      link: "https://github.com/OwenLeee/voice-dating-app",
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
  ],
} as PortfolioType;

//
