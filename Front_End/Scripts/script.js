// Form submission with mailto fallback
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validação básica
  if (!name || !email || !subject || !message) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Validação de email simples
  if (!validateEmail(email)) {
    alert("Por favor, insira um endereço de email válido.");
    return;
  }

  // Adiciona loading state ao botão com spinner
  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.classList.add("loading");
  submitBtn.textContent = "Preparando email...";
  submitBtn.disabled = true;

  // Create mailto link com formatação melhor
  const emailBody = `Olá Alexandre,

Nome: ${name}
Email: ${email}
Assunto: ${subject}

Mensagem:
${message}

---
Esta mensagem foi enviada através do seu portfólio online.`;

  const mailtoLink = `mailto:alexandre.santana2201@gmail.com?subject=${encodeURIComponent(
    `Contato Portfólio: ${subject}`
  )}&body=${encodeURIComponent(emailBody)}`;

  // Usa window.location.href para melhor compatibilidade
  setTimeout(() => {
    try {
      // Tenta abrir o email - método mais compatível
      window.location.href = mailtoLink;

      setTimeout(() => {
        alert(
          `✅ EMAIL ENVIADO COM SUCESSO!\n\n📧 Para: alexandre.santana2201@gmail.com\n📋 Assunto: ${subject}\n👤 De: ${name} (${email})\n\nVerifique seu cliente de email.`
        );
      }, 100);
    } catch (error) {
      // Fallback se der erro
      alert(
        `⚠ Não foi possível abrir automaticamente.\n\nPor favor, copie este endereço e envie manualmente:\n\n${mailtoLink}`
      );
    } finally {
      // Reset form após 2 segundos
      setTimeout(() => {
        contactForm.reset();
        submitBtn.classList.remove("loading");
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }
  }, 300);
});

// Função para validar email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Adicionar máscara/validação em tempo real
document.getElementById("email").addEventListener("blur", function () {
  if (this.value && !validateEmail(this.value)) {
    this.style.borderColor = "#ff4757";
  } else {
    this.style.borderColor = "";
  }
});
