export interface DocumentItem {
  slug: string;
  title: string;
  fileUrl: string;
}

export const DOCUMENTS: Record<string, DocumentItem> = {
  "cv-muhammad-fikri-rouzan-ash-shidik": {
    slug: "cv-muhammad-fikri-rouzan-ash-shidik",
    title: "Curriculum Vitae",
    fileUrl: "/assets/cv/cv-muhammad-fikri-rouzan-ash-shidik.pdf",
  },
  "alibaba-cloud-certified-associate-system-operator": {
    slug: "alibaba-cloud-certified-associate-system-operator",
    title: "Alibaba Cloud Certified Associate System Operator",
    fileUrl:
      "/assets/certificates/alibaba-cloud-certified-associate-system-operator.pdf",
  },
  "basics-of-network-layer-protocols-micro-certification": {
    slug: "basics-of-network-layer-protocols-micro-certification",
    title: "Basics of Network Layer Protocols Micro Certification",
    fileUrl:
      "/assets/certificates/basics-of-network-layer-protocols-micro-certification.pdf",
  },
  "junior-cybersecurity-engineer": {
    slug: "junior-cybersecurity-engineer",
    title: "Junior Cybersecurity Engineer",
    fileUrl:
      "/assets/certificates/experiences/junior-cybersecurity-engineer.pdf",
  },
  "junior-data-scientist": {
    slug: "junior-data-scientist",
    title: "Junior Data Scientist",
    fileUrl: "/assets/certificates/experiences/junior-data-scientist.pdf",
  },
  "data-scientist-cohort": {
    slug: "data-scientist-cohort",
    title: "Data Scientist Cohort",
    fileUrl: "/assets/certificates/experiences/data-scientist-cohort.pdf",
  },
};

export function getDocumentBySlug(
  slug: string,
  customTitle?: string,
  customUrl?: string,
): DocumentItem | null {
  const cleanSlug = slug.replace(/\.pdf$/, "");

  if (DOCUMENTS[cleanSlug]) {
    return DOCUMENTS[cleanSlug];
  }

  // If the document is not found in the predefined list, check if a custom URL is provided
  if (customUrl) {
    const formattedTitle = customTitle
      ? decodeURIComponent(customTitle)
      : cleanSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

    return {
      slug: cleanSlug,
      title: formattedTitle,
      fileUrl: decodeURIComponent(customUrl),
    };
  }

  return null;
}
