import { socialLinks } from "../data/site.js";

// Ícones redondos do GitHub e do LinkedIn, usados no hero e no rodapé
export default function SocialLinks() {
  return (
    <div className="social-icons">
      {socialLinks.map((link) => (
        <a key={link.href} href={link.href} target="_blank">
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}
