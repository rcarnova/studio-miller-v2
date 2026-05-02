import { useEffect } from "react";

export function useReveal(selector = ".reveal, .reveal-word", triggerKey?: unknown) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, triggerKey]);
}
