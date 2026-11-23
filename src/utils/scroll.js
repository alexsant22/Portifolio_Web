// Rolagem suave até a seção do link (href="#secao"), sem pôr o # no endereço
export function scrollToSection(event) {
  const target = document.querySelector(event.currentTarget.getAttribute("href"));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
}
