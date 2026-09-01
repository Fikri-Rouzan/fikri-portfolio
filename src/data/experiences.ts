export type ExperienceType = "Internship";

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: ExperienceType;
  description: string;
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Junior Cybersecurity Engineer",
    company: "VINIX7",
    period: "Feb 2025 - May 2025",
    type: "Internship",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: [
      "Network Security",
      "Digital Forensics",
      "Metasploit",
      "Wireshark",
      "Linux",
    ],
  },
  {
    id: 2,
    role: "Junior Data Scientist",
    company: "iLC Learning Center",
    period: "Feb 2025 - Jun 2025",
    type: "Internship",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: [
      "Data Analysis",
      "Data Mining",
      "Data Visualization",
      "Python",
      "Tableau",
      "Power BI",
      "Data Studio",
    ],
  },
  {
    id: 3,
    role: "Data Scientist Cohort",
    company: "DBS Foundation",
    period: "Feb 2026 - Jul 2026",
    type: "Internship",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: [
      "Data Analysis",
      "Data Mining",
      "Data Visualization",
      "Python",
      "Streamlit",
    ],
  },
];
