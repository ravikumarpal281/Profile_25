import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGooglecloudspanner,
  SiGooglecloud,
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiRedhatopenshift,
} from "react-icons/si";
// Add more icons as needed

export const profile = {
  name: "Ravi Kumar Pal",
  title: "Lead Software Developer | Cloud Architect",
  summary:
    "Highly motivated and results-oriented Lead Software Developer with 10+ years of experience designing, developing, and deploying scalable, high-performance web applications and distributed systems. Proven ability to lead engineering teams, architect robust solutions, and drive technical excellence. Passionate about cloud-native technologies, DevOps practices, and building intuitive user experiences.",
  imageUrl: "/src/assets/profile.jpg", // Make sure path is correct relative to public or src
};

export const skills = [
  { name: "React", Icon: FaReact, category: "Frontend" },
  { name: "Python", Icon: FaPython, category: "Backend/Scripting" },
  { name: "Java", Icon: FaJava, category: "Backend" },
  { name: "Springboot", Icon: SiSpringboot, category: "Backend" },
  { name: "GCP", Icon: SiGooglecloud, category: "Cloud/DevOps" },
  { name: "Azure", Icon: FaMicrosoft, category: "Cloud/DevOps" },
  { name: "Docker", Icon: FaDocker, category: "Cloud/DevOps" },
  { name: "Kubernetes", Icon: SiKubernetes, category: "Cloud/DevOps" },
  { name: "Terraform", Icon: SiTerraform, category: "Cloud/DevOps" },
  { name: "Openshift", Icon: SiRedhatopenshift, category: "Cloud/DevOps" },
  { name: "SQL", Icon: SiMysql, category: "Databases" },
  { name: "Oracle", Icon: SiOracle, category: "Databases" },
  { name: "MongoDB", Icon: SiMongodb, category: "Databases" },
  { name: "Git", Icon: FaGitAlt, category: "Tools" },
  // Add more skills...
];

export const experiences = [
  {
    role: "Technology Lead",
    company: "Yorkshire Building Society",
    years: "2023 - Present",
    description: [
      "Lead a team of 8 developers in the design and implementation of microservices architecture for the company's flagship SaaS product.",
      "Architected and migrated legacy systems to AWS cloud, reducing operational costs by 30% and improving scalability.",
      "Implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes, shortening release cycles by 50%.",
      "Mentored junior developers and conducted code reviews to ensure high-quality code standards.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Wipro Limited",
    years: "2019 - 2023",
    description: [
      "Developed core backend services using Node.js, Express, and MongoDB for a high-traffic e-commerce platform.",
      "Built responsive frontend features using React and Redux.",
      "Contributed to database design and optimization (PostgreSQL).",
    ],
  },
  {
    role: "Lead Developer",
    company: "Oottru Technologies",
    years: "2016-2019",
    description: [
      "Developed core backend services using Node.js, Express, and MongoDB for a high-traffic e-commerce platform.",
      "Built responsive frontend features using React and Redux.",
      "Contributed to database design and optimization (PostgreSQL).",
    ],
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys Technologies",
    years: "2012-2016",
    description: [
      "Developed core backend services using Node.js, Express, and MongoDB for a high-traffic e-commerce platform.",
      "Built responsive frontend features using React and Redux.",
      "Contributed to database design and optimization (PostgreSQL).",
    ],
  },
  // Add more experience...
];

export const projects = [
  {
    title: "CloudWatch Insights Dashboard",
    description:
      "A custom dashboard visualizing AWS CloudWatch Logs Insights queries using React and Chart.js, providing real-time application monitoring.",
    technologies: ["React", "Node.js", "AWS SDK", "Chart.js", "Tailwind CSS"],
    imageUrl:
      "https://via.placeholder.com/400x250/0a192f/64ffda?text=Project+1", // Replace with actual image URL or path
    liveUrl: "#", // Optional link to live demo
    repoUrl: "#", // Optional link to code repository
  },
  {
    title: "Microservices Orchestrator",
    description:
      "Developed a lightweight service orchestrator using Kubernetes operators to manage deployment and scaling of internal microservices.",
    technologies: ["Go", "Kubernetes", "Docker", "gRPC"],
    imageUrl:
      "https://via.placeholder.com/400x250/0a192f/64ffda?text=Project+2",
    repoUrl: "#",
  },
  // Add more projects...
];

export const education = [
  {
    degree: "B Tech in Computer Science",
    institution: "UP Technical University ",
    years: "2007 - 2011",
    description:
      "Specialization in Artificial Intelligence and Distributed Systems.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services (AWS)",
    year: "2022",
    credentialId: "XYZ-123-ABC", // Optional
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    year: "2021",
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
