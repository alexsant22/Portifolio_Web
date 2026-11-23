import Section from "./Section.jsx";
import SkillList from "./SkillList.jsx";

export default function About() {
  return (
    <Section
      id="about"
      className="about"
      title="Sobre Mim"
      subtitle="Conheça mais sobre minhas habilidades e experiência"
    >
      <div className="about-content">
        <div className="about-text">
          <h3>Desenvolvedor Full Stack com foco em Back-end</h3>

          <p>
            Com formação em Técnico em Desenvolvimento de Sistemas e cursando
            Tecnologia em Sistemas para Internet no IFSP Araraquara,
            especializo-me em desenvolvimento back-end com{" "}
            <strong>Java/Spring Boot</strong> e{" "}
            <strong>Node.js/NestJS</strong>, complementando com conhecimentos
            em front-end utilizando <strong>React</strong>. Essa combinação me
            permite criar soluções completas e bem integradas, desde a API até a
            interface.
          </p>

          <p>
            Atualmente sou Estagiário de Implantação na{" "}
            <strong>Visio.ai</strong>, onde acompanho a solução desde a
            configuração no ambiente do cliente até a operação estável. Essa
            proximidade com o uso real tem mudado a forma como penso
            arquitetura, tratamento de erros e experiência de uso. Antes disso,
            fui aprendiz de programação na Tecumseh do Brasil, onde desenvolvi
            aplicações front-end com <strong>React</strong> e apoiei a área de
            infraestrutura de TI.
          </p>

          <p>
            Possuo conhecimento sólido em{" "}
            <strong>JavaScript/TypeScript</strong> para desenvolvimento full
            stack, com experiência em <strong>React</strong> para interfaces
            modernas. Também trabalho com <strong>Python</strong> para
            automações e scripts, aplicando metodologias{" "}
            <strong>ágeis (Scrum)</strong> para garantir entregas incrementais
            de qualidade, com versionamento através do{" "}
            <strong>Git & GitHub</strong>.
          </p>

          <p>
            Sou movido pela vontade de resolver problemas complexos e estou
            constantemente aprendendo novas tecnologias para criar soluções
            eficientes.
          </p>
        </div>

        <div className="about-skills">
          <h3>Minhas Habilidades e Ferramentas</h3>
          <SkillList />
        </div>
      </div>
    </Section>
  );
}
