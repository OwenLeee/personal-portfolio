import { PORTFOLIO_CATEGORY, SKILL_TAG, SOCIAL_MEDIA } from "../constants";

// Navbar
export type NavbarType = { menus: string[] };

// SocialMedia
export type SocialMedia = keyof typeof SOCIAL_MEDIA;

export type SocialMediaMetadataType = {
  socialMedia: SocialMedia;
  ariaLabel: string;
  link: string;
};

export type SocialMediasMetadataType = SocialMediaMetadataType[];

// Landing / Home Page
export type LandingType = {
  bgVideo: string;
  myName: string;
  titles: string[];
};

// About Me Page
export type AboutType = {
  funFacts: { question: string; answer: string[] }[];
  resumePath: string;
  resumeName: string;
  name: string;
  email: string;
  location: string;
  from: string;
};

// Resume Page
export type ResumeItemType = {
  title: string;
  details: string;
  descriptions: { section: string; points: string[] }[];
};

export type ResumeType = {
  heading: string;
  items: ResumeItemType[];
};

export type SkillType = {
  skill: string;
  percentage: number;
};

export type SkillsType = { [key in keyof typeof SKILL_TAG]: SkillType };

export type Tag = { name: string; bgColor: string };

// Portfolio Page
export type PortfolioCategory = keyof typeof PORTFOLIO_CATEGORY;

export type PortfolioType = {
  title: string;
  link: string;
  img: string;
  category: PortfolioCategory;
  tags: Tag[];
  objectPosition?: string;
};

export type PortfoliosType = PortfolioType[];

// All Content
export type ContentType = {
  navbar: NavbarType;
  landing: LandingType;
  about: AboutType;
  professionals: ResumeType;
  education: ResumeType;
  certificates: ResumeType;
  skills: SkillsType;
  portfolio: PortfoliosType;
  socialMedias: SocialMediasMetadataType;
};
