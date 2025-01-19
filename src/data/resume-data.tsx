import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nuritdinov Mukhitdin",
  initials: "NM",
  location: "Tashkent, Uzbekistan",
  locationLink: "https://www.google.com/maps/place/Tashkent",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      I specialize in building dynamic and scalable web applications. With expertise in both frontend and backend technologies, I transform ideas into functional, robust solutions. I believe in the power of clean code, strong collaboration, and continuous learning.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/93820902?s=400&u=b38e6a3a6fae127bde7ae202e4ebdf3bdb41a2be&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "tornadomuhitdin@yandex.com",
    tel: "+998992263026",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Muxitdin",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhitdin-nuritdinov-9405a829a/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://www.instagram.com/mukhitdin_/",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    // {
    //   school: "Wrocław University of Technology",
    //   degree: "Bachelor's Degree in Control systems engineering and Robotics",
    //   start: "2007",
    //   end: "2010",
    // },
  ],
  work: [
    {
      company: "UITC",
      // link: "https://film.io",
      badges: ["Remote", "React", "Node.js", "Express", "MongoDB"],
      title: "FullStack Developer",
      // logo: ConsultlyLogo,
      start: "2024.04",
      end: "2024.11",
      description: (
        <>
          Working together with experienced software engineers to build and maintain web applications.
          <ul className="list-inside list-disc">
            <li>
              Architecting a backend API using Node.js and Express, ensuring scalability and performance
            </li>
            <li>
              Developing a frontend application using React, leveraging modern frameworks and libraries to create a responsive and user-friendly interface
            </li>
            <li>
              Collaborating with cross-functional teams to gather requirements, design, and implement features
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "HTML+CSS",
    "Tailwind CSS",
    "Figma",
    "ShadCN",
    "RestAPI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "WebSockets/Socket.io",
    "Linux",
  ],
  projects: [
    {
      title: "E-book store",
      techStack: ["JavaScript", "React", "Redux", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Node-Mailer", "Multer", "Stripe"],
      description:
        "An e-book store that allows users to browse and purchase e-books, with proper user authentication, role-based access control and payment gateway integration.",
      // logo: MonitoLogo,
      link: {
        label: "bookstore.com",
        // href: "https://prompthub-96ry.onrender.com",
      },
    },
    {
      title: "Freegram",
      techStack: [
        "JavaScript",
        "React",
        "Redux",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RestAPI",
        "Socket.io",
      ],
      description:
        "a Telegram-inspired real-time chat application that offers seamless messaging functionality",
      // logo: ConsultlyLogo,
      link: {
        label: "freegram.com",
        // href: "https://consultly.com/",
      },
    },
    {
      title: "Promptopia",
      techStack: ["JavaScript", "React", "Redux", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Multer"],
      description:
        "A platform for sharing and discovering prompts with proper user authentication and role-based access control.",
      // logo: MonitoLogo,
      link: {
        label: "promptopia.com",
        href: "https://prompthub-96ry.onrender.com",
      },
    },
  ],
} as const;
