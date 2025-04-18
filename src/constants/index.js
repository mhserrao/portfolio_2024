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
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  healthhub,
  rogers,
  rbc,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'API Development & Design',
    icon: api,
  },
  {
    title: 'Process Documentation',
    icon: documentation,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'C#',
    icon: c_sharp,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'MongoDB',
    icon: mongo,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Senior Software Developer',
    company_name: 'Royal Bank of Canada',
    icon: rbc,
    iconBg: '#292929',
    date: 'Jan 2023 - Present',
  },
  {
    title: 'Software Developer @ Amplify',
    company_name: 'Royal Bank of Canada',
    icon: rbc,
    iconBg: '#292929',
    date: 'May 2022 - Aug 2022',
  },
  {
    title: 'Business & Data Analyst',
    company_name: 'Rogers Communication',
    icon: rogers,
    iconBg: '#292929',
    date: 'Sep 2021 - Dec 2021',
  },
  {
    title: 'Infrastructure & Security Analyst',
    company_name: 'HealthHub Patient Engagement Solutions',
    icon: healthhub,
    iconBg: '#292929',
    date: 'Jan 2021 - Apr 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'MakeMe!',
    description:
      'A mobile app that allows users to choose a make-up filter and view the tutorial on how to achieve that look.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: makeme,
    repo: 'https://bitbucket.org/mhserrao/capstone-flutter/src/master/',
    demo: 'https://www.youtube.com/watch?v=syverg0CXnc&ab_channel=FlutterArt',
  },
  {
    id: 'project-10',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
