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
  items: [
    {
      company: "Hangzhou Baishe E-Commerce Ltd.",
      position: "Co-Founder",
      duration: "2020 – 2022",
    },
    {
      company: "Hangzhou Chaxiangji Network Technology Co., Ltd.",
      position: "Front-End Developer ",
      duration: "2017 – 2019",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Boasting rich e-commerce experience, including 2 years of founding a cross-border e-commerce startup.",
  items: [
    {
      Institution: "Auckland University of Technology.",
      degree: "Master of Computer and Information Sciences",
      duration: "2023 – 2024",
    },
    {
      Institution: "Zhejiang Gongshang University",
      position: "Bachelor of E-Commerce & Bachelor of Japanese ",
      duration: "2011 – Dec 2015",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Proficient in front-end web development, code debugging, and data modeling using tools like React, JavaScript, with expertise in machine learning, deep learning, and agile workflows.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <siTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <siNextdojs />,
      name: "next.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
