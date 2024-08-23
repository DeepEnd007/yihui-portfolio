"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaPython,
} from "react-icons/fa";

import { siTailwindcss, siNextdojs } from "react-icons/si";
// about data

const about = {
  title: "About me",
  description:
    "More than 3 years of experience in front-end projects. Focused on creating clean, robust code with exceptional security.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yihui Hu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+64)20 4031 2744",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "China",
    },
    {
      fieldName: "Email",
      fieldValue: "huyihui233@outlook.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Japanese, French",
    },
    {
      fieldName: "GitHub",
      fieldValue: "https://github.com/DeepEnd007",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Boasting rich e-commerce experience, including 2 years of founding a cross-border e-commerce startup.",
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
