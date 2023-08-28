import { PortfolioType, Tag } from "./types";

const tagsMap: { [key: string]: Tag } = {
  react: {
    name: "React",
  },
  html: {
    name: "HTML",
  },
  css: {
    name: "CSS",
  },
  nodejs: {
    name: "Node.js",
  },
  express: {
    name: "Express",
  },
  socketio: {
    name: "Socket.io",
  },
  postgresql: {
    name: "PostgreSQL",
  },
  vanillaJS: {
    name: "VanillaJS",
  },
  fullstack: {
    name: "Fullstack",
  },
  aws: {
    name: "AWS",
  },
  scss: {
    name: "SCSS",
  },
  typescript: {
    name: "TypeScript",
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
