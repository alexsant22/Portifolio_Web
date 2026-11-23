import { techIcons } from "../data/techIcons.js";

// Card de um projeto. Os dados vêm de src/data/projects.js
export default function ProjectCard({
  title,
  status,
  image,
  imageAlt,
  description,
  techs,
  links,
}) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="project-content">
        {status && <span className="project-status">{status}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techs.map((tech) => (
            <span key={tech} className="tech">
              {techIcons[tech] && <i className={techIcons[tech]}></i>}
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.outline ? "btn btn-outline" : "btn"}
              target="_blank"
            >
              {link.icon && <i className={link.icon}></i>}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
