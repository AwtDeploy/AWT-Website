export function AnimatedWords({ text, className, startDelay = 0 }: { text: string; className?: string; startDelay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block">
          <span
            className={`animate-word inline-block ${className ?? ""}`}
            style={{ animationDelay: `${startDelay + i * 0.08}s` }}
          >
            {word}
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
