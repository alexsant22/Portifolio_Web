// Menu mobile: o botão abre e fecha a lista de links
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Rolagem suave em todos os links internos (href="#secao")
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Fecha o menu mobile depois do clique
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Animação ao rolar: a seção recebe .animate quando 10% dela entra na tela,
// e o CSS usa essa classe para revelar o conteúdo
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// .reveal entra pelo JS para o conteúdo continuar visível se o script falhar.
// O hero fica de fora porque já começa na tela.
document.querySelectorAll("section:not(.hero)").forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});

// Validação de e-mail guardada para um formulário futuro.
// O site não tem campo #email hoje, então nada disto roda.
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validação em tempo real, ativada só se o campo #email existir
if (document.getElementById("email")) {
  document.getElementById("email").addEventListener("blur", function () {
    if (this.value && !validateEmail(this.value)) {
      this.style.borderColor = "#ff4757";
    } else {
      this.style.borderColor = "";
    }
  });
}

// Efeito de digitação no título do hero
function typeWriterEffect() {
  const heroText = document.querySelector(".hero h1");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!heroText || reduceMotion.matches) return;

  // Leitores de tela recebem o título inteiro, sem soletrar
  heroText.setAttribute("aria-label", heroText.textContent);

  // Percorre só os nós de texto para manter o <span> do nome no lugar
  const walker = document.createTreeWalker(heroText, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  // As letras ocupam o espaço desde o início, então o layout não pula
  const letters = [];
  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    [...node.textContent].forEach((char) => {
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.setAttribute("aria-hidden", "true");
      letter.textContent = char;
      letters.push(letter);
      fragment.appendChild(letter);
    });
    node.replaceWith(fragment);
  });

  let i = 0;
  const typeWriter = () => {
    if (i < letters.length) {
      letters[i].classList.add("typed");
      i++;
      setTimeout(typeWriter, 50);
    }
  };

  typeWriter();
}

// Inicia quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  typeWriterEffect();
});

// Cada habilidade começa a animar 0,1s depois da anterior
const skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
});

// Contador de visitas: fica só no navegador de quem visita, sem servidor
if (typeof localStorage !== "undefined") {
  let visitCount = localStorage.getItem("portfolioVisits");
  if (visitCount) {
    visitCount = parseInt(visitCount) + 1;
  } else {
    visitCount = 1;
  }
  localStorage.setItem("portfolioVisits", visitCount);

  // Pode mostrar discretamente no console
  console.log(
    `👋 Bem-vindo! Esta é sua visita #${visitCount} ao meu portfólio.`
  );
}
