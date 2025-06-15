import {
  frontend,
  backend,
  api,
  documentation,
  java,
  python,
  c_sharp,
  swift,
  javascript,
  typescript,
  angular,
  reactjs,
  nodejs,
  jenkins,
  docker,
  postgresql,
  mongo,
  git,
  makeme,
  breadcrumb,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  healthhub,
  rogers,
  rbc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "API Development & Design",
    icon: api,
  },
  {
    title: "Process Documentation",
    icon: documentation,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: c_sharp,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "Royal Bank of Canada",
    icon: rbc,
    iconBg: "#292929",
    date: "Sept 2024 - Present",
  },
  {
    title: "Senior Software Developer",
    company_name: "Royal Bank of Canada",
    icon: rbc,
    iconBg: "#292929",
    date: "Jan 2023 - Sept 2024",
  },
  {
    title: "Software Developer @ Amplify",
    company_name: "Royal Bank of Canada",
    icon: rbc,
    iconBg: "#292929",
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Business & Data Analyst",
    company_name: "Rogers Communication",
    icon: rogers,
    iconBg: "#292929",
    date: "Sep 2021 - Dec 2021",
  },
  {
    title: "Infrastructure & Security Analyst",
    company_name: "HealthHub Patient Engagement Solutions",
    icon: healthhub,
    iconBg: "#292929",
    date: "Jan 2021 - Apr 2021",
  },
];

const projects = [
  {
    id: "project-1",
    name: "MakeMe!",
    description:
      "A mobile app that allows users to choose a make-up filter and view the tutorial on how to achieve that look.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: makeme,
    repo: "https://bitbucket.org/mhserrao/capstone-flutter/src/master/",
    demo: "https://www.youtube.com/watch?v=syverg0CXnc&ab_channel=FlutterArt",
  },
  {
    id: "project-2",
    name: "Breadcrumb",
    description:
      "A personalized travel map that lets users log and visualize the countries they've visited. Currently in progress.",
    tags: [],
    image: breadcrumb,
    repo: "https://github.com/mhserrao/breadcrumb-frontend",
    demo: "https://breadcrumb-mhserrao.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
