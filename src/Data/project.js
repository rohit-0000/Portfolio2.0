import chatApp from "../assets/Project/chatApp.png";
import heritaQuest from "../assets/Project/heritaQuest.png";
import notesApp from "../assets/Project/notesApp.png";
import journalApp from "../assets/Project/journalApp.png";
import portfolio1O from "../assets/Project/portfolio1.0.png";
import portfolio2O from "../assets/Project/portfolio2.0.png";
import studySync from "../assets/Project/studySync.png";
import calculator from "../assets/Project/calculator.png";
import clock from "../assets/Project/clock.png";
import CppLogo from "../assets/Skills/c++Logo.png";
import javaLogo from "../assets/Skills/javaLogo.png";
import javascriptLogo from "../assets/Skills/javascriptLogo.png";
import reactLogo from "../assets/Skills/reactLogo.png";
import springBootLogo from "../assets/Skills/springBootLogo.png";
import mongoDbLogo from "../assets/Skills/mongoDbLogo.png";
import tailwindLogo from "../assets/Skills/tailwindLogo.png";
import reduxLogo from "../assets/Skills/reduxLogo.png";
import cssLogo from "../assets/Skills/cssLogo.png";
import postgree from "../assets/Skills/postgresql.png";
import htmlLogo from "../assets/Skills/htmlLogo.png";

export const allProjectDetail = [
    {
      banner: chatApp,
      name: "EZ Chat",
      description:
        "EZ Chat is a powerful, all-in-one messaging app for seamless communication. Share text, images, files, and chat with AI—all in a fast, intuitive, and dynamic platform.",
      features: {
        "User Authentication":
          "JWT-based auth, OAuth2 (Google), and Bcrypt password encoding for robust security.",
        "Real-time Messaging":
          "STOMP over WebSocket for instant one-on-one and group chats.",
        "AI-powered Replies":
          "Integrated with Gemini API via WebClient for intelligent AI responses.",
        "Media Sharing":
          "Supports uploading images and all binary file types to Cloudinary (text chat content is persisted in MongoDB).",
        "Forgot Password": "OTP-based password reset using JavaMailSender.",
        "Responsive Frontend":
          "Mobile-first design with Tailwind CSS and React.",
        "State Management":
          "Redux Toolkit and async thunks for predictable state updates.",
        Deployment:
          "Frontend on Vercel; Backend on Render; Database hosted on MongoDB Atlas.",
      },
      techStack: {
        Java: javaLogo,
        "Spring Boot": springBootLogo,
        "React JS": reactLogo,
        "Tailwind CSS": tailwindLogo,
        MongoDB: mongoDbLogo,
      },
      link: "https://chat-app-five-woad-79.vercel.app/home",
      git: "https://github.com/rohit-0000/chat_App01",
    },
    {
      banner: heritaQuest,
      name: "Herita Quest",
      description:
        "Herita Quest is an interactive, map-based quiz platform that blends exploration with learning. Click on any location to unlock engaging quizzes on historical and cultural topics.",
      features: {
        "Interactive Map Integration":
          "Powered by MapTiler for seamless and responsive geographical exploration.",
        "Quiz Generation with AI":
          "Utilizes Gemini API to dynamically generate quizzes based on selected locations.",
        "User Authentication":
          "Secure login system using JWT, OAuth2 (Google), and Bcrypt password encoding.",
        "Responsive Frontend":
          "Mobile-first design implemented using React and Tailwind CSS for a smooth user experience.",
        "Quiz Data & Persistence":
          "PostgreSQL used for structured quiz and user data storage.",
        Deployment:
          "Frontend hosted on Vercel; Backend deployed on Render; PostgreSQL database managed via Supabase.",
      },
      techStack: {
        Java: javaLogo,
        "Spring Boot": springBootLogo,
        "React JS": reactLogo,
        "Tailwind CSS": tailwindLogo,
        "Postgre SQL": postgree,
      },
      link: "https://herita-quest-sable.vercel.app/",
      git: "https://github.com/rohit-0000/heritaQuest",
    },
    {
      banner: notesApp,
      name: "Paste App",
      description:
        "Paste app is a simple, cloud-based notes app for quick and organized note-taking, keeping your ideas accessible anytime, anywhere securely and effortlessly.",
      features: {
        "User Authentication":
          "JWT-based authentication with Spring Security and Bcrypt for password encryption.",
        "Forgot Password":
          "OTP-based password recovery using JavaMailSender for email delivery.",
        "Note Management":
          "Create, edit, delete, and persist notes in MongoDB Atlas.",
        "Search Functionality":
          "Full-text search to find saved notes quickly and efficiently.",
        "Dynamic Editor":
          "Custom textarea with dynamic line numbering similar to VS Code.",
        "Responsive Frontend":
          "Fully responsive UI built with React, ensuring usability across devices.",
        "State Management":
          "Redux Toolkit with async thunks for efficient global state handling.",
        Notifications:
          "Toast notifications to provide real-time feedback on user actions.",
        Routing: "React Router DOM used for intuitive client-side routing.",
        Deployment:
          "Frontend deployed on Vercel; Backend on Render; Database hosted on MongoDB Atlas.",
      },

      techStack: {
        Java: javaLogo,
        "Spring Boot": springBootLogo,
        "React JS": reactLogo,
        "Redux Toolkit": reduxLogo,
        MongoDB: mongoDbLogo,
      },
      link: "https://paste-app-git-main-rohit-0000s-projects.vercel.app/home",
      git: "https://github.com/rohit-0000/PasteApp",
    },
    {
      banner: journalApp,
      name: "Journal App",
      description:
        "Journal app is a private digital sanctuary that securely stores your thoughts and memories, with the added ability to send you email updates",
      features: {
        "User Authentication":
          "JWT-based authentication with Spring Security and Bcrypt for password encryption.",
        "Role-Based Authorization":
          "Access control using roles such as USER and ADMIN.",
        "Email Service":
          "JavaMailSender for sending verification and password recovery emails.",
        "Journal Management":
          "Create, read, update, and delete journal entries in MongoDB Atlas.",
        "Validation & Error Handling":
          "Robust request validation and centralized exception handling for consistent API responses.",
        "Lombok Integration":
          "Use of Lombok annotations (@Getter, @Setter, @Builder, etc.) to reduce boilerplate code.",
        "CORS Configuration":
          "Global CORS settings to allow requests from trusted frontend domains.",
        "Environment Configuration":
          "Profiles (dev, test, prod) with externalized configuration using application-*.properties.",
        "Health Checks":
          "Spring Boot Actuator endpoints for application health and metrics.",
      },

      techStack: {
        Java: javaLogo,
        "Spring Boot": springBootLogo,
        MongoDB: mongoDbLogo,
      },

      link: "https://github.com/rohit-0000/JournalApp",
      git: "https://github.com/rohit-0000/JournalApp",
    },
    {
      banner: portfolio1O,
      name: "Portfolio 1.0",
      description:
        "Portfolio 1.0 is a foundational personal website, created to display your initial projects and demonstrate your early steps into the world of web development.",
      features: {
        "Responsive Design":
          "Fully responsive layout using HTML, CSS, and JavaScript to ensure compatibility across devices.",
        "About Section":
          "Describes personal background, skills, and professional interests.",
        "Skills Section":
          "Lists all technical skills including C++, Java, Spring Boot, React, JavaScript, CSS, MongoDB, and SQL.",
        "Education Section": "Details academic qualifications.",
        "Message Sending Capability":
          "Contact form for sending messages (basic frontend implementation).",
        "Project Showcase": "Displays multiple personal or academic projects.",
        Deployment:
          "Hosted on GitHub Pages: https://rohit-0000.github.io/Portfolio1.0/",
      },

      techStack: {
        "C++": CppLogo,
        JavaScript: javascriptLogo,
        CSS: cssLogo,
      },

      link: "https://rohit-0000.github.io/Portfolio1.0/",
      git: "https://github.com/rohit-0000/Portfolio",
    },
    {
      banner: portfolio2O,
      name: "Portfolio 2.0",
      description:
        "Portfolio 2.0 is evolved personal website, meticulously crafted to powerfully showcase your most recent projects and highlight your continuously expanding skills.",
      features: {
        "Modern React Architecture":
          "Built using React with reusable components and hooks for state management and routing.",
        "Tailwind CSS Styling":
          "Fully styled using Tailwind CSS for rapid UI development and utility-first design.",
        "Responsive Design":
          "Optimized for all screen sizes including mobile, tablet, and desktop using Tailwind’s responsive utilities.",
        "Animations & Transitions":
          "Smooth entrance animations and hover effects implemented using CSS transitions and Tailwind animation classes.",
        "Project Showcase":
          "Detailed cards for each project including description, tech stack used, GitHub links, and live demos.",
        "Skills Section":
          "Visually organized list of skills and technologies used, displayed with icons or tags.",
        "Contact Section":
          "Includes email, LinkedIn, and GitHub links, and optionally a contact form for communication.",
        Deployment:
          "Hosted on vercel, ensuring accessibility and fast loading.",
        "Clean UI/UX":
          "Minimalistic and professional interface focused on readability and user experience.",
      },

      techStack: {
        React: reactLogo,
        "Tailwind CSS": tailwindLogo,
      },

      link: "https://portfolio2-0-eta-three.vercel.app/",
      git: "https://github.com/rohit-0000/Portfolio2.0",
    },
    {
      banner: studySync,
      name: "StudySync",
      description:
        "StudySync is designed to enhance UI interactions, demonstrating smooth motion effects, adaptive layouts, and engaging visual elements for an improved user experience.",
      features: {
        "Responsive Layout":
          "Designed to adapt seamlessly across all device sizes including mobile, tablet, and desktop.",
        "Custom UI":
          "Hand-crafted HTML structure with clean and semantic markup for clarity and SEO benefits.",
        "Modern Styling":
          "CSS used for layout, spacing, and design — ensuring a clean, modern look.",
        "Transitions & Animations":
          "Smooth hover effects, entrance animations, and element transitions for an interactive experience.",
        Deployment:
          "Deployed on GitHub Pages for free hosting and easy sharing.",
      },
      techStack: {
        HTML5: htmlLogo,
        CSS3: cssLogo,
        JavaScript: javascriptLogo,
      },
      link: "https://rohit-0000.github.io/StudySync/",
      git: "https://github.com/rohit-0000/StudySync",
    },
    {
      banner: calculator,
      name: "Calculator",
      description:
        "A calculator is a quick and efficient tool for performing accurate mathematical operations and solving equations instantly.",
      features: {
        "Basic Arithmetic Operations":
          "Performs addition, subtraction, multiplication, and division.",
        "Responsive UI":
          "Designed to work seamlessly across devices of all screen sizes.",
        "Clean Layout":
          "User-friendly layout built with HTML and styled using CSS.",
        "Button Interactions":
          "Smooth button press animations and input handling with JavaScript.",
        "Error Handling":
          "Manages edge cases like division by zero with basic validation.",
        Deployment: "Hosted on GitHub Pages for easy access and sharing.",
      },
      techStack: { HTML5: htmlLogo, CSS: cssLogo, JavaScript: javascriptLogo },
      link: "https://rohit-0000.github.io/calculator/",
      git: "https://github.com/rohit-0000/Portfolio",
    },
    {
      banner: clock,
      name: "Clock",
      description:
        "A clock app featuring both analog and digital displays for precise and seamless timekeeping.",
      features: {
        "Dual Display Modes":
          "Supports both analog and digital clock interfaces on a single page.",
        "12/24 Hour Format":
          "Toggle option between 12-hour and 24-hour time formats for digital clock.",
        "Real-Time Functionality":
          "Displays live time updates every second using JavaScript.",
        "Responsive Design":
          "Optimized layout for all screen sizes including mobile, tablet, and desktop.",
        "Custom Styling":
          "Clean UI styled with CSS, including animated analog clock hands.",
        Deployment: "Deployed on GitHub Pages for public access and sharing.",
      },
      techStack: { HTML5: htmlLogo, CSS: cssLogo, JavaScript: javaLogo },
      link: "https://rohit-0000.github.io/clock/",
      git: "https://github.com/rohit-0000/clock/",
    },
  ];