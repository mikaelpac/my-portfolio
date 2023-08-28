interface Project {
  title: string;
  workPlace: string;
  technology: string;
  secondaryTechnology: string | null;
  description: string;
  colorCode: string;
  link: string | null;
}

const projectsData: Project[] = [
  {
    title: "URL shortener",
    workPlace: "Personal project",
    technology: "Backend",
    secondaryTechnology: "Typescript",
    description:
      "A simple URL shortener learning project built using Koa.js, Knex, Postgres, TS & NodeJS. Includes JWT-based user authentication, middleware and error handling.",
    colorCode: "black",
    link: "https://github.com/mikaelpac/url_shortener_project",
  },
  {
    title: "UI overhaul",
    workPlace: "Hot Rad TV",
    technology: "Frontend",
    secondaryTechnology: "React",
    description:
      "Remade a large portion of the site's UI according to provided Figma designs.",
    colorCode: "#dc2626",
    link: null,
  },
  {
    title: "Onboarding a new developer",
    workPlace: "Hot Rad TV",
    technology: "Devops",
    secondaryTechnology: null,
    description:
      "Helped a new developer get up on their feet and familiar with the company's tech stack, which included tools and services such as Heroku, Netlify, Auth0 and Gitlab.",
    colorCode: "#dc2626",
    link: null,
  },
  {
    title: "Custom purchase / checkout flow",
    workPlace: "Hot Rad TV",
    technology: "Frontend",
    secondaryTechnology: "Backend",
    description:
      "Implemented a custom Stripe-based checkout flow on the frontend using React, allowing customers to purchase live stream tickets and show merchandise. Built validation of orders and data on the backend and used PostgreSQL tables to store relevant data.",
    colorCode: "#dc2626",
    link: null,
  },
  {
    title: "Rate limiting API",
    workPlace: "BLUF VPN",
    technology: "Backend",
    secondaryTechnology: "Node.js",
    description:
      "Used a combination of Redis and IP addresses to build a rate limiting solution for a GraphQL API to protect against malicious behavior.",
    colorCode: "#eab308",
    link: null,
  },
  {
    title: "Admin dashboard",
    workPlace: "BLUF VPN",
    technology: "Frontend",
    secondaryTechnology: "Backend",
    description:
      "Built a React-based admin dashboard for managing users - implementing the UI according to Figma designs made by coworkers. Learned how to paginate users efficiently using a GraphQL API.",
    colorCode: "#eab308",
    link: null,
  },
  {
    title: "OCR receipt scanner",
    workPlace: "AO Solutions Oy",
    technology: "Frontend",
    secondaryTechnology: "Flutter",
    description:
      "Integrated a third party OCR solution for the purpose of scanning receipts and keeping track of expenses in a cross platform mobile app. I designed and created the app using Flutter & Dart and integrated it to REST API endpoints created by my coworker.",
    colorCode: "#60a5fa",
    link: null,
  },
];

export default projectsData;
