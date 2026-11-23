import { useEffect, useState } from "react";

// Devolve quantas letras já foram "digitadas", uma a cada delay milissegundos,
// até chegar em length
export function useTypewriter(length, delay = 50) {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (typed >= length) return;

    const timer = setTimeout(() => setTyped(typed + 1), delay);
    return () => clearTimeout(timer);
  }, [typed, length, delay]);

  return typed;
}
