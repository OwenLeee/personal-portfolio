import { ThemeTypings } from "@chakra-ui/react";

export type NavbarType = { menus: string[]; logo: string };

export type LandingType = {
  greetingWord: string;
  myName: string;
  briefDescriptions: string[];
  socialMediasMetadata: {
    socialMedia: string;
    ariaLabel: string;
    link: string;
  }[];
};

export type AboutType = {
  title: string;
  funFacts: { question: string; answer: string[] }[];
  resumePath: string;
  resumeName: string;
};

export type ProfessionalsType = {
  title: string;
  jobDetails: {
    company: string;
    position: string;
    date: string;
    logo: string;
    description: string[];
  }[];
};

export type EducationType = {
  title: string;
  educationDetails: {
    school: string;
    course: string;
    date: string;
  }[];
};

export type CertificatesType = {
  title: string;
  certificateDetails: {
    company: string;
    certificate: string;
    date: string;
  }[];
};

export type SkillsType = {
  title: string;
  skillDetails: {
    category: string;
    colorScheme: ThemeTypings["colorSchemes"];
    skillsRating: {
      skill: string;
      rating: number;
    }[];
  }[];
};

export type ContentType = {
  navbar: NavbarType;
  landing: LandingType;
  about: AboutType;
  professionals: ProfessionalsType;
  education: EducationType;
  certificates: CertificatesType;
  skills: SkillsType;
};
