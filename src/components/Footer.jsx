import SocialLinks from "./SocialLinks.jsx";
import { navLinks } from "../data/site.js";
import { scrollToSection } from "../utils/scroll.js";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Alex<span>Dev</span>
          </div>
          <div className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={scrollToSection}>
                {link.label}
              </a>
            ))}
          </div>
          <SocialLinks />
          <div className="copyright">
            <p>&copy; 2024 Alexandre Santos. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
