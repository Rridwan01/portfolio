import type { JSX } from "react";
import "./index.css";
import Card from "./Card";

const Projects = (): JSX.Element => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration",
      image: "/react-project1.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://demo1.example.com",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management app with real-time updates and team workspace features",
      image: "/project2.jpg",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoLink: "https://demo2.example.com",
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "AI Chat Application",
      description:
        "An AI-powered chat application with natural language processing and voice recognition",
      image: "/project3.jpg",
      tech: ["Next.js", "OpenAI", "Socket.io", "TypeScript"],
      demoLink: "https://demo3.example.com",
      githubLink: "https://github.com/yourusername/project3",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media analytics dashboard with data visualization and reporting",
      image: "/project4.jpg",
      tech: ["React", "D3.js", "Material-UI", "Node.js"],
      demoLink: "https://demo4.example.com",
      githubLink: "https://github.com/yourusername/project4",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen text-white/80 py-24 px-8"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold text-5xl">My Recent Works</h2>
        <p className="max-w-2xl mt-5">
          Here are some of my recent projects showcasing my skills in web
          development and problem-solving.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 mt-16">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;