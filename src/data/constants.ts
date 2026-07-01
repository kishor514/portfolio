// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress", 
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  PHP = "php",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
  id: 1,
  name: "js",
  label: "JavaScript",
  shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
  color: "#f0db4f",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
},

[SkillNames.TS]: {
  id: 2,
  name: "ts",
  label: "TypeScript",
  shortDescription:
    "JavaScript's overachieving cousin who's always flexing 💯🔒",
  color: "#007acc",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
},

[SkillNames.TAILWIND]: {
  id: 8,
  name: "tailwind",
  label: "Tailwind CSS",
  shortDescription:
    "Utility-first CSS framework for rapidly building modern responsive interfaces.",
  color: "#38bdf8",
  icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
},
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using"
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
  id: 6,
  name: "vue",
  label: "Python",
  shortDescription:
    "Versatile programming language for automation, backend development and AI.",
  color: "#3776AB",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
},
  [SkillNames.PHP]: {
    id: 26,
    name: "php",
    label: "PHP",
    shortDescription: "Backend scripting language for dynamic web applications.",
    color: "#777BB4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
 [SkillNames.POSTGRES]: {
  id: 11,
  name: "postgres",
  label: "SQL",
  shortDescription:
    "Database query language used for managing and retrieving data efficiently.",
  color: "#336791",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
},
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
 [SkillNames.PRETTIER]: {
  id: 15,
  name: "prettier",
  label: "Bootstrap",
  shortDescription:
    "Frontend framework for building responsive and mobile-first websites.",
  color: "#7952B3",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
},
  [SkillNames.NPM]: {
    id: 16,
    name: "infinity free",
    label: "Infinity Free",
    shortDescription: "Free web hosting that helps launch websites quickly and easily! 🌐🚀",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
 [SkillNames.FIREBASE]: {
  id: 17,
  name: "firebase",
  label: "PHP",
  shortDescription:
    "Backend scripting language for dynamic web applications.",
  color: "#777BB4",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
},
  [SkillNames.WORDPRESS]: {
  id: 18,
  name: "wordpress",
  label: "XAMPP",
  shortDescription:
    "Local development environment for PHP and MySQL applications.",
  color: "#FB7A24",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
},
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "MUI",
    shortDescription: "React component library used to build modern, responsive, and consistent user interfaces.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "deployment",
    label: "Deployment",
    shortDescription: "Taking applications from local development to the live internet! 🚀🌍",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "JSON",
    shortDescription: "Lightweight data interchange format used for API communication and data storage.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Razorpay",
    shortDescription:
      "Integrated secure payment gateways for handling online transactions and order payments.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "",
    shortDescription:
      "",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Rest APIs",
    shortDescription: "Designed and consumed REST APIs for seamless communication between frontend and backend systems.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "hostinger",
    label: "Hostinger",
    shortDescription:
      "Reliable hosting and domain solutions for building online presence! 💻✨",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Present",
    title: "Full Stack Web Developer",
    company: "Nearlook Mart Private Limited",
    description: [
      "Developing and maintaining scalable web applications using the MERN stack, ensuring high performance and reliability.",
      "Building responsive user interfaces and integrating RESTful APIs to deliver seamless user experiences.",
      "Designing backend modules and managing MongoDB databases for efficient data handling and system functionality.",
      "Collaborating with cross-functional teams to implement new features, optimize performance, and support production deployments.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.TS,
      SkillNames.TAILWIND,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },

  {
    id: 2,
    startDate: "SEP 2025",
    endDate: "NOV 2025",
    title: "PHP Developer Intern",
    company: "Nearlook Mart Private Limited",
    description: [
      "Contributed to the development of a Real Estate E-Commerce platform using PHP and MySQL.",
      "Created responsive and user-friendly interfaces with HTML, CSS, and JavaScript to enhance user engagement.",
      "Managed backend functionality and database operations using XAMPP and MySQL while ensuring data accuracy.",
      "Implemented new features, resolved application issues, and improved overall system performance and usability.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.PHP,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
