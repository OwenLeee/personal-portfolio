import { SkillsType } from "./types";

export default {
  title: "Skill",
  skillDetails: [
    {
      category: "Programming Language",
      skillsRating: [
        {
          skill: "JavaScript / TypeScript",
          rating: 90,
        },
        {
          skill: "Java",
          rating: 85,
        },
        {
          skill: "Python",
          rating: 80,
        },
        {
          skill: "C#",
          rating: 70,
        },
        {
          skill: "Shell Script",
          rating: 70,
        },
      ],
    },
    {
      category: "Backend",
      skillsRating: [
        {
          skill: "Node.JS (Express)",
          rating: 90,
        },
        {
          skill: "Spring Boot",
          rating: 85,
        },
        {
          skill: "PostgreDB",
          rating: 80,
        },
        {
          skill: "Microsoft SQL",
          rating: 80,
        },
        {
          skill: "ORM (Hibernate, PrismaORM)",
          rating: 80,
        },
        {
          skill: "Redis",
          rating: 70,
        },
        {
          skill: "Nginx",
          rating: 70,
        },
      ],
    },
    {
      category: "Frontend",
      skillsRating: [
        {
          skill: "React.JS",
          rating: 90,
        },
        {
          skill: "Vue.JS",
          rating: 85,
        },
        {
          skill: "Ant Design UI",
          rating: 85,
        },
        {
          skill: "Material UI",
          rating: 85,
        },
        {
          skill: "Chakra UI",
          rating: 85,
        },
      ],
    },
    {
      category: "DevOps / Cloud",
      skillsRating: [
        {
          skill: "AWS",
          rating: 85,
        },
        {
          skill: "Docker",
          rating: 85,
        },
        {
          skill: "Docker Compose",
          rating: 85,
        },
        {
          skill: "Azure Functions",
          rating: 80,
        },
        {
          skill: "GitHub Actions",
          rating: 70,
        },
      ],
    },
    {
      category: "Message Queue",
      skillsRating: [
        {
          skill: "Kafka",
          rating: 70,
        },
        {
          skill: "RocketMQ",
          rating: 70,
        },
      ],
    },
    {
      category: "API",
      skillsRating: [
        {
          skill: "RESTful API",
          rating: 90,
        },
        {
          skill: "GraphQL",
          rating: 80,
        },
        {
          skill: "Websocket",
          rating: 80,
        },
      ],
    },
  ],
} as SkillsType;
