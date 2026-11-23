import { useEffect, useRef, useState } from "react";

// Animação ao rolar: visible vira true quando 10% do elemento entra na tela,
// e a seção ganha a classe .animate, que o CSS usa para revelar o conteúdo.
// Depois de revelar, o observador desliga: a seção não some de novo.
export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
