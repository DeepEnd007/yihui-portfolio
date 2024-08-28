"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a front-end developer with over 3 years of experience, I have led or participated in numerous projects in E-commerce area.",
  items: [
    {
      company: "Hangzhou Baishe E-Commerce Ltd.",
      position: "Co-Founder",
      duration: "2020 – 2022",
    },
    {
      company: "E-commerce Startup",
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
    "With a strong foundation in AI algorithms, machine learning, and deep learning, I have honed my skills in data modeling, predictive analysis, and web development. My recent work includes building a sentiment-enhanced hybrid model for cryptocurrency price prediction, achieving superior accuracy, and developing a melanoma detection app using React Native. I am proficient in tools like Python (PyTorch, NumPy, Pandas), SQL, ETL, and data warehousing, which have allowed me to tackle complex data challenges effectively.",
  items: [
    {
      institution: "Auckland University of Technology.",
      degree: "Master of Computer and Information Sciences",
      duration: "2023 – 2024",
    },
    {
      institution: "Zhejiang Gongshang University",
      degree: "Bachelor of E-Commerce & Bachelor of Japanese ",
      duration: "2011 – 2015",
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
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
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

// about me
const about = {
  title: "About me",
  description:
    "An INTJ-T, survivor of a typical East Asian family environment, adapted to high-pressure environments and kitchens. good at tea ceremony and staying up late, milk tea terminator, memes collector.",
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
      fieldName: "Email",
      fieldValue: "huyihui233@outlook.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "China",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Japanese",
    },
    {
      fieldName: "GitHub",
      fieldValue: "https://github.com/DeepEnd007",
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
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="test-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize bg-white text-[#232327] p-2 rounded-lg font-bold">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
