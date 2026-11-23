import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <Section
      id="projects"
      className="projects"
      title="Meus Projetos"
      subtitle="Alguns dos meus projetos desenvolvidos e disponíveis no GitHub"
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
