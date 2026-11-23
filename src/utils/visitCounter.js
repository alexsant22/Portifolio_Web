// Contador de visitas: fica só no navegador de quem visita, sem servidor
export function registerVisit() {
  try {
    const visitCount = Number(localStorage.getItem("portfolioVisits") ?? 0) + 1;
    localStorage.setItem("portfolioVisits", visitCount);

    // Aparece discretamente no console
    console.log(`👋 Bem-vindo! Esta é sua visita #${visitCount} ao meu portfólio.`);
  } catch {
    // Navegador sem localStorage (aba anônima bloqueada, por exemplo): segue sem contar
  }
}
