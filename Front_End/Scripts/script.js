// Menu mobile toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu after click
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Animation on scroll
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

// Observe sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Função para validar email (mantida caso precise no futuro)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Adicionar validação em tempo real (se adicionar formulário no futuro)
if (document.getElementById("email")) {
  document.getElementById("email").addEventListener("blur", function () {
    if (this.value && !validateEmail(this.value)) {
      this.style.borderColor = "#ff4757";
    } else {
      this.style.borderColor = "";
    }
  });
}

// Opcional: Adicionar efeito de digitação no hero section
function typeWriterEffect() {
  const heroText = document.querySelector(".hero h1");
  if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    // Inicia após 1 segundo
    setTimeout(typeWriter, 1000);
  }
}

// Inicia quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  typeWriterEffect();
});

// Opcional: Adicionar animação nas habilidades
const skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
});

// Opcional: Contador de visitas simples (local storage)
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
