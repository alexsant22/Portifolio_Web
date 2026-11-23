import { Fragment, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter.js";

// Título com efeito de digitação. Cada parte é { text, highlight }, e a parte
// com highlight fica dentro de um <span>, que o CSS pinta de roxo.
export default function TypewriterHeading({ parts }) {
  const [reduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const fullText = parts.map((part) => part.text).join("");
  const typed = useTypewriter(reduceMotion ? 0 : fullText.length);

  // Quem pediu menos movimento recebe o título pronto
  if (reduceMotion) {
    return (
      <h1>
        {parts.map((part, i) =>
          part.highlight ? <span key={i}>{part.text}</span> : part.text
        )}
      </h1>
    );
  }

  // As letras ocupam o espaço desde o início, então o layout não pula
  let position = 0;
  const renderLetters = (text) =>
    [...text].map((char) => {
      const index = position++;
      return (
        <span
          key={index}
          className={index < typed ? "letter typed" : "letter"}
          aria-hidden="true"
        >
          {char}
        </span>
      );
    });

  // Leitores de tela recebem o título inteiro pelo aria-label, sem soletrar
  return (
    <h1 aria-label={fullText}>
      {parts.map((part, i) =>
        part.highlight ? (
          <span key={i}>{renderLetters(part.text)}</span>
        ) : (
          <Fragment key={i}>{renderLetters(part.text)}</Fragment>
        )
      )}
    </h1>
  );
}
