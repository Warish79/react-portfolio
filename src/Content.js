// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import mysql from "./assets/images/Skills/mysql.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer & designer",
    firstName: "WARISH",
    LastName: "KHAN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development & web designing",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "MY SKILLS",
    
    skills_content: [
      {
        name: "React js",
        para: "React is an excellent library for development of single-page applications using Javascript",
        logo: reactjs,
      },
      
      {
        name: "Node js",
        para: "Node. js is a popular programming environment that can be used for building high-scale applications that need to support multiple concurrent requests.",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: " Image editing software, includes mind-blowing AI-powered neural filters, automatic sky replacement, and unmatched selection tools,",
        logo: ps,
      },
      {
        name: "Figma",
        para: "Figma is a design platform for teams who build products together. Born on the Web, Figma helps the entire product team create, test, and ship better designs, faster.",
        logo: figma,
      },
      {
        name: "MySQL",
        para: " MySQL is a fast, reliable, general-purpose relational database management system.",
        logo: mysql,
      },
      {
        name: "Python",
        para: "Python is commonly used for developing websites and software, task automation, data analysis, and data visualization.",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
  
    service_content: [
      {
        title: "Web Development",
        para: "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "create user-friendly interfaces that enable users to understand how to use complex technical products",
        logo: services_logo2,
      },
      {
        title: "Digital Marketing",
        para: " It is the promotion of brands to connect with potential customers using the internet and other forms of digital communication",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "MY WORK",
    
    image: person_project,
    project_content: [
      {
        title: "Hotel Website",
        image: project1,
      },
      {
        title: "Learning App",
        image: project2,
      },
      {
        title: "Creative content",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "MY CLIENT REVIEWS",
    
    testimonials_content: [
      {
        review:
          "“The designers and developers are true professionals. They understand your vision and make it a reality. The layouts and designs are fantastic”",
        img: avatar1,
        name: "Aditya ",
      },
      {
        review:
          "“Media Waypoint have built and developed our social media platforms from scratch and we now have excellent brand awareness online”",
        img: avatar2,
        name: "Stevin Clark",
      },
      {
        review:
          "“Examine your potential designer's speech to see how good they are at explaining their tasks or technical specifications”",
        img: avatar3,
        name: "Jonathon",
      },
      {
        review:
          "“Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "A professional Web Developer is  who is responsible for the design and construction of websites and maintainence of your code",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    
    social_media: [
      {
        text: "khanwarish79@gmail.com",
        icon: GrMail,
        link: "mailto:khanwarish79@gmail.com",
      },
      {
        text: "+91 9967153131",
        icon: MdCall,
        link: "https://wa.me/9967153131",
      },
      {
        text: "Warish Khan",
        icon: BsInstagram,
        link: "https://www.instagram.com/khanwarish_/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
