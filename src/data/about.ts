import { ElementType } from "react";
import {
  FileText,
  Layout,
  Server,
  Smartphone,
  Brain,
  Layers,
  Wrench,
  Cloudy,
  Workflow,
} from "lucide-react";
import {
  Github,
  Html5,
  CssNew,
  Javascript,
  Typescript,
  Bootstrap,
  TailwindCss,
  React,
  Nextdotjs,
  Svelte,
  Vue,
  Alpinedotjs,
  Php,
  Nodejs,
  Laravel,
  Nestjs,
  Hono,
  Express,
  Kotlin,
  Dart,
  JetpackCompose,
  Flutter,
  Python,
  Jupyter,
  Streamlit,
  Numpy,
  Scipy,
  Pandas,
  Plotly,
  Matplotlib,
  Seaborn,
  Tensorflow,
  Pytorch,
  Opencv,
  ScikitLearn,
  Mysql,
  Postgresql,
  Prisma,
  Neon,
  Supabase,
  Firebase,
  Git,
  Docker,
  ColabGoogle,
  GcpDataStudio,
  Tableau,
  Postman,
  Figma,
  Laragon,
  Aws,
  HuggingFace,
  Railway,
  Cloudflare,
  Vercel,
  Netlify,
} from "@thesvg/react";
import { LinkedinMono } from "@/components/icons/linkedin-mono";

export interface AboutStat {
  label: string;
  value: string;
}

export interface AboutActionLink {
  label: string;
  href: string;
  icon: ElementType;
  iconVariant?: "mono";
  isExternal?: boolean;
}

export interface EducationItem {
  id: number;
  university: string;
  major: string;
  period: string;
  gpa: string;
  description: string;
}

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  slug: string;
  skills: string[];
}

export interface PublicationItem {
  id: number;
  title: string;
  publisher: string;
  dateAdded: string;
  abstract: string;
  skills: string[];
  doi: string;
}

export interface TechCategory {
  category: string;
  icon?: ElementType;
  skills: TechSkill[];
}

export interface TechSkill {
  name: string;
  icon?: ElementType;
  variant?: "mono" | "light";
}

export const ABOUT_BIO: string[] = [
  "Final-year Informatics Engineering student at Syarif Hidayatullah State Islamic University Jakarta with hands-on experience in data science and full-stack web development. Proficient in Python, SQL, React, and Laravel, focusing on building practical, scalable, and data-driven applications.",
  "Throughout my academic journey and hands-on projects, I have developed practical expertise across modern frontend frameworks, backend API architectures, and machine learning pipelines. I continuously adapt to emerging tech ecosystems, maintaining a strong focus on writing clean and maintainable code.",
];

export const ABOUT_STATS: AboutStat[] = [
  {
    label: "Started in",
    value: "2023",
  },
  {
    label: "GPA",
    value: "3.77 / 4.00",
  },
];

export const ABOUT_ACTIONS: AboutActionLink[] = [
  {
    label: "View CV",
    href: "/preview/cv-muhammad-fikri-rouzan-ash-shidik",
    icon: FileText,
    isExternal: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fikrirouzan",
    icon: LinkedinMono,
    isExternal: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Fikri-Rouzan",
    icon: Github,
    iconVariant: "mono",
    isExternal: true,
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    university: "Syarif Hidayatullah State Islamic University Jakarta",
    major: "Informatics Engineering",
    period: "Sep 2023 - Present",
    gpa: "3.77 / 4.00",
    description:
      "Final-year Informatics Engineering student with a 3.77 / 4.00 GPA, demonstrating a balance between research accomplishments, specialized technical training, and leadership. Published a deep learning research paper on rice quality classification using the MobileNetV2 architecture at CITSM 2026. Beyond academic achievements, served in management at Dapur Seni, explored UI/UX, web development, mobile, and AI/ML within Google Developer Group on Campus (GDGoC), and completed the Digital Talent Scholarship x Oracle Academy track in Java Fundamentals and Programming.",
  },
];

export const CERTIFICATION_DATA: CertificationItem[] = [
  {
    id: 1,
    title: "Basics of Network Layer Protocols Micro Certification",
    issuer: "Huawei",
    issueDate: "Issued Dec 2024 · Expires Dec 2026",
    slug: "basics-of-network-layer-protocols-micro-certification",
    skills: ["Networking", "Network Layer", "IP Routing", "Protocols"],
  },
  {
    id: 2,
    title: "Alibaba Cloud Certified Associate System Operator",
    issuer: "Alibaba Cloud",
    issueDate: "Issued Apr 2025 · Expires Apr 2027",
    slug: "alibaba-cloud-certified-associate-system-operator",
    skills: ["Linux", "Cloud Computing", "System Operations", "Infrastructure"],
  },
];

export const PUBLICATION_DATA: PublicationItem[] = [
  {
    id: 1,
    title:
      "Rice Quality Classification Based on Digital Images Using MobileNetV2: A Comparative Evaluation for Low-Cost Deployment",
    publisher: "IEEE",
    dateAdded: "17 November 2026",
    abstract:
      "Manual visual inspection of milled rice is subjective and inefficient. This study investigates a practical smartphone-based inspection pipeline for four physical quality classes: Whole, Broken, Chalky, and Discolored. A balanced primary dataset of 1,000 single-kernel images was acquired in a low-cost mini lightbox and processed using Gaussian filtering, HSV/Otsu segmentation, convex-hull masking, square padding, and normalization. To examine both predictive performance and deployment feasibility, MobileNetV2, ResNet50, and EfficientNetB0 were trained under the same two-phase ImageNet transfer-learning protocol and assessed using stratified five-fold cross-validation. MobileNetV2 achieved 90.0% mean accuracy (SD 2.9%), compared with 93.7% (SD 2.2%) for ResNet50 and 92.8% (SD 2.7%) for EfficientNetB0; the differences were not statistically significant (Friedman p = 0.2415). MobileNetV2 required only 2.59 M parameters, a 10.45 MB model file, and 168.78 ms/image inference latency, substantially lower than ResNet50. The model was integrated into a Streamlit prototype, Ricelytics, for multi-kernel analysis. The contribution is therefore an evidence-based efficiency-oriented baseline for low-cost rice-quality inspection, rather than a claim of superior accuracy.",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "Python",
      "Jupyter Notebook",
      "TensorFlow",
      "Streamlit",
      "OpenCV",
    ],
    doi: "10.1109/CITSM71915.2026.11769290",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML", icon: Html5 },
      { name: "CSS", icon: CssNew },
      { name: "JavaScript", icon: Javascript },
      { name: "TypeScript", icon: Typescript },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "Tailwind CSS", icon: TailwindCss },
      { name: "React", icon: React },
      { name: "Next.js", icon: Nextdotjs },
      { name: "Svelte", icon: Svelte },
      { name: "Vue.js", icon: Vue },
      { name: "Alpine.js", icon: Alpinedotjs },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "PHP", icon: Php, variant: "light" },
      { name: "Node.js", icon: Nodejs },
      { name: "Laravel", icon: Laravel },
      { name: "NestJS", icon: Nestjs },
      { name: "Hono", icon: Hono },
      { name: "Express.js", icon: Express, variant: "mono" },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Kotlin", icon: Kotlin },
      { name: "Dart", icon: Dart },
      { name: "Jetpack Compose", icon: JetpackCompose },
      { name: "Flutter", icon: Flutter },
    ],
  },
  {
    category: "Data Science & AI",
    icon: Brain,
    skills: [
      { name: "Python", icon: Python },
      { name: "Jupyter Notebook", icon: Jupyter },
      { name: "Streamlit", icon: Streamlit },
      { name: "NumPy", icon: Numpy, variant: "mono" },
      { name: "SciPy", icon: Scipy },
      { name: "pandas", icon: Pandas, variant: "mono" },
      { name: "plotly", icon: Plotly },
      { name: "matplotlib", icon: Matplotlib },
      { name: "seaborn", icon: Seaborn },
      { name: "TensorFlow", icon: Tensorflow, variant: "mono" },
      { name: "PyTorch", icon: Pytorch },
      { name: "OpenCV", icon: Opencv },
      { name: "scikit-learn", icon: ScikitLearn },
    ],
  },
  {
    category: "Database",
    icon: Layers,
    skills: [
      { name: "MySQL", icon: Mysql, variant: "light" },
      { name: "PostgreSQL", icon: Postgresql },
      { name: "Prisma", icon: Prisma, variant: "mono" },
      { name: "Neon", icon: Neon },
      { name: "supabase", icon: Supabase },
      { name: "Firebase", icon: Firebase },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: Git },
      { name: "docker", icon: Docker },
      { name: "Google Colab", icon: ColabGoogle },
      { name: "Data Studio", icon: GcpDataStudio },
      { name: "Tableau", icon: Tableau },
      { name: "Postman", icon: Postman },
      { name: "Figma", icon: Figma },
      { name: "Laragon", icon: Laragon },
    ],
  },
  {
    category: "Cloud & Hosting",
    icon: Cloudy,
    skills: [
      { name: "AWS", icon: Aws },
      { name: "Hugging Face", icon: HuggingFace },
      { name: "Railway", icon: Railway, variant: "mono" },
      { name: "Cloudflare", icon: Cloudflare },
      { name: "Vercel", icon: Vercel, variant: "mono" },
      { name: "Netlify", icon: Netlify },
    ],
  },
  {
    category: "Methodology & Workflow",
    icon: Workflow,
    skills: [{ name: "Waterfall" }, { name: "CRISP-DM" }, { name: "Kanban" }],
  },
];
