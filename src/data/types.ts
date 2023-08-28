
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
    skillsRating: {
      skill: string;
      rating: number;
    }[];
  }[];
};

export type Tag = { name: string; };

export type PortfolioType = {
  title: string;
  projects: {
    src: string;
    alt: string;
    title: string;
    description: string;
    link: string;
    tags: Tag[];
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
  portfolio: PortfolioType;
};
