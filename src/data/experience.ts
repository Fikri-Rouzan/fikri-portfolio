export type ExperienceType = "Internship";

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: ExperienceType;
  description: string;
  skills: string[];
  certificateSlug?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Junior Cybersecurity Engineer",
    company: "VINIX7",
    period: "Feb 2025 - May 2025",
    type: "Internship",
    description:
      "Executed comprehensive Vulnerability Assessment and Penetration Testing (VAPT) using tools like Nessus and Metasploit, while analyzing network traffic with Wireshark, configuring Wazuh SIEM for real-time threat monitoring, and assisting digital forensic investigations using Autopsy and FTK Imager.",
    skills: [
      "Network Security",
      "Digital Forensics",
      "Metasploit",
      "Wireshark",
      "Linux",
    ],
    certificateSlug: "junior-cybersecurity-engineer",
  },
  {
    id: 2,
    role: "Junior Data Scientist",
    company: "iLC Learning Center",
    period: "Feb 2025 - Jun 2025",
    type: "Internship",
    description:
      "Managed structured data collection workflows and exploratory data analysis using Python, designing interactive operational dashboards in Tableau and Data Studio while developing classification and clustering machine learning models through Orange Data Mining.",
    skills: [
      "Data Analysis",
      "Data Mining",
      "Data Visualization",
      "Python",
      "Tableau",
      "Power BI",
      "Data Studio",
    ],
    certificateSlug: "junior-data-scientist",
  },
  {
    id: 3,
    role: "Data Scientist Cohort",
    company: "DBS Foundation",
    period: "Feb 2026 - Jul 2026",
    type: "Internship",
    description:
      "Conducted end-to-end exploratory data analysis, cleaning, and preprocessing on complex datasets using Python and spreadsheet tools, while collaborating with a multidisciplinary team to deliver structured analytical reports, interactive visualizations, and a real-world capstone project.",
    skills: [
      "Data Analysis",
      "Data Mining",
      "Data Visualization",
      "Python",
      "Streamlit",
    ],
    certificateSlug: "data-scientist-cohort",
  },
];
