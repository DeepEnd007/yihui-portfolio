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
    "As a front-end developer with over two years of experience, I have led or participated in numerous projects.",
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
    "Skilled front-end developer with expertise in React, JavaScript, TypeScript, and HTML/CSS, adept at building responsive, user-centric web applications, with a strong foundation in code debugging, agile workflows, and modern development tools.",
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="test-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
