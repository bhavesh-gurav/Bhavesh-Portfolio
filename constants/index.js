import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
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
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "CSharp",
      icon: "/assets/tech/CSharp.svg",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C++",
      icon: "/assets/tech/Cplusplus.svg",
      link: "https://isocpp.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/PHP.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Dot Framework",
      icon: "/assets/tech/Netframework.svg",
      link: "https://dotnet.microsoft.com/en-us/",
    },
    {
      name: "Dot Net",
      icon: "/assets/tech/Netcore.svg",
      link: "https://dotnet.microsoft.com/en-us/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: "/assets/tech/Bootstrap.svg",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/Angular.svg",
      link: "https://angular.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "WordPress",
      icon: "/assets/tech/WordPress.svg",
      link: "https://wordpress.com/",
    },
    {
      name: "jQuery",
      icon: "/assets/tech/jQuery.svg",
      link: "https://jquery.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Azure Devops",
      icon: "/assets/tech/AzureDevops.svg",
      link: "https://azure.microsoft.com/en-in/products/devops",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "IIS Server",
      icon: "/assets/tech/cloud-database.png",
      link: "https://www.iis.net/",
    },
  ],
  databases: [
    {
      name: "Microsoft SQL Server",
      icon: "/assets/tech/MicrosoftSQLServer.svg",
      link: "https://www.microsoft.com/en-in/sql-server/sql-server-downloads",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "Oracle DB",
      icon: "/assets/tech/OracleDB.svg",
      link: "https://www.oracle.com/in/",
    },
    {
      name: "Couch DB",
      icon: "/assets/tech/CouchDB.svg",
      link: "https://couchdb.apache.org/",
    },
    {
      name: "Azure SQL Database",
      icon: "/assets/tech/AzureSQLDatabase.svg",
      link: "https://azure.microsoft.com/en-in/",
    },
  ],
};

const experiences = [
  {
    title: "DotNet Full Stack Developer L1",
    company_name: "DotNet Developer at Rysun Labs",
    icon: "/assets/company/Rysunlogo.png",
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "I have worked on several projects and gained extensive technical knowledge in various aspects of software development.",
      "I work with technologies such as ASP.NET MVC, .NET Core, Angular, SQL Server, jQuery, JavaScript, Core APIs, and Azure DevOps. I also apply my technical knowledge to product development and implementation.",
      "I have played a crucial role in ensuring the successful delivery of high-quality projects at Rysun. ",
      "By fostering teamwork, encouraging innovation, and leveraging my technical expertise, I have contributed to enhancing project efficiency and overall team performance.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer at GoBioServices",
    icon: "/assets/company/gobioservice.png",
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Jan 2022",
    points: [
      "Developed a Desktop App for Go Bio Services using WF Forms, C#, MySQL, JavaScript within a month.",
      "As well Developed a Go Bio Service official website for Company using WordPress, PHP, MySQL, JavaScript, Hosting, Services, did single handedly.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient management.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Intern at Pro Tuple IT Venture",
    icon: "/assets/company/protuplelogo.png",
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Jan 2021",
    points: [
      "Developing a healthcare Vyapar app platform using Asp.net, WF Forms, and MySQL, significantly enhancing user experience.",
      "Maintaining an efficient codebase under senior guidance, ensuring adherence to best practices in software development.",
      "Contributing to the building queries, improving user interaction by 30% and performance by 25%.",
      "Collaborating in UI/UX design efforts, leading to a 25% reduction in component development time.",
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
    name: "Go Bio Services",
    description:
      "I created a responsive and user-friendly website from scratch for GoBioService. I handled both front-end and back-end development, configured an email module and developed an order form to enhance its functionality. I successfully launched the website, meeting all client requirements and demonstrating my ability to deliver high-quality work independently.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "XAMPP",
        color: "pink-text-gradient",
      },
      {
        name: "Web Hosting",
        color: "orange-text-gradient",
      },
      {
        name: "WordPress 8.7",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Gobioserviceproject.png",
    source_code_link: "https://gobioservice.com/",
    deployed_link: "https://gobioservice.com/",
  },
  {
    name: "Magnitude Gold",
    description:
      "This product is designed to assist both small and large commercial businesses in creating and managing their own websites and customer data. I am responsible for working on the user-facing frontend technology, as well as working on highly complex stored procedures and robust backend logic to ensure the product's functionality.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
      {
        name: "DotNet Framework",
        color: "pink-text-gradient",
      },
      {
        name: "Entity Framework",
        color: "orange-text-gradient",
      },
      {
        name: "MS-SQL Server",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/magnitudegold.png",
    source_code_link: "https://web.magnitudefb.com/home",
    deployed_link: "https://web.magnitudefb.com/home",
  },
  {
    name: "GIPL Labor Commissioner",
    description:
      "I was involved in a government project. Specifically, I worked on the Designing and BackEnd modules and also created a stored procedure to support the project. Throughout the project, I utilized dotnet Core 6 and PostgreSQL technologies. In the project provide sequecial structure for user inferface.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "DotNet Core MVC",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Dapper",
        color: "orange-text-gradient",
      },
      {
        name: "Postgres SQL",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/GIPLproject.png",
    source_code_link:
      "https://col.gujarat.gov.in/",
    deployed_link:
      "https://col.gujarat.gov.in/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/bhavesh-gurav",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/bhaveshgurav/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/bhaveshgurav369",
  },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/_.shivam._.here._",
  // },
];

const heroTexts = [
  // "React/Next.js developer",
  // 500,
  "Team Player",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
