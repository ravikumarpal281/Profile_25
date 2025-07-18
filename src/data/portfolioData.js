import {
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaMicrosoft,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiMongodb,
  SiGooglecloud,
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiRedhatopenshift,
  SiPrometheus,
  SiGrafana,
  SiKibana,
  SiDynatrace,
} from "react-icons/si";
import { FaSquareGitlab } from "react-icons/fa6";
// Add more icons as needed

export const profile = {
  name: "Ravi Kumar Pal",
  title: "Technology Lead | Lead Software Developer | Cloud Developer",
  summary:
    "A dynamic Technology Lead with 12 years of hands-on experience driving software projects from conception to deployment. I specialize in building and scaling back-end microservices using Java and Spring Boot, while also being proficient in front-end development with React. My technical leadership has been proven across diverse environments, from global corporations to fast-paced startups, consistently delivering high-quality software using Agile (TDD/BDD) practices. I am adept with modern DevOps tools like Docker and Kubernetes, cloud technologies such as GCP, and a range of databases including SQL (MySQL, Oracle) and NoSQL (MongoDB).",
  imageUrl: "ravi_profile_one.jpg",
};

export const skills = [
  { name: "Java", Icon: FaJava, category: "Backend" },
  { name: "Springboot", Icon: SiSpringboot, category: "Backend" },
  { name: "React", Icon: FaReact, category: "Frontend" },
  { name: "HTML", Icon: FaHtml5, category: "Frontend" },
  { name: "CSS", Icon: FaCss3Alt, category: "Frontend" },
  { name: "GCP", Icon: SiGooglecloud, category: "Cloud/DevOps" },
  { name: "Azure", Icon: FaMicrosoft, category: "Cloud/DevOps" },
  { name: "Docker", Icon: FaDocker, category: "Cloud/DevOps" },
  { name: "Kubernetes", Icon: SiKubernetes, category: "Cloud/DevOps" },
  { name: "Openshift", Icon: SiRedhatopenshift, category: "Cloud/DevOps" },
  { name: "SQL", Icon: SiMysql, category: "Databases" },
  { name: "Oracle", Icon: SiOracle, category: "Databases" },
  { name: "MongoDB", Icon: SiMongodb, category: "Databases" },
  { name: "Git", Icon: FaGitAlt, category: "CI/CD Tools" },
  { name: "GitLab CI", Icon: FaSquareGitlab, category: "CI/CD Tools" },
  { name: "Prometheus", Icon: SiPrometheus, category: "Observability" },
  { name: "Grafana", Icon: SiGrafana, category: "Observability" },
  { name: "Kibana", Icon: SiKibana, category: "Observability" },
  { name: "Dynatrace", Icon: SiDynatrace, category: "Observability" },
  // Add more skills...
];

export const experiences = [
  {
    role: "Technology Lead",
    company: "Yorkshire Building Society",
    years: "2023 - Present",
    description: [
      "Guided and mentored a team of 8 engineers, fostering best practices in coding, testing, and system design while collaborating effectively with architects and other teams.",
      "Owned the translation of high-level architectural requirements into detailed, scalable, and resilient low-level designs for core backend microservices.",
      "Led the end-to-end development lifecycle of critical backend services using Java 17 and Spring Boot, enabling key business functionalities and supporting high-traffic mobile and web applications.",
      "Hands-on experience containerizing applications with Docker and managing deployments on OpenShift Kubernetes. Utilized Git for version control and CI/CD pipelines.",
      "Leveraged Dynatrace for proactive performance monitoring, troubleshooting, and ensuring high availability and optimising the performance of the entire microservices ecosystem.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Wipro Limited",
    years: "2019 - 2023",
    description: [
      "Developed microservices-based applications using Java and SpringBoot, utilizing RESTful APIs for seamless integration with frontend applications and deployed them on GCP Kubernetes Engine.",
      "Designed and implemented database structures using SQL and MongoDB, ensuring data integrity and efficient querying.",
      "Worked collaboratively with frontend developers and UI/UX designers to deliver seamless user interfaces and smooth application workflows.",
      "Actively participated in Agile development processes, including daily stand-up meetings, sprint planning, and retrospectives.",
      "Conducted unit testing and participated in integration testing to ensure reliability and functionality of developed software.",
    ],
  },
  {
    role: "Lead Developer",
    company: "Oottru Technologies",
    years: "2016-2019",
    description: [
      "Managed team of six, consisting of developers and testers, providing guidance and mentorship.",
      "Assisted in capacity planning and performance optimization to meet user demands.",
      "Documented technical specifications and provided training to junior developers.",
      "Conducted code reviews and provided feedback to other developers.",
    ],
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys Technologies",
    years: "2012-2016",
    description: [
      "Managed team of six, consisting of developers and testers, providing guidance and mentorship.",
      "Built responsive frontend features using React and Redux.",
      "Contributed to database design and optimization (PostgreSQL).",
    ],
  },
  // Add more experience...
];

export const projects = [
  {
    title: "YBS Banking Application",
    description:
      "Secure mobile banking app, giving the customers, a quick, easy and safe access to their YBS savings accounts.",
    technologies: [
      "Android",
      "iOS",
      "Spring Boot",
      "Java",
      "Microservices",
      "Docker",
      "Openshift Kubernetes",
    ],
    imageUrl: "ybs_logo_one.jpg", // Replace with actual image URL or path
    liveUrl:
      "https://apps.apple.com/gb/app/yorkshire-building-society/id1482620004",
    repoUrl: "#", // Optional link to code repository
  },
  {
    title: "Cricut Design Space",
    description:
      "Developed a mobile application to design, cut or draw by connecting to Cricut Machine.",
    technologies: ["Android", "iOS", "Docker", "Spring Boot", "Microservices"],
    imageUrl: "cricut_logo_one.png",
    liveUrl: "https://apps.apple.com/gb/app/cricut-design-space/id749471884",
    repoUrl: "#",
  },
  // Add more projects...
];

export const education = [
  {
    degree: "B Tech in Computer Science",
    institution: "UP Technical University ",
    years: "2007 - 2011",
    description: "",
  },
];

export const certifications = [
  {
    name: "GCP Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2023",
    credentialId: "788352", // Optional
  },
  {
    name: "GCP Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2020",
    credentialId: "21881223",
  },
  // Add more certifications...
];

export const navigationLinks = [
  /*{ name: "About", to: "about" },*/
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];
