import { techIcons } from "../data/techIcons.js";

// O ícone vem do mesmo mapa das tags dos projetos.
// Cada habilidade começa a animar 0,1s depois da anterior, pelo index.
export default function SkillItem({ name, index }) {
  return (
    <div className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
      {techIcons[name] && <i className={techIcons[name]}></i>}
      <span>{name}</span>
    </div>
  );
}
