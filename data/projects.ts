export type Category = "Professional" | "AI" | "Research";

export type Project = {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  categories: Category[];
  type: string;
  year: string;
  stack: string[];
  description: string;
  detail: string;
  proprietary?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "sportseams",
    title: "SportSeams Internal Analytics Platform",
    shortTitle: "SportSeams",
    categories: ["Professional"],
    type: "Professional Work",
    year: "2023–2024",
    stack: ["React", "Vue.js", "Sports Analytics"],
    description:
      "Internal frontend tooling for processing sports video data and managing player information.",
    detail:
      "Built interfaces that helped employees process video data, track player information, and work with sports analytics workflows.",
    proprietary: true,
  },
  {
    id: 2,
    slug: "cheatsheet",
    title: "Cheatsheet Sports App",
    shortTitle: "Cheatsheet",
    categories: ["Professional"],
    type: "Professional Work",
    year: "2023–2024",
    stack: ["Kotlin", "Android Studio", "APIs"],
    description:
      "Mobile application for athlete statistics, predictions, and user preferences.",
    detail:
      "Worked on the Android application interface, settings and preferences, and integration of sports data from backend services.",
    proprietary: true,
  },
  {
    id: 3,
    slug: "gemini-reading-glasses",
    title: "Gemini-Assisted Reading Glasses",
    shortTitle: "Gemini Reading Glasses",
    categories: ["AI"],
    type: "Personal Project",
    year: "2026",
    stack: ["Python", "Gemini", "AI"],
    description:
      "Exploring AI-assisted reading through computer vision and language models.",
    detail:
      "An experimental project investigating how multimodal AI could assist users with understanding and interacting with text in their environment.",
  },
  {
    id: 4,
    slug: "brain-mri-qwen",
    title: "Brain MRI Classification with Qwen 2.5",
    shortTitle: "Brain MRI × Qwen",
    categories: ["AI", "Research"],
    type: "AI Research",
    year: "2025",
    stack: ["Python", "Qwen2.5", "VLM", "Kaggle"],
    description:
      "Experimenting with a vision-language model for brain MRI image classification.",
    detail:
      "Used Qwen2.5-3B VLM with a brain MRI image dataset to explore multimodal classification workflows in a research environment.",
  },
  {
    id: 5,
    slug: "sonic-booms",
    title: "Sonic Booms Research",
    shortTitle: "Sonic Booms Research",
    categories: ["Research"],
    type: "Research Project",
    year: "2025",
    stack: ["Python", "Data Analysis", "Research"],
    description:
      "Python-based research and analysis exploring sonic boom data.",
    detail:
      "A research-oriented project using Python to investigate, organize, and analyze data related to sonic booms.",
  },
];