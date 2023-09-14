import { ResumeType } from "../types/contentTypes";

export default {
  heading: "Experience",
  items: [
    {
      title: "Application Development Senior Analyst",
      details: "Accenture / May 2022 - Feb 2023",
      descriptions: [
        {
          section: "Project: Digital Transformation of an Insurance Product",
          points: [
            "Built Node.js Microservices, React UI, Serverless Business Report Application, Performed APIs Integration",
            "Technologies Used: TypeScript, Node.js, Express.js, PrismaORM, MS SQL, Stored Procedures, C#, Azure Functions, React, Ant Design UI, Docker, OpenShift",
          ],
        },
      ],
    },
    {
      title: "Programmer",
      details: "Insight Information Technology Limited / Jul 2020 - May 2022",
      descriptions: [
        {
          section: "Application: Back Office System for a Trading Platform",
          points: [
            "Maintained and Enhanced the Existing System, Production Support",
            "Technologies Used: Java, Spring Boot, JSP, JavaScript, PostgreSQL, ZooKeeper, Kafka, Redis, Shell Scripting",
          ],
        },
        {
          section: "Application: Client Portal Websites",
          points: [
            "Updated and Enhanced Frontend UI to Support New Features and PC / Mobile Responsive Design, Production Support",
            "Technologies Used: Vue, SCSS, Java, Spring Boot, RocketMQ, Redis",
          ],
        },
        {
          section: "Project: Revamp of Back Office System",
          points: [
            "Designed Frontend Architecture, Developed React UI, Java Microservices Backend with GraphQL",
            "Technologies Used: Java, Spring Cloud, Spring Boot, GraphQL, React",
          ],
        },
      ],
    },
    {
      title: "IT Consultant",
      details: "FDM Group / Mar 2020 - Jun 2020",
      descriptions: [
        {
          section: "Finished Training in FDM Academy",
          points: ["Technologies Used: Java, Spring Framework, SQL, Unix"],
        },
      ],
    },
  ],
} as ResumeType;
