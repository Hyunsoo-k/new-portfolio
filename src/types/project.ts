export type Project = {
  name: string;
  thumbnailUrl: string;
  isSolo: boolean;
  summary: string;
  details: string[];
  githubUrl: string;
  deployUrl?: string;
  skills: string[];
  skillIconUrls: string[];
};