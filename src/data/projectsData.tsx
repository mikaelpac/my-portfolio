
interface Project {
    title: string;
    workPlace: string;
    technology: string;
    secondaryTechnology: string;
    description: string;
    colorCode: string;
    link: string;
}

const projectsData: Project[] = [
    {
        title: "URL shortener",
        workPlace: "Personal project",
        technology: "Backend",
        secondaryTechnology: "Typescript",
        description: "A simple URL shortening learning project built using Koa.js, Knex, Postgres, TS & NodeJS. Includes JWT-based user authentication, middleware and error handling.",
        colorCode: "black",
        link: "https://github.com/mikaelpac/url_shortener_project"

    },
     {
        title: "UI overhaul",
        workPlace: "Hot Rad TV",
        technology: "Frontend",
        secondaryTechnology: null,
        description: "Remade most of the site's UI according to provided Figma designs.",
        colorCode: "#dc2626",
        link: null

    },
    {
        title: "Ticket and merch checkout",
        workPlace: "Hot Rad TV",
        technology: "Frontend",
        secondaryTechnology: "Backend",
        description: "Implemented a custom Stripe-based checkout flow, allowing customers to purchase live stream tickets and show merchandise. Validation of orders and data in the backend.",
        colorCode: "#dc2626",
        link: null

    },
    {
        title: "Admin dashboard",
        workPlace: "BLUF VPN",
        technology: "Frontend",
        secondaryTechnology: "Backend",
        description: "Built a React-based admin dashboard for managing users -  implementing the UI according to Figma designs made by coworkers. Learned how to paginate users efficiently with GraphQL endpoints.",
        colorCode: "#eab308",
        link: null

    },
    {
        title: "OCR receipt scanner",
        workPlace: "AO Solutions Oy",
        technology: "Frontend",
        secondaryTechnology: "Flutter",
        description: "Integrated a third party OCR solution for the purpose of scanning receipts and keeping track of expenses in a cross platform mobile app. I designed and created the app using Flutter & Dart and integrated it to REST API endpoints created by my coworker.",
        colorCode: "#60a5fa",
        link: null

    },

]

export default projectsData;