// Here we store all contents of our application
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  bootstrap,
  expressjs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  jp,
  letsgrowmore,
  shopify,
  notes,
  todo,
  imdb,
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
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
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
    name: "Express-js",
    icon: expressjs,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Software Engineering Virtual Experience",
    company_name: "JPMorgan Chase & Co. (Internship)",
    icon: jp,
    iconBg: "#383E56",
    date: "August 2022 - September 2022",
    points: [
      "Completed practical tasks on -",
      "Interface with a stock price data feed.",
      "Use JPMorgan Chase frameworks and tools.",
      "Display data visually for traders",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LetsGrowMore · Internship",
    icon: letsgrowmore,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Oct 2022",
    points: [
      "Completed the tasks provided and Enhanced my skills in HTML,CSS,JAVASCRIPT and REACTJS",
      "Basic Calculator.",
      "To do App",
      "Registration Form"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Notes App",
    description:
      "Web-application that allows users to create, read, update and delete notes title and notes body. It also uses LocalStorage to store the data locally. Tech used in this project is html, css and vanilla javascript",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: notes,
    source_code_link: "https://github.com/Hrsh7/Notes-App",
    site_link: "https://notes-app-hrsh.netlify.app/index.html"
  },
  {
    name: "To-do app",
    description:
      "Web-application that allows users to create, read, update and delete notes title and notes body. I also uses LocalStorage to store the data locally. Tech used in this project is html, css and vanilla javascript",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Hrsh7/To-do-app",
    site_link: "https://hrsh-todo-app.netlify.app/"
  },
  {
    name: "imdb-clone",
    description:
      "I create a clone of the popular movie database website IMDb using React JS. I building a dynamic user interface, integrate it with a movie database API, and add features such as a search filter and sort.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: imdb,
    source_code_link: "https://github.com/Hrsh7/Imdb-Clone",
    site_link: "https://hrsh-imdb-clone.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };