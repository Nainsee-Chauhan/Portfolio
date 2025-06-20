import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  movix,
  convertor,
  task,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Movix",
    description:
      "It is an E-commerce platform using MERN stack, integrating MongoDB for database management. The site offers an immersive shopping experience with tailored features for modern online retail.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Rest API",
        color: "orange-text-gradient",
      },
    ],
    image: "src/assets/movix.png",
    source_code_link: "https://github.com/Nainsee-Chauhan/Movix",
  },
  {
    name: "TimeDistance Convertor",
    description:
      "This application is designed to assist you in calculating travel times based on distance, and vice versa.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tainwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: "src/assets/convertor.png",
    source_code_link: "https://github.com/Nainsee-Chauhan/time_distance_convertor",
  },
  {
    name: "Task Manager",
    description:
      " The Task Manager is a web application designed to help users efficiently organize and manage their tasks. It offers a user-friendly interface that allows users to create, edit, view, and delete tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/task.png",
    source_code_link: "https://github.com/Nainsee-Chauhan/TaskManager",
  },
];

export { services, technologies, projects };
