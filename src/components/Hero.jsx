import SocialLinks from "./SocialLinks.jsx";
import TypewriterHeading from "./TypewriterHeading.jsx";
import { scrollToSection } from "../utils/scroll.js";

const title = [
  { text: "Olá, sou " },
  { text: "Alexandre Santos", highlight: true },
];

// O hero fica fora do Section porque já começa na tela, sem animação de entrada
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <TypewriterHeading parts={title} />
            <h2>Desenvolvedor Full Stack com foco em Back-end</h2>
            <p>
              Desenvolvo APIs escaláveis com Java/Spring e Node.js
              (TypeScript/NestJS), com conhecimento em React para o Front-end.
              Integrando bancos de dados SQL e aplicando boas práticas de
              desenvolvimento. Foco em criar soluções eficientes que resolvem
              problemas reais através de código bem estruturado.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn" onClick={scrollToSection}>
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={scrollToSection}
              >
                Contato
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="hero-image">
            <img src="/assets/img_perfil2.jpg" alt="Desenvolvedor Back-end" />
          </div>
        </div>
      </div>
    </section>
  );
}
