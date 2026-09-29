export type ProjectCategory = "Web" | "Web3" | "Mobile" | "AI" | "Data Science";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  year: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECT_CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Web3",
  "Mobile",
  "AI",
  "Data Science",
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Patriot",
    description:
      "A digital educational platform developed to showcase the historical struggle of Indonesian national heroes from the colonial era through the post-independence period.",
    category: "Web",
    year: "2023",
    image: "/assets/projects/web/patriot.png",
    techStack: ["JavaScript", "Bootstrap", "React"],
    githubUrl: "https://github.com/Fikri-Rouzan/patriot",
    liveUrl: "https://patriot-website.netlify.app",
  },
  {
    id: 2,
    title: "SainTalk",
    description:
      "An interactive campus reporting platform designed to streamline complaint handling for students, faculty, and staff, track resolution progress, and enhance facility and service management.",
    category: "Web",
    year: "2024",
    image: "/assets/projects/web/saintalk.png",
    techStack: ["PHP", "Laravel", "Bootstrap", "jQuery", "MySQL"],
    githubUrl: "https://github.com/Fikri-Rouzan/saintalk",
  },
  {
    id: 3,
    title: "Learnix",
    description:
      "A workshop discovery and event booking management platform featuring category browsing, participant registration, instructor tracking, and transaction management.",
    category: "Web",
    year: "2024",
    image: "/assets/projects/web/learnix.png",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "filament", "MySQL"],
    githubUrl: "https://github.com/Fikri-Rouzan/learnix",
  },
  {
    id: 4,
    title: "My Office",
    description:
      "An interactive web application designed for browsing, exploring, and booking flexible office spaces across multiple cities.",
    category: "Web",
    year: "2025",
    image: "/assets/projects/web/my-office.png",
    techStack: ["Laravel", "filament", "Tailwind CSS", "React", "MySQL"],
    githubUrl: "https://github.com/Fikri-Rouzan/my-office",
  },
  {
    id: 5,
    title: "StayKos",
    description:
      "A comprehensive boarding house booking and rental property management platform enabling seamless room discovery, location-based searches, and automated transaction handling.",
    category: "Web",
    year: "2025",
    image: "/assets/projects/web/staykos.png",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "filament", "MySQL"],
    githubUrl: "https://github.com/Fikri-Rouzan/staykos",
  },
  {
    id: 6,
    title: "PowerAnalytics",
    description:
      "A predictive machine learning model developed to estimate building energy consumption based on structural characteristics, occupant activity, and ambient temperature parameters.",
    category: "AI",
    year: "2025",
    image: "/assets/projects/ai/poweranalytics.png",
    techStack: ["Python", "Jupyter Notebook", "Streamlit", "scikit-learn"],
    githubUrl: "https://github.com/Fikri-Rouzan/poweranalytics",
    liveUrl: "https://poweranalytics.streamlit.app",
  },
  {
    id: 7,
    title: "Al Mukhlisin",
    description:
      "A web-based mosque management application built for Masjid Jami Al Mukhlisin to publish event information for congregants while managing committee, speaker, and resident records.",
    category: "Web",
    year: "2025",
    image: "/assets/projects/web/al-mukhlisin.png",
    techStack: [
      "JavaScript",
      "Vue.js",
      "Tailwind CSS",
      "PostgreSQL",
      "supabase",
    ],
    githubUrl: "https://github.com/Fikri-Rouzan/al-mukhlisin",
    liveUrl: "https://al-mukhlisin.netlify.app",
  },
  {
    id: 8,
    title: "StuProf",
    description:
      "A student profile management system featuring role-based dashboards for students and administrators, academic record tracking, and audit history logs.",
    category: "Web",
    year: "2025",
    image: "/assets/projects/web/stuprof.png",
    techStack: [
      "TypeScript",
      "Hono",
      "Tailwind CSS",
      "Prisma",
      "React",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/Fikri-Rouzan/stuprof",
  },
  // {
  //   id: 9,
  //   title: "My Management",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   category: "Mobile",
  //   year: "2025",
  //   image: "/assets/projects/mobile/my-management.png",
  //   techStack: ["Dart", "PHP", "Flutter", "MySQL"],
  //   githubUrl: "https://github.com/Fikri-Rouzan/my_management",
  // },
  {
    id: 10,
    title: "Career Flow",
    description:
      "A streamlined job portal and candidate tracking platform designed to simplify career opportunity management and recruitment workflows.",
    category: "Web",
    year: "2025",
    image: "/assets/projects/web/career-flow.png",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "jQuery", "MySQL"],
    githubUrl: "https://github.com/Fikri-Rouzan/career-flow",
  },
  {
    id: 11,
    title: "HydroCheck",
    description:
      "A machine learning classification model developed to determine water potability based on physical and chemical quality parameters.",
    category: "AI",
    year: "2025",
    image: "/assets/projects/ai/hydrocheck.png",
    techStack: ["Python", "Jupyter Notebook", "Streamlit", "scikit-learn"],
    githubUrl: "https://github.com/Fikri-Rouzan/hydrocheck",
    liveUrl: "https://hydrocheck.streamlit.app",
  },
  {
    id: 12,
    title: "Bike Sharing Analysis",
    description:
      "A data analytics dashboard created to analyze temporal trends, weather impact, and usage patterns within urban bike-sharing systems.",
    category: "Data Science",
    year: "2026",
    image: "/assets/projects/data-science/bike-sharing.png",
    techStack: ["Python", "Jupyter Notebook", "Streamlit", "plotly"],
    githubUrl: "https://github.com/Fikri-Rouzan/bike-sharing-analysis",
    liveUrl: "https://bike-sharing-analysis-web.streamlit.app",
  },
  {
    id: 13,
    title: "Sharia Economic Justice Review",
    description:
      "A custom user interface and frontend enhancement for the Sharia Economic Justice Review (SEJR) journal website, built on Open Journal Systems (OJS).",
    category: "Web",
    year: "2026",
    image: "/assets/projects/web/sejr.png",
    techStack: ["HTML", "CSS", "OJS"],
    liveUrl: "https://ejournalhub.org/index.php/sejr",
  },
  {
    id: 14,
    title: "BurnAway",
    description:
      "An interactive analytics dashboard designed to map and analyze physical factors and work patterns triggering software developer burnout.",
    category: "Data Science",
    year: "2026",
    image: "/assets/projects/data-science/burnaway.png",
    techStack: ["Python", "Jupyter Notebook", "Streamlit", "plotly"],
    githubUrl: "https://github.com/Fikri-Rouzan/burnaway",
    liveUrl: "https://burnaway.streamlit.app",
  },
  {
    id: 15,
    title: "EduStress",
    description:
      "A machine learning classification model built to assess student stress levels based on academic workload, health indicators, and emotional parameters.",
    category: "AI",
    year: "2026",
    image: "/assets/projects/ai/edustress.png",
    techStack: ["Python", "Jupyter Notebook", "Streamlit", "scikit-learn"],
    githubUrl: "https://github.com/Fikri-Rouzan/edustress",
    liveUrl: "https://edustress.streamlit.app",
  },
  // {
  //   id: 16,
  //   title: "AstroForge",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   category: "Web3",
  //   year: "2026",
  //   image: "/assets/projects/web3/astroforge.png",
  //   techStack: [
  //     "Hardhat",
  //     "Hono",
  //     "Tailwind CSS",
  //     "Ethers",
  //     "Prisma",
  //     "React",
  //     "PostgreSQL",
  //   ],
  //   githubUrl: "https://github.com/Fikri-Rouzan/astroforge",
  // },
  {
    id: 17,
    title: "Ricelytics",
    description:
      "A computer vision application developed to evaluate rice quality from digital images utilizing the MobileNetV2 deep learning architecture.",
    category: "AI",
    year: "2026",
    image: "/assets/projects/ai/ricelytics.png",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "TensorFlow",
      "Streamlit",
      "OpenCV",
    ],
    githubUrl: "https://github.com/Fikri-Rouzan/ricelytics",
    liveUrl: "https://ricelytics.streamlit.app",
  },
  {
    id: 18,
    title: "StudioAI",
    description:
      "An end-to-end generative AI and image analysis platform featuring deep learning pipelines, exploratory data analysis, and an interactive Streamlit dashboard.",
    category: "AI",
    year: "2026",
    image: "/assets/projects/ai/studioai.png",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "PyTorch",
      "Streamlit",
      "Diffusers",
      "Transformers",
    ],
    githubUrl: "https://github.com/Fikri-Rouzan/studioai",
  },
  {
    id: 19,
    title: "Human Resources Analysis",
    description:
      "A human resource analytics project built to analyze employee satisfaction, performance metrics, and retention patterns across organizational teams.",
    category: "Data Science",
    year: "2026",
    image: "/assets/projects/data-science/hr.png",
    techStack: ["Python", "Jupyter Notebook", "scikit-learn", "Data Studio"],
    githubUrl: "https://github.com/Fikri-Rouzan/hr-analysis",
    liveUrl:
      "https://datastudio.google.com/u/0/reporting/516a86d1-dadf-4d39-8ae2-fe69833d44e9/page/MQL5F",
  },
  {
    id: 20,
    title: "Ricelytics MultiNet",
    description:
      "A computer vision system designed to evaluate and classify rice quality by benchmarking Convolutional Neural Network (CNN) architectures, including MobileNetV2, ResNet50, and EfficientNetB0.",
    category: "AI",
    year: "2026",
    image: "/assets/projects/ai/ricelytics-multinet.png",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "TensorFlow",
      "Streamlit",
      "OpenCV",
    ],
    liveUrl: "https://ricelytics-multinet.streamlit.app",
  },
  {
    id: 21,
    title: "Fikri Portfolio",
    description:
      "A personal portfolio website built to showcase my technical projects, professional experience, achievements, and certifications.",
    category: "Web",
    year: "2026",
    image: "/assets/projects/web/fikri-portfolio.png",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/Fikri-Rouzan/fikri-portfolio",
    liveUrl: "https://fikri-rouzan.is-a.dev",
  },
  {
    id: 22,
    title: "EduPulse Analytics",
    description:
      "A machine learning and data analytics project developed to predict student dropout risk and academic success using socio-demographic factors and early-semester performance metrics.",
    category: "Data Science",
    year: "2026",
    image: "/assets/projects/ai/edupulse-analytics.png",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "Streamlit",
      "scikit-learn",
      "Data Studio",
    ],
    githubUrl: "https://github.com/Fikri-Rouzan/edupulse-analytics",
    liveUrl: "https://edupulse-analytics.streamlit.app",
  },
];
