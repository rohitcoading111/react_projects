const projects = [
  {
    id: "skymart",
    title: "SkyMart",
    category: "E-Commerce",

    description:
      "A modern e-commerce experience built with React, Tailwind CSS and API-driven product data.",

    details:
      "SkyMart is a modern e-commerce platform focused on creating a smooth and responsive shopping experience. It uses React for the interface, React Router for navigation and API-driven product data to dynamically display products.",

    features: [
      "Responsive e-commerce interface",
      "Dynamic product data from API",
      "Product browsing and navigation",
      "Reusable React components",
      "Responsive design with Tailwind CSS"
    ],

    tech: ["React", "Tailwind", "React Router", "API"],

    image: "/images/skymart.png",

    live: "https://react-projects-t5gp.vercel.app/",
    github:
      "https://github.com/rohitcoading111/react_projects/tree/main/skyMart",
  },

  {
    id: "kanban",
    title: "Kanban Board",
    category: "Productivity",

    description:
      "A responsive task management board with dynamic task creation, status management and deletion.",

    details:
      "Kanban Board is a productivity application designed to organize tasks visually. Users can create tasks, move between different workflow stages and manage their tasks through a clean dashboard interface.",

    features: [
      "Create new tasks",
      "Organize tasks by status",
      "Delete tasks",
      "Responsive dashboard UI",
      "Reusable React components"
    ],

    tech: ["React", "Tailwind", "JavaScript"],

    image: "/images/kanban.png",

    live: "https://chipper-praline-fb12a7.netlify.app/",
    github:
      "https://github.com/rohitcoading111/js-practice/tree/main/productivity-dashboard",
  },

  {
    id: "fintrack",
    title: "FinTrack",
    category: "Dashboard",

    description:
      "A personal finance dashboard with transaction management, charts and local storage.",

    details:
      "FinTrack is a personal finance dashboard built to help users manage and visualize their transactions. It uses JavaScript, Chart.js and LocalStorage to create an interactive experience without requiring a backend.",

    features: [
      "Transaction management",
      "Interactive financial charts",
      "LocalStorage data persistence",
      "Dashboard statistics",
      "Responsive interface"
    ],

    tech: ["JavaScript", "Chart.js", "LocalStorage"],

    image: "/images/fintrack.png",

    live: "https://js-practice-ntme.vercel.app/",
    github:
      "https://github.com/rohitcoading111/js-practice/tree/main/fintrack",
  },
];

export default projects;