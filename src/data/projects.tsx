import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { SiFlask } from "react-icons/si";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },

  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },

  sql: {
    title: "SQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  flask: {
    title: "flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  php: {
    title: "php",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "nearlook",
    category: "E-Commerce",
    title: "NearLook E-Commerce",
    src: "/assets/projects-screenshots/nearlook/nearlook.png",
    screenshots: ["nearlook.png"],
    live: "#",
    github: "https://github.com/kishor514/nearlook-app",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            NearLook is a multi-vendor e-commerce platform that connects
            customers, sellers, and administrators through a single powerful
            dashboard system. The platform supports product management,
            order processing, inventory tracking, payments, and analytics.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow
            images={[
              `${BASE_PATH}/nearlook/1.png`,
              `${BASE_PATH}/nearlook/2.png`,
              `${BASE_PATH}/nearlook/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Customer Features
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Browse products by category and search filters.
            </li>
            <li className="font-mono">
              Add products to cart and wishlist.
            </li>
            <li className="font-mono">
              Secure checkout with Razorpay integration.
            </li>
            <li className="font-mono">
              Track orders and view purchase history.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Seller Dashboard
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Add, update and manage products.
            </li>
            <li className="font-mono">
              Track inventory and stock availability.
            </li>
            <li className="font-mono">
              Manage incoming orders and deliveries.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Admin Panel
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Manage users, sellers and products.
            </li>
            <li className="font-mono">
              Monitor platform activities and reports.
            </li>
            <li className="font-mono">
              Handle disputes, returns and approvals.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Services Available
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Multi-Vendor Marketplace Management
            </li>
            <li className="font-mono">
              Product Listing & Inventory Management
            </li>
            <li className="font-mono">
              Order Tracking & Delivery Management
            </li>
            <li className="font-mono">
              Secure Razorpay Payment Integration
            </li>
            <li className="font-mono">
              Customer Reviews & Ratings System
            </li>
            <li className="font-mono">
              Return & Refund Management
            </li>
            <li className="font-mono">
              Seller Dashboard & Analytics
            </li>
            <li className="font-mono">
              Admin Dashboard & User Management
            </li>
          </ul>
        </div>
      );
    }
  },
  {
    id: "real-estate",
    category: "Real Estate",
    title: "Real Estate E-Commerce",
    src: "/assets/projects-screenshots/real-estate/realestate.png",
    screenshots: ["realestate.png"],
    live: "#",
    github: "https://github.com/kishor514/Real-Estate",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.sql,

      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Real Estate E-Commerce is a dynamic platform designed to simplify
            property discovery and management. It enables users to explore
            available plots, lands, and properties with detailed information,
            while providing administrators with powerful tools to manage and
            update listings efficiently.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow
            images={[
              `${BASE_PATH}/real-estate/1.png`,
              `${BASE_PATH}/real-estate/2.png`,
              `${BASE_PATH}/real-estate/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Property Listings
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Browse all available plots, lands, houses, and commercial
              properties in one place.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Dynamic Property Management
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Administrators can add, update, and remove property listings
              dynamically through the management panel.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Search & Filtering
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Users can search and filter properties based on location,
              property type, and other requirements.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Property Details
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each property includes detailed descriptions, images, pricing,
              and contact information for enquiries.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            User Features
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Registered users can browse properties, submit enquiries, and
              stay updated with the latest listings.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Performance
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Built with PHP, MySQL, HTML, CSS, and JavaScript to deliver a
              responsive and user-friendly experience across all devices.
            </li>
          </ul>
        </div>
      );
    }
  },
  {
    id: "student-management",
    category: "Management System",
    title: "Student Management System",
    src: "/assets/projects-screenshots/student-management/smartmanage.png",
    screenshots: ["smartmanage.png"],
    live: "#",
    github: "https://github.com/kishor514/Smart-Attendance-system",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.sql,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Student Management System is a smart attendance and academic
            management platform designed for schools, colleges, and offices.
            It helps administrators efficiently manage attendance records,
            student information, and employee details while reducing manual work
            through a centralized digital system.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow
            images={[
              `${BASE_PATH}/student-management/1.png`,
              `${BASE_PATH}/student-management/2.png`,
              `${BASE_PATH}/student-management/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Attendance Management
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Mark and manage daily attendance for students, teachers, and employees.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Student Records
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Store and manage student details including personal information,
              course details, and academic records.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Staff Management
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Manage faculty and employee information with role-based access control.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Attendance Reports
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Generate attendance reports and monitor attendance statistics
              for students and staff.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Administrative Features
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Secure admin dashboard for managing users, attendance records,
              and institutional data.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Performance
          </TypographyH3>

          <ul className="list-disc ml-6">
            <li className="font-mono">
              Built using HTML, CSS, TypeScript, Python, Flask, and SQL to
              provide a fast, reliable, and responsive attendance management solution.
            </li>
          </ul>
        </div>
      );
    }
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/portfolio.png",
    screenshots: ["portfolio.png"],
    live: "",
    github: "https://github.com/kishor514/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/1.png`,

            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Projects Showcase
          </TypographyH3>

          <p className="font-mono mb-2">
            Explore my featured projects with detailed descriptions, technology
            stacks, screenshots, and development highlights. Each project
            demonstrates real-world problem-solving and practical development
            experience.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Experience & Skills
          </TypographyH3>

          <p className="font-mono mb-2">
            The portfolio highlights my professional experience, technical skills,
            and the technologies I work with, providing a complete overview of my
            development journey.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Services
          </TypographyH3>

          <p className="font-mono mb-2">
            Visitors can explore the services I offer, including frontend
            development, backend development, full-stack web applications, API
            integration, and responsive website design.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Modern Design
          </TypographyH3>

          <p className="font-mono mb-2">
            Built with modern technologies, smooth animations, and a responsive
            layout, the portfolio delivers a seamless experience across desktop,
            tablet, and mobile devices.
          </p>

          <p className="font-mono mb-2 mt-8 text-center">
            This portfolio isn't just a collection of projects—it's a showcase of
            my passion for building modern, user-friendly, and impactful web
            applications.
          </p>

        </div>
      );
    },
  }
];
export default projects;
