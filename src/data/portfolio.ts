import type {
  SocialLink,
  NavbarLink,
  Profile,
  Highlight,
  About,
  SkillGroup,
  Project,
  Approach,
} from "../types";

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/enoch-inioluwa-7bb30a201",
    icon: "linkedin",
  },

  {
    label: "GitHub",
    href: "https://github.com/Enoch-sucess",
    icon: "github",
  },

  {
    label: "Email",
    href: "mailto:enocholadele.dev@gmail.com",
    icon: "email",
  },
];

export const navbarLinks: NavbarLink[] = [
  {
    label: "About me",
    href: "#about",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Contact",
    href: "#contact",
    isButton: true,
  },
];

export const profile: Profile = {
  greeting: "Hi, I am",
  name: "Enoch Oladele",
  role: "Full Stack Web Developer",
  photo:
    "https://res.cloudinary.com/dzezte7kv/image/upload/f_auto,q_auto,w_1600/Vector_Portrait_in_Navy_Suit.png",
  photoAlt: "Illustrated portrait of Enoch Oladele, Full Stack Web Developer",
};

export const highlight: Highlight = {
  heading: "Full-stack developer",
  text: "I completed full-stack developer training at Tech Studio Lagos. I’ve built full-stack projects including Tix Arena, an event ticketing platform, and Goal-On, built with React, Node, Express and MongoDB...",
  ctaLabel: "Read More",
  ctaHref: "#about",
};

export const about: About = {
  paragraphs: [
    "Curiosity is what drew me to web development. I wanted to understand how the applications we use every day are built, and that curiosity led me from exploring web technologies to building applications of my own. Today, I’m driven by the desire to create software that solves real problems and makes everyday tasks easier. I’m looking for a junior full-stack developer role where I can contribute my skills, collaborate with a team, and help turn ideas into solutions that matter.",
  ],
  ctaLabel: "Explore",
  ctaHref: "#skills",
  services: [
    {
      title: "Frontend",
      description:
        "I can build responsive, accessible interfaces with React, TypeScript and Tailwind CSS.",
      icon: "frontend",
    },
    {
      title: "Backend",
      description:
        "I can build server logic and REST APIs with Node.js, Express and MongoDB.",
      icon: "backend",
    },
    {
      title: "Full-stack web application development",
      description:
        "End-to-end applications, from the database and API to the interface.",
      icon: "fullstack",
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Using now",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "GitHub", icon: "github" },
    ],
  },
  {
    title: "Learning",
    skills: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Figma", icon: "figma" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Git", icon: "git" },
    ],
  },
];

export const approach: Approach = {
  intro:
    "To me, web development is about making everyday tasks easier for real people. That means the parts users never see matter as much as the interface: correct data, safe access, and an app that behaves the same live as it does on my machine. These are the habits I try to bring to every project.",
  points: [
    {
      title: "Get the data right first",
      description:
        "Before I build a feature, I work out what the data actually represents. In Tix Arena, treating a ticket tier and a ticket sale as one thing would have broken as soon as two people bought the same tier, so I split them into separate records.",
    },
    {
      title: "Enforce rules where they can't be skipped",
      description:
        "Important rules belong in the database and the server, not in code that runs in between. Stock is decremented in one atomic operation, passwords are hashed in the user model, and roles are only ever set on the server.",
    },
    {
      title: "Debug one layer at a time",
      description:
        "When a bug spans the front end and the back end, I check each layer in order instead of guessing. On Goal-On, tracing a request from the browser to the API showed me exactly where authentication was breaking.",
    },
    {
      title: "Treat secrets and deployment seriously",
      description:
        "Secrets never go into version control, and deployed services have to agree exactly. After committing a .env file by mistake, I set up .gitignore before the first commit on every project and keep configuration in environment variables.",
    },

    {
      title: "Make the code tell a story",
      description:
        "Good code reads like a story: each piece of logic leads to the next, and the pieces work together. For every action I ask what happens if it works and what happens if it doesn't, so every path ends in a clear response. If the input is valid, the app does its job. If not, it says exactly what is wrong. Either way, the user is never left guessing. The contact form on this site works that way: invalid input points to the exact field, a failed send offers a fallback, and a successful send confirms it.",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "tix-arena",
    title: "Tix Arena",
    description:
      "An event discovery and ticketing platform where users browse events by category, search listings and view event details.",
    image:
      "https://res.cloudinary.com/dzezte7kv/image/upload/c_scale,w_1200/f_auto/q_auto/tix-arena-officiall.vercel.app__1.png",
    imageAlt:
      "Tix Arena home page with a headline, a search bar and an illustration of people queuing at a ticket booth",
    tags: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
    liveUrl: "https://tix-arena-officiall.vercel.app/",
    details: {
      overview:
        "A full-stack platform where vendors host events and sell tickets, with admin oversight at every step. Built with a team of 7 developers, where I served as team lead.",
      role: "As the team leader of the group I created the structure and dedicated tasks to other developers, I worked on building both the interface and the user and vendor authentication",
      features: [
        "Vendor onboarding with admin approval: Users apply to become vendors, and an admin reviews each application before any selling privileges are granted.",
        "Event moderation: Vendors create events with location, date and time, and every event is reviewed by an admin before it goes public.",
        "Tiered ticketing: Vendors define ticket types such as Regular and VIP, each with its own price and limited quantity.",
        "Unique ticket codes: Every purchase generates a unique code, delivered to the buyer by email.",
        "Oversell-proof purchasing: Stock is decremented with a single atomic MongoDB operation, so simultaneous buyers can never claim the same last ticket.",
        "Door check-in: Vendors scan ticket codes at the event. Each code is marked used after one scan, so reused or duplicated tickets are rejected.",
        "Secure authentication: JWT auth with refresh tokens, email verification and Zod request validation.",
        "Role-based access control: Roles are set only on the server, so there is no way for a user to promote themselves to vendor or admin.",
        "Multi-step buyer flow: Registration, checkout and a success confirmation, with state managed across modal components.",
      ],
      challenges: [
        {
          problem:
            "If two buyers go for the last ticket at the same moment, the obvious approach (read the stock, check it, then update it) lets both through, because both reads happen before either write.",
          solution:
            "I used a single atomic MongoDB operation that only decrements stock if sold is less than quantity, so the check and the update happen as one step.",
        },
        {
          problem:
            "A ts-node and TypeScript version incompatibility, plus runtime packages missing because only their type packages were installed.",
          solution:
            "I installed a lower version that was compatible with the rest of the setup, which resolved the incompatibility. I also installed the missing runtime packages alongside their @types packages.",
        },
        {
          problem:
            "Modelling tickets correctly: My first instinct was to treat a ticket tier and a ticket sale as one thing.",
          solution:
            "I split them into ticket types (the tier config: name, price, quantity) and purchases (one record per buyer, each with a unique check-in code).",
        },
      ],
      lessons: [
        "Concurrency bugs don’t show up in normal testing. Correctness has to be enforced at the database level, not in application code that runs between two operations.",
        "If one document has to represent both “the tier” and “who bought it,” it breaks as soon as more than one person buys the same tier. Good data modelling comes before good code.",
        "Type-only packages (@types/...) don’t ship the library itself, and mismatched tool versions produce confusing errors. Reading the error and checking versions beats guessing.",
      ],
    },
  },
  {
    slug: "goal-on",
    title: "Goal-On",
    description:
      "A goal-tracking app where users create goals, update their progress, and review ongoing and completed goals.",
    image:
      "https://res.cloudinary.com/dzezte7kv/image/upload/c_scale,w_1200/f_auto/q_auto/goal-on-app.vercel.app_allgoals.png",
    imageAlt:
      "Goal-On All Goals page showing a completed goal at 100% and a second goal at 50% progress",
    tags: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
    liveUrl: "https://goal-on-app.vercel.app/",
    details: {
      overview:
        "A goal-tracking app where user create goals, update progress on each one, and review them as ongoing, completed or all goals .",
      role: "Full-stack developer. Built the React and TypeScript front end, the Node and Express API with MongoDB, the authentication, and the deployment on Vercel and Render.",
      features: [
        "Sign up and log in with a username or an email",
        "Create, edit and delete goals",
        "Update progress on each goal, shown with a progress bar",
        "Separate views for ongoing, completed and all goals",
        "A congratulations message when a goal reaches 100%",
      ],
      challenges: [
        {
          problem:
            "I accidentally committed a live .env file containing secrets to the repository, which meant my credentials were sitting in the git history.",
          solution:
            "I rewrote the git history to remove the file from every commit, then added .env to .gitignore so it could not be tracked again.",
        },
        {
          problem:
            "Authentication broke in confusing ways across the full stack. Requests were failing because my axios interceptor was not applying to the requests being made, an instance mix-up.",
          solution:
            "I traced the request flow from the frontend to the backend and made sure the interceptor was attached to the same axios instance that every request used, so the auth token was sent consistently",
        },
      ],
      lessons: [
        "Secrets should never touch version control. Set up .gitignore before the first commit, and treat any exposed credential as compromised, since rewriting history does not undo a leak.",
        "When a bug spans the frontend and backend, check each layer in order. Understanding how a library like axios handles instances matters more than guessing at fixes.",
      ],
    },
  },
  {
    slug: "task-duty",
    title: "TaskDuty",
    description:
      "A task manager for adding, editing, deleting, searching and filtering tasks by category and status, and marking them complete.",
    image:
      "https://res.cloudinary.com/dzezte7kv/image/upload/c_scale,w_1200/f_auto/q_auto/personal-task-manager-zeta-wine.vercel.app_mytask.png",
    imageAlt:
      "TaskDuty My Tasks page with a search box, category and status filters, and two task cards",
    tags: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
    liveUrl: "https://personal-task-manager-zeta-wine.vercel.app/welcome",
    details: {
      overview:
        "TaskDuty is a full-stack task manager built during the TechStudio internship. People sign up, log in, and manage their own tasks: add, edit, delete, mark complete, filter by category and status, and search by title or description. The React and TypeScript front end is deployed on Vercel, and the Node, Express and MongoDB API runs on Render. The API is on a free hosting tier, so the first request after a quiet period can take a moment.",
      role: "Full-stack developer. Built the React and TypeScript front end, the Node and Express API with MongoDB, the authentication, and the deployment on Vercel and Render.",
      features: [
        "Sign up and log in with a username or an email",
        "Passwords hashed with bcrypt, sessions handled with JWT tokens",
        "Add, edit and delete tasks, with a confirmation before deleting",
        "Form validation: every field required, and due dates can't be in the past",
        "Mark tasks complete or incomplete",
        "Filter by category (Work, Personal, Urgent) and by status",
        "Case-insensitive search across titles and descriptions, with results you can edit and delete",
        "Each user only sees and changes their own tasks",
        "Responsive layout with a collapsing mobile menu",
      ],
      challenges: [
        {
          problem:
            "After deploying, sign-in and sign-up were blocked by the browser with a CORS error, even though the API was running.",
          solution:
            "The server only accepts requests from the client address listed in its environment settings, and that value was wrong. The fix was correcting it, and the server now reads its allowed client addresses from an environment variable, so the live site and local development both work.",
        },
        {
          problem:
            "Search ran on the server while the main task list was still stored in the browser, so search results couldn't be edited or deleted and the app felt like two separate lists.",
          solution:
            "All task actions were moved to the API, so the list and search draw on the same data. Search results are read through the live task list, so editing, completing or deleting a result updates it straight away.",
        },
      ],
      lessons: [
        "Put security rules where they can't be skipped: password hashing lives in the user model, so no route can forget it.",
        "Authorization is more than a login check. Every task query is filtered by owner, and a task that belongs to someone else returns the same 404 as one that doesn't exist, so nothing is revealed about what exists.",
        "Deployed services have to agree exactly. One wrong character in an environment variable can break sign-in.",
        "When nothing happens at all, such as no network request, check the first link in the chain before looking further along.",
      ],
    },
  },
  {
    slug: "crystal",
    title: "Crystal",
    description:
      "A responsive front-end concept for a crypto and forex trading platform, featuring market data, interactive charts, and a simulated trading dashboard. All figures shown are sample data.",
    image:
      "https://res.cloudinary.com/dzezte7kv/image/upload/c_scale,w_1200/f_auto/q_auto/crystal-eta.vercel.app_.png",
    imageAlt:
      "Crystal trading platform featuring market prices, portfolio charts, and a dark-themed trading dashboard",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    liveUrl: "https://crystal-eta.vercel.app/",
    details: {
      overview:
        "Crystal is a front-end concept for a modern crypto and forex trading platform. It combines a marketing landing page, market overview, and simulated user dashboard in a responsive interface designed to make trading information easy to explore.",
      role: "Front-end development, including interface styling, interactive UI components, market data presentation, chart integration, and dashboard navigation.",
      features: [
        "Responsive landing page with market highlights and platform features",
        "Market listings for cryptocurrencies and forex pairs",
        "Interactive charts and market data visualizations using Chart.js",
        "Simulated sign-in and account dashboard navigation",
        "Trading interface with buy and sell controls",
        "Deposit, withdrawal, and transaction history screens",
        "User profile, notification, and account settings interfaces",
        "Dark and light themes and language selection options",
      ],
      challenges: [
        {
          problem:
            "Recreating a trading platform interface as a frontend practice project.",
          solution:
            "Broke the design into smaller sections and built each part using HTML, CSS, and JavaScript.",
        },
        {
          problem: "Making the layout look good on different screen sizes.",
          solution:
            "Used responsive CSS techniques and media queries to adapt the interface to different devices.",
        },
        {
          problem:
            "Displaying financial information in a visually appealing way.",
          solution:
            "Organized sample market data into cards and used charts to make the interface look more like a trading platform.",
        },
      ],
      lessons: [
        "Structuring interactive interfaces with reusable styling patterns",
        "Using JavaScript to manage UI state, navigation, and dynamic content rendering",
        "Integrating Chart.js to visualize financial data",
        "Designing responsive dashboards with clear information hierarchy",
        "Distinguishing frontend simulations from real authentication and financial operations",
      ],
    },
  },
];
