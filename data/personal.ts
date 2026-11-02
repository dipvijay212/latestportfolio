export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  shortDescription: string;
  experience: string;
  education: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Dipvijay",
  role: "Full Stack Developer",

  headline: "I Build Digital Products That Solve Real Business Problems.",

  shortDescription:
    "I'm a Full Stack Developer focused on building modern websites, web applications, mobile apps, and custom business systems. I turn ideas and business requirements into clean, responsive, and practical digital products.",

  experience: "1+ Year",

  education: "Bachelor of Computer Applications (BCA)",

  availability: "Available for Freelance Projects",

  location: "India",

  email: "YOUR_EMAIL",
  phone: "YOUR_PHONE",
  whatsapp: "YOUR_WHATSAPP_NUMBER",

  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",

  resumeUrl: "/resume.pdf",
};

// Safe fallback helpers so UI links remain functional if placeholders are present
export const getSafeUrl = {
  email: (val = personalInfo.email) =>
    !val || val.includes("YOUR_") ? "mailto:hello@dipvijay.dev" : `mailto:${val}`,
  whatsapp: (val = personalInfo.whatsapp) => {
    const cleaned = (val || "").replace(/[^0-9]/g, "");
    return cleaned.length >= 7 ? `https://wa.me/${cleaned}` : "https://wa.me/";
  },
  github: (val = personalInfo.github) =>
    !val || val.includes("YOUR_") ? "https://github.com/dipvijay212" : val,
  linkedin: (val = personalInfo.linkedin) =>
    !val || val.includes("YOUR_") ? "https://linkedin.com/in/dipvijay" : val,
};

// Backward-compatible adapter for all existing components
export const personalData = {
  name: personalInfo.name,
  title: personalInfo.role,
  role: personalInfo.role,
  headline: personalInfo.headline,
  tagline: personalInfo.shortDescription,
  shortDescription: personalInfo.shortDescription,
  bio: personalInfo.shortDescription,
  email: personalInfo.email,
  phone: personalInfo.phone,
  whatsapp: personalInfo.whatsapp,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  availabilityStatus: personalInfo.availability,
  availability: personalInfo.availability,
  location: personalInfo.location,
  experienceYears: personalInfo.experience,
  education: personalInfo.education,
  resumeUrl: personalInfo.resumeUrl,
  scopeOfWork: "Frontend, Backend & Mobile",
  typicalResponseTime: "Within 24 hours",
  bookingUrl: "#contact",
};
