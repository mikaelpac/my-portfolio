
interface Project {
    title: string;
    workPlace: string;
    technology: string;
    secondaryTechnology: string;
    description: string;
}

const projectsData: Project[] = [
    {
        title: "URL shortener",
        workPlace: "Personal project",
        technology: "Backend",
        secondaryTechnology: "Typescript",
        description: "A simple URL shortening service built using Koa.js, Knex, Postgres, TS & NodeJS. Includes JWT-based user authentication, middleware and error handling."

    },
    {
        title: "Admin dashboard",
        workPlace: "BLUF VPN",
        technology: "Frontend",
        secondaryTechnology: "Backend",
        description: "I built a React-based admin dashboard for managing users -  implementing the UI according to Figma designs made by my coworkers and creating appropriate endpoints in the backend. "

    },
    {
        title: "Ticket and merch checkout",
        workPlace: "Hot Rad TV",
        technology: "Frontend",
        secondaryTechnology: "Backend",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio elit, rutrum eget tempor eget, lobortis vel ligula. Curabitur pellentesque ut eros id ultrices. Integer eu lorem vitae quam viverra luctus. In hac habitasse platea dictumst."

    },
    {
        title: "OCR receipt scanner",
        workPlace: "AO Solutions Oy",
        technology: "Frontend",
        secondaryTechnology: "Flutter",
        description: "Integrated a third party OCR solution for the purpose of scanning receipts and keeping track of expenses in a cross platform mobile app. I designed and created the app using Flutter & Dart and integrated it to REST API endpoints created by my coworker."

    },
    {
        title: "Project 1 ",
        workPlace: "AO Solutions Oy",
        technology: "Frontend",
        secondaryTechnology: "Flutter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio elit, rutrum eget tempor eget, lobortis vel ligula. Curabitur pellentesque ut eros id ultrices. Integer eu lorem vitae quam viverra luctus. In hac habitasse platea dictumst."

    },
]

export default projectsData;