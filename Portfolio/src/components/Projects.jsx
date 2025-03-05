import React from "react";
import Card from "./ui/Card";
import CardContent from "./ui/CardContent";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek portfolio built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "A modern e-commerce platform with secure payments.",
    link: "#",
  },
  {
    title: "Blog CMS",
    description: "A content management system for blogs, built with Next.js.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {project.description}
                </p>
                <a href={project.link} className="text-blue-500 text-sm">
                  View Project
                </a>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
