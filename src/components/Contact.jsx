import Section from "./Section.jsx";
import { contactDetails, email } from "../data/site.js";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="contact"
      title="Entre em Contato"
      subtitle="Estou disponível para oportunidades e colaborações"
    >
      <div className="contact-content">
        <div className="contact-info">
          <h3>Vamos conversar!</h3>
          <p>
            Se você está procurando um desenvolvedor back-end dedicado ou tem
            uma oportunidade interessante, ficarei feliz em conversar.
          </p>
          <div className="contact-details">
            {contactDetails.map((item) => (
              <div key={item.title} className="contact-item">
                <i className={item.icon}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botão de email direto */}
          <div style={{ marginTop: "30px" }}>
            <a
              href={`mailto:${email}?subject=Contato%20do%20Portfólio`}
              className="btn"
            >
              <i className="fas fa-paper-plane" style={{ marginRight: "8px" }}></i>
              Enviar Email Direto
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
