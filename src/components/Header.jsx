import { useState } from "react";
import { navLinks } from "../data/site.js";
import { scrollToSection } from "../utils/scroll.js";

export default function Header() {
  // Menu mobile: o botão abre e fecha a lista de links
  const [menuOpen, setMenuOpen] = useState(false);

  // Rola até a seção e fecha o menu mobile depois do clique
  function handleNavigate(event) {
    scrollToSection(event);
    setMenuOpen(false);
  }

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#home" onClick={handleNavigate}>
              <span className="logo-mark" aria-hidden="true">
                &lt;<span className="logo-mark-initials">AS</span>/&gt;
              </span>
              Alex<span>Dev</span>
            </a>
          </div>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavigate}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="menu-btn" onClick={() => setMenuOpen((open) => !open)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
