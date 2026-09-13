"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function LivingHorizon() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      root.classList.add("motion-reduced");
      return () => root.classList.remove("motion-reduced");
    }

    root.classList.add("motion-ready");

    const revealSelectors = [
      ".portfolio-head > *",
      ".brand-card",
      ".belief-grid > div:first-child",
      ".belief-values span",
      ".why-top > *",
      ".why-grid article",
      ".cap-head > *",
      ".cap-grid article",
      ".cta-inner > .eyebrow",
      ".cta-inner > h2",
      ".cta-inner > p",
      ".cta-inner > .btn",
      ".footer-inner > *",
    ].join(",");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealTargets.forEach((element) => observer.observe(element));

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".brand-card"));
    const cardCleanups = cards.map((card) => {
      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
        card.style.setProperty("--card-x", `${((event.clientX - rect.left) / rect.width - 0.5) * 7}px`);
        card.style.setProperty("--card-y", `${((event.clientY - rect.top) / rect.height - 0.5) * 5}px`);
      };
      const onPointerLeave = () => {
        card.style.setProperty("--card-x", "0px");
        card.style.setProperty("--card-y", "0px");
      };
      card.addEventListener("pointermove", onPointerMove);
      card.addEventListener("pointerleave", onPointerLeave);
      return () => {
        card.removeEventListener("pointermove", onPointerMove);
        card.removeEventListener("pointerleave", onPointerLeave);
      };
    });

    const parallaxSections = Array.from(
      document.querySelectorAll<HTMLElement>(".hero, .belief, .cta"),
    );

    let ticking = false;
    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;
      parallaxSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = viewportCenter - sectionCenter;
        const amount = clamp(distance * 0.035, -22, 22);
        section.style.setProperty("--parallax-y", `${amount}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      cardCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
