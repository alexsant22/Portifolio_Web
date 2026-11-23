import SkillItem from "./SkillItem.jsx";
import { skills } from "../data/skills.js";

// A lista vem de src/data/skills.js
export default function SkillList() {
  return (
    <div className="skills-list">
      {skills.map((name, index) => (
        <SkillItem key={name} name={name} index={index} />
      ))}
    </div>
  );
}
