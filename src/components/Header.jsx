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
              {/* Monograma <AS/>: desenho do artefato "Ícone do AlexDev", quadrado mais claro que o header */}
              <svg
                className="logo-mark"
                viewBox="0 0 32 32"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="32" height="32" rx="7" fill="#2e2a6e" />
                <path d="M5.2 11 L1.6 16 L5.2 21" stroke="#c4b5fd" strokeWidth="2" />
                <path d="M6.2 22.5 L9.8 9.5 L13.4 22.5" stroke="#8b5cf6" strokeWidth="2.4" />
                <path d="M7.82 18.08 L11.78 18.08" stroke="#8b5cf6" strokeWidth="2.11" />
                <path
                  d="M21.14 11.32 C20.06 9.24 15.1 8.98 15.1 12.88 C15.1 16 21.3 15.48 21.3 18.99 C21.3 23.02 16.34 22.76 15.25 20.68"
                  stroke="#8b5cf6"
                  strokeWidth="2.4"
                />
                <path d="M25.2 9 L22.6 23" stroke="#c4b5fd" strokeWidth="2" />
                <path d="M26.8 11 L30.4 16 L26.8 21" stroke="#c4b5fd" strokeWidth="2" />
              </svg>
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
