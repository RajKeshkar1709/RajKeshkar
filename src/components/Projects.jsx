//import React from "react";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const projects = [
   {
  id: 1,
  title: "GreenCart – Online Grocery Store",
  image: "/RajKeshkar/public/GeenCart Image.png",
  description:
    "GreenCart is a full-stack e-commerce web application that allows users to browse, search, and purchase grocery products online. It features user authentication, a shopping cart, order management, and real-time updates for sellers.",
  techStack: "React | Vite | TailwindCSS | Node.js | Express | MongoDB | JWT | Cloudinary | Stripe",
  features:
    "User authentication with JWT, product browsing and search, dynamic shopping cart, order placement, seller dashboard with order management, secure payment integration with Stripe, image upload with Cloudinary, responsive and modern UI design.",
  githubLink: "https://github.com/RajKeshkar1709/GreenCart",
  liveLink: "https://green-cart-grocery-hazel.vercel.app/" // Replace with your actual deployed link
}
,
    {
      id: 2,
      title: "WorldAtlas – Discover Countries with Ease",
      image: "/RajKeshkar/worldAtlas.png",
      description:
        "WorldAtlas is an interactive and responsive web app that allows users to explore countries around the globe...",
      techStack: "HTML | CSS | React",
      features:
        "Search by country name, country details page, dynamic country cards, responsive layout, live REST API integration, and modern UI using HTML, CSS, and React.",
      githubLink:
        "https://github.com/RajKeshkar1709/Worldatlas-country-explorer",
      liveLink: "https://worldatlas-countryexplorers.netlify.app/",
    },
    {
      id: 3,
      title: "ai-command-assistant",
      image: "/RajKeshkar/Ai-Assistant.png",
      description:
        "AI Assistant is a smart and interactive voice-based web assistant...",
      techStack: "HTML | CSS | Javascript",
      features:
        "Speech recognition using Web Speech API, Voice responses using speech synthesis, Executes commands like opening Google, YouTube, etc.",
      githubLink: "https://github.com/RajKeshkar1709/ai-command-assistant",
      liveLink: "https://ai-command-assistant.netlify.app/",
    },
    {
      id: 4,
      title: "NovelHub",
      image: "/RajKeshkar/NovelHub.png",
      description:
        "NovelHub is a clean and interactive web platform for discovering, organizing, and managing novels...",
      techStack: "HTML | CSS | Firebase | Javascript",
      features:
        "Add / Edit / View novels,Responsive design,Clean UI with HTML & CSS,Dynamic DOM updates",
      githubLink: "https://github.com/RajKeshkar1709/Novelhub",
      liveLink: "https://simplenovelhub.netlify.app/",
    },
    {
      id: 5,
      title: "HireHub – Recruitment Management API (Backend)",
      image: "", // No image
      description:
        "HireHub is a robust and scalable backend system designed to power a modern recruitment platform...",
      techStack:
        "Node.js | Express.js | MongoDB | PostMan | Javascript | JWT Web Token",
      features:
        "JWT-based authentication, Role-based access (Recruiter & Jobseeker), Create and manage job posts, Apply to jobs & track applications...",
      githubLink: "https://github.com/RajKeshkar1709/HireHub",
      liveLink: "https://github.com/RajKeshkar1709/HireHub",
    },
  ];

  return (
    <div id="projects" className="py-20 my-10 px-6 dark:bg-gray-900">
      <h1 className="text-center text-4xl font-semibold mb-12 dark:text-white">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-md transform transition-transform hover:scale-105"
          >
            {project.image && (
              <div className="w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Title: <span className="text-red-500">{project.title}</span>
              </h2>

              <h3 className="text-lg font-medium dark:text-gray-300">
                Description:
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <h3 className="text-lg font-medium mt-4 dark:text-gray-300">
                Tech stack:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.techStack}
              </p>

              <h3 className="text-lg font-medium mt-4 dark:text-gray-300">
                Features:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.features}
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => openInNewTab(project.liveLink)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition"
                >
                  Visit Site
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
