export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
};

export type NavbarLink = {
  label: string;
  href: string;
  isButton?: boolean;
};

export type Profile = {
  greeting: string;
  name: string;
  role: string;
  photo: string;
  photoAlt: string;
};

export type Highlight = {
  heading: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "frontend" | "backend" | "fullstack";
};

export type About = {
  paragraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  services: Service[];
};

export type SkillIcon =
  | "html"
  | "css"
  | "tailwind"
  | "react"
  | "typescript"
  | "javascript"
  | "nodejs"
  | "express"
  | "github"
  | "mongodb"
  | "nextjs"
  | "figma"
  | "postgresql"
  | "git";

export type Skill = {
  name: string;
  icon: SkillIcon;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  repoUrl?: string;
  slug: string;
  details: ProjectDetails;
};

export type ProjectDetails = {
  overview: string;
  role: string;
  features: string[];
  challenges: { problem: string; solution: string }[];
  lessons: string[];
};

export type ApproachPoint = {
  title: string;
  description: string;
};

export type Approach = {
  intro: string;
  points: ApproachPoint[];
};
