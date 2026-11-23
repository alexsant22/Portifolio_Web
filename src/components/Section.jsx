import { useReveal } from "../hooks/useReveal.js";

// Seção com título, subtítulo e a animação de entrada ao rolar.
// Usada por Sobre, Projetos e Contato.
export default function Section({ id, className, title, subtitle, children }) {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} reveal${visible ? " animate" : ""}`}
    >
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
