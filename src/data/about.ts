import { ElementType } from "react";
import {
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
  Html5,
  CssNew,
  Javascript,
  Typescript,
  Bootstrap,
  TailwindCss,
  React,
  Nextdotjs,
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
  Railway,
  Vercel,
  Netlify,
} from "@thesvg/react";

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

export interface TechSkill {
  name: string;
  icon?: ElementType;
  variant?: "mono" | "light";
}

export interface TechCategory {
  category: string;
  icon?: ElementType;
  skills: TechSkill[];
}

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
    category: "Cloud",
    icon: Cloudy,
    skills: [
      { name: "AWS", icon: Aws },
      { name: "Railway", icon: Railway, variant: "mono" },
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
