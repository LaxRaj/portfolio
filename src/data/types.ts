export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  availability: string;
  shortBio: string;
  bio: string[];
  socials: SocialLink[];
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  featured: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  stack: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ResumeData {
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
  leadership: string[];
  pdfUrl: string;
}
